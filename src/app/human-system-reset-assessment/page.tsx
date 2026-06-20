import type { Metadata } from "next";
import AssessmentClient from "./AssessmentClient";

export const metadata: Metadata = {
  title: "Human System Reset™ Recovery Screening | YW Physical Therapy",
  description:
    "A private, educational recovery-load questionnaire to help determine whether HRV Assessment or a recovery-focused session may be appropriate.",
  alternates: { canonical: "https://ywphysicaltherapy.com/human-system-reset-assessment" },
  openGraph: {
    title: "Human System Reset™ Recovery Screening | YW Physical Therapy",
    description:
      "A local-only recovery screening questionnaire for sleep, stress, tension, and recovery load patterns.",
    url: "https://ywphysicaltherapy.com/human-system-reset-assessment",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function HumanSystemResetAssessmentPage() {
  return <AssessmentClient />;
}
