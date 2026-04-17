import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Neck Pain Physical Therapy in Manhattan | YW Physical Therapy",
  description:
    "Physical therapy for neck pain, cervical radiculopathy, and headaches in Midtown Manhattan. Root-cause assessment and advanced technology near Penn Station.",
  alternates: { canonical: "https://ywphysicaltherapy.com/neck-pain-nyc" },
  openGraph: {
    title: "Neck Pain Physical Therapy in Manhattan | YW Physical Therapy",
    description:
      "Root-cause PT for neck pain and cervical conditions. Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/neck-pain-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Can PT help with cervical radiculopathy (arm pain from the neck)?",
    a: "Yes. Cervical radiculopathy (pinched nerve causing arm pain, numbness, or tingling) responds well to PT when the correct segments are decompressed and the mechanical driver is identified. Most patients avoid surgery with appropriate conservative care.",
  },
  {
    q: "Can you treat headaches caused by my neck?",
    a: "Yes — cervicogenic headaches (headaches that originate from cervical joint and muscle dysfunction) are very effectively treated with PT. We address the upper cervical joints, suboccipital muscle tension, and the postural patterns that create sustained load on the cervical spine.",
  },
  {
    q: "How long does neck pain PT take?",
    a: "Most uncomplicated neck pain resolves or significantly improves in 4–8 sessions. Chronic cervical conditions or those with nerve involvement may take 8–12 sessions.",
  },
  {
    q: "Should I get an X-ray or MRI first?",
    a: "Usually not necessary before starting PT. Clinical examination is the most appropriate first step for mechanical neck pain. If your symptoms suggest a specific pathology requiring imaging, Dr. Wu will communicate that clearly.",
  },
];

export default function NeckPainNYCPage() {
  return (
    <ServicePageShell
      eyebrow="Neck Pain · Human System Reset™"
      h1="Neck Pain Physical Therapy in Manhattan"
      heroTagline="Neck pain is a posture problem that became a structural problem."
      lead="Sustained loading from poor posture, sedentary work, and unresolved muscle tension creates cervical dysfunction that compounds over time. We find the driver and reset the system — before it becomes a disc problem."
      faqs={faqs}
      ctaHeading="Start Your Neck Pain Assessment"
    >
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">The Pattern</p>
          <h2 className="type-display-m text-brand-white mb-6">Why Neck Pain Keeps Coming Back</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
            <p>
              The cervical spine is designed to move freely in all directions. When you spend hours
              in a fixed position — looking at a screen, driving, or on a phone — the muscles and
              joints adapt to that position. Mobility decreases. Compression increases. Pain follows.
            </p>
            <p>
              But neck pain rarely resolves by fixing the neck alone. The thoracic spine and shoulder
              complex have to contribute — when they don&apos;t, the cervical spine compensates. We assess
              the whole chain, not just the painful segment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Conditions We Treat</p>
          <h2 className="type-display-m text-brand-white mb-8">Neck and Cervical Conditions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Mechanical neck pain",
              "Cervical radiculopathy (pinched nerve)",
              "Cervicogenic headaches",
              "Cervical disc herniation",
              "Cervical stenosis",
              "Whiplash / MVA-related pain",
              "Forward head posture",
              "Upper trapezius tension",
              "Thoracic outlet syndrome",
              "Suboccipital muscle tension",
              "Shoulder-neck complex pain",
              "Tech neck (screen-related)",
            ].map((c) => (
              <div key={c} className="px-5 py-3 border border-brand-border bg-brand-surface font-body font-light text-brand-muted text-sm" style={{ borderRadius: "2px" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Treatment Approach</p>
          <h2 className="type-display-m text-brand-white mb-8">How We Address Neck Pain</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cervical & Thoracic Mobilization",
                desc: "Joint mobilization restores cervical and thoracic range of motion — reducing the compressive forces that create nerve irritation and muscle guarding.",
              },
              {
                title: "TECAR + Laser for Deep Tissue",
                desc: "Deep thermal therapy reduces disc-adjacent inflammation and improves circulation to the cervical segments. Class IV laser addresses neural inflammation contributing to radiculopathy.",
              },
              {
                title: "Postural Retraining",
                desc: "We retrain the deep cervical flexors, scapular stabilizers, and thoracic extensors — the muscles that have to work for posture to be sustainable, not effortful.",
              },
              {
                title: "Workspace & Lifestyle Integration",
                desc: "We review your actual work environment and make specific modifications — monitor height, laptop position, phone use — so the retraining actually holds.",
              },
            ].map((item) => (
              <div key={item.title} className="p-7 border border-brand-border bg-brand-black" style={{ borderRadius: "2px" }}>
                <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                <p className="type-body-m text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageShell>
  );
}
