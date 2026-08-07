import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://ywphysicaltherapy.com/lp/" },
  robots: { index: false, follow: true },
};

export default function LegacyLandingPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
