import Link from "next/link";
import { Card } from "@/components/ui/card";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const comparisons = [
  {
    raw: "Prompt the model and hope it understands the current schema.",
    enginiq: "Inspect schema first through structured tools before planning a change.",
  },
  {
    raw: "Generate unrestricted SQL and execute it directly.",
    enginiq: "Use guardrailed operations, SQL previews, and human approval where needed.",
  },
  {
    raw: "Trust sits in prompt wording and convention.",
    enginiq: "Trust sits in policy, audit logs, and explicit controls.",
  },
];

const comparisonJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Why not raw AI SQL?",
  url: `${siteConfig.siteUrl}/why-not-raw-ai-sql`,
  description:
    "A buyer-facing comparison between raw AI-generated SQL and a governed Postgres runtime with previews, approvals, and audit controls.",
};

export const metadata = buildPageMetadata({
  title: "Why Not Raw AI SQL?",
  description:
    "Compare raw AI-generated SQL against EnginiQ's guarded, approval-first workflow for Postgres teams.",
  path: "/why-not-raw-ai-sql",
  openGraphTitle: "Why not raw AI SQL? | EnginiQ",
  openGraphDescription:
    "A buyer-facing comparison between improvised AI SQL prompts and a governed Postgres runtime.",
});

export default function WhyNotRawAiSqlPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 pt-10">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
            Back to home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Why not raw AI SQL?
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            Teams do not buy database automation because an AI can emit SQL.
            They buy it when the workflow becomes safer, more reviewable, and
            easier to trust in real environments.
          </p>
        </div>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
            <h2 className="text-xl font-semibold">Raw SQL feels fast</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              It is easy to prompt an AI model for SQL and get something that
              looks plausible, especially during demos or low-risk prototyping.
            </p>
          </Card>
          <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
            <h2 className="text-xl font-semibold">Production trust is the issue</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              The real risk appears when the agent has incomplete schema
              context, no guardrails, and no approval layer around writes to a
              live Postgres environment.
            </p>
          </Card>
          <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
            <h2 className="text-xl font-semibold">Governed tooling changes the story</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              EnginiQ moves trust out of the prompt and into product controls:
              previews, blocked operations, audit trails, and reviewable flows.
            </p>
          </Card>
        </section>

        <div className="grid gap-6">
          {comparisons.map((item, index) => (
            <Card
              key={index}
              className="grid gap-4 border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none md:grid-cols-2"
            >
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-red-300">
                  Raw AI SQL
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {item.raw}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-emerald-300">
                  EnginiQ
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {item.enginiq}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
          <h2 className="text-2xl font-semibold">What this means for teams</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            If your team is evaluating AI database tools, the question is not
            whether a model can generate SQL. The question is whether the
            workflow is safe enough to use repeatedly. That is why EnginiQ is
            positioned around AI-safe Postgres operations, approval-first
            changes, and structured tools instead of unrestricted query output.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-300">
            <Link href="/docs" className="hover:text-white">
              Read the docs
            </Link>
            <Link href="/supabase" className="hover:text-white">
              See the Supabase workflow
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Review pricing
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
