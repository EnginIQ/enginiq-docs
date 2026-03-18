export const launchChecklist = [
  "Set NEXT_PUBLIC_SITE_URL to your live domain in Vercel.",
  "Configure Supabase Auth: Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to Vercel.",
  "Configure OAuth: Set up GitHub OAuth in Supabase Dashboard and add callback URLs.",
  "Replace hello@enginiq.dev with your real launch inbox or founder email.",
  "Deploy the enginiq-docs app from the enginiq-docs root directory.",
  "Open the live /sitemap.xml and /robots.txt once deployment finishes.",
  "Add the site to Google Search Console and submit the sitemap.",
  "Create one public example repo that mirrors the 5-minute demo flow.",
  "Record one short demo video using the launch script from the launch page.",
  "Configure Polar.sh: Set up organization, products, and webhooks.",
  "Verify Webhook Integrity: Use Polar sandbox to test subscription creation and usage limit sync.",
  "Publish the first wave of launch posts on X, LinkedIn, Hacker News, Reddit, and dev communities.",
  "Watch the waitlist inbox and reply to every serious user within 24 hours.",
  "Publish 2 to 3 new blog posts in the first two weeks after launch.",
];

export const launchPosts = {
  x: `AI should help with Postgres, but nobody wants raw SQL touching production.

I built EnginiQ: the safe Postgres runtime for AI agents.

It gives agents:
- schema discovery
- safe migrations
- parameterized queries
- dry-run / read-only / approval modes
- MCP support for Cursor and Claude-style workflows

There’s also a hosted preview with approvals + audit logs.

Docs, demo, and waitlist: http://localhost:3000`,
  linkedin: `I’ve been building EnginiQ, a safe Postgres runtime for AI agents.

The core idea is simple: AI should be useful for database work without getting unrestricted SQL access.

What EnginiQ does today:
- inspect schema
- run safe migration workflows
- support preview-first trust modes like dry-run and approval-required
- expose the same runtime through SDK, CLI, and MCP

I also put together a hosted-product preview with projects, approvals, and audit logs so the product direction is visible.

If you’re working with Postgres or Supabase and want AI-assisted workflows that feel safer and more auditable, I’d love feedback.

Docs and demo: http://localhost:3000`,
  hackernews_title: "Show HN: EnginiQ, a safe Postgres runtime for AI agents",
  reddit: `I’m working on EnginiQ, a safe Postgres runtime for AI agents.

The goal is to let agents inspect schema, preview changes, run safe migrations, and work through SDK / CLI / MCP without handing them unrestricted SQL access.

There’s also a hosted preview with approval queue and audit log concepts.

I’d love feedback from people using Postgres or Supabase with Cursor, Claude, or agent workflows:
http://localhost:3000`,
};
