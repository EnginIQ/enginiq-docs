import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Client } from 'pg';
import crypto from 'crypto';

export async function POST(req) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Generate a random high-entropy API key
  const apiKey = `eiq_${crypto.randomBytes(24).toString('hex')}`;

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    // 1. Ensure customer exists
    await client.query(
        `INSERT INTO enginiq_customers (actor_id, email) 
         VALUES ($1, $2) 
         ON CONFLICT (actor_id) DO NOTHING`,
        [user.id, user.email]
    );

    // 2. Create API key
    await client.query(
      'INSERT INTO enginiq_api_keys (actor_id, api_key, name) VALUES ($1, $2, $3)',
      [user.id, apiKey, 'New Key']
    );
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    await client.end();
  }

  return redirect("/dashboard/settings?new_key=" + apiKey);
}
