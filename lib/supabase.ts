import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn(
    'ADVERTENCIA: Faltan las variables de entorno de Supabase (NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY). ' +
    'El guardado en base de datos fallará, pero el correo continuará enviándose.'
  )
}

// Inicializamos el cliente de administración de Supabase.
// Se ejecuta en el servidor y utiliza service_role_key para evadir restricciones de RLS públicas y garantizar la escritura.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})
