# Site Architecture Summary

## Stack

- Framework: Next.js 16.2.3 App Router with React 19.2.4 and TypeScript.
- Rendering: static export (`output: "export"`) with trailing slashes.
- Styling: Tailwind CSS 4 plus global CSS; Framer Motion for client-side animation.
- Hosting: Netlify, publishing `out/` after `npm run build`.
- Content source: repository-owned TSX; no CMS or database was found.
- Analytics: GA4 (`G-3YEWLJK86Q`) loaded after interaction, with booking, phone, and email click events.

## Routing and Content

- 27 HTML routes are generated, of which 24 are intended to remain indexable.
- Main groups: homepage, clinician bio, booking/payment, service/technology pages, condition pages, assessment/wellness pages, and a blog index.
- `/about/` duplicates the clinician page and now redirects to `/about-dr-eric-wu/`.
- `/lp/` and `/wellness-body-reset/` are legacy/noindex routes.
- There is no CMS-backed article collection; `/blog/` is a static resource index.

## SEO Architecture

- Metadata uses App Router `metadata` exports in pages or layouts.
- Canonicals are absolute URLs.
- Shared entity JSON-LD is emitted from the root layout; reusable FAQ, breadcrumb, and service helpers live in `src/lib/seoSchemas.ts`.
- Sitemap and robots files are produced after build by `next-sitemap`.
- Verified, stable identity values are centralized in `src/data/siteFacts.ts`; business facts still requiring owner verification remain documented separately.

## Testing and Tooling

- Existing checks: ESLint and Next production build.
- Added checks: `npm run typecheck` and `npm run seo:validate`.
- No unit-test, accessibility-test, Lighthouse, or CI configuration was present.
- The SEO validator inspects production HTML, internal links, titles, descriptions, canonicals, H1 counts, JSON-LD syntax, image alt attributes, sitemap/indexability alignment, Open Graph data, language, and robots sitemap declaration.

## Deployment Constraints

- `next/image` is configured as unoptimized because the site is statically exported.
- Google Fonts are fetched during build, so a network-restricted build can fail even when application code is valid.
- Netlify redirect and header behavior cannot be fully reproduced by Python's local static server; configuration was inspected directly.
