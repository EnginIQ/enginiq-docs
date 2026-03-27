import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { WaitlistForm } from "@/components/waitlist-form";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Waitlist",
  description:
    "Join the EnginiQ waitlist for hosted approvals, audit logs, and safe Postgres workflows for AI agents.",
  path: "/waitlist",
  openGraphTitle: "Waitlist | EnginiQ",
  openGraphDescription:
    "Request early access to EnginiQ's hosted approvals, audit trails, and safer AI-assisted Postgres workflows.",
});

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4 pt-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Join the hosted-product waitlist
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            Tell us how you want AI agents to work with Postgres or Supabase.
            Early access is focused on teams that need approval flows, audit
            visibility, and safer database automation.
          </p>
        </div>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <CardTitle>Request early access</CardTitle>
            <CardDescription className="text-zinc-500">
              This opens your email client with a prefilled request so you can
              start collecting interested users before you build a backend form.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WaitlistForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
