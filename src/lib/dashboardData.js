export const dashboardStats = [
  {
    label: "Connected projects",
    value: "3",
    detail: "2 Supabase, 1 self-hosted Postgres",
  },
  {
    label: "Pending approvals",
    value: "4",
    detail: "2 schema changes, 2 migration runs",
  },
  {
    label: "Audit events",
    value: "148",
    detail: "Last 7 days",
  },
  {
    label: "Protected actions blocked",
    value: "12",
    detail: "Read-only or guardrail blocks",
  },
];

export const projects = [
  {
    id: "proj_prod_app",
    name: "Customer API",
    environment: "production",
    database: "Supabase Postgres",
    status: "Protected",
    trustMode: "approval-required",
    lastActivity: "2 minutes ago",
  },
  {
    id: "proj_stage_app",
    name: "Growth Experiments",
    environment: "staging",
    database: "Postgres 16",
    status: "Preview-first",
    trustMode: "dry-run default",
    lastActivity: "14 minutes ago",
  },
  {
    id: "proj_local_dev",
    name: "Agent Sandbox",
    environment: "development",
    database: "Supabase Postgres",
    status: "Read-only",
    trustMode: "read-only",
    lastActivity: "1 hour ago",
  },
];

export const approvalQueue = [
  {
    id: "apr_1024",
    project: "Customer API",
    environment: "production",
    actor: "cursor-agent",
    tool: "run_migration",
    summary: "Add invoices table and billing status column",
    trustMode: "approval_required",
    createdAt: "2026-03-14 21:18 IST",
    sqlPreview:
      'CREATE TABLE "invoices" ("id" UUID PRIMARY KEY);\nALTER TABLE "customers" ADD COLUMN "billing_status" text;',
  },
  {
    id: "apr_1025",
    project: "Growth Experiments",
    environment: "staging",
    actor: "claude-desktop",
    tool: "add_column",
    summary: "Add experiment_group column to leads",
    trustMode: "approval_required",
    createdAt: "2026-03-14 20:51 IST",
    sqlPreview:
      'ALTER TABLE "leads" ADD COLUMN "experiment_group" text;',
  },
  {
    id: "apr_1026",
    project: "Customer API",
    environment: "production",
    actor: "enginiq-cli",
    tool: "query",
    summary: "Parameterized update for invoice sync markers",
    trustMode: "approval_required",
    createdAt: "2026-03-14 19:44 IST",
    sqlPreview:
      'UPDATE invoice_jobs SET synced_at = $1 WHERE id = $2;',
  },
];

export const auditEvents = [
  {
    id: "evt_3001",
    timestamp: "2026-03-14 21:18 IST",
    project: "Customer API",
    actor: "cursor-agent",
    tool: "run_migration",
    result: "Approval required",
    environment: "production",
    trustMode: "approval_required",
  },
  {
    id: "evt_3002",
    timestamp: "2026-03-14 21:10 IST",
    project: "Agent Sandbox",
    actor: "enginiq-cli",
    tool: "create_table",
    result: "Blocked by read-only mode",
    environment: "development",
    trustMode: "read_only",
  },
  {
    id: "evt_3003",
    timestamp: "2026-03-14 20:58 IST",
    project: "Growth Experiments",
    actor: "claude-desktop",
    tool: "add_column",
    result: "Preview generated",
    environment: "staging",
    trustMode: "dry_run",
  },
  {
    id: "evt_3004",
    timestamp: "2026-03-14 20:40 IST",
    project: "Customer API",
    actor: "enginiq-cli",
    tool: "doctor",
    result: "Success",
    environment: "production",
    trustMode: "apply",
  },
  {
    id: "evt_3005",
    timestamp: "2026-03-14 19:44 IST",
    project: "Customer API",
    actor: "enginiq-cli",
    tool: "query",
    result: "Approval required",
    environment: "production",
    trustMode: "approval_required",
  },
];

export const policyChecklist = [
  "Require approval for production mutations",
  "Keep staging in dry-run by default",
  "Block direct writes in development sandboxes",
  "Record actor and environment metadata for every tool run",
];
