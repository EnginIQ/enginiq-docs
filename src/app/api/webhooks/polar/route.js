import { Webhooks } from "@polar-sh/nextjs";
import { Client } from "pg";

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET,
  onPayload: async (event) => {
    if (!process.env.POLAR_WEBHOOK_SECRET) {
      console.error("POLAR_WEBHOOK_SECRET is missing! Webhook verification will fail.");
    }
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });

    try {
      await client.connect();

      if (event.type === 'subscription.created' || event.type === 'subscription.updated') {
        const sub = event.data;
        const actorId = sub.metadata?.actor_id;

        if (actorId) {
          // Sync Customer
          await client.query(
            `INSERT INTO enginiq_customers (actor_id, polar_customer_id, email)
             VALUES ($1, $2, $3)
             ON CONFLICT (actor_id) DO UPDATE SET 
               polar_customer_id = EXCLUDED.polar_customer_id, 
               email = EXCLUDED.email`,
            [actorId, sub.customer_id, sub.customer_email]
          );

          // Map Product Name to Usage Limits
          const productName = sub.product?.name || '';
          const usageLimit = productName.includes('Pro') ? 100000 : 1000;

          // Sync Subscription
          await client.query(
            `INSERT INTO enginiq_subscriptions (
               actor_id, 
               polar_subscription_id, 
               plan_name, 
               status, 
               current_period_start, 
               current_period_end, 
               usage_limit
             ) VALUES ($1, $2, $3, $4, $5, $6, $7)
             ON CONFLICT (polar_subscription_id) DO UPDATE SET 
               status = EXCLUDED.status, 
               current_period_start = EXCLUDED.current_period_start, 
               current_period_end = EXCLUDED.current_period_end,
               usage_limit = EXCLUDED.usage_limit,
               plan_name = EXCLUDED.plan_name`,
            [
              actorId, 
              sub.id, 
              productName, 
              sub.status, 
              sub.started_at || sub.current_period_start, 
              sub.ends_at || sub.current_period_end, 
              usageLimit
            ]
          );
        }
      }

      if (event.type === 'subscription.deleted') {
        const sub = event.data;
        await client.query(
          `UPDATE enginiq_subscriptions 
           SET status = 'inactive' 
           WHERE polar_subscription_id = $1`,
          [sub.id]
        );
      }
    } catch (err) {
      console.error("Internal Webhook Error:", err);
      throw err; // Re-throw so the adapter can handle it if needed
    } finally {
      await client.end();
    }
  },
});
