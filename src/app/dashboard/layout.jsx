import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site";
import { LayoutDashboard, ShieldCheck, ScrollText, DatabaseZap } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/approvals", label: "Approvals", icon: ShieldCheck },
  { href: "/dashboard/audit", label: "Audit log", icon: ScrollText },
];

export const metadata = {
  title: "Hosted dashboard preview",
  description:
    "Hosted-product preview for EnginiQ with projects, approval queue, and audit logs.",
  alternates: {
    canonical: "/dashboard",
  },
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-50">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-0 lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-white/[0.08] bg-[#0D0D10] lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col px-5 py-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-zinc-700 to-zinc-900">
                <span className="text-sm font-semibold text-zinc-100">EQ</span>
              </div>
              <div>
                <p className="font-semibold tracking-tight">EnginiQ</p>
                <p className="text-xs text-zinc-500">Hosted preview</p>
              </div>
            </Link>

            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-center gap-2">
                <DatabaseZap className="h-4 w-4 text-emerald-400" />
                <p className="text-sm font-medium text-zinc-100">Phase 3 MVP</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Project dashboard for safe Postgres operations with approvals and
                audit visibility.
              </p>
            </div>

            <nav className="mt-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:border-white/[0.08] hover:bg-white/[0.03] hover:text-zinc-100"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-zinc-100">Trust policy</p>
                  <p className="text-xs text-zinc-500">Production protected</p>
                </div>
                <Badge className="bg-zinc-100 text-zinc-950 hover:bg-zinc-100">
                  Live concept
                </Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {siteConfig.name} turns the safe Postgres runtime into a hosted
                approval and audit workflow.
              </p>
            </div>
          </div>
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
