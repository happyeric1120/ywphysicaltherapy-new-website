"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";

const selfPayTable = [
  {
    service: "PT Evaluation",
    price: "$200",
    desc: "Full-body movement screening + AI scan + personalized treatment roadmap. First step in the Human System Reset™ protocol.",
  },
  {
    service: "Follow-Up PT Session (60 min)",
    price: "$150",
    desc: "Manual therapy, mobility training, neuromuscular retraining, and technology application. Always one-on-one with Dr. Wu.",
  },
  {
    service: "Focused Shockwave",
    price: "$150",
    desc: "Deep tissue acoustic wave therapy for chronic tendon pain, calcifications, and scar tissue.",
  },
  {
    service: "Radial Shockwave + Class IV Laser",
    price: "$60",
    desc: "Combination therapy for muscle tension, surface inflammation, and general pain management. Popular standalone session.",
  },
  {
    service: "AI Movement Assessment Only",
    price: "$100",
    desc: "10-movement AI scan + auto-generated corrective exercise plan. Great for injury prevention and movement baselines.",
  },
];

const coverageOptions = [
  {
    title: "Out-of-Network Benefits",
    icon: "◎",
    body: "If your plan includes out-of-network benefits (most PPO plans do), you can still use your insurance. You pay at the time of your visit, and I'll either provide a Superbill for you to submit yourself, or I can help submit the claim on your behalf — whichever is easier for you.",
  },
  {
    title: "HSA / FSA",
    icon: "◎",
    body: "Physical therapy is an approved HSA and FSA expense. You can use your HSA or FSA card directly at checkout — no extra paperwork needed.",
  },
  {
    title: "Aetna, Anthem, UnitedHealthcare, or Oscar",
    icon: "◎",
    body: "Some plans under these carriers may be covered through my third-party billing partner. Just reach out and share your plan details — I'll look into it and let you know within a few business days.",
  },
];

const faqs = [
  {
    q: "Do I need a referral?",
    a: "Most patients in New York State can see a physical therapist directly without a referral — this is called Direct Access. Some insurance plans require a referral for coverage; Dr. Wu will let you know if yours does.",
  },
  {
    q: "How do I know if my plan has out-of-network benefits?",
    a: "The easiest way is to call the member services number on the back of your insurance card and ask: \"Do I have out-of-network physical therapy benefits?\" If yes, ask about your out-of-network deductible and reimbursement percentage. I&apos;ll provide a Superbill after each visit so you can submit for reimbursement.",
  },
  {
    q: "Can I use HSA/FSA?",
    a: "Yes — physical therapy is an approved HSA/FSA expense. Both self-pay sessions and insurance copays are eligible.",
  },
  {
    q: "Are the advanced technologies (shockwave, TECAR, laser) covered?",
    a: "Standard PT sessions are covered by insurance. Advanced technology upgrades (focused shockwave, TECAR) are self-pay additions. Many patients use the standard PT session for the base work and add the technology upgrade for targeted treatment.",
  },
  {
    q: "What if I have Aetna, Anthem, UnitedHealthcare, or Oscar?",
    a: "Some plans under these carriers may be covered through my third-party billing partner. Reach out and share your plan details — I&apos;ll check and get back to you within a few business days.",
  },
];

