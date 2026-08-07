import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, "out");
const siteOrigin = "https://ywphysicaltherapy.com";

if (!fs.existsSync(outputRoot)) {
  console.error("SEO validation requires a production build in out/. Run npm run build first.");
  process.exit(1);
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function routeFromFile(file) {
  const relative = path.relative(outputRoot, file).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  return `/${relative.replace(/\/index\.html$/, "")}/`;
}

function decode(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, "i"));
  return decode(match?.[1] ?? match?.[2] ?? "");
}

function metaContent(html, attributeName, attributeValue) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const tag = tags.find((item) => attribute(item, attributeName) === attributeValue);
  return tag ? attribute(tag, "content") : "";
}

function linkHref(html, relValue) {
  const tags = html.match(/<link\b[^>]*>/gi) ?? [];
  const tag = tags.find((item) => attribute(item, "rel").split(/\s+/).includes(relValue));
  return tag ? attribute(tag, "href") : "";
}

function stripMarkup(html) {
  return decode(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  ).replace(/\s+/g, " ").trim();
}

const htmlFiles = walk(outputRoot).filter(
  (file) => file.endsWith("index.html") && !file.includes(`${path.sep}_not-found${path.sep}`) && !file.includes(`${path.sep}404${path.sep}`)
);

const pages = htmlFiles.map((file) => {
  const html = fs.readFileSync(file, "utf8");
  const route = routeFromFile(file);
  const robots = metaContent(html, "name", "robots");
  const h1s = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi) ?? [];
  const images = html.match(/<img\b[^>]*>/gi) ?? [];
  const links = (html.match(/<a\b[^>]*>/gi) ?? []).map((tag) => attribute(tag, "href")).filter(Boolean);
  const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);

  return {
    file,
    route,
    html,
    title: decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? ""),
    description: metaContent(html, "name", "description"),
    canonical: linkHref(html, "canonical"),
    ogTitle: metaContent(html, "property", "og:title"),
    ogDescription: metaContent(html, "property", "og:description"),
    ogImage: metaContent(html, "property", "og:image"),
    twitterCard: metaContent(html, "name", "twitter:card"),
    noindex: /(?:^|,)\s*noindex\b/i.test(robots),
    h1Count: h1s.length,
    wordCount: stripMarkup(html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "").split(/\s+/).filter(Boolean).length,
    missingAlt: images.filter((tag) => !/\salt=(?:"[^"]*"|'[^']*')/i.test(tag)).length,
    missingDimensions: images.filter(
      (tag) => attribute(tag, "data-nimg") !== "fill" && (!attribute(tag, "width") || !attribute(tag, "height"))
    ).length,
    links,
    jsonLdBlocks,
    lang: attribute(html.match(/<html\b[^>]*>/i)?.[0] ?? "", "lang"),
  };
});

const errors = [];
const warnings = [];
const routeSet = new Set(pages.map((page) => page.route));
const assetSet = new Set(walk(outputRoot).map((file) => `/${path.relative(outputRoot, file).split(path.sep).join("/")}`));

function add(collection, route, message) {
  collection.push(`${route}: ${message}`);
}

for (const page of pages) {
  if (!page.title) add(errors, page.route, "missing title");
  if (!page.description) add(errors, page.route, "missing meta description");
  if (!page.canonical) add(errors, page.route, "missing canonical URL");
  if (page.canonical && (!page.canonical.startsWith(siteOrigin) || !URL.canParse(page.canonical))) {
    add(errors, page.route, `invalid canonical URL (${page.canonical})`);
  }
  if (!page.ogTitle || !page.ogDescription) add(errors, page.route, "missing Open Graph title or description");
  if (!page.ogImage) add(warnings, page.route, "missing Open Graph image");
  if (!page.twitterCard) add(warnings, page.route, "missing Twitter card metadata");
  if (page.h1Count !== 1) add(errors, page.route, `expected one H1, found ${page.h1Count}`);
  if (page.missingAlt) add(errors, page.route, `${page.missingAlt} image(s) missing alt attributes`);
  if (page.missingDimensions) add(warnings, page.route, `${page.missingDimensions} image(s) missing explicit dimensions`);
  if (page.lang !== "en") add(errors, page.route, `unexpected or missing html lang (${page.lang || "none"})`);

  for (const block of page.jsonLdBlocks) {
    try {
      JSON.parse(decode(block));
    } catch {
      add(errors, page.route, "invalid JSON-LD syntax");
    }
  }

  for (const href of page.links) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const targetPath = href.split(/[?#]/)[0];
    const normalizedRoute = targetPath === "/" ? "/" : `${targetPath.replace(/\/$/, "")}/`;
    if (!routeSet.has(normalizedRoute) && !assetSet.has(targetPath)) {
      add(errors, page.route, `broken internal link (${href})`);
    }
  }
}

for (const field of ["title", "description", "canonical"]) {
  const values = new Map();
  for (const page of pages.filter((item) => !item.noindex)) {
    if (!page[field]) continue;
    const routes = values.get(page[field]) ?? [];
    routes.push(page.route);
    values.set(page[field], routes);
  }
  for (const [value, routes] of values) {
    if (routes.length > 1) add(errors, routes.join(", "), `duplicate ${field} (${value})`);
  }
}

const sitemapFiles = walk(outputRoot).filter((file) => /sitemap(?:-\d+)?\.xml$/.test(file));
const sitemapUrls = new Set(
  sitemapFiles.flatMap((file) => [...fs.readFileSync(file, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]))
);

for (const page of pages) {
  const canonicalRouteUrl = `${siteOrigin}${page.route}`;
  if (page.noindex && sitemapUrls.has(canonicalRouteUrl)) add(errors, page.route, "noindex page is present in sitemap");
  if (!page.noindex && !sitemapUrls.has(canonicalRouteUrl)) add(errors, page.route, "indexable page is missing from sitemap");
}

const robotsPath = path.join(outputRoot, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  errors.push("robots.txt is missing");
} else if (!fs.readFileSync(robotsPath, "utf8").includes(`${siteOrigin}/sitemap.xml`)) {
  errors.push("robots.txt does not declare the canonical sitemap URL");
}

console.log(`SEO validation checked ${pages.length} public routes.`);
console.log(`Errors: ${errors.length}; warnings: ${warnings.length}.`);
for (const error of errors) console.error(`ERROR ${error}`);
for (const warning of warnings) console.warn(`WARN  ${warning}`);

if (errors.length) process.exit(1);
