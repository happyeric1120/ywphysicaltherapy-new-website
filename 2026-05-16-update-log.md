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

# 2026-06-01 GEO + SEO Update

This section records the GEO and local SEO foundation work completed on June 1, 2026.

## Source Documents

- Read first: `../geo-seo-instructions_06012026.md`

## Implementation Summary

### Site-Wide Identity Schema

- Replaced the older local business JSON-LD in `src/app/layout.tsx` with a linked `@graph`.
- Added linked entities for:
  - `WebSite` at `https://ywphysicaltherapy.com/#website`
  - `MedicalClinic` / `LocalBusiness` at `https://ywphysicaltherapy.com/#clinic`
  - `Person` for Dr. Yu-Kuang Wu at `https://ywphysicaltherapy.com/#drwu`
- Updated clinic schema to use `MedicalClinic` with `medicalSpecialty: "Physiotherapy"`.
- Removed the invalid / less appropriate physical therapy schema wording from the site-wide identity graph.
- Added `knowsLanguage: ["en", "zh", "yue"]` to the Person schema.
- Deferred unverified `sameAs`, review count, review schema, and alumni fields until real owner-provided data is available.

### Shared Schema Helper Update

- Updated `src/lib/seoSchemas.ts` so page-level Service schema references the canonical clinic entity through `https://ywphysicaltherapy.com/#clinic`.
- This keeps page-level service schema connected to the same clinic identity graph instead of creating detached provider objects.

### Homepage Movement Matrix

- Added `src/components/home/MovementMatrixSection.tsx`.
- Inserted the section on the homepage after the Human System Reset™ method section.
- Built the matrix as a server-rendered semantic `<table>` with:
  - Symptom
  - Common Contributing Factor
  - Assessment Focus
  - Recovery Strategy
- Used hedged clinical language to avoid deterministic single-cause medical claims.

### Manual GEO / Local SEO Tasks

- Added `MANUAL-TASKS.md`.
- Listed off-site tasks that must be handled with real account access or owner-provided data:
  - Google Business Profile verification
  - NAP consistency
  - Current Google rating / review count
  - Real review author, date, rating, and text
  - Clinician authority links for `sameAs`
  - Latitude / longitude verification

### Google Business Review Link

- Reviewed the homepage Google review section.
- Confirmed the homepage reviews are currently manually stored in `src/components/home/ReviewsSection.tsx`, not fetched live from Google.
- Updated the `View all reviews on Google` link away from the old CID URL.
- Updated both the homepage review CTA and site-wide schema `hasMap` / `sameAs` to use a Google Maps search URL based on the clinic name and address.

### Apostrophe Entity Cleanup

- Investigated visible `&apos;` text concerns.
- Confirmed `&apos;` is safe in JSX text nodes but can appear literally when stored inside JavaScript data strings.
- Replaced `&apos;` with real apostrophes in content data strings where users could see the entity text.
- Kept `&apos;` only where JSX lint requires escaped apostrophes and the browser renders them correctly.

## Commits

- `4e009bc` — Implement GEO SEO foundation
- `8d95955` — Fix Google business review link
- `be7420f` — Fix apostrophe entities in content strings

## Verification

Commands run:

- `npm run lint`
- `npm run build`

Results:

- Lint passed.
- Production build passed.
- Static route generation completed successfully.
- Sitemap generation completed successfully.
- Homepage HTML check confirmed the new Movement Dysfunction Matrix renders in server output.
