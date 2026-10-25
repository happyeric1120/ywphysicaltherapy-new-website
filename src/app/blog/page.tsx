import type { Metadata } from "next";
import Link from "next/link";
import { formatBlogDate, getPublishedBlogPosts } from "@/lib/blog";

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

export default function BlogPage() {
  const posts = getPublishedBlogPosts();
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
          {posts.length > 0 ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-8 border border-brand-border bg-brand-black hover:border-brand-gold/25 transition-colors duration-300"
                style={{ borderRadius: "2px" }}
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="type-tag text-brand-gold px-2.5 py-1 border border-brand-gold/25" style={{ borderRadius: "2px" }}>
                    {post.category}
                  </span>
                  <time dateTime={post.date} className="font-mono text-[10px] tracking-wide text-brand-muted">
                    {formatBlogDate(post.date)}
                  </time>
                </div>
                <h2 className="font-display font-bold text-brand-white text-lg leading-snug mb-4 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h2>
                <p className="type-body-m text-brand-muted flex-1 mb-6">{post.meta_description}</p>
                <span className="font-mono text-[10px] text-brand-gold group-hover:text-brand-gold-light tracking-wider uppercase transition-colors">
                  Read article →
                </span>
              </Link>
            ))}
          </div> : (
            <div className="border border-brand-border bg-brand-black p-10 text-center" style={{ borderRadius: "2px" }}>
              <p className="type-label text-brand-gold mb-3">Articles in preparation</p>
              <p className="type-body-m text-brand-muted max-w-xl mx-auto">
                New evidence-informed articles are being prepared and reviewed. In the meantime, explore our service and condition guides below.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <Link href="/shockwave-therapy-nyc" className="text-sm font-medium text-brand-gold hover:text-brand-gold-light">Shockwave Therapy →</Link>
                <Link href="/physical-therapy-near-penn-station" className="text-sm font-medium text-brand-gold hover:text-brand-gold-light">Physical Therapy →</Link>
              </div>
            </div>
          )}

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
