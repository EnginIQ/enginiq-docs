import { createClient } from "@/utils/supabase/server";
import { redirect, notFound } from "next/navigation";
import { getProjectById } from "@/lib/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, Shield, Activity } from "lucide-react";
import Link from "next/link";

export default async function ProjectDetailPage(props) {
  const params = await props.params;
  const { id } = params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const project = await getProjectById(id, user.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="space-y-8 px-6 py-8 md:px-8">
      <Link
        href="/dashboard"
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              {project.name}
            </h1>
            <Badge
              variant="outline"
              className="border-white/[0.1] bg-white/[0.04] text-zinc-300"
            >
              {project.environment}
            </Badge>
          </div>
          <p className="text-zinc-400">
            Project ID: <span className="font-mono text-xs">{project.id}</span>
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-red-500/20 text-red-400 hover:bg-red-500/10">
            Delete Project
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-zinc-500">
              <Database className="h-4 w-4" />
              <CardDescription>Database</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">{project.database_type}</p>
            <p className="mt-1 font-mono text-xs text-zinc-500">postgresql://***:***@***</p>
          </CardContent>
        </Card>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-zinc-500">
              <Shield className="h-4 w-4" />
              <CardDescription>Trust Policy</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium capitalize">{project.trust_mode.replace('_', ' ')}</p>
            <p className="mt-1 text-xs text-zinc-500">Default mode for all actions</p>
          </CardContent>
        </Card>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-zinc-500">
              <Activity className="h-4 w-4" />
              <CardDescription>Activity</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">Active</p>
            <p className="mt-1 text-xs text-zinc-500">Last activity: {new Date(project.last_activity).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-400" />
              <CardTitle className="text-sm font-medium">AI Agent Configuration</CardTitle>
            </div>
            <CardDescription className="text-zinc-500">
              Configure the LLM provider for autonomous loops.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-black/20">
               <span className="text-sm text-zinc-400">Provider</span>
               <Badge variant="outline" className="text-zinc-300 capitalize">{project.llm_provider || 'Gemini (Default)'}</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-black/20">
               <span className="text-sm text-zinc-400">API Key</span>
               <span className="text-xs font-mono text-zinc-500">{project.llm_key ? '••••••••' : 'Not Set'}</span>
            </div>
            <Button variant="ghost" className="w-full text-xs text-zinc-500 hover:text-zinc-100 border border-white/5">
              Edit Agent Settings
            </Button>
          </CardContent>
        </Card>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-blue-400" />
              <CardTitle className="text-sm font-medium">Vector Database</CardTitle>
            </div>
            <CardDescription className="text-zinc-500">
              Settings for RAG-based search and storage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-black/20">
               <span className="text-sm text-zinc-400">Endpoint</span>
               <span className="text-xs font-mono text-zinc-300 truncate max-w-[150px]">
                 {project.vector_db_url || 'Not Configured'}
               </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-black/20">
               <span className="text-sm text-zinc-400">Status</span>
               <Badge variant="outline" className={project.vector_db_url ? "text-emerald-400 border-emerald-500/20" : "text-zinc-500"}>
                 {project.vector_db_url ? 'Connected' : 'Offline'}
               </Badge>
            </div>
            <Button variant="ghost" className="w-full text-xs text-zinc-500 hover:text-zinc-100 border border-white/5">
              Configure Vector Store
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
        <CardHeader>
          <CardTitle>System Policies</CardTitle>
          <CardDescription className="text-zinc-500">
            Internal guardrails and automation controls for this project.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20">
                    <div>
                        <p className="text-sm font-medium">Audit Logging</p>
                        <p className="text-xs text-zinc-500">All actions are recorded in the central audit trail.</p>
                    </div>
                    <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 shadow-sm shadow-emerald-500/10">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20">
                    <div>
                        <p className="text-sm font-medium">Auto-Recovery</p>
                        <p className="text-xs text-zinc-500">Rollback transactions on failure.</p>
                    </div>
                    <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 shadow-sm shadow-emerald-500/10">Enabled</Badge>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
