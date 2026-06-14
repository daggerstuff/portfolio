/**
 * Supabase client initialization for server-side use
 * Uses service role key for authenticated database access
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    '[Supabase] INIT FAILURE: Missing env vars. SUPABASE_URL=%s, SUPABASE_KEY=%s. ' +
    'In Vercel deployments, ensure these are set as Environment Variables in the project settings. ' +
    'Server-only env vars (no PUBLIC_ prefix) are only available in serverless/edge functions at runtime.',
    supabaseUrl ? 'SET' : 'MISSING',
    supabaseKey ? 'SET' : 'MISSING'
  );
} else {
  console.log('[Supabase] Client initialized successfully');
}

/**
 * Server-side Supabase client with service role privileges
 * This client bypasses Row Level Security (RLS) and should only be used in API routes
 */
export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null;

/**
 * Check if Supabase is properly configured
 */
export const isSupabaseConfigured = () => {
  return supabase !== null;
};

