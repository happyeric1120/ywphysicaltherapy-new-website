"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const credentials = ["PT, DPT", "PhD", "Mount Sinai Research", "Bronx VA", "Since 2016"];

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white border-y border-brand-border overflow-hidden">
      {/* Left-side purple glow (behind photo) */}
      <div
        className="absolute top-0 left-0 w-[600px] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 0% 50%, rgba(155,127,212,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-2xl border border-brand-border">
              <Image
                src="/assets/me.jpg"
                alt="Dr. Yu-Kuang Wu, PT, DPT, PhD — Physical Therapist in Midtown Manhattan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="type-label text-brand-gold mb-4">Your Clinician</p>
            <h2 className="type-display-m text-brand-white mb-6">
              Meet Your Physical Therapist
            </h2>

            <div className="space-y-4 font-body font-light text-brand-muted text-base leading-relaxed mb-8">
              <p>
                Dr. Yu-Kuang Wu, PT, DPT, PhD is a physical therapist and researcher based in
                Midtown Manhattan. With a doctoral degree in physical therapy and a PhD focused on
                neuroplasticity and mobility recovery, he brings academic precision to every
                clinical decision.
              </p>
              <p>
                In addition to his practice at YW Physical Therapy, Dr. Wu conducts research at
                Mount Sinai Hospital and the Bronx VA — applying the latest findings in
                non-invasive technology and movement science directly to patient care.
              </p>
              <p>
                He developed the Human System Reset™ method after years of finding that standard
                PT protocols addressed symptoms without addressing systems. Every client receives
                the same clinician from assessment to discharge — no handoffs, no aides.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-8">
              {credentials.map((c) => (
                <span key={c} className="font-mono text-[10px] text-brand-muted tracking-wider uppercase px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface">
                  {c}
                </span>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 font-body text-sm text-brand-gold hover:text-brand-gold-light transition-colors tracking-wide">
              Full Bio →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
