# SEO/GEO Audit

## Executive Summary

The static site builds successfully and has strong baseline crawlability: every sitemap route returned 200 locally, important pages have unique titles/descriptions/canonicals and one H1, JSON-LD parses, internal links resolve, and images have alt text. The run fixed sitemap/indexability mismatches, a duplicate clinician route, misleading insurance metadata, missing social image coverage, responsive image handling, and keyboard skip navigation.

The largest remaining risk is not technical. Multiple YMYL pages use strong treatment-effect, mechanism, diagnostic certainty, credential, affiliation, insurance, rating, and outcome language without visible verification. Those changes were deliberately not auto-published; review drafts and source requirements are in `content-review/`.

## Technical SEO

- Indexable sitemap URLs: 24.
- Generated HTML routes audited: 27.
- Local sitemap crawl: 24/24 returned 200.
- Broken rendered internal links: 0.
- Duplicate indexable titles, descriptions, or canonicals: 0.
- Missing title, description, canonical, H1, language, or image alt: 0.
- Invalid JSON-LD blocks: 0.
- Noindex URLs in sitemap after fix: 0.
- Robots declares the canonical sitemap.

## Content and GEO

Strengths:

- Direct, descriptive H1s and substantial copy on most service and condition pages.
- Consistent clinician and practice entities.
- Existing FAQ and breadcrumb structured data on key service pages.
- Clear local context near Penn Station and Midtown Manhattan.
- Several pages explain what is measured and what happens during care.

Weaknesses:

- Clinical citations and explicit evidence limitations are absent from visible pages.
- Updated/reviewed dates are absent.
- Clinician entity authority lacks verified external profile links.
- `/blog/` is a card index without complete article routes.
- `/movement-analysis-nyc/` is orphaned and overlaps the AI movement analysis page.
- Several service pages lack balanced precautions, candidacy limitations, and evidence-strength summaries.
- Reviews and business facts are not backed by repository evidence exports.

## Local SEO

The site consistently displays a Midtown/Penn Station address, phone, email, map link, transit context, and hours. These are useful local signals, but the audit cannot establish that they match Google Business Profile, directory listings, billing records, or current scheduling. No changes to these facts were auto-published.

## Accessibility

- Shared skip navigation added.
- Homepage browser inspection: one H1, one main landmark, no empty links, no unnamed buttons, no unlabeled form inputs, and no unsafe blank-target links.
- Remaining work: automated axe scan, full keyboard traversal, focus order, color contrast, reduced-motion behavior, assessment form errors, and mobile touch-target review.

## Performance

- Seven raw images migrated to responsive Next Image usage.
- Static export and immutable asset caching are positive.
- Original image delivery, client animation/hydration, font loading, and GA4 remain measurement targets.
- No Lighthouse score is claimed because Lighthouse is not installed.

## Priority Decision

Do not expand clinical content until existing high-risk claims and business facts are approved. The next best technical/content decision is resolving the two movement-analysis URLs, followed by adding verified evidence, reviewer dates, and author authority links.
