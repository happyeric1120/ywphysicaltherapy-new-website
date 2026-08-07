# Technical SEO Audit

Date: 2026-08-06

## Findings

### High — noindex URL included in sitemap

- Affected URL: `/wellness-body-reset/`
- Why it matters: a sitemap should contain canonical, indexable URLs only.
- Recommended fix: exclude the route from sitemap generation.
- Status: fixed.
- Validation: production sitemap exclusion and `npm run seo:validate` passed.

### High — duplicate clinician page

- Affected URLs: `/about/`, `/about-dr-eric-wu/`
- Why it matters: both rendered the same body content, splitting authority and creating duplicate intent.
- Recommended fix: consolidate on the URL already used by primary navigation and structured data.
- Status: fixed with a Netlify 301, internal-link updates, noindex fallback metadata, and sitemap exclusion.
- Validation: no duplicate indexable canonical remains.

### High — insurance metadata overstated participation

- Affected URL: `/insurance-pricing/`
- Why it matters: the description said named plans were accepted while visible content only says some plans may be covered through a billing partner.
- Recommended fix: use neutral out-of-network coverage wording.
- Status: fixed without changing prices or coverage facts.
- Validation: built HTML contains the revised description.

### Medium — missing Open Graph image on nested metadata routes

- Affected URLs: site-wide.
- Why it matters: nested Open Graph objects replaced inherited image metadata.
- Recommended fix: emit one verified default social image from the root layout.
- Status: fixed.
- Validation: all public build outputs contain an absolute Open Graph image.

### Medium — native responsive images bypassed Next Image

- Affected URLs: `/ai-movement-evaluation/`, `/movement-analysis-nyc/`, `/physical-therapy-near-penn-station/`, `/shockwave-therapy-nyc/`, `/focused-shockwave-vs-radial-shockwave/`.
- Why it matters: raw images lacked responsive `sizes` hints and framework loading behavior.
- Recommended fix: use `next/image` with `fill`, aspect-ratio containers, and responsive sizes.
- Status: fixed.
- Validation: lint and production build passed.

### Medium — no automated SEO regression check

- Affected scope: repository-wide.
- Why it matters: sitemap/indexability mismatches, broken links, duplicate metadata, invalid JSON-LD, and missing alt text could regress silently.
- Recommended fix: add production-output validation.
- Status: fixed with `npm run seo:validate`.
- Validation: 27 generated routes checked with 0 errors and 0 warnings.

### Medium — indexable orphan and overlapping intent

- Affected URL: `/movement-analysis-nyc/`.
- Why it matters: the page has no discovered internal inbound link and substantially overlaps `/ai-movement-evaluation/`.
- Recommended fix: decide whether to consolidate, redirect, or differentiate the intent before adding links.
- Status: open; content/strategy decision required.

### Medium — YMYL claims lack visible evidence citations

- Affected pages: shockwave, TECAR, Class IV laser, Compex EMS, condition pages, Human System Reset, and clinician bio.
- Why it matters: multiple effect, mechanism, outcome, credential, and affiliation statements are asserted without page-level references.
- Recommended fix: clinician review, evidence verification, and conservative rewriting.
- Status: drafted only in `content-review/`; no automatic publishing.

### Low — missing skip navigation

- Affected scope: shared site chrome.
- Why it matters: keyboard users otherwise traverse the full navigation before reaching page content.
- Recommended fix: add a focus-visible skip link and focus target.
- Status: fixed.
- Validation: browser DOM inspection confirmed a named main landmark; code adds `#main-content`.

### Low — generated lastmod was build time, not content modification time

- Affected scope: sitemap.
- Why it matters: a build timestamp does not reliably represent page modification.
- Recommended fix: omit `lastmod` until it can be derived from content history.
- Status: fixed by disabling automatic lastmod.

## Crawl Results

- 24 sitemap URLs requested from the local production build.
- HTTP results: 24/24 returned 200.
- Redirect rules were configuration-reviewed; the basic local server does not emulate Netlify redirects.
- Broken internal links in rendered HTML: 0.
- Invalid JSON-LD blocks: 0.
- Missing titles/descriptions/canonicals on public HTML routes: 0.
- Multiple or missing H1 elements: 0.
- Images missing alt attributes: 0.

## Accessibility and Performance Limits

- Browser inspection found one H1, one main landmark, no empty links, no unnamed buttons, and no unlabeled form controls on the homepage.
- Skip navigation was missing and has been fixed.
- Lighthouse and axe were not installed, so no numeric performance or automated WCAG score is reported.
- Color contrast, reduced motion, complete keyboard traversal, and screen-reader behavior still require dedicated testing.
