import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

/**
 * Privileged Supabase Client (Service Role)
 *
 * CRITICAL SECURITY NOTICE:
 * This client bypasses Row-Level Security (RLS).
 * It MUST NEVER be imported into or executed within client components or browser bundles.
 */
export function createAdminClient() {
  if (typeof window !== 'undefined') {
    throw new Error(
      'TrainlyAI Security Violation: createAdminClient() was called in a client/browser context. Service role keys must never leak to the client.'
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-role-key';

  return createSupabaseClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
