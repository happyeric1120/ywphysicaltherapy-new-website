"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";

const phaseLabel: Record<string, string> = {
  RELEASE: "Release Phase",
  RESTORE: "Restore Phase",
  REINFORCE: "Reinforce Phase",
  REVEAL: "Reveal Phase",
};

interface Props {
  eyebrow: string;
  h1: string;
  heroTagline?: string;
  lead: string;
  phase?: "RELEASE" | "RESTORE" | "REINFORCE" | "REVEAL";
  children: React.ReactNode;
  faqs?: { q: string; a: string }[];
  ctaHeading?: string;
}

export default function ServicePageShell({
  eyebrow,
  h1,
  heroTagline,
  lead,
  phase,
  children,
  faqs,
  ctaHeading = "Book Your Reset Session",
}: Props) {
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
            {phase ? `${phaseLabel[phase]} · Human System Reset™` : eyebrow}
          </motion.p>

          {heroTagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display font-900 italic text-brand-gold mb-4"
              style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
            >
              {heroTagline}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="type-display-l text-brand-white mb-6"
          >
            {h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="type-body-l text-brand-muted max-w-2xl mx-auto mb-10"
          >
            {lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BookingButton variant="primary" label="Book a Consultation" />
            <Link
              href="/human-system-reset"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              See the Full Method
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Page-specific content */}
      {children}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="py-24 bg-brand-surface border-t border-brand-border">
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
                  className="group border border-brand-border bg-brand-black open:border-brand-gold/25 transition-colors duration-300"
                  style={{ borderRadius: "2px" }}
                >
                  <summary className="cursor-pointer px-6 py-4 font-body text-brand-white font-light text-sm flex items-center justify-between gap-4 list-none select-none">
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-brand-gold text-lg leading-none group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 font-body font-light text-brand-muted text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-5"
          >
            Ready to Start?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-6"
          >
            {ctaHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="type-body-l text-brand-muted mb-10 max-w-xl mx-auto"
          >
            One-on-one care at 224 W 35th St, Midtown Manhattan — two blocks from Penn Station.
            No aides, no handoffs — just Dr. Wu from assessment to discharge.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BookingButton variant="primary" label="Book Your Session" />
            <Link
              href="/insurance-pricing"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              Insurance & Pricing →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