export default function InsurancePricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-brand-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="type-label text-brand-gold mb-5"
          >
            Transparent Pricing · YW Physical Therapy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="type-display-l text-brand-white mb-6"
          >
            Insurance & Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="type-body-l text-brand-muted max-w-2xl mx-auto"
          >
            Whether you&apos;re using insurance or paying out of pocket, you receive the same
            one-on-one care from Dr. Wu — no compromise on quality based on payment method.
          </motion.p>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Insurance Coverage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-6"
          >
            How Insurance Works Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="type-body-l text-brand-muted mb-10 max-w-2xl"
          >
            I&apos;m an out-of-network provider — which sounds complicated, but for most people
            it&apos;s actually pretty straightforward. Here&apos;s how you can still get coverage:
          </motion.p>

          <div className="space-y-4 mb-10">
            {coverageOptions.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 border border-brand-border bg-brand-black"
                style={{ borderRadius: "2px" }}
              >
                <h3 className="font-body font-medium text-brand-white text-base mb-2">{opt.title}</h3>
                <p className="font-body text-brand-muted text-sm leading-relaxed">{opt.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-8 border border-brand-gold/20 bg-brand-black max-w-2xl" style={{ borderRadius: "2px" }}>
            <p className="type-label text-brand-gold mb-3">Not Sure What You Have?</p>
            <p className="type-body-m text-brand-muted mb-5">
              No worries — just reach out and share your insurance card info. I&apos;ll take a
              look and let you know what your options are.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScqejyOiePPbtYuqYxp8nyU72RRFlQv6encnne7-noMVKlexA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-sm font-medium px-6 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-200"
              style={{ borderRadius: "2px" }}
            >
              Contact Us About Coverage →
            </a>
          </div>
        </div>
      </section>

      {/* Self-Pay Pricing Table */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Self-Pay Options
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="type-body-l text-brand-muted mb-10 max-w-2xl"
          >
            No hidden fees. No package commitments. Pay per session.
          </motion.p>

          <div className="space-y-3">
            {selfPayTable.map((row, i) => (
              <motion.div
                key={row.service}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid md:grid-cols-[1fr_auto_2fr] gap-6 items-start p-7 border border-brand-border bg-brand-surface hover:border-brand-gold/20 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <div>
                  <h3 className="font-body font-medium text-brand-white text-sm mb-1">{row.service}</h3>
                </div>
                <div className="md:text-right">
                  <span className="font-display font-bold text-brand-gold text-2xl">{row.price}</span>
                </div>
                <p className="type-body-m text-brand-muted">{row.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Insurance upgrade note */}
          <div className="mt-8 p-7 border border-brand-gold/20 bg-brand-surface" style={{ borderRadius: "2px" }}>
            <p className="type-label text-brand-gold mb-3">Insurance Patients: Upgrade Options</p>
            <p className="type-body-m text-brand-muted mb-3">
              Standard PT visits are covered by insurance. For first-time insurance patients who want
              to experience advanced technologies, I offer reduced first-visit rates:
            </p>
            <ul className="space-y-2 font-body font-light text-brand-muted text-sm">
              <li className="flex gap-2"><span className="text-brand-gold shrink-0">—</span>
                <span>Radial Shockwave + Class IV Laser: <strong className="text-brand-white">$30</strong> first visit (regular $60)</span>
              </li>
              <li className="flex gap-2"><span className="text-brand-gold shrink-0">—</span>
                <span>Focused Shockwave: <strong className="text-brand-white">$60</strong> first visit (regular $150)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-surface border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Questions</p>
          <h2 className="type-display-m text-brand-white mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-brand-border bg-brand-black open:border-brand-gold/25 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <summary className="cursor-pointer px-6 py-4 font-body text-brand-white font-light text-sm flex items-center justify-between gap-4 list-none select-none">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-brand-gold text-lg leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="px-6 pb-5 font-body font-light text-brand-muted text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-5">Get Started</p>
          <h2 className="type-display-m text-brand-white mb-6">
            Have Questions? I&apos;ll Help You Figure It Out.
          </h2>
          <p className="type-body-l text-brand-muted mb-4">
            <a href="tel:3475715717" className="text-brand-white hover:text-brand-gold transition-colors">347-571-5717</a>
          </p>
          <p className="type-body-l text-brand-muted mb-10">
            <a href="mailto:ywphysicaltherapy@gmail.com" className="text-brand-white hover:text-brand-gold transition-colors">ywphysicaltherapy@gmail.com</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButton variant="primary" label="Book Your Session" />
            <Link
              href="/about"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              About Dr. Wu →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
