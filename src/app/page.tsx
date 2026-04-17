import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TensionSection from "@/components/home/TensionSection";
import MethodSection from "@/components/home/MethodSection";
import AudienceSection from "@/components/home/AudienceSection";
import TechSection from "@/components/home/TechSection";
import AboutSection from "@/components/home/AboutSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import LocationSection from "@/components/home/LocationSection";

export const metadata: Metadata = {
  title: "Physical Therapy in Midtown Manhattan Near Penn Station | YW Physical Therapy",
  description:
    "One-on-one physical therapy in Midtown Manhattan using the Human System Reset™ method. Shockwave, TECAR, Class IV Laser, and AI-guided assessment near Penn Station. Book today.",
  alternates: {
    canonical: "https://ywphysicaltherapy.com",
  },
  openGraph: {
    title: "YW Physical Therapy — Human System Reset™ | Midtown Manhattan",
    description:
      "Premium one-on-one physical therapy in Midtown Manhattan using the Human System Reset™ method.",
    url: "https://ywphysicaltherapy.com",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "YW Physical Therapy",
  description:
    "Premium one-on-one physical therapy in Midtown Manhattan using the Human System Reset™ method.",
  url: "https://ywphysicaltherapy.com",
  telephone: "+13475715717",
  email: "ywphysicaltherapy@gmail.com",
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
    latitude: 40.7484,
    longitude: -73.9967,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "16:00" },
  ],
  medicalSpecialty: "PhysicalTherapy",
  priceRange: "$$-$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "4",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema.org JSON-LD — plain script tag for static export compatibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <TensionSection />
      <MethodSection />
      <AudienceSection />
      <TechSection />
      <AboutSection />
      <ReviewsSection />
      <LocationSection />
    </>
  );
}
