const NEXT_PUBLIC_SERVER_DOMAIN = process.env
  .NEXT_PUBLIC_SERVER_DOMAIN as string;
const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env
  .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export {
  NEXT_PUBLIC_SERVER_DOMAIN,
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
};