import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Pricing | YW Physical Therapy NYC",
  description:
    "Out-of-network coverage information and transparent self-pay pricing for physical therapy and wellness services in Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/insurance-pricing" },
  openGraph: {
    title: "Insurance & Pricing | YW Physical Therapy",
    description:
      "Out-of-network coverage information and transparent self-pay pricing near Penn Station in Midtown Manhattan.",
    url: "https://ywphysicaltherapy.com/insurance-pricing",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function InsurancePricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
