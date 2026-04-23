import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness Body Reset — Movement Analysis & Tension Release | YW Physical Therapy",
  description:
    "One-on-one wellness sessions combining movement analysis and targeted tension release in Midtown Manhattan. Movement Analysis $100 · Body Reset $150 · First-Time Experience $200.",
  robots: { index: false, follow: false },
};

export default function WellnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
