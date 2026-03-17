import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  getDashboardStats, 
  getProjects, 
  getApprovals, 
} from "@/lib/db";
import { policyChecklist } from "@/lib/dashboardData";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardOverviewPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const [dashboardStats, projects, approvalQueue] = await Promise.all([
    getDashboardStats(user.id),
    getProjects(user.id),
    getApprovals(user.id),
  ]);

  return (
    <div className="space-y-8 px-6 py-8 md:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Hosted product preview
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Safe Postgres control plane for agent workflows
          </h1>
          <p className="max-w-3xl text-zinc-400">
            This dashboard is the SaaS layer on top of EnginiQ: projects,
            trust policies, approval queues, and audit visibility for teams
            using AI agents against Postgres.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-zinc-50 text-zinc-950 hover:bg-white">
            <Link href="/dashboard/approvals">Review approvals</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/[0.08] bg-transparent text-zinc-200 hover:bg-white/[0.04]"
          >
            <Link href="/dashboard/audit">Open audit log</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card
            key={stat.label}
            className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none"
          >
            <CardHeader>
              <CardDescription className="text-zinc-500">
                {stat.label}
              </CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-400">
              {stat.detail}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Project environments</CardTitle>
                <CardDescription className="text-zinc-500">
                  Each environment carries a different default trust mode.
                </CardDescription>
              </div>
              <Button asChild variant="outline" size="sm" className="border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10">
                <Link href="/dashboard/projects/new">New Project</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <p className="text-sm text-zinc-500">No projects connected yet.</p>
                <Button asChild variant="link" className="text-zinc-400 hover:text-white">
                  <Link href="/dashboard/projects/new">Create your first project</Link>
                </Button>
              </div>
            ) : (
              projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/dashboard/projects/${project.id}`}
                  className="block group"
                >
                  <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4 transition-colors group-hover:bg-white/[0.05]">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-semibold text-zinc-100">
                            {project.name}
                          </h3>
                          <Badge
                            variant="outline"
                            className="border-white/[0.1] bg-white/[0.04] text-zinc-300"
                          >
                            {project.environment}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-zinc-400">
                          {project.database_type}
                        </p>
                      </div>
                      <div className="text-left md:text-right flex flex-col items-start md:items-end gap-2">
                        <div className="flex gap-2">
                          {project.llm_provider && (
                            <Badge variant="outline" className="text-[10px] border-emerald-500/20 text-emerald-400 bg-emerald-500/5">AI READY</Badge>
                          )}
                          {project.vector_db_url && (
                            <Badge variant="outline" className="text-[10px] border-blue-500/20 text-blue-400 bg-blue-500/5">VECTOR</Badge>
                          )}
                        </div>
                        <p className="text-sm font-medium text-zinc-100 uppercase tracking-wider text-[10px]">
                          {project.trust_mode}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-zinc-500">
                      Last activity: {new Date(project.last_activity).toLocaleString()}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <CardTitle>Default trust policy</CardTitle>
            <CardDescription className="text-zinc-500">
              The hosted layer turns runtime flags into team-level policies.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {policyChecklist.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-zinc-300"
              >
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
        <CardHeader>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Approval queue snapshot</CardTitle>
              <CardDescription className="text-zinc-500">
                Preview-first changes waiting for a human decision.
              </CardDescription>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-white/[0.08] bg-transparent text-zinc-200 hover:bg-white/[0.04]"
            >
              <Link href="/dashboard/approvals">Open full queue</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {approvalQueue.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/[0.08] bg-black/20 p-4"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-zinc-100">
                      {item.summary}
                    </h3>
                    <Badge className="bg-amber-200 text-amber-950 hover:bg-amber-200">
                      {item.tool_name}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    {item.project_name} • {item.environment} • {item.actor_id}
                  </p>
                </div>
                <p className="text-sm text-zinc-500">{new Date(item.created_at).toLocaleString()}</p>
              </div>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#050506] p-4 text-xs text-zinc-300">
                <code>{item.sql_preview}</code>
              </pre>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
