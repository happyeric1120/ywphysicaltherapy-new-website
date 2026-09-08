import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | YW Physical Therapy",
  description: "Privacy Policy for YW Physical Therapy PLLC, including website and SMS communication practices.",
  alternates: { canonical: "https://ywphysicaltherapy.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | YW Physical Therapy",
    description: "Privacy Policy for YW Physical Therapy PLLC, including website and SMS communication practices.",
    url: "https://ywphysicaltherapy.com/privacy-policy",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      intro="This Privacy Policy describes how YW Physical Therapy PLLC collects, uses, and handles information associated with this website and our communications."
    >
      <h2>Information We Collect</h2>
      <p>
        We may collect information you choose to provide when you contact us, request or schedule an
        appointment, complete an intake process, or otherwise communicate with YW Physical Therapy PLLC.
        This may include your name, email address, telephone number, and the information you submit through
        the applicable service.
      </p>
      <p>
        We may also receive limited technical information about visits to this website, such as browser,
        device, and usage information, through website hosting, security, and analytics services.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We may use information to respond to requests, schedule and manage appointments, provide requested
        services, maintain and improve this website, protect our systems, comply with legal obligations, and
        communicate with you as permitted by your choices and applicable law.
      </p>

      <h2>Service Providers and External Services</h2>
      <p>
        This website may link to third-party scheduling, intake, communications, analytics, or other service
        providers. Information you submit directly to an external service is also subject to that provider&apos;s
        privacy practices. Service providers may process information for YW Physical Therapy only as
        reasonably necessary to provide or support their services and other permitted business operations.
      </p>

      <h2>SMS and Mobile Messaging Privacy</h2>
      <p>
        YW Physical Therapy PLLC may collect your mobile phone number when you provide it through our website,
        appointment scheduling process, intake process, direct communication with our practice, or another
        method through which you consent to receive text messages.
      </p>
      <p>
        We may use your mobile phone number to send communications related to appointments, scheduling,
        service-related information, responses to your requests, practice updates, and other communications
        for which you have provided consent.
      </p>

      <h2>Mobile Information Sharing</h2>
      <p>
        YW Physical Therapy PLLC does not sell, rent, or share mobile phone numbers or SMS opt-in information
        with third parties or affiliates for their marketing or promotional purposes.
      </p>
      <p>
        Mobile information may be shared with service providers that assist YW Physical Therapy in providing
        SMS communications, but only as necessary to provide those services.
      </p>
      <p>SMS opt-in data and consent will not be shared with third parties for their own marketing or promotional purposes.</p>

      <h2>SMS Service Providers</h2>
      <p>YW Physical Therapy may use third-party communications service providers to facilitate delivery of SMS messages.</p>
      <p>These providers may process information such as:</p>
      <ul>
        <li>mobile phone number;</li>
        <li>carrier information;</li>
        <li>message delivery information;</li>
        <li>date and time of messages; and</li>
        <li>message content when necessary to provide the communication service.</li>
      </ul>
      <p>
        Such information is used only as reasonably necessary to provide, maintain, secure, or support the
        messaging service and other permitted business operations.
      </p>

      <h2>Opting Out of SMS</h2>
      <p>You may opt out of SMS communications at any time by replying STOP to a text message from YW Physical Therapy.</p>
      <p>You may receive a confirmation message acknowledging your opt-out request.</p>
      <p>
        For assistance, reply HELP, email <a href="mailto:info@ywphysicaltherapy.com">info@ywphysicaltherapy.com</a>,
        or call <a href="tel:+13475715717">(347) 571-5717</a>.
      </p>

      <h2>Message and Data Rates</h2>
      <p>Message and data rates may apply to SMS communications depending on your mobile carrier and wireless plan.</p>

      <h2>Your Choices</h2>
      <p>
        You may choose not to provide optional information. You may also contact us to ask questions about
        information you previously provided. SMS enrollment is optional and is not a condition of receiving
        treatment or purchasing services.
      </p>

      <h2>Policy Updates</h2>
      <p>
        We may update this Privacy Policy from time to time. The date shown at the top of this page indicates
        when this policy was most recently updated.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this Privacy Policy may be directed to{" "}
        <a href="mailto:info@ywphysicaltherapy.com">info@ywphysicaltherapy.com</a> or{" "}
        <a href="tel:+13475715717">(347) 571-5717</a>.
      </p>
      <p>
        For SMS program terms, review our <Link href="/sms-terms">SMS Terms &amp; Conditions</Link>.
      </p>
    </LegalPage>
  );
}
