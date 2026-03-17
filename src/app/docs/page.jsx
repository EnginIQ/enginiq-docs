import Link from "next/link";
import { siteConfig } from "@/lib/site";

const installBlocks = [
  {
    title: "SDK",
    command: "npm install enginiq-core pg dotenv",
    details:
      "Embed the engine directly in a Node.js app or internal service.",
  },
  {
    title: "CLI",
    command: "npm install enginiq-cli",
    details:
      "Use EnginiQ from your terminal or CI to inspect schema and run migrations.",
  },
  {
    title: "MCP",
    command: "npm install enginiq-mcp",
    details:
      "Expose EnginiQ tools to Cursor, Claude, or another MCP-compatible host.",
  },
];

const toolRows = [
  ["list_tables", "Read all public tables"],
  ["describe_table", "Inspect one table and its columns"],
  ["get_schema", "Read the full public schema"],
  ["create_table", "Create a table with guardrails"],
  ["add_column", "Safely add a new column"],
  ["run_migration", "Apply a named sequence of operations"],
  ["query", "Run parameterized SQL with safety checks"],
];

export const metadata = {
  title: "Docs and quickstart",
  description:
    "Learn how to use EnginiQ, the safe Postgres runtime for AI agents, with schema discovery, migrations, CLI workflows, and MCP integrations.",
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "EnginiQ Docs | AI-safe Postgres tooling",
    description:
      "Quickstart docs for EnginiQ, including installation, configuration, CLI usage, SDK examples, and MCP-ready database tools.",
    url: "/docs",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is EnginiQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EnginiQ is a guardrailed Postgres runtime for AI agents with schema discovery, migrations, parameterized queries, a CLI, and MCP support.",
      },
    },
    {
      "@type": "Question",
      name: "Which databases does EnginiQ support today?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Today EnginiQ is focused on Postgres-compatible databases, including Supabase-hosted Postgres.",
      },
    },
    {
      "@type": "Question",
      name: "How do AI agents use EnginiQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agents can use the same toolset through the Node.js SDK, the CLI, or the MCP server, depending on where they run.",
      },
    },
  ],
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-5xl space-y-14">
        <div className="space-y-4 pt-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Try EnginiQ with Supabase or Postgres in 5 minutes
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            EnginiQ is the safe Postgres runtime for AI agents. It gives you
            one guardrailed workflow for schema discovery, migrations, and
            queries through a Node.js SDK, a CLI, and an MCP server.
          </p>
          <div className="flex flex-wrap gap-3 pt-3 text-sm text-zinc-400">
            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
              AI database tools
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
              Postgres MCP
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
              Guardrailed migrations
            </span>
          </div>
        </div>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Install</h2>
          <p className="text-zinc-400">
            Choose the interface that matches your workflow. All three use the
            same safe Postgres tool surface underneath.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {installBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
              >
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {block.title}
                </p>
                <p className="mb-4 text-sm text-zinc-400">{block.details}</p>
                <pre className="overflow-x-auto rounded-lg bg-black/40 p-4 text-sm text-zinc-200">
                  <code>{block.command}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Configure</h2>
          <p className="text-zinc-400">
            Point EnginiQ at your Postgres or Supabase database. It resolves configuration in this order:
            `--database_url`, `ENGINIQ_DATABASE_URL`, `DATABASE_URL`, then
            `.enginiqrc.json`.
          </p>
          <pre className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/40 p-5 text-sm text-zinc-200">
            <code>{`{
  "database_url": "postgresql://postgres:postgres@localhost:5432/postgres"
}`}</code>
          </pre>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Run the CLI</h2>
          <pre className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/40 p-5 text-sm text-zinc-200">
            <code>{`npx enginiq doctor
npx enginiq tools
npx enginiq schema
npx enginiq create-table posts
npx enginiq add-column posts title:text`}</code>
          </pre>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Trust controls</h2>
          <p className="text-zinc-400">
            EnginiQ now supports preview-first workflows so you can demo or
            operate more safely before applying changes.
          </p>
          <pre className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/40 p-5 text-sm text-zinc-200">
            <code>{`npx enginiq create-table posts --dry-run
npx enginiq add-column posts title:text --read-only
npx enginiq migrate --require-approval
npx enginiq migrate --require-approval --approval-token approved

# Optional audit metadata
npx enginiq create-table posts --dry-run --actor mohan --environment staging`}</code>
          </pre>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Use the SDK</h2>
          <pre className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/40 p-5 text-sm text-zinc-200">
            <code>{`import {
  Engine,
  SupabaseConnector,
  listTablesTool,
  getSchemaTool,
} from "enginiq-core";

const engine = new Engine();
const connector = new SupabaseConnector(process.env.DATABASE_URL);

engine.setConnector(connector);
engine.registerTool(listTablesTool(engine));
engine.registerTool(getSchemaTool(engine));

await engine.connect();
const schema = await engine.runTool("get_schema", {});
console.log(schema);
await engine.disconnect();`}</code>
          </pre>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Available tools</h2>
          <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.03] text-zinc-300">
                <tr>
                  <th className="px-4 py-3 font-medium">Tool</th>
                  <th className="px-4 py-3 font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {toolRows.map(([name, purpose]) => (
                  <tr key={name} className="border-t border-white/[0.06]">
                    <td className="px-4 py-3 font-mono text-zinc-200">{name}</td>
                    <td className="px-4 py-3 text-zinc-400">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <h2 className="text-2xl font-semibold">Current guardrails</h2>
          <p className="text-zinc-300">
            EnginiQ blocks `DROP DATABASE`, `DROP SCHEMA`, `TRUNCATE`,
            `ALTER ROLE`, deletes without a `WHERE` clause, and operations on
            tables prefixed with `auth_`, `storage_`, or `supabase_`.
          </p>
          <p className="text-zinc-300">
            Mutating workflows can also be run in `dry-run`, `read-only`, or
            `approval-required` modes for safer previews and review flows.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-zinc-100">
                What is EnginiQ?
              </h3>
              <p className="mt-2 text-zinc-400">
                EnginiQ is an AI-safe Postgres runtime that gives agents
                structured tools for schema discovery, migrations, and queries.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-zinc-100">
                Does EnginiQ work with MCP clients?
              </h3>
              <p className="mt-2 text-zinc-400">
                Yes. The MCP package exposes the same core database tools so IDE
                agents can call them through a standard protocol.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-zinc-100">
                Which database should I use with EnginiQ today?
              </h3>
              <p className="mt-2 text-zinc-400">
                Today the product is focused on Postgres-compatible databases,
                including Supabase-hosted Postgres.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
          <h2 className="text-2xl font-semibold">More resources</h2>
          <div className="mt-3 flex flex-wrap gap-4 text-zinc-400">
            <Link href="/" className="hover:text-zinc-200">
              Product overview
            </Link>
            <Link href="/blog" className="hover:text-zinc-200">
              Blog and guides
            </Link>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200"
            >
              GitHub organization
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
