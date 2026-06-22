import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HowWeHelpSection from "@/components/home/HowWeHelpSection";
import StartWithMeasurementSection from "@/components/home/StartWithMeasurementSection";
import MethodSection from "@/components/home/MethodSection";
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection";
import ConditionsSection from "@/components/home/ConditionsSection";
import AboutSection from "@/components/home/AboutSection";
import BookAssessmentSection from "@/components/home/BookAssessmentSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import LocationSection from "@/components/home/LocationSection";

export const metadata: Metadata = {
  title: "Physical Therapy, Movement Analysis & Recovery NYC | YW Physical Therapy",
  description:
    "One-on-one physical therapy, AI Movement Analysis, shockwave therapy, and recovery-focused Human System Reset™ services in Midtown Manhattan.",
  keywords:
    "physical therapy NYC, movement analysis NYC, shockwave therapy NYC, Human System Reset, recovery assessment NYC, physical therapy Midtown Manhattan",
  alternates: {
    canonical: "https://ywphysicaltherapy.com",
  },
  openGraph: {
    title: "Human System Reset™ | YW Physical Therapy NYC",
    description:
      "A Midtown Manhattan clinic for pain, recovery, movement analysis, shockwave therapy, and progress tracking.",
    url: "https://ywphysicaltherapy.com",
    siteName: "YW Physical Therapy",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowWeHelpSection />
      <StartWithMeasurementSection />
      <MethodSection />
      <FeaturedServicesSection />
      <ConditionsSection />
      <AboutSection />
      <ReviewsSection />
      <LocationSection />
      <BookAssessmentSection />
    </>
  );
}
