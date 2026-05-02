"use client";

import { motion } from "framer-motion";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1xZH1VXDVjTyJGYTH-ygHvf3JFgbZ7DLUxk3epoqNZwxFwLcQqb4Fti-C2z8kkThjHPylSlBno";

const services = [
  {
    name: "Movement Analysis",
    price: "$100",
    duration: "45 min",
    desc: "A comprehensive full-body movement assessment that identifies how your body moves, where tension accumulates, and which patterns may be limiting your efficiency. You leave with a clear picture of your movement profile.",
    includes: [
      "Full-body movement screening",
      "AI-assisted posture and movement scan",
      "Personalized movement summary",
      "Guided recommendations for improvement",
    ],
    highlight: false,
  },
  {
    name: "Body Reset",
    price: "$150",
    duration: "60 min",
    desc: "A targeted tension release session tailored to your movement profile. Using advanced wellness technologies, this experience helps release built-up tension, restore a sense of ease, and leave you feeling lighter and more balanced.",
    includes: [
      "Targeted tension release techniques",
      "Advanced technology application (shockwave, laser, or TECAR)",
      "Guided relaxation and movement reset",
      "Post-session movement guidance",
    ],
    highlight: false,
  },
  {
    name: "First-Time Experience",
    price: "$200",
    duration: "75–90 min",
    desc: "The recommended starting point. Combines your Movement Analysis with a personalized Body Reset session — so you understand your body first, then experience a reset based on exactly what you discovered.",
    includes: [
      "Full Movement Analysis (45 min)",
      "Personalized Body Reset (30–45 min)",
      "Complete movement and tension profile",
      "Custom home movement recommendations",
    ],
    highlight: true,
    badge: "Recommended",
  },
];

const steps = [
  {
    num: "01",
    title: "Movement Analysis",
    desc: "We begin by mapping how your body moves. A full-body scan identifies areas of tension, imbalance, and restricted mobility.",
  },
  {
    num: "02",
    title: "Identify Tension Patterns",
    desc: "Using AI-assisted analysis and clinical observation, I identify where your body holds tension and what movement patterns are affecting how you feel.",
  },
  {
    num: "03",
    title: "Personalized Body Reset",
    desc: "A targeted reset session based on your movement profile — using advanced wellness technologies to release tension and restore ease of movement.",
  },
  {
    num: "04",
    title: "Feel More Balanced",
    desc: "You leave with a clearer sense of how your body works, practical movement guidance, and a noticeably lighter, more relaxed feeling.",
  },
];

const audience = [
  {
    icon: "→",
    text: "General tightness or stiffness from daily life",
  },
  {
    icon: "→",
    text: "Desk-related tension in the neck, shoulders, or back",
  },
  {
    icon: "→",
    text: "Those who want to move more efficiently and with less effort",
  },
  {
    icon: "→",
    text: "Anyone curious about understanding how their body actually moves",
  },
  {
    icon: "→",
    text: "People seeking a calm, one-on-one wellness experience",
  },
  {
    icon: "→",
    text: "Athletes and active individuals looking to optimize movement patterns",
  },
];

