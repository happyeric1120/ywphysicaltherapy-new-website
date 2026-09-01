import type { Metadata } from "next";
import ShockwaveLandingRoute from "@/components/shockwave/ShockwaveLandingRoute";
import { shockwaveLandingPages } from "@/data/shockwaveLandingPages";

const page = shockwaveLandingPages.neckShoulder;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `https://ywphysicaltherapy.com${page.path}` },
  openGraph: { title: page.title, description: page.metaDescription, url: `https://ywphysicaltherapy.com${page.path}`, siteName: "YW Physical Therapy", locale: "en_US", type: "website" },
};

export default function ShockwaveNeckShoulderPainNYCPage() {
  return <ShockwaveLandingRoute page={page} />;
}
