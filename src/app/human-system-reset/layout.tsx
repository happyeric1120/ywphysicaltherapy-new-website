import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Human System Reset™ Method | YW Physical Therapy NYC",
  description:
    "A proprietary four-phase protocol — REVEAL, RELEASE, RESTORE, REINFORCE — that systematically identifies, treats, and rebuilds chronic pain patterns. Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/human-system-reset" },
  openGraph: {
    title: "The Human System Reset™ Method | YW Physical Therapy",
    description:
      "Systematic, root-cause physical therapy in Midtown Manhattan. The 4R method built to last.",
    url: "https://ywphysicaltherapy.com/human-system-reset",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function HumanSystemResetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
