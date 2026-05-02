import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const GA_ID = "G-3YEWLJK86Q";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "YW Physical Therapy",
  alternateName: "YW Physical Therapy PLLC",
  url: "https://ywphysicaltherapy.com",
  logo: "https://ywphysicaltherapy.com/assets/logo.png",
  image: "https://ywphysicaltherapy.com/assets/me.jpg",
  description:
    "One-on-one physical therapy in Midtown Manhattan using shockwave, TECAR, and AI movement analysis to find and fix the root cause of pain.",
  telephone: "+13475715717",
  email: "ywphysicaltherapy@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "224 W 35th St #301-5",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7488,
    longitude: -73.9967,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "19:00" },
  ],
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, HSA, FSA, Insurance",
  medicalSpecialty: "PhysicalTherapy",
  hasMap: "https://www.google.com/maps?cid=8278782662710746620",
  sameAs: ["https://www.google.com/maps?cid=8278782662710746620"],
  employee: {
    "@type": "Physician",
    name: "Dr. Yu-Kuang Wu",
    jobTitle: "Doctor of Physical Therapy",
    description: "PT, PhD. Researcher at Mount Sinai Hospital and Bronx VA.",
    knowsAbout: [
      "Physical Therapy",
      "Shockwave Therapy",
      "TECAR Therapy",
      "Neuroplasticity",
      "Movement Science",
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "4",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Physical Therapy in Midtown Manhattan Near Penn Station | YW Physical Therapy",
  description:
    "One-on-one physical therapy in Midtown Manhattan using the Human System Reset™ method. Shockwave, TECAR, Class IV Laser, and AI-guided assessment near Penn Station.",
  alternates: {
    canonical: "https://ywphysicaltherapy.com",
  },
  openGraph: {
    title: "YW Physical Therapy — Human System Reset™",
    description:
      "Premium one-on-one physical therapy in Midtown Manhattan using the Human System Reset™ method.",
    url: "https://ywphysicaltherapy.com",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-brand-black text-brand-white" suppressHydrationWarning>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
