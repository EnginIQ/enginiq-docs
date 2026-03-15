import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    title: "Connect Postgres or Supabase",
    description:
      "Start with a database URL and load EnginiQ in SDK, CLI, or MCP mode.",
    proof:
      "This is the first moment where the product feels real: the same runtime works across direct code, terminal usage, and agent hosts.",
  },
  {
    step: "02",
    title: "Inspect the real schema",
    description:
      "Run discovery tools like list_tables, describe_table, and get_schema.",
    proof:
      "The demo should show the agent reading actual schema state before planning a mutation.",
  },
  {
    step: "03",
    title: "Generate a preview-first change",
    description:
      "Use dry-run or approval-required mode to create a safe SQL preview for a new table or column.",
    proof:
      "This is the wedge. The product should look meaningfully safer than raw AI-generated SQL.",
  },
  {
    step: "04",
    title: "Approve or deny",
    description:
      "Review the preview inside the hosted dashboard and decide whether it should run.",
    proof:
      "The hosted product layer becomes understandable when users can see human review sitting on top of the runtime.",
  },
  {
    step: "05",
    title: "Verify and audit",
    description:
      "Apply the change, re-check the schema, and show the resulting audit event.",
    proof:
      "This closes the loop and proves the system is not just generating plans, but producing traceable outcomes.",
  },
];

export const metadata = {
  title: "Product demo",
  description:
    "See the 5-step EnginiQ demo path for safe AI-assisted Postgres workflows.",
  alternates: {
    canonical: "/demo",
  },
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
            Back to home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            The 5-minute EnginiQ demo
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            This is the exact product proof flow to use in launch posts, demos,
            calls, and videos. If a user understands these five steps, they
            understand why EnginiQ exists.
          </p>
        </div>

        <div className="grid gap-5">
          {steps.map((item) => (
            <Card
              key={item.step}
              className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-black/30 text-sm font-semibold text-zinc-300">
                    {item.step}
                  </div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-1 text-zinc-500">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-sm leading-7 text-zinc-300">
                  {item.proof}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-zinc-50 text-zinc-950 hover:bg-white">
            <Link href="/dashboard">Open hosted preview</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/[0.08] bg-transparent text-zinc-200 hover:bg-white/[0.04]"
          >
            <Link href="/launch">Open launch assets</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/[0.08] bg-transparent text-zinc-200 hover:bg-white/[0.04]"
          >
            <Link href="/go-live">Open go-live checklist</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
