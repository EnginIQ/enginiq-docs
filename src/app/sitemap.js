import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

const routes = ["", "/docs", "/blog", "/demo", "/waitlist"];

export default async function sitemap() {
  const now = new Date();
  const blogPosts = await getAllPosts();

  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/docs" ? 0.9 : route === "/blog" ? 0.85 : 0.7,
  }));

  const articleRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
