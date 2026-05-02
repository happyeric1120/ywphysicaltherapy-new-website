"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1xZH1VXDVjTyJGYTH-ygHvf3JFgbZ7DLUxk3epoqNZwxFwLcQqb4Fti-C2z8kkThjHPylSlBno";

const phases = [
  {
    num: "01",
    phase: "REVEAL",
    tagline: "Find the dysfunction",
    desc: "AI movement analysis + full-body clinical assessment to locate the actual source of your problem.",
  },
  {
    num: "02",
    phase: "RELEASE",
    tagline: "Remove restrictions",
    desc: "Shockwave, TECAR, laser, and manual therapy to break down what's holding your body back.",
  },
  {
    num: "03",
    phase: "RESTORE",
    tagline: "Rebuild movement",
    desc: "Neuromuscular retraining and corrective exercise to re-establish healthy movement patterns.",
  },
  {
    num: "04",
    phase: "REINFORCE",
    tagline: "Maintain results",
    desc: "Targeted load and performance work so the problem doesn't return.",
  },
];

const reviews = [
  {
    stars: "★★★★★",
    body: "After 2 years of failed PT, massage, and chiro, Dr. Wu found the actual cause in my first session. My back pain is completely gone.",
    name: "Michael R.",
    tag: "Chronic Back Pain · 3 months",
  },
  {
    stars: "★★★★★",
    body: "I thought my neck pain was from sitting at a desk all day. Dr. Wu found it was a hip mobility issue. Fixed both in 4 sessions.",
    name: "Sarah K.",
    tag: "Desk Worker · Neck & Shoulder Pain",
  },
  {
    stars: "★★★★★",
    body: "One-on-one every single session. No aides, no handoffs. Dr. Wu is the only person in the room — and you feel that difference immediately.",
    name: "James T.",
    tag: "Post-Surgical Recovery",
  },
];

