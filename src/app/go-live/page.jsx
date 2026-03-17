import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { launchChecklist } from "@/lib/launchData";

export const metadata = {
  title: "Go-live checklist",
  description:
    "Execution checklist for launching EnginiQ, deploying the docs app, and submitting the sitemap to Google Search Console.",
  alternates: {
    canonical: "/go-live",
  },
};

export default function GoLivePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4 pt-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Go-live checklist
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            Use this page as the execution list for launch day. It is ordered so
            you can move from deploy to indexing to distribution without losing
            momentum.
          </p>
        </div>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <CardTitle>Launch steps</CardTitle>
            <CardDescription className="text-zinc-500">
              Follow these in order on launch day.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {launchChecklist.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-zinc-300"
              >
                {index + 1}. {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
