import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Inicializamos el cliente de administración de Supabase solo si las variables de entorno están presentes.
// Esto evita errores fatales durante el proceso de compilación (build time) en Vercel cuando las variables no están configuradas.
export const supabaseAdmin = (supabaseUrl && supabaseServiceKey)
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null

if (!supabaseAdmin) {
  console.warn(
    'ADVERTENCIA: Faltan las variables de entorno de Supabase (NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY). ' +
    'El guardado en base de datos fallará, pero el correo continuará enviándose.'
  )
}
