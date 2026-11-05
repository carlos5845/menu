/**
 * Configuración central de credenciales de Supabase
 * Diseñado para cambiar de local a producción simplemente actualizando .env.local
 */
export const SUPABASE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://127.0.0.1:54321',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.placeholder',
}
