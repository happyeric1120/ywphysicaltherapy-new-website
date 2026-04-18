"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";

// Note: metadata export doesn't work in "use client" components
// — placed in a wrapper. For now using a layout file approach.
// SEO is handled via layout-level metadata + JSON-LD below.

const steps = [
  {
    number: "01",
    phase: "REVEAL",
    chinese: "找出根源",
    tagline: "Pain is a symptom. I find the cause.",
    desc: `Most treatment starts where the pain is. I start where the pain comes from. Using AI-assisted movement analysis and full-body clinical assessment, I map every compensation pattern, mobility restriction, and load deficit in your system — not just the area that hurts.`,
    expanded: [
      "Full-body postural and movement screening",
      "Revenite AI movement analysis (10-movement scan)",
      "Clinical interview: history, lifestyle, occupation",
      "Identify the root driver — not just the pain site",
    ],
    tags: ["Revenite AI", "Postural Screening", "Full-Body Assessment", "Clinical Interview"],
    color: "text-brand-gold border-brand-gold/30",
  },
  {
    number: "02",
    phase: "RELEASE",
    chinese: "解除限制",
    tagline: "Before you can rebuild, you have to let go.",
    desc: `Chronic tension, fascial adhesions, and inflammatory tissue are physical barriers to recovery. I remove them layer by layer — from the surface down to the structural level — using the most advanced non-invasive technologies available.`,
    expanded: [
      "Manual therapy and IASTM (instrument-assisted soft tissue work)",
      "Focused + Radial Shockwave for deep tissue and tendons",
      "TECAR therapy for deep thermal healing",
      "Class IV Laser for photobiomodulation",
      "Theragun percussive therapy for surface tension",
    ],
    tags: ["Manual Therapy", "Shockwave", "TECAR", "Class IV Laser", "IASTM", "Theragun"],
    color: "text-cyan-400 border-cyan-400/30",
  },
  {
    number: "03",
    phase: "RESTORE",
    chinese: "重建功能",
    tagline: "Teach your body how to move correctly again.",
    desc: `Removing restriction isn't enough — the nervous system still has to learn new patterns. The Restore phase retrains movement: activating dormant muscles, correcting compensation patterns, and rebuilding the neuromuscular pathways that make pain-free movement automatic.`,
    expanded: [
      "Neuromuscular re-education and motor control training",
      "Compex EMS for muscle activation and re-education",
      "Air compression for lymphatic drainage and recovery",
      "Corrective therapeutic exercise progression",
    ],
    tags: ["Compex EMS", "Movement Retraining", "Air Compression", "Therapeutic Exercise"],
    color: "text-emerald-400 border-emerald-400/30",
  },
  {
    number: "04",
    phase: "REINFORCE",
    chinese: "強化防護",
    tagline: "A body that's strong doesn't break the same way twice.",
    desc: `The final phase builds the capacity to stay well. I introduce targeted strength training, functional movement patterns, and a home maintenance program — so you don't need me forever. Progress should compound, not plateau.`,
    expanded: [
      "Functional strength training (TRX, Aeke K1 smart gym)",
      "Compex EMS in high-intensity Power Phase",
      "Performance coaching for sport or work demands",
      "Home program: self-mobilization, corrective exercise, load management",
    ],
    tags: ["Strength Training", "EMS Power Phase", "TRX", "Home Program"],
    color: "text-amber-400 border-amber-400/30",
  },
];

const faqs = [
  {
    q: "How long is a typical Human System Reset™ program?",
    a: "Most clients complete the full 4R cycle in 6–12 sessions over 6–10 weeks, depending on chronicity, goals, and how quickly tissue responds. Some complex cases take longer. I don't set arbitrary timelines — I progress based on your body's response.",
  },
  {
    q: "Is this different from regular physical therapy?",
    a: "Standard PT often focuses on the symptom site with generic exercise protocols. The Human System Reset™ method starts with a system-wide assessment, applies targeted technology to clear barriers, and then rebuilds movement from the root. Every session is one-on-one with Dr. Wu — no aides, no machines without explanation.",
  },
  {
    q: "What if I've already had PT that didn't work?",
    a: "That's actually the most common scenario I see. Prior PT often helped temporarily but didn't identify the true driver. The assessment phase alone frequently reveals compensations and restrictions that previous providers missed.",
  },
  {
    q: "Do all four phases happen every session?",
    a: "Not necessarily. Early sessions focus more on REVEAL and RELEASE. As tissue responds, I shift emphasis toward RESTORE and REINFORCE. But every session is adapted in real time based on how your body responds that day.",
  },
  {
    q: "Is this covered by insurance?",
    a: "I'm an out-of-network provider, but many patients use out-of-network benefits or HSA/FSA. Some plans (Aetna, UHC, Anthem, Oscar) may be covered through third-party billing — reach out and I'll check. See my Insurance & Pricing page for full details.",
  },
];

