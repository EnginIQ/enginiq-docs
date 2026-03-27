import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Included by default for local evaluation and first workflows.",
    features: [
      "SDK, CLI, and MCP runtime access",
      "100 successful tool runs every 30 days",
      "Schema discovery and guarded tool calls",
    ],
    cta: { href: "/docs", label: "Start free" },
  },
  {
    name: "Pro",
    price: "Paid",
    description: "Upgrade path already wired through Polar checkout in the app.",
    features: [
      "100,000 successful tool runs",
      "Hosted billing through Polar",
      "Upgrade from the dashboard billing flow",
    ],
    cta: { href: "/waitlist", label: "Join Pro waitlist" },
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  url: `${siteConfig.siteUrl}/pricing`,
  applicationCategory: "DeveloperApplication",
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: plan.price === "$0" ? "0" : undefined,
    priceCurrency: plan.price === "$0" ? "USD" : undefined,
    description: plan.description,
    url: `${siteConfig.siteUrl}${plan.cta.href}`,
  })),
};

export const metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Pricing for EnginiQ, the safety layer for AI agents using Postgres, with free developer access and paid team controls.",
  path: "/pricing",
  openGraphTitle: "Pricing | EnginiQ",
  openGraphDescription:
    "Free developer access plus paid approvals, audit history, and team controls for AI-assisted Postgres workflows.",
});

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 pt-10">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
            Back to home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Pricing
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            Public pricing is based on the plans already present in the app:
            Hobby by default and Pro as the paid upgrade path.
          </p>
        </div>

        <section className="grid gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold text-zinc-100">
              Built for developer adoption
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              The free plan is structured to let teams evaluate EnginiQ with
              the SDK, CLI, and MCP workflow before expanding usage.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-100">
              Upgrade when approvals matter
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Paid usage is aimed at teams that need more tool runs, hosted
              billing, and the operational layer around AI-assisted Postgres
              changes.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-100">
              Match the rollout to your risk
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Start with safe schema discovery and previews, then move into
              higher-volume or approval-oriented production workflows.
            </p>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none"
            >
              <CardHeader>
                <CardDescription className="text-zinc-500">
                  {plan.name}
                </CardDescription>
                <CardTitle className="text-4xl">{plan.price}</CardTitle>
                <p className="text-sm leading-7 text-zinc-400">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-zinc-300"
                  >
                    {feature}
                  </div>
                ))}
                <Button
                  asChild
                  className="mt-4 w-full bg-zinc-50 text-zinc-950 hover:bg-white"
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
            <h2 className="text-2xl font-semibold">What pricing is optimized for</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              This pricing structure fits teams researching AI database tools,
              Postgres MCP workflows, or safer alternatives to raw AI-generated
              SQL. The evaluation path is intentionally simple: start free,
              validate the workflow, then upgrade when approvals and higher
              usage become operational needs.
            </p>
          </Card>
          <Card className="border-white/[0.08] bg-white/[0.03] p-6 text-zinc-50 shadow-none">
            <h2 className="text-2xl font-semibold">Next steps</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild className="bg-zinc-50 text-zinc-950 hover:bg-white">
                <Link href="/docs">Read the docs</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/[0.08] bg-transparent text-zinc-200 hover:bg-white/[0.04]"
              >
                <Link href="/demo">See the product demo</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
