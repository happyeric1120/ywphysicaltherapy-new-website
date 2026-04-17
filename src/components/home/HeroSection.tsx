"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="grain relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Top purple glow */}
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(155,127,212,0.13) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom coral glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(255,119,89,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">

        {/* SEO H1 */}
        <h1 className="sr-only">
          Physical Therapy in Midtown Manhattan Near Penn Station
        </h1>

        {/* Hero headline */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="type-display-xl text-brand-white mb-6"
          aria-hidden="true"
        >
          Your body isn&apos;t broken.
          <br />
          It just needs a reset.
        </motion.p>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="type-body-l text-brand-muted max-w-xl mx-auto mb-10"
        >
          One-on-one physical therapy in Midtown Manhattan — combining clinical
          expertise with advanced technology to find the root cause, not just
          treat the symptoms.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <BookingButton variant="primary" label="Book a session" />
          <Link
            href="/human-system-reset"
            className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 rounded-full border border-[rgba(26,26,26,0.2)] text-brand-white hover:border-[rgba(26,26,26,0.5)] hover:bg-[rgba(26,26,26,0.04)] transition-all duration-300"
          >
            Learn the method
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="type-tag text-[rgba(26,26,26,0.25)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[rgba(26,26,26,0.3)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
