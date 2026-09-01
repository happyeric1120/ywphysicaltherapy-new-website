import ShockwaveLandingPage from "./ShockwaveLandingPage";
import type { ShockwaveLandingPageData } from "@/data/shockwaveLandingPages";
import { breadcrumbSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

export default function ShockwaveLandingRoute({ page }: { page: ShockwaveLandingPageData }) {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.h1, path: page.path },
    ]),
    serviceSchema({
      name: page.h1,
      description: page.metaDescription,
      path: page.path,
      serviceType: "Shockwave Therapy",
    }),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      ))}
      <ShockwaveLandingPage page={page} />
    </>
  );
}
