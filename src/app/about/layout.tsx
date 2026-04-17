import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Yu-Kuang Wu, PT, DPT, PhD | YW Physical Therapy NYC",
  description:
    "Meet Dr. Yu-Kuang Wu — physical therapist, researcher, and founder of the Human System Reset™ method. PhD in neuroplasticity. Researcher at Mount Sinai and Bronx VA. Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/about" },
  openGraph: {
    title: "Dr. Yu-Kuang Wu, PT, DPT, PhD | YW Physical Therapy",
    description:
      "Physical therapist and researcher in Midtown Manhattan. Founder of the Human System Reset™ method.",
    url: "https://ywphysicaltherapy.com/about",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
