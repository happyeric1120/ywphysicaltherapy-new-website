# Performance Improvements

## Implemented

- Replaced seven raw `<img>` instances with `next/image` on five service pages.
- Added responsive `sizes` hints while preserving existing aspect-ratio containers to reduce oversized image selection and layout-shift risk.
- Kept the primary clinician image priority behavior unchanged.
- Preserved GA4, booking links, animations, and all user-facing content.

## Existing Strengths

- The site is statically exported.
- Netlify applies immutable caching to Next static chunks and public assets.
- Below-the-fold Next images use native lazy loading by default.

## Open Risks

- `images.unoptimized: true` means Netlify receives original public image files; large PNG files should be measured and selectively converted only after visual QA.
- Framer Motion and client components add hydration cost across many pages.
- Three Google font families/weight sets create a build-time network dependency and potential font-loading cost.
- GA4 is a third-party script and may affect main-thread work after interaction.
- No Lighthouse tooling is installed, so LCP, INP, CLS, and bundle-size baselines are not available in this run.

## Recommended Measurement

Run Lighthouse at mobile and desktop widths on `/`, `/physical-therapy-near-penn-station/`, `/shockwave-therapy-nyc/`, `/human-system-reset/`, and `/book/`, then record LCP element, transferred image bytes, unused JavaScript, CLS, and accessibility findings before further optimization.
