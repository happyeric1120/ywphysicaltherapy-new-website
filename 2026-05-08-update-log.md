# 2026-05-08 Website Update Log

This file records the website changes completed on May 8, 2026.

## Repository

- Website repo path: `site/`
- GitHub remote: `https://github.com/happyeric1120/ywphysicaltherapy-new-website.git`
- Branch: `main`

## SEO / Content Structure

- Added core SEO landing pages in the prior commit:
  - `/movement-analysis-nyc`
  - `/ai-movement-evaluation`
  - `/desk-worker-body-reset`
  - `/about-dr-eric-wu`
- Added Person schema to `/about-dr-eric-wu`.
- Added FAQ schema to `/neck-pain-nyc`.
- Updated navigation and footer links to surface the new SEO pages.

## Visual Asset Placement

### Studio / Equipment Collage

- Source image: `YW_environment.PNG`
- Added asset:
  - `public/assets/human-system-reset-studio-equipment-midtown-manhattan.png`
- Added image placement:
  - Homepage technology section via `src/components/home/TechSection.tsx`
  - `/human-system-reset` studio section via `src/app/human-system-reset/page.tsx`

### Shockwave Therapy Photos

- Source images:
  - `focused-shockwave.PNG`
  - `radial-shockwave.PNG`
- Added assets:
  - `public/assets/focused-shockwave-therapy-nyc.png`
  - `public/assets/radial-shockwave-therapy-nyc.png`
- Added image placement:
  - `/shockwave-therapy-nyc` focused vs radial comparison cards.

### Movement Analysis Report Image

- Source image: `movement-analysis.png`
- Added asset:
  - `public/assets/ai-movement-analysis-report-nyc.png`
- Added image placement:
  - `/movement-analysis-nyc` first content section as a primary proof image.
  - `/ai-movement-evaluation` first content section as a supporting proof image.

### One-on-One Treatment Photo

- Source image: `treatment-photo.PNG`
- Added asset:
  - `public/assets/dr-eric-wu-one-on-one-treatment-midtown-manhattan.png`
- Added image placement:
  - `/about` and `/about-dr-eric-wu` through the shared About page component.
- Added a new "One-on-One Care" section between the bio and research sections to show Dr. Wu providing treatment directly.

## Dev / Hydration Note

- Added `suppressHydrationWarning` to the root `<html>` in `src/app/layout.tsx`.
- Reason: local browser extension added `data-qb-installed="true"` before React hydration, causing a Next.js dev overlay warning.
- This was a local preview issue, not a production content bug.

## Verification

Commands run:

- `npm run lint`
- `npm run build`

Results:

- `npm run lint` passed.
- `npm run build` passed.
- Static routes and sitemap generation completed successfully.

## Notes

- The shockwave photos, movement analysis image, and studio collage were added for visual trust and service clarity.
- The images were not pushed until this log was written.
- Some page-level images use native `<img>` tags with targeted ESLint disables because `next/image` caused a local dev runtime issue when rendered inside the current client shell structure. Build and static export remain valid.
