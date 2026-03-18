"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/waitlist-form";
import Navbar from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/site";
import {
  Database,
  Shield,
  Terminal,
  GitBranch,
  CheckCircle2,
  ArrowRight,
  Code2,
  Layers,
  Lock,
  Github,
} from "lucide-react";

const packageCards = [
  {
    name: "enginiq-core",
    description:
      "The core runtime and guardrailed Postgres toolset for AI agents.",
    badge: "Available",
  },
  {
    name: "enginiq-cli",
    description:
      "CLI for developers and CI to inspect schema, run migrations, and verify setup.",
    badge: "Available",
  },
  {
    name: "enginiq-mcp",
    description:
      "MCP server for Cursor, Claude, and other agent hosts to call Postgres tools safely.",
    badge: "Available",
  },
];

const codeExample = `import {
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

async function main() {
  await engine.connect();

  const tables = await engine.runTool("list_tables", {});
  console.log(tables);

  const schema = await engine.runTool("get_schema", {});
  console.log(schema);

  await engine.disconnect();
}

main().catch(console.error);`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  sameAs: [siteConfig.githubUrl],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-50">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, softwareJsonLd]),
        }}
      />

      <section
        id="hero"
        className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-48"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl space-y-12 text-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="inline-flex items-center space-x-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>v0.1 | Safe Postgres tooling for Agents</span>
              </div>

              <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-white md:text-8xl">
                The safe Postgres <br />
                <span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                  runtime for AI
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-zinc-400 md:text-xl">
                Stop giving agents unrestricted SQL access. Use EnginiQ to inspect
                schema, apply migrations, and run queries with built-in guardrails
                and approval workflows.
              </p>
            </div>

            <div
              className={`flex flex-col items-center justify-center gap-4 transition-all duration-1000 delay-200 sm:flex-row ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-full bg-white px-8 text-base font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95"
              >
                <Link href="/docs">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/10 px-8 text-base font-semibold text-zinc-200 backdrop-blur-sm transition-all hover:bg-white/5 active:scale-95"
              >
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>

            <div
              className={`pt-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="/demo"
                className="inline-flex items-center text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-800 mr-2 text-[10px]">
                  ▶
                </span>
                Watch 2min quickstart demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 text-center text-sm text-zinc-400">
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
            Postgres MCP server
          </span>
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
            AI database migrations
          </span>
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
            Guardrailed SQL tools
          </span>
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
            Cursor and Claude integrations
          </span>
        </div>
      </section>

      <section className="border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
                Learn the category
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Guides built around the exact terms developers search for when
                evaluating AI-safe Postgres tooling.
              </p>
            </div>
            <Link href="/blog" className="text-sm text-zinc-300 hover:text-white">
              Browse all articles
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/blog/ai-database-tools-for-postgres",
                title: "AI database tools for Postgres",
                description:
                  "What teams should look for in schema discovery, migrations, and guardrails.",
              },
              {
                href: "/blog/postgres-mcp-server-for-ai-agents",
                title: "Postgres MCP server for AI agents",
                description:
                  "How MCP changes the way Cursor and Claude-style agents use database tools.",
              },
              {
                href: "/blog/ai-safe-database-migrations",
                title: "AI-safe database migrations",
                description:
                  "A launch checklist for migration safety, protected resources, and verification.",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-white/[0.18]"
              >
                <h3 className="text-xl font-semibold text-zinc-100">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
                Show, don&apos;t just tell
              </h2>
              <p className="mt-3 max-w-3xl text-zinc-400">
                The fastest way to make EnginiQ feel real is to show the full
                workflow end to end: schema discovery, safe preview, approval,
                and audit visibility.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-zinc-50 text-zinc-950 hover:bg-white"
              >
                <Link href="/demo">Run the 5-minute demo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/10 bg-transparent text-zinc-200 hover:bg-white/[0.04]"
              >
                <Link href="/launch">Open launch assets</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/10 bg-transparent text-zinc-200 hover:bg-white/[0.04]"
              >
                <Link href="/go-live">Open go-live checklist</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Product demo path",
                description:
                  "A clean 5-step walkthrough you can reuse in tweets, calls, demos, and launch videos.",
              },
              {
                title: "Example repo plan",
                description:
                  "A simple public repo outline that proves EnginiQ in one real Postgres workflow.",
              },
              {
                title: "Launch video script",
                description:
                  "A short story arc that explains the problem, the runtime, and the approval layer.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="rounded-2xl border-white/[0.08] bg-white/[0.03] p-8 text-zinc-50 shadow-none"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
                From runtime to control plane
              </h2>
              <p className="mt-3 max-w-3xl text-zinc-400">
                The hosted layer turns EnginiQ into a product teams can buy:
                projects, trust policies, approval queues, and audit visibility
                around the same Postgres runtime.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-transparent text-zinc-200 hover:bg-white/[0.04]"
            >
              <Link href="/dashboard">Open dashboard preview</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Project environments",
                description:
                  "Separate development, staging, and production trust policies for the same database workflow.",
              },
              {
                title: "Approval queue",
                description:
                  "Agents propose mutations, humans review SQL previews, and sensitive actions stay gated.",
              },
              {
                title: "Audit visibility",
                description:
                  "Every tool run gets actor, environment, trust mode, and outcome context for the team.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="rounded-2xl border-white/[0.08] bg-white/[0.03] p-8 text-zinc-50 shadow-none"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
              How EnginiQ works
            </h2>
            <p className="text-lg font-light text-zinc-400">
              Three simple steps to let agents safely operate your database
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect",
                description:
                  "Connect EnginiQ to your Postgres or Supabase database with your database URL.",
                icon: Database,
              },
              {
                step: "02",
                title: "Choose your interface",
                description:
                  "Use the SDK in code, run the CLI in CI, or expose the MCP server to your IDE agent.",
                icon: Layers,
              },
              {
                step: "03",
                title: "Run safe agent actions",
                description:
                  "Agents can discover schema, create tables, add columns, run migrations, and execute parameterized queries with guardrails.",
                icon: Terminal,
              },
            ].map((item) => (
              <div key={item.step} className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Card className="relative h-full rounded-2xl border-white/[0.08] bg-white/[0.02] p-8 transition-all hover:border-white/[0.15]">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05]">
                        <item.icon className="h-5 w-5 text-zinc-300" />
                      </div>
                      <span className="text-5xl font-bold text-zinc-800/50">
                        {item.step}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Why teams use EnginiQ
            </h2>
            <p className="text-lg font-light text-zinc-400">
              A focused Postgres workflow for teams that want useful AI help
              without raw-SQL chaos
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Database discovery",
                description:
                  "Tools like list_tables, describe_table, and get_schema let agents understand your actual schema before changing anything.",
                tools: ["list_tables", "describe_table", "get_schema"],
                icon: Database,
              },
              {
                title: "Schema changes and migrations",
                description:
                  "Guardrailed tools for create_table, add_column, and run_migration let agents evolve schema safely and predictably.",
                tools: ["create_table", "add_column", "run_migration"],
                icon: GitBranch,
              },
              {
                title: "Built for MCP and IDEs",
                description:
                  "Expose EnginiQ through MCP so agents in Cursor, Claude, or your own tooling can call Postgres operations directly.",
                tools: ["MCP Server", "CLI", "Direct SDK"],
                icon: Code2,
              },
            ].map((feature) => (
              <div key={feature.title} className="group relative h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Card className="relative h-full rounded-2xl border-white/[0.08] bg-white/[0.02] p-8 transition-all hover:border-white/[0.15]">
                  <div className="space-y-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05]">
                      <feature.icon className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-zinc-50">
                        {feature.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {feature.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-zinc-400"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.05]">
              <Shield className="h-6 w-6 text-zinc-300" />
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Safety built in
            </h2>
            <p className="text-lg font-light text-zinc-400">
              Guardrailed by default, protected by design
            </p>
          </div>
          <Card className="rounded-2xl border-white/[0.08] bg-white/[0.02] p-10">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <Lock className="h-5 w-5 text-zinc-400" />
                  <h3 className="text-lg font-semibold text-zinc-50">
                    Dangerous operations blocked
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {["DROP DATABASE", "DROP SCHEMA", "TRUNCATE", "ALTER ROLE"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center space-x-3 text-zinc-400"
                      >
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                        <span className="font-mono text-sm">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <Shield className="h-5 w-5 text-zinc-400" />
                  <h3 className="text-lg font-semibold text-zinc-50">
                    Protected resources
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "DELETE without WHERE blocked",
                    "auth_* tables protected",
                    "storage_* tables protected",
                    "supabase_* tables protected",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center space-x-3 text-zinc-400"
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Start with one Postgres workflow
            </h2>
            <p className="text-lg font-light text-zinc-400">
              Use the same safe Postgres runtime across SDK, CLI, and MCP from
              day one
            </p>
          </div>
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {packageCards.map((pkg) => (
              <Card
                key={pkg.name}
                className="rounded-2xl border-white/[0.08] bg-white/[0.02] p-8 transition-all hover:border-white/[0.15]"
              >
                <div className="space-y-4">
                  <span className="inline-block rounded-md border border-white/[0.08] bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-zinc-400">
                    {pkg.badge}
                  </span>
                  <h3 className="text-lg font-mono font-semibold text-zinc-50">
                    {pkg.name}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-zinc-400">
                    {pkg.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mx-auto max-w-3xl rounded-2xl border-white/[0.08] bg-white/[0.02] p-8">
            <h3 className="mb-5 text-base font-semibold text-zinc-50">
              Try the runtime in minutes
            </h3>
            <div className="space-y-2 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-sm">
              <div className="text-xs text-zinc-500">
                # Install for Postgres or Supabase
              </div>
              <div className="text-zinc-200">
                npm install enginiq-core pg dotenv
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-t border-white/[0.08] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
              See it in action
            </h2>
            <p className="text-lg font-light text-zinc-400">
              Use the engine and tools directly from Node.js
            </p>
          </div>
          <Card className="overflow-hidden rounded-2xl border-white/[0.08] bg-black/40">
            <div className="flex items-center space-x-3 border-b border-white/[0.08] bg-white/[0.02] px-5 py-3.5">
              <div className="flex space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs font-medium text-zinc-500">index.ts</span>
            </div>
            <div className="p-6 font-mono text-xs text-zinc-200 sm:text-sm">
              <pre className="whitespace-pre-wrap break-all">{codeExample}</pre>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.02),transparent_50%)]" />
        <div className="mx-auto max-w-4xl px-6 relative">
          <Card className="rounded-[2.5rem] border-white/[0.08] bg-white/[0.02] p-8 md:p-16 text-center backdrop-blur-sm overflow-hidden ring-1 ring-white/10">
            <div className="space-y-10 relative">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-white">
                  Ready to give agents <br /> safe Postgres access?
                </h2>
                <p className="mx-auto max-w-2xl text-lg font-medium text-zinc-400">
                  Start with our developer first quickstart, connect your
                  database, and test the guardrailed workflow in minutes.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-white px-8 text-base font-bold text-black shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <Link href="/docs">
                    Quickstart Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-white/10 px-8 text-base font-semibold text-zinc-200 transition-all hover:bg-white/5 active:scale-95"
                >
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>

              <div className="mx-auto max-w-md pt-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Join the waitlist for Enterprise features
                </p>
                <WaitlistForm compact />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/[0.05] bg-[#0A0A0A] py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-zinc-700 to-zinc-800 shadow-xl">
                  <span className="text-xs font-bold text-zinc-100 italic">
                    EQ
                  </span>
                </div>
                <span className="text-lg font-bold tracking-tight text-white">
                  {siteConfig.name}
                </span>
              </div>
              <p className="max-w-xs text-sm font-medium text-zinc-500 leading-relaxed">
                The safety layer between your AI agents and your production
                Postgres database.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-100">
                Product
              </h4>
              <nav className="flex flex-col space-y-2.5">
                <Link
                  href="/docs"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Blog & Guides
                </Link>
                <Link
                  href="/demo"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Product Demo
                </Link>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-100">
                Company
              </h4>
              <nav className="flex flex-col space-y-2.5">
                <Link
                  href="/terms"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </nav>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/[0.05] pt-10">
            <p className="text-xs font-medium text-zinc-600">
              © 2026 {siteConfig.name}. Built for the agentic future.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