function BookBtn({ label = "Book Your Session", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-body font-medium text-sm tracking-wide px-8 py-4 bg-brand-gold text-brand-black hover:opacity-90 transition-opacity ${className}`}
      style={{ borderRadius: "2px" }}
    >
      {label} →
    </a>
  );
}

export default function WellnessBodyResetPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════ */}
      <section className="grain gold-glow relative pt-32 pb-24 md:pt-44 md:pb-32 bg-brand-black overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand-black" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="type-label text-brand-gold mb-5"
          >
            Body Reset Wellness · YW Physical Therapy · Midtown Manhattan
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="type-display-l text-brand-white mb-6"
          >
            Understand Your Body.<br className="hidden sm:block" />
            Move Better.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="type-body-l text-brand-muted max-w-2xl mx-auto mb-10"
          >
            A wellness-focused movement analysis and body reset experience designed to
            help you feel less tension, move more freely, and understand how your
            body actually works.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BookBtn label="Book a Session" />
            <a
              href="#pricing"
              className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 border border-brand-border text-brand-muted hover:border-brand-white hover:text-brand-white transition-all duration-200"
              style={{ borderRadius: "2px" }}
            >
              View Pricing ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — WHAT IS BODY RESET
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            The Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-6"
          >
            What is Body Reset?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="type-body-l text-brand-muted"
              >
                Body Reset is a wellness-focused approach that combines
                movement analysis, tension release, and guided movement optimization
                into a single cohesive experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                className="type-body-m text-brand-muted"
              >
                Rather than addressing isolated areas, it looks at how your entire
                body moves as a system — identifying where tension accumulates, how
                movement patterns affect how you feel, and what a personalized reset
                can do to restore ease and balance.
              </motion.p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  label: "Movement Analysis",
                  desc: "Understand how your body moves using AI-assisted technology and professional assessment.",
                },
                {
                  label: "Tension Release",
                  desc: "Targeted advanced wellness techniques to release built-up tension throughout the body.",
                },
                {
                  label: "Movement Optimization",
                  desc: "Practical guidance to help you move more efficiently and with greater ease in daily life.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start p-5 border border-brand-border bg-brand-black"
                  style={{ borderRadius: "2px" }}
                >
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                  <div>
                    <p className="font-body font-medium text-brand-white text-sm mb-1">{item.label}</p>
                    <p className="font-body font-light text-brand-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — SERVICES & PRICING (ClassPass key)
      ══════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Sessions & Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-4"
          >
            Choose Your Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="type-body-m text-brand-muted mb-12 max-w-xl"
          >
            All sessions are one-on-one with Dr. Yu-Kuang Wu. No assistants.
            No group classes. Your experience is fully personalized.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  service.highlight
                    ? "border-brand-gold/40 bg-brand-surface"
                    : "border-brand-border bg-brand-surface hover:border-brand-gold/20"
                }`}
                style={{ borderRadius: "2px" }}
              >
                {service.badge && (
                  <span
                    className="absolute -top-3 left-8 type-label text-brand-black px-3 py-1 bg-brand-gold"
                    style={{ borderRadius: "2px" }}
                  >
                    {service.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-display font-bold text-brand-white mb-1" style={{ fontSize: "18px", letterSpacing: "-0.01em" }}>
                    {service.name}
                  </h3>
                  <p className="type-label text-brand-muted/60">{service.duration}</p>
                </div>

                <div className="mb-6">
                  <span className="font-display font-bold text-brand-gold" style={{ fontSize: "40px", letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {service.price}
                  </span>
                  <span className="font-body text-brand-muted text-sm ml-2">/ session</span>
                </div>

                <p className="font-body font-light text-brand-muted text-sm leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="shrink-0 text-brand-gold text-xs mt-0.5">✓</span>
                      <span className="font-body font-light text-brand-muted text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <BookBtn
                  label="Book This Session"
                  className={service.highlight ? "w-full text-center" : "w-full text-center"}
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center font-mono text-[10px] text-brand-muted/50 tracking-widest uppercase"
          >
            HSA / FSA accepted · No insurance billing · Pay per session
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — WHAT TO EXPECT
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            The Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-12"
          >
            What to Expect
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="relative p-8 border border-brand-border bg-brand-black"
                style={{ borderRadius: "2px" }}
              >
                <span className="absolute top-6 right-6 font-display font-black text-5xl text-brand-gold/8 leading-none select-none">
                  {step.num}
                </span>
                <p className="type-label text-brand-gold mb-3">{step.num}</p>
                <h3 className="font-body font-medium text-brand-white mb-3">{step.title}</h3>
                <p className="type-body-m text-brand-muted">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — WHO THIS IS FOR
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="type-label text-brand-gold mb-4"
              >
                The Right Fit
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="type-display-m text-brand-white mb-6"
              >
                Who This Is For
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14 }}
                className="type-body-m text-brand-muted"
              >
                This wellness experience is designed for anyone who wants to understand
                their body better, move with more ease, and feel the difference that a
                personalized, one-on-one approach can make.
              </motion.p>
            </div>

            <ul className="space-y-3">
              {audience.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 items-start p-5 border border-brand-border bg-brand-surface"
                  style={{ borderRadius: "2px" }}
                >
                  <span className="shrink-0 text-brand-gold font-medium">{item.icon}</span>
                  <span className="font-body text-brand-muted text-sm leading-relaxed">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — THE EXPERIENCE
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            The Setting
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-10"
          >
            The Experience
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              {
                title: "One-on-One, Always",
                desc: "Every session is exclusively with Dr. Wu. No group formats, no aides, no distractions. Your full hour is yours.",
              },
              {
                title: "Private & Calm",
                desc: "A quiet, private studio environment in Midtown Manhattan — designed for focus, relaxation, and a genuinely personalized experience.",
              },
              {
                title: "Fully Personalized",
                desc: "No two sessions are identical. Everything is adapted in real time based on what your body shows us during the movement analysis.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-brand-border bg-brand-black"
                style={{ borderRadius: "2px" }}
              >
                <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                <p className="type-body-m text-brand-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 border border-brand-gold/25 bg-brand-black text-center"
            style={{ borderRadius: "2px" }}
          >
            <p
              className="font-display font-bold text-brand-white mb-2"
              style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.02em" }}
            >
              Designed for people who want a deeper understanding of their body.
            </p>
            <p className="font-body text-brand-muted text-sm">
              Not a class. Not a spa. A genuine one-on-one wellness experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7 — FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-black text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,119,89,0.06) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-5"
          >
            Get Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-4"
          >
            Start with Movement.<br />Feel the Difference.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="type-body-l text-brand-muted mb-10 max-w-xl mx-auto"
          >
            Book your first session and experience what it feels like when your body
            finally moves the way it&apos;s supposed to.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BookBtn label="Book Your Session" className="px-10 py-4" />
            <a
              href="#pricing"
              className="inline-block font-body font-medium text-sm tracking-wide px-10 py-4 border border-brand-border text-brand-muted hover:border-brand-white hover:text-brand-white transition-all duration-200"
              style={{ borderRadius: "2px" }}
            >
              View Pricing ↑
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 type-label text-brand-muted/50"
          >
            Limited availability · Mon / Wed / Thu · Midtown Manhattan
          </motion.p>
        </div>
      </section>

      {/* ── Location strip ─────────────────────────── */}
      <section className="py-10 bg-brand-surface border-t border-brand-border">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <p className="type-label text-brand-muted/60 mb-1">Location</p>
            <p className="font-body font-medium text-brand-white text-sm">224 W 35th St #301-5, New York, NY 10001</p>
            <p className="font-body text-brand-muted text-xs mt-0.5">2 blocks from Penn Station / Madison Square Garden</p>
          </div>
          <div>
            <p className="type-label text-brand-muted/60 mb-1">Hours</p>
            <p className="font-body text-brand-muted text-sm">Mon · Wed 10am–4pm · Thu 10am–7pm</p>
          </div>
          <div>
            <p className="type-label text-brand-muted/60 mb-1">Contact</p>
            <a href="tel:3475715717" className="block font-body text-brand-muted text-sm hover:text-brand-white transition-colors">347-571-5717</a>
            <a href="mailto:ywphysicaltherapy@gmail.com" className="block font-body text-brand-muted text-xs mt-0.5 hover:text-brand-white transition-colors">ywphysicaltherapy@gmail.com</a>
          </div>
          <div>
            <BookBtn label="Book Now" className="px-7 py-3" />
          </div>
        </div>
      </section>
    </>
  );
}
