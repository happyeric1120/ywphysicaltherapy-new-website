import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions | YW Physical Therapy",
  description: "SMS Terms and Conditions for text message communications from YW Physical Therapy PLLC.",
  alternates: { canonical: "https://ywphysicaltherapy.com/sms-terms" },
  openGraph: {
    title: "SMS Terms & Conditions | YW Physical Therapy",
    description: "SMS Terms and Conditions for text message communications from YW Physical Therapy PLLC.",
    url: "https://ywphysicaltherapy.com/sms-terms",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function SmsTermsPage() {
  return (
    <LegalPage eyebrow="Legal · SMS Communications" title="SMS Terms & Conditions">
      <h2>YW Physical Therapy SMS Terms &amp; Conditions</h2>
      <p>
        By providing your mobile phone number and opting in to receive text messages, you consent to
        receive SMS and/or MMS communications from YW Physical Therapy PLLC.
      </p>
      <p>Messages may include, but are not necessarily limited to:</p>
      <ul>
        <li>appointment confirmations;</li>
        <li>appointment reminders;</li>
        <li>scheduling and rescheduling communications;</li>
        <li>appointment-related updates;</li>
        <li>responses to inquiries initiated by you;</li>
        <li>service-related communications;</li>
        <li>practice-related updates; and</li>
        <li>other communications that you have consented to receive.</li>
      </ul>

      <h2>Message Frequency</h2>
      <p>Message frequency varies depending on your appointments, requests, and interactions with YW Physical Therapy.</p>

      <h2>Message and Data Rates</h2>
      <p>
        Message and data rates may apply depending on your mobile carrier and wireless plan. YW Physical
        Therapy does not charge you separately for receiving SMS messages, but your wireless carrier may
        impose messaging or data charges.
      </p>

      <h2>Opting Out</h2>
      <p>You may opt out of SMS communications at any time by replying STOP to a message from YW Physical Therapy.</p>
      <p>
        After submitting an opt-out request, you may receive one final confirmation message confirming that
        you have been unsubscribed from SMS communications.
      </p>
      <p>
        After opting out, you will no longer receive SMS messages from the applicable messaging program unless
        you subsequently provide consent to receive messages again.
      </p>

      <h2>Help</h2>
      <p>
        For assistance with SMS communications, reply HELP to a message from YW Physical Therapy, email{" "}
        <a href="mailto:info@ywphysicaltherapy.com">info@ywphysicaltherapy.com</a>, or call{" "}
        <a href="tel:+13475715717">(347) 571-5717</a>.
      </p>

      <h2>Privacy</h2>
      <p>
        Information collected through our SMS program is handled in accordance with our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Mobile Number Changes</h2>
      <p>If your mobile phone number changes, please notify YW Physical Therapy so that our records can be updated.</p>

      <h2>Delivery</h2>
      <p>
        SMS delivery is subject to effective transmission by your wireless carrier and is not guaranteed.
        Wireless carriers are not responsible for delayed or undelivered messages.
      </p>

      <h2>Changes to SMS Services</h2>
      <p>
        YW Physical Therapy PLLC may modify, suspend, or discontinue its SMS messaging services at any time,
        subject to applicable law.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions regarding SMS communications from YW Physical Therapy, email{" "}
        <a href="mailto:info@ywphysicaltherapy.com">info@ywphysicaltherapy.com</a> or call{" "}
        <a href="tel:+13475715717">(347) 571-5717</a>.
      </p>
    </LegalPage>
  );
}
