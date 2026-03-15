import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { approvalQueue } from "@/lib/dashboardData";

export default function DashboardApprovalsPage() {
  return (
    <div className="space-y-8 px-6 py-8 md:px-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Approval queue
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Human review before production writes
        </h1>
        <p className="max-w-3xl text-zinc-400">
          This is the hosted-product layer that turns EnginiQ trust controls
          into team approvals. Agents generate previews, humans approve or deny,
          and every action lands in the audit log.
        </p>
      </div>

      <div className="grid gap-6">
        {approvalQueue.map((item) => (
          <Card
            key={item.id}
            className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none"
          >
            <CardHeader>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <CardTitle>{item.summary}</CardTitle>
                    <Badge className="bg-amber-200 text-amber-950 hover:bg-amber-200">
                      {item.tool}
                    </Badge>
                  </div>
                  <CardDescription className="mt-2 text-zinc-500">
                    {item.project} • {item.environment} • requested by{" "}
                    {item.actor}
                  </CardDescription>
                </div>
                <p className="text-sm text-zinc-500">{item.createdAt}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-white/[0.08] bg-[#050506] p-4">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  SQL preview
                </p>
                <pre className="overflow-x-auto text-xs text-zinc-300">
                  <code>{item.sqlPreview}</code>
                </pre>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-zinc-50 text-zinc-950 hover:bg-white">
                  Approve
                </Button>
                <Button
                  variant="outline"
                  className="border-white/[0.08] bg-transparent text-zinc-200 hover:bg-white/[0.04]"
                >
                  Request changes
                </Button>
                <Button
                  variant="outline"
                  className="border-red-400/20 bg-transparent text-red-200 hover:bg-red-500/10"
                >
                  Deny
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
