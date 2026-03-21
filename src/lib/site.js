const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (process.env.NODE_ENV === "production" && !rawSiteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be set in production.");
}

const normalizedSiteUrl = (rawSiteUrl || "http://localhost:3000").replace(/\/+$/, "");

try {
  new URL(normalizedSiteUrl);
} catch {
  throw new Error(`Invalid NEXT_PUBLIC_SITE_URL: ${normalizedSiteUrl}`);
}

export const siteConfig = {
  name: "EnginiQ",
  title: "EnginiQ | The safe Postgres runtime for AI agents",
  description:
    "EnginiQ is the safe Postgres runtime for AI agents with schema discovery, migrations, parameterized queries, CLI workflows, and MCP support.",
  keywords: [
    "AI database tools",
    "MCP Postgres",
    "Postgres agent runtime",
    "AI database migrations",
    "guardrailed SQL tools",
    "Cursor MCP database",
    "Claude MCP Postgres",
    "database tools for AI agents",
    "Postgres schema automation",
    "EnginiQ",
  ],
  siteUrl: normalizedSiteUrl,
  githubUrl: "https://github.com/enginiq",
  contactEmail: "hello@enginiq.dev",
  ogImage: "/opengraph-image",
  creator: "EnginiQ Team",
};
