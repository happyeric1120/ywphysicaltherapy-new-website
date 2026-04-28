import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TECAR Therapy NYC | Deep Tissue Healing | YW Physical Therapy Midtown Manhattan",
  description:
    "TECAR therapy in NYC for deep tissue healing, chronic pain, and post-injury recovery. Used in the RELEASE phase of the Human System Reset™ method. Near Penn Station.",
  alternates: { canonical: "https://ywphysicaltherapy.com/tecar-therapy-nyc" },
};

const faqs = [
  {
    q: "What does TECAR feel like?",
    a: "Most patients feel a gentle, progressive warmth that builds in the tissue — not on the skin. It&apos;s deeply relaxing. Some describe it as &ldquo;heat from the inside.&rdquo; There is no discomfort.",
  },
  {
    q: "How quickly does TECAR work?",
    a: "Many patients notice reduced stiffness and improved range of motion after the first session. For chronic conditions, 4–8 sessions spaced 2–3 days apart typically produces meaningful change.",
  },
  {
    q: "Can TECAR be used after surgery?",
    a: "Yes — TECAR is particularly valuable for post-surgical recovery. It accelerates tissue healing, reduces fibrosis formation, and improves circulation in the healing zone. I typically begin after your surgeon clears soft tissue work.",
  },
  {
    q: "Is TECAR different from ultrasound?",
    a: "Yes. Traditional therapeutic ultrasound uses sound waves and heats a small, superficial area. TECAR uses radiofrequency energy that penetrates deeper tissue layers (up to 6cm) and generates sustained metabolic heating throughout — not just surface warmth.",
  },
  {
    q: "Is TECAR covered by insurance?",
    a: "TECAR is offered as a self-pay advanced therapy. I&apos;m transparent about pricing upfront — see my Insurance & Pricing page for full details.",
  },
];

export default function TECARTherapyNYCPage() {
  return (
    <ServicePageShell
      eyebrow="Release Phase · Human System Reset™"
      h1="TECAR Therapy in Manhattan, NYC"
      heroTagline="Deep thermal healing that works from the inside out."
      lead="Capacitive and resistive energy transfer (TECAR) uses radiofrequency energy to generate deep, sustained warmth in injured tissue — accelerating healing, reducing fibrosis, and improving circulation at depths ultrasound can&apos;t reach."
      phase="RELEASE"
      faqs={faqs}
      ctaHeading="Book a TECAR Therapy Session"
    >
      {/* What is it */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">The Technology</p>
          <h2 className="type-display-m text-brand-white mb-6">What Is TECAR Therapy?</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed mb-12">
            <p>
              TECAR (Capacitive and Resistive Energy Transfer) is a medical-grade radiofrequency
              therapy that generates deep, metabolic heat in tissue. Unlike superficial heat packs
              or traditional ultrasound, TECAR energy penetrates to the deeper tissue layers —
              muscle, tendon, ligament, and joint capsule — where chronic pathology lives.
            </p>
            <p>
              The therapy works by using the body&apos;s own biological resistance to generate ionic
              movement in the tissue. This increases local circulation, speeds up metabolic activity,
              and promotes the removal of inflammatory byproducts — creating the conditions for
              genuine tissue repair rather than just temporary symptomatic relief.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-8 border border-brand-border bg-brand-black" style={{ borderRadius: "2px" }}>
              <p className="type-label text-cyan-400/80 mb-3">Capacitive Mode (CAP)</p>
              <h3 className="font-display font-bold text-brand-white text-lg mb-3">Superficial Tissue</h3>
              <p className="type-body-m text-brand-muted">
                Targets muscles and connective tissue just beneath the skin. Used for areas with
                high fluid content — muscles, edema, and post-acute inflammation reduction.
              </p>
            </div>
            <div className="p-8 border border-cyan-400/30 bg-brand-black" style={{ borderRadius: "2px" }}>
              <p className="type-label text-cyan-400 mb-3">Resistive Mode (RES)</p>
              <h3 className="font-display font-bold text-brand-white text-lg mb-3">Deep Tissue & Bone-Adjacent</h3>
              <p className="type-body-m text-brand-muted">
                Targets denser structures — tendons, ligaments, joint capsules, and periosteum.
                Used for chronic tendinopathy, joint stiffness, and post-surgical fibrosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Indications</p>
          <h2 className="type-display-m text-brand-white mb-6">Conditions Treated with TECAR</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Chronic back and neck pain",
              "Muscle strains and tears",
              "Ligament sprains",
              "Post-surgical fibrosis",
              "Tendinopathy (shoulder, knee, Achilles)",
              "Hip and joint osteoarthritis",
              "Sciatic nerve pain",
              "Cervical radiculopathy",
              "Frozen shoulder (adhesive capsulitis)",
              "IT band syndrome",
              "Disc herniation pain",
              "Sports muscle injuries",
            ].map((condition) => (
              <div
                key={condition}
                className="px-5 py-3 border border-brand-border bg-brand-surface font-body font-light text-brand-muted text-sm"
                style={{ borderRadius: "2px" }}
              >
                {condition}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Why TECAR Works</p>
          <h2 className="type-display-m text-brand-white mb-8">The Mechanism Behind Deep Healing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Metabolic Acceleration",
                desc: "TECAR increases local cell metabolism, speeding the delivery of oxygen and nutrients to injured tissue — the biochemical prerequisite for repair.",
              },
              {
                title: "Fibrosis Reduction",
                desc: "Post-injury or post-surgical scar tissue impedes function. TECAR&apos;s deep heat softens and reorganizes collagen fibers, restoring tissue extensibility.",
              },
              {
                title: "Circulation Enhancement",
                desc: "Increased blood flow in the treatment zone clears inflammatory cytokines and accelerates the acute-to-chronic phase transition in healing.",
              },
              {
                title: "Muscle Relaxation",
                desc: "The sustained warmth in the muscle tissue reduces resting tone, relieving spasm and creating the tissue conditions needed for effective manual therapy.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 border border-brand-border bg-brand-black"
                style={{ borderRadius: "2px" }}
              >
                <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                <p className="type-body-m text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-body-m text-brand-muted max-w-3xl">
            TECAR therapy is most effective when combined with{" "}
            <Link href="/shockwave-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              shockwave therapy
            </Link>{" "}
            and{" "}
            <Link href="/laser-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              Class IV laser
            </Link>{" "}
            as part of the{" "}
            <Link href="/human-system-reset" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              Human System Reset™ method
            </Link>
            . Commonly used for{" "}
            <Link href="/back-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              back pain
            </Link>{" "}
            and{" "}
            <Link href="/neck-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              neck pain
            </Link>{" "}
            in NYC office workers.
          </p>
        </div>
      </section>
    </ServicePageShell>
  );
}
