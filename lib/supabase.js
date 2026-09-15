/**
 * Server-only Supabase client.
 *
 * Uses the service role key, which bypasses row-level security. It must never
 * reach the browser: keep the variable name free of the NEXT_PUBLIC_ prefix
 * and only import this from route handlers or server components.
 *
 * Returns null when the environment is not configured, so callers can degrade
 * instead of crashing.
 */
import { createClient } from "@supabase/supabase-js";

let client = null;

export function supabaseAdmin() {
  if (client) return client;
  // Tolerate a value pasted with surrounding quotes, angle brackets or stray
  // whitespace — common .env mistakes that otherwise surface only as the
  // unhelpful "Invalid API key".
  const clean = (v) => (v ? v.trim().replace(/^["'<]|["'>]$/g, "").trim() : "");
  const url = clean(process.env.SUPABASE_URL);
  const key = clean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  if (!url || !key) return null;
  client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
