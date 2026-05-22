-- ==========================================
-- Habilitar Row Level Security (RLS) en PostgreSQL / Supabase
-- ==========================================

-- 1. Habilitar RLS en una tabla específica
-- Reemplaza 'nombre_tabla' por el nombre de tu tabla (por ejemplo: 'contactos', 'usuarios', etc.)
ALTER TABLE IF EXISTS "public"."nombre_tabla" ENABLE ROW LEVEL SECURITY;

-- 2. Crear políticas de seguridad por defecto para restringir o permitir acceso:

-- EJEMPLO A: Permitir solo inserción pública (útil para formularios de contacto donde cualquiera puede escribir)
-- CREATE POLICY "Permitir inserción pública" 
-- ON "public"."nombre_tabla" 
-- FOR INSERT 
-- TO public 
-- WITH CHECK (true);

-- EJEMPLO B: Permitir lectura solo a usuarios autenticados
-- CREATE POLICY "Permitir lectura a usuarios autenticados" 
-- ON "public"."nombre_tabla" 
-- FOR SELECT 
-- TO authenticated 
-- USING (true);

-- EJEMPLO C: Control total solo para el propietario de la fila
-- CREATE POLICY "Control total de filas propias" 
-- ON "public"."nombre_tabla" 
-- FOR ALL 
-- TO authenticated 
-- USING (auth.uid() = user_id) 
-- WITH CHECK (auth.uid() = user_id);
