import type { Metadata } from "next";
import AboutPage from "../about/page";

export const metadata: Metadata = {
  title: "Dr. Yu-Kuang Wu, PT, PhD | Founder of YW Physical Therapy",
  description:
    "Meet Dr. Yu-Kuang Wu, PT, PhD, founder of YW Physical Therapy and Human System Reset™. Licensed physical therapist and movement system specialist in Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/about-dr-eric-wu" },
  openGraph: {
    title: "Dr. Yu-Kuang Wu, PT, PhD | YW Physical Therapy",
    description:
      "Founder of YW Physical Therapy and Human System Reset™. One-on-one physical therapy and movement optimization in Midtown Manhattan.",
    url: "https://ywphysicaltherapy.com/about-dr-eric-wu",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "profile",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Yu-Kuang Wu, PT, PhD",
  alternateName: "Dr. Eric Wu",
  jobTitle: "Physical Therapist",
  url: "https://ywphysicaltherapy.com/about-dr-eric-wu",
  image: "https://ywphysicaltherapy.com/assets/me.jpg",
  worksFor: {
    "@type": "MedicalBusiness",
    name: "YW Physical Therapy",
    url: "https://ywphysicaltherapy.com",
  },
  knowsAbout: [
    "Physical Therapy",
    "Movement Analysis",
    "Shockwave Therapy",
    "AI-assisted movement evaluation",
    "Neuroplasticity",
    "Corrective Exercise",
    "Human System Reset",
  ],
};

export default function AboutDrEricWuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutPage />
    </>
  );
}
