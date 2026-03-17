"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    environment: "development",
    database_url: "",
    trust_mode: "dry_run",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/projects/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Project created successfully!");
        router.push("/dashboard");
        router.refresh();
      } else {
        toast.error(data.error || "Failed to create project");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-6 py-12 md:px-8">
      <Link
        href="/dashboard"
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Connect a new project
        </h1>
        <p className="text-zinc-400">
          Add your Supabase or Postgres database to start using EnginIQ.
        </p>
      </div>

      <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription className="text-zinc-500">
            Configure how EnginIQ should interact with this database.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Project Name</Label>
              <Input
                id="name"
                placeholder="e.g. Production CRM"
                className="border-white/10 bg-black/20"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="environment">Environment</Label>
                <Select
                  value={formData.environment}
                  onValueChange={(val) => setFormData({ ...formData, environment: val })}
                >
                  <SelectTrigger className="border-white/10 bg-black/20">
                    <SelectValue placeholder="Select environment" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-zinc-900 text-zinc-200">
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="staging">Staging</SelectItem>
                    <SelectItem value="production">Production</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="trust_mode">Default Trust Mode</Label>
                <Select
                  value={formData.trust_mode}
                  onValueChange={(val) => setFormData({ ...formData, trust_mode: val })}
                >
                  <SelectTrigger className="border-white/10 bg-black/20">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-zinc-900 text-zinc-200">
                    <SelectItem value="read-only">Read Only</SelectItem>
                    <SelectItem value="dry_run">Dry Run</SelectItem>
                    <SelectItem value="approval_required">Approval Required</SelectItem>
                    <SelectItem value="apply">Full Access (Apply)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="database_url">Database Connection String</Label>
              <Input
                id="database_url"
                type="password"
                placeholder="postgresql://postgres:password@db.supabase.co:5432/postgres"
                className="border-white/10 bg-black/20"
                value={formData.database_url}
                onChange={(e) => setFormData({ ...formData, database_url: e.target.value })}
                required
              />
              <p className="text-xs text-zinc-500">
                Connection strings are encrypted at rest. We never store them as plain text.
              </p>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-50 text-zinc-900 hover:bg-white"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Create Project"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