function BookCTA({
  label = "Book Your Assessment",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-body font-medium tracking-wide bg-[#FF7759] text-[#0a0a0a] hover:opacity-90 transition-opacity ${className}`}
      style={{ borderRadius: "2px" }}
    >
      {label} →
    </a>
  );
}

export default function LandingPage() {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="font-body min-h-screen"
      style={{ backgroundColor: "#0a0a0a", color: "#f5f3ee" }}
    >
      {/* ── Minimal Sticky Header ─────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          backgroundColor: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div>
          <span
            className="font-display font-bold text-sm tracking-tight block"
            style={{ color: "#f5f3ee" }}
          >
            YW Physical Therapy
          </span>
          <span
            className="font-mono text-[9px] tracking-widest uppercase"
            style={{ color: "rgba(255,119,89,0.7)" }}
          >
            Human System Reset™
          </span>
        </div>
        <BookCTA label="Book Now" className="text-xs px-5 py-2.5" />
      </header>

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden">
        {/* Top coral glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(255,119,89,0.14) 0%, transparent 65%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="type-label mb-6"
            style={{ color: "#FF7759" }}
          >
            Human System Reset™ · YW Physical Therapy · Midtown Manhattan
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(38px, 6vw, 82px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#f5f3ee",
            }}
          >
            Fix the Root Cause —<br className="hidden sm:block" />
            Not Just the Pain
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "rgba(245,243,238,0.62)" }}
          >
            AI-assisted physical therapy that identifies and corrects the real source
            of your pain — not just where it hurts. One-on-one with Dr. Wu, every session.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BookCTA label="Book Your Assessment" className="text-sm px-9 py-4" />
            <a
              href="#method"
              className="inline-block font-body font-medium text-sm tracking-wide px-9 py-4 transition-all duration-200"
              style={{
                border: "1px solid rgba(245,243,238,0.18)",
                color: "rgba(245,243,238,0.65)",
                borderRadius: "2px",
              }}
            >
              See How It Works ↓
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-8 type-label"
            style={{ color: "rgba(245,243,238,0.25)" }}
          >
            Mon / Wed 10am–4pm · Thu 10am–7pm · By appointment only
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — PAIN POINT
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#111111" }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label mb-4"
            style={{ color: "#FF7759" }}
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display font-bold mb-12"
            style={{
              fontSize: "clamp(26px, 3.5vw, 46px)",
              lineHeight: 1.1,
              letterSpacing: "-0.022em",
              color: "#f5f3ee",
            }}
          >
            Why Your Pain Keeps Coming Back
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {[
              {
                num: "01",
                title: "You treat the symptom, not the cause",
                body: "Every treatment targets where it hurts. But pain is a signal sent from elsewhere — not the source itself.",
              },
              {
                num: "02",
                title: "Your body compensates without you knowing",
                body: "When one area fails, the system quietly adjusts. Those hidden compensations create new problems — in new places.",
              },
              {
                num: "03",
                title: "Temporary relief creates long-term imbalance",
                body: "Massage, rest, and medication feel good. But they don't reset the pattern. The system stays broken.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "2px",
                  backgroundColor: "#0a0a0a",
                }}
              >
                <span
                  className="type-label mb-4 block"
                  style={{ color: "rgba(255,119,89,0.45)" }}
                >
                  {item.num}
                </span>
                <h3
                  className="font-body font-medium text-base mb-3"
                  style={{ color: "#f5f3ee" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(245,243,238,0.5)" }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display font-bold"
            style={{
              fontSize: "clamp(18px, 2.2vw, 28px)",
              color: "rgba(245,243,238,0.35)",
              letterSpacing: "-0.01em",
              fontStyle: "italic",
            }}
          >
            &ldquo;Nothing was fixed — only managed.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — POSITIONING SHIFT
      ══════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#0a0a0a" }}
        className="py-24 px-6 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 0% 50%, rgba(155,127,212,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label mb-6"
            style={{ color: "#FF7759" }}
          >
            A Different Approach
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-14">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold"
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#f5f3ee",
              }}
            >
              This is not traditional physical therapy.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p
                className="font-body text-base leading-relaxed mb-7"
                style={{ color: "rgba(245,243,238,0.58)" }}
              >
                Most clinics treat where it hurts. That&apos;s why you keep coming back.
                I analyze how your <em>entire body functions</em> — because the source
                of your pain is almost never where you feel it.
              </p>
              <div className="space-y-3">
                {[
                  "Full-body movement analysis — not just the painful area",
                  "Root cause identification before any treatment begins",
                  "System-level correction, not isolated symptom relief",
                ].map((point, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span
                      style={{ color: "#FF7759", flexShrink: 0, marginTop: "2px" }}
                    >
                      —
                    </span>
                    <span
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "rgba(245,243,238,0.68)" }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 text-center"
            style={{
              border: "1px solid rgba(255,119,89,0.2)",
              borderRadius: "2px",
              backgroundColor: "rgba(255,119,89,0.04)",
            }}
          >
            <p
              className="font-display font-bold mb-3"
              style={{
                fontSize: "clamp(18px, 2.2vw, 26px)",
                color: "#f5f3ee",
                letterSpacing: "-0.02em",
              }}
            >
              &ldquo;If nothing else has worked — this is different.&rdquo;
            </p>
            <p
              className="font-body text-sm"
              style={{ color: "rgba(245,243,238,0.4)" }}
            >
              One-on-one with Dr. Wu, every session. No aides. No shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — THE METHOD
      ══════════════════════════════════════════════ */}
      <section
        id="method"
        style={{ backgroundColor: "#111111" }}
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label mb-4"
            style={{ color: "#FF7759" }}
          >
            The Method
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display font-bold mb-3"
            style={{
              fontSize: "clamp(26px, 3.5vw, 46px)",
              lineHeight: 1.1,
              letterSpacing: "-0.022em",
              color: "#f5f3ee",
            }}
          >
            Human System Reset™
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="font-body text-base mb-12 max-w-xl"
            style={{ color: "rgba(245,243,238,0.5)" }}
          >
            A 4-phase clinical system built to find, fix, and future-proof your
            body — so the problem doesn&apos;t come back.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 relative overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "2px",
                  backgroundColor: "#0a0a0a",
                }}
              >
                <span
                  className="absolute top-4 right-5 font-display font-black leading-none select-none"
                  style={{ fontSize: "54px", color: "rgba(255,119,89,0.07)" }}
                >
                  {p.num}
                </span>
                <p className="type-label mb-3" style={{ color: "#FF7759" }}>
                  {p.num}
                </p>
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: "#f5f3ee", letterSpacing: "-0.01em" }}
                >
                  {p.phase}
                </h3>
                <p
                  className="font-body font-medium text-sm mb-3"
                  style={{ color: "rgba(245,243,238,0.65)" }}
                >
                  {p.tagline}
                </p>
                <p
                  className="font-body text-xs leading-relaxed"
                  style={{ color: "rgba(245,243,238,0.4)" }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <BookCTA label="Start Your Reset" className="text-sm px-9 py-4" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — FIRST VISIT EXPERIENCE
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0a0a0a" }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label mb-4"
            style={{ color: "#FF7759" }}
          >
            Your First Visit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display font-bold mb-12"
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#f5f3ee",
            }}
          >
            What happens in your assessment session
          </motion.h2>

          <div className="space-y-4 mb-12">
            {[
              {
                step: "01",
                title: "AI-Assisted Movement Analysis",
                body: "10-movement Revenite AI scan identifies your exact compensation patterns — before I touch anything. You see your dysfunction map on screen.",
              },
              {
                step: "02",
                title: "Full-Body Clinical Assessment",
                body: "I examine how your whole system moves — mobility, strength, load distribution, neural tension. Not just the area that hurts.",
              },
              {
                step: "03",
                title: "Immediate Treatment",
                body: "Your first session includes active treatment, not just evaluation. Most patients feel a measurable difference before they leave.",
              },
              {
                step: "04",
                title: "A Clear Recovery Roadmap",
                body: "You leave with a specific plan: what's driving your problem, exactly what we'll do about it, and what to expect over the next few sessions.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start p-6"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "2px",
                  backgroundColor: "#111111",
                }}
              >
                <span
                  className="type-label shrink-0 mt-1"
                  style={{ color: "#FF7759" }}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className="font-body font-medium text-base mb-1.5"
                    style={{ color: "#f5f3ee" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "rgba(245,243,238,0.52)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-body text-base mb-8"
            style={{ color: "rgba(245,243,238,0.42)", fontStyle: "italic" }}
          >
            Most clients feel a difference after one visit.
          </motion.p>
          <div className="text-center">
            <BookCTA
              label="Book Your Assessment Session"
              className="text-sm px-9 py-4"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — TRUST / SOCIAL PROOF
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#111111" }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label mb-4"
            style={{ color: "#FF7759" }}
          >
            The Provider
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-4">
            {/* Dr. Wu credentials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-display font-bold mb-2"
                style={{
                  fontSize: "clamp(22px, 2.8vw, 36px)",
                  color: "#f5f3ee",
                  letterSpacing: "-0.02em",
                }}
              >
                Dr. Yu-Kuang Wu
              </h2>
              <p
                className="type-label mb-6"
                style={{ color: "rgba(255,119,89,0.65)" }}
              >
                PT, PhD · Midtown Manhattan
              </p>
              <p
                className="font-body text-sm leading-relaxed mb-7"
                style={{ color: "rgba(245,243,238,0.55)" }}
              >
                Physical therapist and researcher with a doctoral background in
                movement science. I see every patient personally — no aides, no
                handoffs, no shortcuts. You get the same level of attention whether
                it&apos;s your first visit or your tenth.
              </p>
              <div className="space-y-2.5">
                {[
                  "One-on-one, every session — no exceptions",
                  "AI-assisted movement analysis (Revenite)",
                  "Advanced technologies: shockwave, TECAR, Class IV laser",
                  "PhD-level movement science and research background",
                  "224 W 35th St #301-5 · 2 blocks from Penn Station",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span
                      style={{
                        color: "#FF7759",
                        flexShrink: 0,
                        fontSize: "8px",
                        marginTop: "5px",
                      }}
                    >
                      ◆
                    </span>
                    <span
                      className="font-body text-sm"
                      style={{ color: "rgba(245,243,238,0.62)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <div className="space-y-4">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "2px",
                    backgroundColor: "#0a0a0a",
                  }}
                >
                  <p
                    className="text-xs mb-3"
                    style={{ color: "#FF7759", letterSpacing: "0.05em" }}
                  >
                    {r.stars}
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed mb-4"
                    style={{ color: "rgba(245,243,238,0.68)" }}
                  >
                    &ldquo;{r.body}&rdquo;
                  </p>
                  <p
                    className="font-body font-medium text-xs"
                    style={{ color: "#f5f3ee" }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="font-mono text-[9px] tracking-widest uppercase mt-0.5"
                    style={{ color: "rgba(245,243,238,0.3)" }}
                  >
                    {r.tag}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7 — QUALIFICATION
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0a0a0a" }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label mb-4"
            style={{ color: "#FF7759" }}
          >
            Is This Right for You?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display font-bold mb-12"
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.022em",
              color: "#f5f3ee",
            }}
          >
            Who this is for
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
            {[
              "Chronic tightness or stiffness that won't go away on its own",
              "Pain that keeps coming back no matter what you try",
              "Desk workers, athletes, and anyone under persistent physical stress",
              "People who want real answers — not just temporary symptom relief",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start p-6"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "2px",
                  backgroundColor: "#111111",
                }}
              >
                <span style={{ color: "#FF7759", flexShrink: 0, fontWeight: 500 }}>
                  →
                </span>
                <span
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(245,243,238,0.68)" }}
                >
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm mb-8"
            style={{ color: "rgba(245,243,238,0.35)" }}
          >
            If you&apos;ve tried other approaches without lasting results, this is the next step.
          </motion.p>
          <BookCTA label="Book Your Assessment" className="text-sm px-9 py-4" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 8 — FINAL CTA
      ══════════════════════════════════════════════ */}
      <section
        className="py-32 px-6 text-center relative overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Bottom coral glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 110%, rgba(255,119,89,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label mb-6"
            style={{ color: "#FF7759" }}
          >
            Get Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display font-bold mb-8"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#f5f3ee",
            }}
          >
            Stop chasing symptoms.<br />
            Start fixing the system.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
          >
            <BookCTA
              label="Book Your Assessment"
              className="text-base px-10 py-5"
            />
            <p
              className="mt-5 type-label"
              style={{ color: "rgba(245,243,238,0.28)" }}
            >
              Limited availability · Mon / Wed / Thu · Midtown Manhattan
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Minimal Footer ─────────────────────────── */}
      <footer
        className="py-8 px-6 text-center"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "#0a0a0a",
        }}
      >
        <p
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: "rgba(245,243,238,0.22)" }}
        >
          YW Physical Therapy · 224 W 35th St #301-5, New York, NY 10001 ·{" "}
          <a
            href="tel:3475715717"
            style={{ color: "rgba(245,243,238,0.38)" }}
          >
            347-571-5717
          </a>{" "}
          ·{" "}
          <Link
            href="/"
            style={{ color: "rgba(245,243,238,0.38)" }}
          >
            Full Website
          </Link>
        </p>
      </footer>

      {/* ── Mobile Sticky CTA ──────────────────────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3 transition-all duration-300 ${
          stickyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
        style={{
          backgroundColor: "rgba(10,10,10,0.96)",
          backdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <BookCTA
          label="Book Your Assessment"
          className="w-full text-center block text-sm py-3.5"
        />
      </div>
    </div>
  );
}
