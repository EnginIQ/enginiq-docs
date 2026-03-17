import { createClient } from "@/utils/supabase/server";
import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function DELETE(req) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Missing key ID' }, { status: 400 });
    }

    // Delete the API key from the database
    await query(
      'DELETE FROM enginiq_api_keys WHERE id = $1 AND actor_id = $2',
      [id, user.id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API key deletion error:', error);
    return NextResponse.json({ error: 'Failed to delete API key' }, { status: 500 });
  }
}
