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
  title: "Physical Therapy NYC | One-on-One PT Near Penn Station | YW Physical Therapy",
  description:
    "Chronic pain that keeps coming back? One-on-one physical therapy in Midtown Manhattan using shockwave, TECAR, and AI movement analysis to fix the root cause — not just the symptoms.",
  keywords:
    "physical therapy NYC, physical therapy Midtown Manhattan, PT near Penn Station, shockwave therapy NYC, one-on-one physical therapy New York",
  alternates: {
    canonical: "https://ywphysicaltherapy.com",
  },
  openGraph: {
    title: "Physical Therapy NYC | YW Physical Therapy | Near Penn Station",
    description:
      "One-on-one PT in Midtown Manhattan. Shockwave, TECAR, laser, and AI movement analysis to fix the root cause of your pain.",
    url: "https://ywphysicaltherapy.com",
    siteName: "YW Physical Therapy",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
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
