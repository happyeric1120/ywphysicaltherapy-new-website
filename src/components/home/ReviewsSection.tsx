"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "MC C",
    meta: "Local Guide · 16 reviews",
    stars: 5,
    date: "6 months ago",
    text: "YW has helped my pain and mobility issues more than any other practitioner (PT, chiropractor, athletic trainer) I have gone to — and I've tried so many over the years! The focused shockwave has been the only modality to help, and YW knows what he is doing. Thank you YW!!",
  },
  {
    name: "Shao Yun Hsu",
    meta: "9 reviews",
    stars: 5,
    date: "8 months ago",
    text: "I had shoulder and arm pain from sitting at my desk too much, and nothing was helping. Eric used shockwave therapy and it made a huge difference. The tension eased up after just a couple sessions. Wish I had come sooner!",
  },
  {
    name: "Chieh Hsiung",
    meta: "6 reviews",
    stars: 5,
    date: "9 months ago",
    text: "Eric helped me get back on my feet after a sprained ankle. He explained each exercise, kept the sessions fun, and I was pain-free way sooner than I expected. Can't recommend him enough!",
  },
  {
    name: "Jingke Gao",
    meta: "3 reviews",
    stars: 5,
    date: "1 year ago",
    text: "I can't say enough good things about my experience with PT Eric at YW Physical Therapy! I had been struggling with severe lower back pain for years. Eric took the time to truly listen to my concerns and developed an individualized treatment plan. The shockwave treatment was like magic—I felt significant relief almost instantly.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Bottom warm coral glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(255,119,89,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="sr-only">Patient Reviews — YW Physical Therapy Manhattan</h2>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-4xl text-brand-white" style={{ letterSpacing: "-0.03em" }}>5.0</span>
            <div>
              <Stars count={5} />
              <p className="font-mono text-[10px] text-brand-muted tracking-widest uppercase mt-1">Rated 5.0 on Google</p>
            </div>
          </div>
          <div className="hidden sm:block h-10 w-px bg-brand-border" />
          <p className="font-body font-light text-brand-muted text-sm">Real patients. Real results. No actors, no stock photos.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border border-brand-border rounded-xl bg-brand-surface hover:border-[rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col gap-4"
            >
              <Stars count={r.stars} />
              <p className="font-body font-light text-brand-white text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-brand-border">
                <p className="font-body font-medium text-brand-white text-sm">{r.name}</p>
                <p className="font-mono text-[10px] text-brand-muted tracking-wide mt-0.5">{r.meta} · {r.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.google.com/maps?cid=8278782662710746620"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-brand-muted hover:text-brand-gold transition-colors tracking-wide"
          >
            View all reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
