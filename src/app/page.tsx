import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HowWeHelpSection from "@/components/home/HowWeHelpSection";
import MethodSection from "@/components/home/MethodSection";
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection";
import ConditionsSection from "@/components/home/ConditionsSection";
import AboutSection from "@/components/home/AboutSection";
import BookAssessmentSection from "@/components/home/BookAssessmentSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import LocationSection from "@/components/home/LocationSection";

export const metadata: Metadata = {
  title: "Human System Reset™ | Physical Therapy & Recovery NYC | YW Physical Therapy",
  description:
    "Human System Reset™ in Midtown Manhattan: one-on-one physical therapy and recovery combining movement analysis, HRV assessment, recovery technology, and strength retraining.",
  keywords:
    "Human System Reset, physical therapy NYC, HRV assessment NYC, neural regulation NYC, movement analysis NYC, physical therapy Midtown Manhattan",
  alternates: {
    canonical: "https://ywphysicaltherapy.com",
  },
  openGraph: {
    title: "Human System Reset™ | YW Physical Therapy NYC",
    description:
      "A performance-focused physical therapy and recovery clinic using assessment, recovery technology, movement optimization, and nervous system support.",
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
      <MethodSection />
      <FeaturedServicesSection />
      <ConditionsSection />
      <AboutSection />
      <ReviewsSection />
      <BookAssessmentSection />
      <LocationSection />
    </>
  );
}
