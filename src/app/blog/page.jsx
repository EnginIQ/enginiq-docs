import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Blog",
  description:
    "Guides about AI database tools, Postgres MCP workflows, and safe database migrations for agent-driven development.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "EnginiQ Blog | AI database tools and Postgres MCP guides",
    description:
      "Guides about AI database tools, Postgres MCP workflows, and safe database migrations for agent-driven development.",
    url: "/blog",
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "EnginiQ Blog | AI database tools and Postgres MCP guides",
    description:
      "Guides about AI database tools, Postgres MCP workflows, and safe database migrations for agent-driven development.",
    images: [siteConfig.ogImage],
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "EnginiQ Blog",
  url: `${siteConfig.siteUrl}/blog`,
  description:
    "Guides about AI database tools, Postgres MCP workflows, and safe database migrations.",
};

export default function BlogPage() {
  const postsPromise = getAllPosts();

  return <BlogPageContent postsPromise={postsPromise} />;
}

async function BlogPageContent({ postsPromise }) {
  const posts = await postsPromise;

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
            Back to home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            EnginiQ blog
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            Articles focused on AI database tools, Postgres MCP integrations,
            and safer migration workflows for teams adopting agents.
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
            >
              <div className="mb-3 flex flex-wrap gap-3 text-sm text-zinc-500">
                <span>{post.publishedAt}</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="text-2xl font-semibold text-zinc-100">
                <Link href={`/blog/${post.slug}`} className="hover:text-white">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-zinc-400">{post.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-white/[0.08] bg-black/30 px-3 py-1 text-xs text-zinc-400"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
