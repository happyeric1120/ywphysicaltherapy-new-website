import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Reset Wellness — Movement Analysis & Tension Release | YW Physical Therapy",
  description:
    "One-on-one Body Reset wellness sessions in Midtown Manhattan. Movement Analysis $100 · Body Reset $150 · First-Time Experience $200. Release tension and move better.",
  robots: { index: false, follow: false },
};

export default function WellnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
