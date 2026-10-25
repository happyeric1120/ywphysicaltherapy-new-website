import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import { entityIds, siteFacts } from "@/data/siteFacts";
import { breadcrumbSchema, jsonLd } from "@/lib/seoSchemas";
import { getPublishedBlogPost, getPublishedBlogPosts } from "@/lib/blog";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedBlogPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);
  if (!post) return {};

  const url = `${siteFacts.url}/blog/${post.slug}/`;
  return {
    title: `${post.title} | YW Physical Therapy`,
    description: post.meta_description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.meta_description,
      url,
      siteName: siteFacts.name,
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [`${siteFacts.url}${siteFacts.clinician.profilePath}`],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.body,
    options: {
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
    components: {
      h2: (props) => <h2 className="mt-14 font-display text-3xl font-bold tracking-[-0.04em] text-[#101114]" {...props} />,
      h3: (props) => <h3 className="mt-10 font-display text-2xl font-bold tracking-[-0.03em] text-[#101114]" {...props} />,
      p: (props) => <p className="mt-5 text-base leading-8 text-[#4f555d]" {...props} />,
      ul: (props) => <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-[#4f555d]" {...props} />,
      ol: (props) => <ol className="mt-5 list-decimal space-y-3 pl-6 text-base leading-7 text-[#4f555d]" {...props} />,
      li: (props) => <li className="pl-1" {...props} />,
      blockquote: (props) => <blockquote className="mt-7 border-l-2 border-[#176bff] bg-[#f4f6f8] px-6 py-4 text-[#4f555d]" {...props} />,
      a: ({ href = "", children, ...props }) => {
        const external = href.startsWith("http://") || href.startsWith("https://");
        if (external) {
          return <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-[#176bff] underline underline-offset-4" {...props}>{children}</a>;
        }
        return <Link href={href} className="font-medium text-[#176bff] underline underline-offset-4" {...props}>{children}</Link>;
      },
      table: (props) => <div className="mt-7 overflow-x-auto"><table className="w-full border-collapse text-left text-sm" {...props} /></div>,
      th: (props) => <th className="border border-black/10 bg-[#f4f6f8] px-4 py-3 font-medium" {...props} />,
      td: (props) => <td className="border border-black/10 px-4 py-3 align-top text-[#4f555d]" {...props} />,
      hr: (props) => <hr className="my-12 border-black/10" {...props} />,
      strong: (props) => <strong className="font-semibold text-[#101114]" {...props} />,
    },
  });

  const url = `${siteFacts.url}/blog/${post.slug}/`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.meta_description,
      datePublished: post.date,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@id": entityIds.clinician },
      publisher: { "@id": entityIds.clinic },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog/" },
      { name: post.title, path: `/blog/${post.slug}/` },
    ]),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      ))}
      <BlogArticleLayout post={post}>{content}</BlogArticleLayout>
    </>
  );
}
