# Manual GEO + Local SEO Tasks

These tasks require real off-site data or account access. Do not fabricate them in code.

## Google Business Profile

- Confirm the primary category is Physical Therapist.
- Confirm the public name is exactly `YW Physical Therapy`.
- Confirm address, suite, phone, website URL, and hours match the website.
- Confirm services match the site language and do not over-position the clinic as only a shockwave clinic.
- Add current clinic, treatment room, equipment, and clinician photos.

## NAP Consistency

- Confirm name, address, and phone are identical across Google Business Profile, Apple Maps, Bing Places, Yelp, Zocdoc, insurance directories, and healthcare directories.
- Preferred NAP:
  - Name: `YW Physical Therapy`
  - Address: `224 W 35th St #301-5, New York, NY 10001`
  - Phone: `+1-347-571-5717`

## Reviews

- Pull the current Google review count before adding `aggregateRating.reviewCount` or `ratingCount` to schema.
- Pull real review author names, publication dates, ratings, and review bodies before adding `Review` schema.
- Continue requesting Google reviews from appropriate patients and respond as the clinician owner.

## Clinician Authority Links

- Provide real, public URLs before adding `sameAs` to the Person schema:
  - Google Scholar
  - ORCID
  - ResearchGate
  - LinkedIn
  - Mount Sinai, Bronx VA, or other institutional profile if public
- Confirm degree-granting institutions before adding `alumniOf`.

## Location Data

- Verify the latitude and longitude for `224 W 35th St #301-5`.
- Current code uses `40.7516, -73.9905` based on the GEO instruction file.
