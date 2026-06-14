import type { APIRoute } from 'astro';
import { supabase, isSupabaseConfigured } from '../../../lib/supabase';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const GET: APIRoute = async () => {
  if (!isSupabaseConfigured()) {
    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseKey = import.meta.env.SUPABASE_KEY;
    console.error(
      '[api/content/backgrounds] Supabase not configured. SUPABASE_URL=%s, SUPABASE_KEY=%s, runtime=%s',
      supabaseUrl ? 'SET' : 'MISSING',
      supabaseKey ? 'SET' : 'MISSING',
      typeof globalThis.process?.env?.VERCEL !== 'undefined' ? 'vercel' : 'unknown'
    );
    return json([]);
  }

  try {
    const { data, error: dbError } = await supabase!
      .from('backgrounds')
      .select('id, url, display_url, name')
      .order('created_at', { ascending: false });

    if (dbError) {
      console.error('[api/content/backgrounds] Database error:', dbError.message, dbError.code);
      return json([]);
    }

    console.log('[api/content/backgrounds] Returned %d backgrounds', data?.length ?? 0);
    return json(data || []);
  } catch (err) {
    console.error('[api/content/backgrounds] Unexpected error:', err instanceof Error ? err.message : err);
    return json([]);
  }
};

