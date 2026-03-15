import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auditEvents } from "@/lib/dashboardData";

function resultBadge(result) {
  if (result.includes("Blocked")) {
    return "bg-red-200 text-red-950 hover:bg-red-200";
  }

  if (result.includes("Approval")) {
    return "bg-amber-200 text-amber-950 hover:bg-amber-200";
  }

  if (result.includes("Preview")) {
    return "bg-sky-200 text-sky-950 hover:bg-sky-200";
  }

  return "bg-emerald-200 text-emerald-950 hover:bg-emerald-200";
}

export default function DashboardAuditPage() {
  return (
    <div className="space-y-8 px-6 py-8 md:px-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Audit log
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Every agent action, trust mode, and outcome in one place
        </h1>
        <p className="max-w-3xl text-zinc-400">
          The hosted layer turns core runtime logs into a team-readable audit
          trail with actor, environment, trust mode, and result context.
        </p>
      </div>

      <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
        <CardHeader>
          <CardTitle>Recent events</CardTitle>
          <CardDescription className="text-zinc-500">
            Preview, approval, blocked, and successful actions from all projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="min-w-[760px]">
            <TableHeader>
              <TableRow className="border-white/[0.08] hover:bg-transparent">
                <TableHead className="text-zinc-500">Time</TableHead>
                <TableHead className="text-zinc-500">Project</TableHead>
                <TableHead className="text-zinc-500">Actor</TableHead>
                <TableHead className="text-zinc-500">Tool</TableHead>
                <TableHead className="text-zinc-500">Environment</TableHead>
                <TableHead className="text-zinc-500">Trust mode</TableHead>
                <TableHead className="text-zinc-500">Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditEvents.map((event) => (
                <TableRow
                  key={event.id}
                  className="border-white/[0.08] hover:bg-white/[0.03]"
                >
                  <TableCell className="text-zinc-400">{event.timestamp}</TableCell>
                  <TableCell className="text-zinc-200">{event.project}</TableCell>
                  <TableCell className="text-zinc-400">{event.actor}</TableCell>
                  <TableCell className="font-mono text-zinc-300">{event.tool}</TableCell>
                  <TableCell className="text-zinc-400">{event.environment}</TableCell>
                  <TableCell className="text-zinc-400">{event.trustMode}</TableCell>
                  <TableCell>
                    <Badge className={resultBadge(event.result)}>{event.result}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
