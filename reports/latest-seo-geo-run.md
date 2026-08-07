# SEO/GEO Run Report

## Date

2026-08-06

## Execution Mode

Full Optimization With Review Gate (Initial Execution Instructions).

## Repository Summary

Next.js 16.2.3 App Router site, statically exported to `out/` and deployed on Netlify. Content is repository-owned TSX with Tailwind CSS 4, Framer Motion, GA4, `next-sitemap`, shared site chrome, and reusable JSON-LD helpers. There is no CMS, test framework, CI workflow, Lighthouse, or accessibility package.

## Critical Findings

- A noindex wellness page was included in the sitemap.
- `/about/` duplicated `/about-dr-eric-wu/`.
- Insurance metadata overstated named-plan acceptance.
- Nested Open Graph metadata had no image.
- Several clinical outcome/mechanism statements and clinician/business facts require evidence and approval.

## Changes Implemented

- Excluded `/about/`, `/lp/`, and `/wellness-body-reset/` from sitemap generation.
- Disabled inaccurate build-time `lastmod` values.
- Added a Netlify 301 from `/about/` to `/about-dr-eric-wu/`, updated inbound links, and added noindex fallback metadata.
- Added noindex/self-canonical metadata for the unused `/lp/` route.
- Rewrote insurance metadata to describe out-of-network information without saying named plans are accepted.
- Added a site-wide absolute Open Graph image.
- Centralized stable site identity values in `src/data/siteFacts.ts` and reused entity IDs in schema helpers.
- Converted seven raw images on five pages to responsive Next Image components.
- Added a keyboard skip link and main-content focus target.
- Added `typecheck` and production-output `seo:validate` scripts.

## Draft Changes Awaiting Review

- Conservative clinical drafts for shockwave, TECAR, Class IV laser, EMS, root-cause language, Human System Reset, and recovery screening.
- Business verification list for NAP, hours, insurance, prices, payment methods, reviews, credentials, affiliations, practice history, languages, and trademark claims.

## Pages Affected

- Technical production changes: site-wide metadata/chrome/schema, pricing, five image-heavy service pages, `/about/`, and `/lp/`.
- Draft-only review scope: all clinical service/condition pages and clinician/business trust content.

## Structured Data Changes

- Centralized stable website, clinic, and clinician entity IDs without changing their published values.
- JSON-LD syntax validation added.
- No ratings, reviews, affiliations, prices, or new medical claims were added.

## Internal Linking Changes

- Updated two `/about` links to `/about-dr-eric-wu`.
- Did not add a link to the orphaned `/movement-analysis-nyc/` because its intent overlaps `/ai-movement-evaluation/`; strategy approval is needed first.

## Accessibility Changes

- Added focus-visible “Skip to main content” navigation.
- Browser inspection found no empty links, unnamed buttons, unlabeled homepage form controls, or multiple H1/main landmarks.

## Performance Changes

- Added responsive image sizing through Next Image on five routes.
- No image recompression or removal of analytics/animation was attempted without measurement and visual QA.

## Tests Run

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run seo:validate`
- Local HTTP crawl of every sitemap URL
- Browser DOM/accessibility inspection of the homepage
- `git diff --check`

## Test Results

- Lint: pass.
- TypeScript: pass.
- Production build and sitemap generation: pass.
- SEO validation: 27 routes, 0 errors, 0 warnings.
- Local sitemap crawl: 24/24 returned HTTP 200.
- JSON-LD syntax and internal links: pass.
- Lighthouse/axe: not available; no score reported.

## Risks

- Netlify redirects were configuration-reviewed but not emulated by the basic local HTTP server.
- Clinical and business claims listed in `content-review/` remain live from earlier work until the owner approves a remediation pass.
- Google Fonts require network access during build.
- No real-user Core Web Vitals or Search Console data was available.

## Manual Review Required

- Clinician: all items in `content-review/clinical-review-required.md`.
- Owner/billing: all items in `content-review/business-facts-review-required.md`.
- Content strategy: whether `/movement-analysis-nyc/` should redirect, merge, or target a distinct intent.

## Recommended Next Actions

1. Approve or revise high-risk clinical wording and provide condition-specific sources.
2. Verify NAP, hours, insurance, prices, reviews, credentials, and affiliations.
3. Resolve movement-analysis URL overlap.
4. Add verified author/reviewer dates and references to clinical pages.
5. Install approved Lighthouse/axe tooling and establish mobile/desktop baselines.
6. Add CI for lint, typecheck, build, and SEO validation.

## Monitoring Metrics

- Indexed canonical URLs and sitemap coverage.
- Search Console clicks, impressions, CTR, and positions by page/query.
- GBP actions and local query visibility.
- Booking, phone, and email events in GA4.
- Core Web Vitals by template.
- AI citation accuracy for the fixed prompt set after verified content updates.
