import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const steps = [
  "Connect a Supabase Postgres database.",
  "Inspect the live schema through guarded tools.",
  "Generate a safe preview for a change.",
  "Review or approve through the hosted control layer.",
];

const supabaseFaqs = [
  {
    question: "Why is Supabase a strong early use case for EnginiQ?",
    answer:
      "Supabase teams already rely on Postgres for application data and often want AI assistance around schema work, but still need strong controls before anything mutates production state.",
  },
  {
    question: "Can EnginiQ inspect a Supabase schema before changing it?",
    answer:
      "Yes. EnginiQ is designed for schema discovery first, so an agent can inspect tables and structure before proposing a migration or running a guarded change.",
  },
  {
    question: "How does EnginiQ reduce risk for AI-assisted Supabase changes?",
    answer:
      "It supports preview-first operations, approval paths, and blocked unsafe commands, which makes the workflow safer than letting an agent emit unrestricted SQL.",
  },
];

const supabaseFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: supabaseFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const supabaseCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "EnginiQ for Supabase teams",
  url: `${siteConfig.siteUrl}/supabase`,
  description:
    "A safer path for Supabase teams adopting AI-assisted Postgres workflows with schema discovery, previews, approvals, and audit visibility.",
};

export const metadata = buildPageMetadata({
  title: "For Supabase Teams",
  description:
    "EnginiQ gives Supabase teams a safer path to AI-assisted Postgres workflows with approvals and audit visibility.",
  path: "/supabase",
  openGraphTitle: "For Supabase teams | EnginiQ",
  openGraphDescription:
    "A safer way for Supabase teams to let AI agents inspect schema and propose changes without raw SQL freedom.",
});

export default function SupabasePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([supabaseCollectionJsonLd, supabaseFaqJsonLd]),
        }}
      />
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 pt-10">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
            Back to home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            For Supabase teams
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            Supabase is one of the clearest early workflows for EnginiQ. Teams
            already want AI-assisted database work, but they still need policy,
            review, and audit visibility around production changes.
          </p>
        </div>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
            <h2 className="text-xl font-semibold">Supabase + AI is attractive</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Teams want AI help with schema exploration, migrations, and
              repetitive database work because Supabase makes Postgres central
              to product development.
            </p>
          </Card>
          <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
            <h2 className="text-xl font-semibold">Raw SQL is still a trust problem</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              The hard part is not generating SQL. The hard part is trusting
              what an agent wants to do against a live Supabase database.
            </p>
          </Card>
          <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
            <h2 className="text-xl font-semibold">EnginiQ adds the control layer</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              EnginiQ brings previews, approvals, schema-aware tooling, and
              audit visibility so AI-assisted Postgres workflows become more
              operationally credible.
            </p>
          </Card>
        </section>

        <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
          <h2 className="text-2xl font-semibold">Recommended rollout</h2>
          <div className="mt-6 grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-zinc-300"
              >
                {index + 1}. {step}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-zinc-50 text-zinc-950 hover:bg-white">
              <Link href="/docs">Open docs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-transparent text-zinc-200 hover:bg-white/[0.04]"
            >
              <Link href="/demo">Open demo</Link>
            </Button>
          </div>
        </Card>

        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          {supabaseFaqs.map((item) => (
            <Card
              key={item.question}
              className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none"
            >
              <h3 className="text-lg font-semibold text-zinc-100">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.answer}</p>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
