import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { getBillingData } from "@/lib/db";
import { CreditCard, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardBillingPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const billingData = await getBillingData(user.id);

  const usagePercentage = (billingData.usageMonthly / billingData.usageLimit) * 100;

  return (
    <div className="space-y-8 px-6 py-8 md:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Billing & Usage
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Manage your subscription and tool usage
          </h1>
          <p className="max-w-3xl text-zinc-400">
            Link your account to Polar.sh to manage payments, view invoices, 
            and upgrade your tool execution limits.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <CardTitle className="text-lg">Current Plan</CardTitle>
            <CardDescription className="text-zinc-500">Your monthly subscription</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">{billingData.currentPlan}</span>
              <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/10 border-emerald-500/20">
                {billingData.status}
              </Badge>
            </div>
            <p className="text-sm text-zinc-400">Next billing date: {billingData.nextBillingDate}</p>
            <Button asChild className="w-full bg-zinc-50 text-zinc-950 hover:bg-white">
              <a href={`/api/checkout?products=${process.env.NEXT_PUBLIC_POLAR_PRO_PRODUCT_ID || '0d88d903-ba0e-41b1-81d2-b64f55e496f6'}&metadata=${encodeURIComponent(JSON.stringify({ actor_id: user.id }))}`}>
                Upgrade to Pro
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Usage</CardTitle>
            <CardDescription className="text-zinc-500">Tool executions this period</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{billingData.usageMonthly}</span>
              <span className="text-sm text-zinc-500">/ {billingData.usageLimit}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
              <div 
                className="h-full bg-emerald-500" 
                style={{ width: `${Math.min(usagePercentage, 100)}%` }}
              />
            </div>
            <p className="text-xs text-zinc-500">
              {usagePercentage.toFixed(1)}% of your monthly limit used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
            <CardTitle className="text-lg">Polar.sh Connection</CardTitle>
            <CardDescription className="text-zinc-500">Linked payment provider</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 space-y-0">
               <div className="rounded-full bg-emerald-500/10 p-2">
                 <CheckCircle2 className="h-5 w-5 text-emerald-500" />
               </div>
               <div>
                 <p className="text-sm font-medium">Verified Connection</p>
                 <p className="text-xs text-zinc-500">Powered by Polar.sh</p>
               </div>
            </div>
            <Button variant="outline" className="w-full border-white/[0.08] bg-transparent text-zinc-200 hover:bg-white/[0.04]">
              Manage on Polar
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription className="text-zinc-500">
            Recent payments and billing statements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/[0.08] hover:bg-transparent">
                <TableHead className="text-zinc-500">Invoice ID</TableHead>
                <TableHead className="text-zinc-500">Date</TableHead>
                <TableHead className="text-zinc-500">Amount</TableHead>
                <TableHead className="text-zinc-500">Status</TableHead>
                <TableHead className="text-right text-zinc-500">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billingData.invoiceHistory.map((invoice) => (
                <TableRow key={invoice.id} className="border-white/[0.08] hover:bg-white/[0.03]">
                  <TableCell className="font-mono text-zinc-300">{invoice.id}</TableCell>
                  <TableCell className="text-zinc-400">{invoice.date}</TableCell>
                  <TableCell className="text-zinc-200">{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-50">
                      Download
                    </Button>
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
