import { Client } from 'pg';

export async function query(text, params) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    await client.connect();
    try {
        const res = await client.query(text, params);
        return res.rows;
    } finally {
        await client.end();
    }
}

export async function getDashboardStats(actorId) {
    if (!actorId) return [];

    const stats = [];

    // 1. Projects count
    const projects = await query('SELECT COUNT(*) FROM enginiq_projects WHERE owner_id = $1', [actorId]);
    stats.push({
        label: "Connected projects",
        value: projects[0].count,
        detail: "Active project environments"
    });

    // 2. Pending approvals
    const approvals = await query(
        'SELECT COUNT(*) FROM enginiq_approvals WHERE actor_id = $1 AND status = $2',
        [actorId, 'pending']
    );
    stats.push({
        label: "Pending approvals",
        value: approvals[0].count,
        detail: "Awaiting decision"
    });

    // 3. Audit events (Success)
    const audit = await query(
        'SELECT COUNT(*) FROM enginiq_audit_logs WHERE actor_id = $1 AND status = $2',
        [actorId, 'success']
    );
    stats.push({
        label: "Successful actions",
        value: audit[0].count,
        detail: "Executed tools"
    });

    // 4. Blocked actions
    const blocked = await query(
        'SELECT COUNT(*) FROM enginiq_audit_logs WHERE actor_id = $1 AND status = $2',
        [actorId, 'failed']
    );
    stats.push({
        label: "Blocked actions",
        value: blocked[0].count,
        detail: "Security/Guardrail blocks"
    });

    return stats;
}

export async function getProjects(actorId) {
    return await query(
        'SELECT * FROM enginiq_projects WHERE owner_id = $1 ORDER BY last_activity DESC',
        [actorId]
    );
}

export async function getApprovals(actorId) {
    return await query(
        `SELECT a.*, p.name as project_name, p.environment 
         FROM enginiq_approvals a
         JOIN enginiq_projects p ON a.project_id = p.id
         WHERE a.actor_id = $1 AND a.status = 'pending'
         ORDER BY a.created_at DESC`,
        [actorId]
    );
}

export async function getPolicies(projectId) {
    return await query(
        'SELECT * FROM enginiq_policies WHERE project_id = $1',
        [projectId]
    );
}

export async function getAuditEvents(actorId) {
    return await query(
        `SELECT l.*, p.name as project_name
         FROM enginiq_audit_logs l
         LEFT JOIN enginiq_projects p ON l.project_id = p.id
         WHERE l.actor_id = $1
         ORDER BY l.created_at DESC
         LIMIT 10`,
        [actorId]
    );
}

export async function getAuditLogs(actorId) {
    return await query(
        `SELECT l.*, p.name as project_name
         FROM enginiq_audit_logs l
         LEFT JOIN enginiq_projects p ON l.project_id = p.id
         WHERE l.actor_id = $1
         ORDER BY l.created_at DESC
         LIMIT 20`,
        [actorId]
    );
}

export async function getBillingData(actorId) {
    const subs = await query(
        'SELECT * FROM enginiq_subscriptions WHERE actor_id = $1 AND status = $2 LIMIT 1',
        [actorId, 'active']
    );

    const usageResult = await query(
        `SELECT COUNT(*) as count 
         FROM enginiq_audit_logs 
         WHERE actor_id = $1 AND status = 'success' AND created_at >= NOW() - INTERVAL '30 days'`,
        [actorId]
    );

    const usageMonthly = parseInt(usageResult[0]?.count || '0', 10);

    if (subs.length === 0) {
        return {
            currentPlan: "Hobby",
            status: "Active",
            usageMonthly,
            usageLimit: 100,
            nextBillingDate: "End of month",
            invoiceHistory: []
        };
    }

    const sub = subs[0];
    return {
        currentPlan: sub.plan_name,
        status: sub.status,
        usageMonthly,
        usageLimit: sub.usage_limit,
        nextBillingDate: new Date(sub.current_period_end).toLocaleDateString(),
        invoiceHistory: [] // To be fetched from Polar SDK if needed
    };
}

export async function getProjectById(id, ownerId) {
  const res = await query(
    `SELECT * FROM enginiq_projects WHERE id = $1 AND owner_id = $2 LIMIT 1`,
    [id, ownerId]
  );
  return res[0];
}

export async function getApiKeys(actorId) {
  return await query(
    'SELECT * FROM enginiq_api_keys WHERE actor_id = $1 ORDER BY created_at DESC',
    [actorId]
  );
}
