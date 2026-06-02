import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const GA_ID = "G-3YEWLJK86Q";
const SITE_URL = "https://ywphysicaltherapy.com";
const GOOGLE_BUSINESS_URL = "https://maps.app.goo.gl/o1A2ubZQXV9teScC6";

const siteIdentitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "YW Physical Therapy",
      publisher: { "@id": `${SITE_URL}/#clinic` },
    },
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": `${SITE_URL}/#clinic`,
      name: "YW Physical Therapy",
      legalName: "YW Physical Therapy PLLC",
      url: `${SITE_URL}/`,
      medicalSpecialty: "Physiotherapy",
      telephone: "+1-347-571-5717",
      email: "ywphysicaltherapy@gmail.com",
      image: `${SITE_URL}/assets/human-system-reset-studio-equipment-midtown-manhattan.png`,
      priceRange: "$$$",
      paymentAccepted: "Cash, Credit Card, HSA, FSA, Insurance",
      hasMap: GOOGLE_BUSINESS_URL,
      sameAs: [GOOGLE_BUSINESS_URL],
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
        latitude: "40.7516",
        longitude: "-73.9905",
      },
      areaServed: { "@type": "City", name: "New York" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Wednesday"],
          opens: "10:00",
          closes: "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "10:00",
          closes: "19:00",
        },
      ],
      founder: { "@id": `${SITE_URL}/#drwu` },
      employee: { "@id": `${SITE_URL}/#drwu` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#drwu`,
      name: "Yu-Kuang Wu",
      honorificPrefix: "Dr.",
      jobTitle: "Doctor of Physical Therapy, PhD",
      worksFor: { "@id": `${SITE_URL}/#clinic` },
      url: `${SITE_URL}/about-dr-eric-wu/`,
      image: `${SITE_URL}/assets/me.jpg`,
      knowsLanguage: ["en", "zh", "yue"],
      knowsAbout: [
        "Movement analysis",
        "Neuroplasticity and mobility recovery",
        "Motor control",
        "Spinal cord injury rehabilitation",
        "Non-invasive rehabilitation technology",
      ],
    },
  ],
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
  twitter: {
    card: "summary_large_image",
    title: "YW Physical Therapy — Human System Reset™",
    description:
      "Premium one-on-one physical therapy, shockwave therapy, and AI movement analysis near Penn Station in Midtown Manhattan.",
    images: ["https://ywphysicaltherapy.com/assets/human-system-reset-studio-equipment-midtown-manhattan.png"],
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
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteIdentitySchema),
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
