import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");
const REQUIRED_FIELDS = [
  "title",
  "slug",
  "meta_description",
  "target_keyword",
  "supports_page",
  "category",
  "date",
] as const;
const ALLOWED_FIELDS = new Set([...REQUIRED_FIELDS, "draft"]);
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const INTERNAL_PATH_PATTERN = /^\/(?!\/)[a-z0-9][a-z0-9/-]*$/;

export type BlogPostMeta = {
  title: string;
  slug: string;
  meta_description: string;
  target_keyword: string;
  supports_page: string;
  category: string;
  date: string;
  draft: boolean;
};

export type BlogPost = BlogPostMeta & {
  body: string;
  fileName: string;
};

function fail(fileName: string, message: string): never {
  throw new Error(`Blog content error in ${fileName}: ${message}`);
}

function listMdxFiles() {
  if (!fs.existsSync(BLOG_DIRECTORY)) return [];
  return fs
    .readdirSync(BLOG_DIRECTORY, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name)
    .sort();
}

function validateDate(value: string, fileName: string) {
  if (!DATE_PATTERN.test(value)) fail(fileName, "date must use YYYY-MM-DD format");
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== value) {
    fail(fileName, "date is not a valid calendar date");
  }
}

function validateBody(body: string, fileName: string, published: boolean) {
  if (/^#\s+/m.test(body)) {
    fail(fileName, "the article body must not contain an H1; title frontmatter supplies the only H1");
  }
  if (published && /^IMAGE BRIEF:\s*$/im.test(body)) {
    fail(fileName, "published articles must not contain IMAGE BRIEF production notes");
  }
  if (/^\s*(?:import|export)\s/m.test(body) || /^\s*<[A-Za-z][^>]*>/m.test(body)) {
    fail(fileName, "imports, exports, JSX, and raw HTML are not allowed in article content");
  }
}

function parsePost(fileName: string): BlogPost {
  const filePath = path.join(BLOG_DIRECTORY, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  for (const field of REQUIRED_FIELDS) {
    if (typeof data[field] !== "string" || !data[field].trim()) {
      fail(fileName, `${field} is required and must be a non-empty string`);
    }
  }
  for (const field of Object.keys(data)) {
    if (!ALLOWED_FIELDS.has(field)) fail(fileName, `unsupported frontmatter field: ${field}`);
  }
  if (data.draft !== undefined && typeof data.draft !== "boolean") {
    fail(fileName, "draft must be true or false");
  }

  const slug = data.slug.trim();
  const fileSlug = fileName.replace(/\.mdx$/, "");
  if (!SLUG_PATTERN.test(slug)) fail(fileName, "slug must be lowercase kebab-case");
  if (slug !== fileSlug) fail(fileName, `slug must match the filename (${fileSlug})`);

  const date = data.date.trim();
  validateDate(date, fileName);

  const supportsPage = data.supports_page.trim();
  if (!INTERNAL_PATH_PATTERN.test(supportsPage) || supportsPage.includes("..")) {
    fail(fileName, "supports_page must be a safe internal path beginning with one slash");
  }

  const draft = data.draft ?? true;
  validateBody(content, fileName, !draft);

  return {
    title: data.title.trim(),
    slug,
    meta_description: data.meta_description.trim(),
    target_keyword: data.target_keyword.trim(),
    supports_page: supportsPage.replace(/\/$/, "") || "/",
    category: data.category.trim(),
    date,
    draft,
    body: content.trim(),
    fileName,
  };
}

export function getAllBlogPosts() {
  const posts = listMdxFiles().map(parsePost);
  const slugs = new Set<string>();
  for (const post of posts) {
    if (slugs.has(post.slug)) fail(post.fileName, `duplicate slug: ${post.slug}`);
    slugs.add(post.slug);
  }
  return posts;
}

export function getPublishedBlogPosts() {
  return getAllBlogPosts()
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getPublishedBlogPost(slug: string) {
  return getPublishedBlogPosts().find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
