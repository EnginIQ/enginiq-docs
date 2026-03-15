import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { launchPosts } from "@/lib/launchData";

const exampleRepoFiles = [
  "README.md with 5-minute quickstart",
  "docker-compose.yml or Supabase local instructions",
  "sample .enginiqrc.json",
  "example migration JSON files",
  "one SDK example and one MCP example",
];

const videoScript = [
  "Hook: AI should help with Postgres, but nobody wants raw SQL touching production.",
  "Show the schema discovery step with list_tables and get_schema.",
  "Generate a dry-run preview for create_table or add_column.",
  "Move to the hosted approvals screen and show the SQL preview.",
  "Approve the change and end on the audit log.",
  "Close with: EnginiQ is the safe Postgres runtime for AI agents.",
];

export const metadata = {
  title: "Launch assets",
  description:
    "Launch kit for EnginiQ with example repo outline, demo video script, and distribution assets.",
  alternates: {
    canonical: "/launch",
  },
};

export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
            Back to home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Launch assets
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            Use this page as your operating sheet while posting on social
            platforms, preparing a demo, or packaging the first example repo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
            <CardHeader>
              <CardTitle>Example repo checklist</CardTitle>
              <CardDescription className="text-zinc-500">
                The simplest repo that proves EnginiQ is useful fast.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {exampleRepoFiles.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
            <CardHeader>
              <CardTitle>Short launch video script</CardTitle>
              <CardDescription className="text-zinc-500">
                Aim for a 60 to 90 second clip.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {videoScript.map((line, index) => (
                <div
                  key={line}
                  className="rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-zinc-300"
                >
                  {index + 1}. {line}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <CardTitle>Posting angles</CardTitle>
            <CardDescription className="text-zinc-500">
              Reuse these angles across X, LinkedIn, Hacker News, Reddit, and
              dev communities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Angle 1
              </p>
              <p className="mt-2 text-zinc-300">
                AI can help with Postgres, but raw SQL in production is a trust
                problem. EnginiQ makes that workflow preview-first and
                approval-friendly.
              </p>
            </div>
            <Separator className="bg-white/[0.08]" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Angle 2
              </p>
              <p className="mt-2 text-zinc-300">
                Cursor and Claude can call Postgres tools through MCP, but teams
                still need approvals and audit logs. That is the layer EnginiQ
                is building.
              </p>
            </div>
            <Separator className="bg-white/[0.08]" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Angle 3
              </p>
              <p className="mt-2 text-zinc-300">
                The real product is not “AI writes SQL.” The real product is
                “AI gets a safe Postgres workflow with previews, policies, and
                traceability.”
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
            <CardHeader>
              <CardTitle>X launch post</CardTitle>
              <CardDescription className="text-zinc-500">
                Short founder-style launch copy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/20 p-4 text-sm text-zinc-300 whitespace-pre-wrap">
                <code>{launchPosts.x}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
            <CardHeader>
              <CardTitle>LinkedIn launch post</CardTitle>
              <CardDescription className="text-zinc-500">
                Longer product framing for professional networks.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/20 p-4 text-sm text-zinc-300 whitespace-pre-wrap">
                <code>{launchPosts.linkedin}</code>
              </pre>
            </CardContent>
          </Card>
        </div>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <CardTitle>Community launch copy</CardTitle>
            <CardDescription className="text-zinc-500">
              Use these as starters for Hacker News and Reddit.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Hacker News title
              </p>
              <p className="mt-2 text-zinc-300">{launchPosts.hackernews_title}</p>
            </div>
            <Separator className="bg-white/[0.08]" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Reddit post
              </p>
              <pre className="mt-2 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/20 p-4 text-sm text-zinc-300 whitespace-pre-wrap">
                <code>{launchPosts.reddit}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
