import Link from "next/link";
import type { ReactNode } from "react";
import { formatBlogDate, type BlogPostMeta } from "@/lib/blog";

type BlogArticleLayoutProps = {
  post: BlogPostMeta;
  children: ReactNode;
};

export default function BlogArticleLayout({ post, children }: BlogArticleLayoutProps) {
  return (
    <article className="bg-brand-black text-brand-white">
      <header className="border-b border-brand-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-gold hover:text-brand-gold-light"
          >
            ← PT Insights &amp; Resources
          </Link>
          <p className="type-label mt-9 text-brand-gold">{post.category}</p>
          <h1 className="type-display-l mt-5 text-balance text-brand-white">{post.title}</h1>
          <p className="mt-7 max-w-3xl type-body-l text-brand-muted">{post.meta_description}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-brand-border pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-muted">
            <span>Written by Yu-Kuang Wu, PT, PhD</span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          </div>
        </div>
      </header>

      <section className="bg-white py-16 text-[#101114] md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="blog-prose">{children}</div>

          <aside className="mt-16 border border-black/10 bg-[#f4f6f8] p-7 sm:p-9" aria-label="Related care">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#176bff]">Related care</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.035em]">Connect this information to your care.</h2>
            <p className="mt-4 text-base leading-7 text-[#61666e]">
              Learn about the related service, or schedule a one-on-one visit at YW Physical Therapy near Penn Station.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={post.supports_page}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#176bff] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d54cf]"
              >
                Explore related service
              </Link>
              <Link
                href="/book"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/20 px-6 py-3 text-sm font-medium hover:border-black/50"
              >
                Book a visit
              </Link>
            </div>
          </aside>

          <p className="mt-10 border-t border-black/10 pt-7 text-sm leading-6 text-[#61666e]">
            This article is for general educational purposes and is not individualized medical advice. An appropriate clinical evaluation is needed to determine whether a treatment or exercise is suitable for you.
          </p>
        </div>
      </section>
    </article>
  );
}