export default function HumanSystemResetPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain gold-glow relative pt-32 pb-20 md:pt-44 md:pb-28 bg-brand-black overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="type-label text-brand-gold mb-5"
          >
            Proprietary Method · YW Physical Therapy
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display italic text-brand-gold mb-5"
            style={{ fontSize: "clamp(22px, 3vw, 34px)" }}
          >
            Systematic. Precise. Built to last.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="type-display-l text-brand-white mb-6"
          >
            The Human System Reset™ Method
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="type-body-l text-brand-muted max-w-2xl mx-auto mb-10"
          >
            A four-phase protocol developed by Dr. Yu-Kuang Wu — designed to find the
            root cause of chronic pain and rebuild the system, not just silence the symptom.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BookingButton variant="primary" label="Book Your Assessment" />
            <a
              href="#method"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              Explore the Method ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why we built it */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Why the Method Exists
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-8"
          >
            Standard physical therapy was built to treat injuries. Not systems.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
            <p>
              Most pain treatment works like this: you hurt in a location, the provider treats that location,
              and you improve temporarily — until the same overload pattern recreates the same injury. The location
              changes. The pattern never does.
            </p>
            <p>
              The Human System Reset™ method was developed after years of observing this cycle. Dr. Wu built a
              four-phase protocol that systematically identifies the true driver, removes the barriers to healing,
              retrains movement, and reinforces the changes — so they hold under the demands of real life.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 phases */}
      <section id="method" className="py-28 md:py-36 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="type-label text-brand-gold mb-4"
            >
              The Four Phases
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="type-display-l text-brand-white"
            >
              REVEAL → RELEASE → RESTORE → REINFORCE
            </motion.h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                className="relative p-10 md:p-14 border border-brand-border bg-brand-surface hover:border-brand-gold/20 transition-colors duration-400 group"
                style={{ borderRadius: "2px" }}
              >
                {/* Ghost number */}
                <span className="absolute top-8 right-8 font-display font-black text-8xl text-brand-gold/6 select-none leading-none">
                  {step.number}
                </span>

                <div className="grid md:grid-cols-2 gap-10 items-start relative z-10">
                  {/* Left: phase header */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-4">
                      <h3 className={`font-display font-bold text-3xl tracking-wide ${step.color.split(" ")[0]}`}>
                        {step.phase}
                      </h3>
                      <span className="type-label text-brand-gold">{step.chinese}</span>
                    </div>
                    <div className="h-px w-10 bg-brand-gold/40 mb-5" />
                    <p className="font-display font-normal italic text-brand-gold text-base mb-5 leading-snug">
                      {step.tagline}
                    </p>
                    <p className="type-body-m text-brand-muted mb-6">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`type-tag px-2.5 py-1 border ${step.color}`}
                          style={{ borderRadius: "2px" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: expanded details */}
                  <div>
                    <p className="type-label text-brand-muted/60 mb-4">What happens in this phase:</p>
                    <ul className="space-y-3">
                      {step.expanded.map((item) => (
                        <li key={item} className="flex gap-3 font-body font-light text-brand-muted text-sm leading-relaxed">
                          <span className="shrink-0 mt-1 w-1 h-1 rounded-full bg-brand-gold/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who benefits */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Who This Is For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-10"
          >
            The Method Works Best For
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                who: "The Desk Worker",
                copy: "Chronic neck, shoulder, or low back pain from sustained postures that never fully resolves with stretching or massage.",
                href: "/desk-worker-pain-nyc",
              },
              {
                who: "The Chronic Pain Patient",
                copy: "Pain that has persisted for months or years, often across multiple joints, with multiple prior providers and no lasting relief.",
                href: "/back-pain-nyc",
              },
              {
                who: "The Active Optimizer",
                copy: "Performance limitations, recurring soft tissue injuries, or movement asymmetries that limit training and athletic output.",
                href: "/sports-injury-nyc",
              },
            ].map((a) => (
              <motion.div
                key={a.who}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 border border-brand-border bg-brand-black hover:border-brand-gold/25 transition-colors group"
                style={{ borderRadius: "2px" }}
              >
                <p className="type-label text-brand-gold mb-4">{a.who}</p>
                <p className="type-body-m text-brand-muted mb-6">{a.copy}</p>
                <Link
                  href={a.href}
                  className="type-body-m text-brand-gold group-hover:text-brand-gold-light transition-colors"
                >
                  This is for me →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-10"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-brand-border bg-brand-surface open:border-brand-gold/25 transition-colors duration-300"
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

      {/* Final CTA */}
      <section className="py-24 bg-brand-surface border-t border-brand-border text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-5">Start Your Reset</p>
          <h2 className="type-display-m text-brand-white mb-6">
            Ready to Find the Root Cause?
          </h2>
          <p className="type-body-l text-brand-muted mb-10 max-w-xl mx-auto">
            Every journey begins with the REVEAL phase — a full-body assessment that maps
            your whole system. One-on-one with Dr. Wu. No aides, no handoffs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButton variant="primary" label="Book Your Assessment" />
            <Link
              href="/insurance-pricing"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              Insurance & Pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
