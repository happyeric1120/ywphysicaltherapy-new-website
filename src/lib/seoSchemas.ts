const SITE_URL = "https://ywphysicaltherapy.com";

type Faq = {
  q: string;
  a: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
};

const provider = {
  "@type": "MedicalBusiness",
  name: "YW Physical Therapy",
  url: SITE_URL,
  telephone: "+13475715717",
  address: {
    "@type": "PostalAddress",
    streetAddress: "224 W 35th St #301-5",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7488,
    longitude: -73.9967,
  },
};

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = ["Midtown Manhattan", "Penn Station", "Manhattan", "New York City"],
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider,
    areaServed: areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };
}

export function jsonLd(schema: unknown) {
  return {
    __html: JSON.stringify(schema),
  };
}
