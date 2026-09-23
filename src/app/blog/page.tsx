import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PT Insights & Resources | YW Physical Therapy NYC",
  description:
    "Physical therapy insights, research summaries, and movement guides from Dr. Yu-Kuang Wu, PT, PhD — Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/blog" },
  openGraph: {
    title: "PT Insights & Resources | YW Physical Therapy NYC",
    description: "Physical therapy insights from Dr. Yu-Kuang Wu, PT, PhD — Midtown Manhattan.",
    url: "https://ywphysicaltherapy.com/blog",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const posts = [
  {
    slug: "shockwave-care-guide",
    category: "Service Guide",
    title: "How Shockwave Therapy Fits Into an Assessment-Driven Plan",
    excerpt:
      "An overview of how YW Physical Therapy evaluates a treatment area, distinguishes focused and radial shockwave, and connects treatment with movement and progressive rehabilitation when appropriate.",
    href: "/shockwave-therapy-nyc",
  },
  {
    slug: "shockwave-low-back-guide",
    category: "Condition Guide",
    title: "Shockwave Care for Selected Low Back Pain Presentations",
    excerpt:
      "Learn how assessment helps determine whether a muscular or soft-tissue target may be appropriate for shockwave—and when a broader physical therapy plan should take priority.",
    href: "/shockwave-low-back-pain-nyc",
  },
  {
    slug: "physical-therapy-evaluation-guide",
    category: "Getting Started",
    title: "What to Expect From a Physical Therapy Evaluation",
    excerpt:
      "See how movement, symptoms, load tolerance, and your goals are reviewed before a one-on-one treatment plan is developed.",
    href: "/physical-therapy-near-penn-station",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-5">Knowledge Base</p>
          <h1 className="type-display-l text-brand-white mb-6">PT Insights & Resources</h1>
          <p className="type-body-l text-brand-muted max-w-2xl">
            Clinical education, research summaries, and movement insights from Dr. Yu-Kuang Wu,
            PT, PhD.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="group flex flex-col p-8 border border-brand-border bg-brand-black hover:border-brand-gold/25 transition-colors duration-300"
                style={{ borderRadius: "2px" }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="type-tag text-brand-gold px-2.5 py-1 border border-brand-gold/25" style={{ borderRadius: "2px" }}>
                    {post.category}
                  </span>
                </div>
                <h2 className="font-display font-bold text-brand-white text-lg leading-snug mb-4 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h2>
                <p className="type-body-m text-brand-muted flex-1 mb-6">{post.excerpt}</p>
                <span className="font-mono text-[10px] text-brand-gold group-hover:text-brand-gold-light tracking-wider uppercase transition-colors">
                  View guide →
                </span>
              </Link>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="mt-12 p-8 border border-brand-border text-center" style={{ borderRadius: "2px" }}>
            <p className="type-label text-brand-gold mb-3">More Coming Soon</p>
            <p className="type-body-m text-brand-muted max-w-lg mx-auto">
              Dr. Wu regularly publishes on movement science, clinical technology, and the research
              behind the Human System Reset™ method. Check back soon.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-5">Apply the Research</p>
          <h2 className="type-display-m text-brand-white mb-6">
            Ready to Put This Into Practice?
          </h2>
          <p className="type-body-l text-brand-muted mb-10 max-w-xl mx-auto">
            One-on-one care in Midtown Manhattan. Dr. Wu applies the latest evidence directly to your case.
          </p>
          <Link
            href="/book"
            className="inline-block font-body font-medium text-sm tracking-wide px-10 py-4 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-all duration-200"
            style={{ borderRadius: "2px" }}
          >
            Book Your Session →
          </Link>
        </div>
      </section>
    </>
  );
}
