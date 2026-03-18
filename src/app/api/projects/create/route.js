import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { query } from '@/lib/db';

export async function POST(req) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { name, environment, supabase_url, supabase_key, trust_mode } = await req.json();

    if (!name || !supabase_url || !supabase_key) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert the project into the database
    const result = await query(
      `INSERT INTO enginiq_projects (owner_id, name, environment, database_type, trust_mode, supabase_url, supabase_key) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [user.id, name, environment || 'development', 'Supabase Postgres', trust_mode || 'dry_run', supabase_url, supabase_key]
    );

    return NextResponse.json({ success: true, project: result[0] });
  } catch (error) {
    console.error('Project creation error:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
