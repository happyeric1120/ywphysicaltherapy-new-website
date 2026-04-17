import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Pricing | YW Physical Therapy NYC",
  description:
    "Insurance plans accepted (Aetna, UHC, BCBS) and self-pay pricing for physical therapy in Midtown Manhattan. Transparent costs — no surprises.",
  alternates: { canonical: "https://ywphysicaltherapy.com/insurance-pricing" },
  openGraph: {
    title: "Insurance & Pricing | YW Physical Therapy",
    description:
      "Transparent insurance and pricing info for PT in Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/insurance-pricing",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function InsurancePricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
