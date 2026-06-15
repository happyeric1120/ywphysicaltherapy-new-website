# 2026-05-16 Website Update Log

This file records the SEO sprint completed on May 16, 2026.

## Source Documents

- Read first: `SEO_optimization_05162026.md`
- Execution plan created and marked:
  - Outer planning file: `SEO_execution_plan_05162026.md`
  - Repo copy: `site/SEO_execution_plan_05162026.md`

## Implementation Summary

### Shared SEO Schema Helpers

- Added `src/lib/seoSchemas.ts`.
- Added reusable helpers for:
  - FAQPage schema
  - BreadcrumbList schema
  - Service schema
  - JSON-LD script rendering payloads

### Existing Page Schema Upgrades

Applied shared schema helpers to key existing SEO pages:

- `/shockwave-therapy-nyc`
- `/movement-analysis-nyc`
- `/ai-movement-evaluation`
- `/desk-worker-body-reset`
- `/neck-pain-nyc`
- `/back-pain-nyc`

Each upgraded page now includes:

- FAQ schema
- Breadcrumb schema
- Service schema

### Metadata Upgrade

- Added global Twitter card metadata in `src/app/layout.tsx`.

### New SEO Pages

Added:

- `/physical-therapy-near-penn-station`
- `/focused-shockwave-vs-radial-shockwave`

Both pages follow the existing black/gold premium editorial style through the current page shell and avoid generic SEO doorway-page formatting.

### Internal Linking

- Added footer links to:
  - Physical Therapy Near Penn Station
  - Focused vs Radial Shockwave
- Added a contextual link from `/shockwave-therapy-nyc` to `/focused-shockwave-vs-radial-shockwave`.

## Style Decision

The SEO source document requested luxury editorial branding. This matches the existing site style, so implementation preserved the current design system:

- Black / gold palette
- Editorial typography
- Thin borders
- Minimal cards
- Premium clinic tone
- No generic SEO-template styling

## Verification

Commands run:

- `npm run lint`
- `npm run build`

Results:

- Lint passed.
- Production build passed.
- Static route generation and sitemap generation completed successfully.

---

# 2026-06-15 Reset Naming + Navigation Update

This section records the Reset-focused navigation and messaging updates completed on June 15, 2026.

## Implementation Summary

### Navbar Simplification

- Removed the `Conditions` navbar tab because it only routed to the Back Pain page.
- Renamed the main navbar entries:
  - `Pain & Movement` → `Body Reset`
  - `Neural Regulation` → `Nervous System Reset`
- Kept the existing URLs unchanged to avoid redirect and SEO churn:
  - `/physical-therapy-near-penn-station`
  - `/neural-regulation`

### Body Reset Page Reframing

- Updated `/physical-therapy-near-penn-station` so the page presents as `Body Reset`.
- Updated page metadata, Open Graph title, breadcrumb schema, service schema, hero eyebrow, H1, lead copy, FAQ wording, and CTA heading.
- Reframed the page as the musculoskeletal reset within Human System Reset™ while preserving physical therapy and movement-analysis SEO language.

### Nervous System Reset Page Reframing

- Updated `/neural-regulation` so the page presents as `Nervous System Reset`.
- Updated page metadata, Open Graph title, breadcrumb schema, service schema, hero H1, FAQ wording, section labels, default booking button label, and intervention copy.
- Kept the page focused on HRV assessment, recovery readiness, and nervous system regulation.
- Replaced the hero report image with `public/assets/Hrv-result-pic.PNG`.

### Homepage Messaging Alignment

- Updated homepage CTA and section language to match the new Reset architecture:
  - Hero CTA now says `Explore Body Reset`.
  - `How We Help` now uses `Body Reset` and `Nervous System Reset` as the two entry points.
  - The Human System Reset™ method RESTORE phase now references `Nervous System Reset`.
  - The method CTA now says `Explore Body Reset`.
- Updated homepage metadata keywords to include:
  - `Body Reset NYC`
  - `Nervous System Reset NYC`
- Kept `neural regulation NYC` in keywords for SEO continuity.

### Shared Navigation and Footer Copy

- Updated the shared service page CTA from `See Pain & Movement` to `See Body Reset`.
- Updated footer links from:
  - `Pain & Movement` → `Body Reset`
  - `Neural Regulation` → `Nervous System Reset`

## Verification

Commands run:

- `npm run lint`
- `npm run build`

Results:

- Lint passed.
- Production build passed.
- Static route generation completed successfully.
- Sitemap generation completed successfully.
- Local server was restarted successfully on `http://localhost:3000`.
- Local check confirmed `/neural-regulation` returned `200` and included the new `Hrv-result-pic.PNG` hero image.
