import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Enrollment | YW Physical Therapy",
  description: "Optional SMS enrollment information for appointment and service-related messages from YW Physical Therapy PLLC.",
  alternates: { canonical: "https://ywphysicaltherapy.com/sms-opt-in" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "SMS Enrollment | YW Physical Therapy",
    description: "Optional SMS enrollment information for appointment and service-related messages from YW Physical Therapy PLLC.",
    url: "https://ywphysicaltherapy.com/sms-opt-in",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function SmsOptInPage() {
  return (
    <div className="bg-brand-black">
      <section className="border-b border-brand-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="type-label mb-4 text-brand-gold">Optional · SMS Enrollment</p>
          <h1 className="type-display-l text-brand-white">YW Physical Therapy SMS Enrollment</h1>
          <p className="mt-6 max-w-3xl type-body-l text-brand-muted">
            Sign up to receive appointment reminders, scheduling updates, service-related communications,
            and practice updates by text message from YW Physical Therapy PLLC.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="max-w-3xl border border-brand-border bg-brand-black p-7 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-brand-white">Before you enroll</h2>
            <div className="mt-5 space-y-4 font-body text-base leading-8 text-brand-muted">
              <p>
                Enrollment is optional. Consent to receive SMS messages is not a condition of receiving
                treatment or purchasing services.
              </p>
              <p>
                Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP
                for assistance.
              </p>
              <p>
                Review our <Link className="text-brand-gold underline underline-offset-4" href="/privacy-policy">Privacy Policy</Link>
                {" "}and <Link className="text-brand-gold underline underline-offset-4" href="/sms-terms">SMS Terms &amp; Conditions</Link>.
              </p>
            </div>

            <div className="mt-8 border-t border-brand-border pt-7">
              <p className="font-body text-sm leading-6 text-brand-muted">
                The secure enrollment form will be available here after the BoloForms connection is completed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
