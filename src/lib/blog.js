import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function normalizePost(frontmatter, slug, rawContent) {
  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    publishedAt: frontmatter.publishedAt,
    readingTime: frontmatter.readingTime || estimateReadingTime(rawContent),
    keywords: frontmatter.keywords || [],
    author: frontmatter.author || "EnginiQ Team",
  };
}

export async function getAllPosts() {
  const entries = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    entries
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const fullPath = path.join(BLOG_DIR, file);
        const source = await fs.readFile(fullPath, "utf8");
        const { data, content } = matter(source);
        const slug = file.replace(/\.mdx$/, "");
        return normalizePost(data, slug, content);
      })
  );

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const source = await fs.readFile(fullPath, "utf8");

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  return {
    ...normalizePost(frontmatter, slug, source),
    content,
    sources: frontmatter.sources || [],
  };
}
