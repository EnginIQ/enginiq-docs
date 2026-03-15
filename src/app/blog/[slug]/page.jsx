import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post;

  try {
    post = await getPostBySlug(slug);
  } catch {
    return {};
  }

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | EnginiQ`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="mx-auto max-w-3xl space-y-10">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <Link href="/blog" className="hover:text-zinc-200">
              Blog
            </Link>
            <span>{post.publishedAt}</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="blog-prose">{post.content}</div>
        </div>

        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-zinc-100">
            Explore EnginiQ
          </h2>
          <p className="mt-3 text-zinc-400">
            Continue with the quickstart docs or return to the homepage to see
            how the SDK, CLI, and MCP server fit together.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-zinc-300">
            <Link href="/docs" className="hover:text-white">
              Read the docs
            </Link>
            <Link href="/" className="hover:text-white">
              View product overview
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
