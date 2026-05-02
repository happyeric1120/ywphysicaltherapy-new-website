import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Session | YW Physical Therapy NYC",
  description:
    "Book a one-on-one physical therapy session with Dr. Yu-Kuang Wu at YW Physical Therapy in Midtown Manhattan. Mon / Wed 10am–4pm, Thu 10am–7pm. Near Penn Station.",
  alternates: { canonical: "https://ywphysicaltherapy.com/book" },
  openGraph: {
    title: "Book Your Session | YW Physical Therapy",
    description: "Schedule one-on-one PT in Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/book",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
