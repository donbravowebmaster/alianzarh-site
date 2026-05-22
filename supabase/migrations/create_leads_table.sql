-- =========================================================================
-- MIGRACIÓN DE BASE DE DATOS: CREACIÓN DE LA TABLA LEADS (ALIANZA RH SITE)
-- =========================================================================
-- Este script crea la tabla para almacenar leads de contacto y establece
-- políticas de seguridad a nivel de fila (RLS).
-- =========================================================================

-- 1. Crear la tabla de prospectos (leads) si no existe
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre TEXT NOT NULL,
    empresa TEXT NOT NULL,
    cargo TEXT,
    email TEXT NOT NULL,
    telefono TEXT,
    vacantes TEXT,
    urgencia TEXT,
    mensaje TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. Crear política para permitir la inserción pública (necesaria para el formulario)
CREATE POLICY "Permitir inserción de leads" 
ON public.leads 
FOR INSERT 
TO public 
WITH CHECK (true);

-- 4. Crear política para restringir la lectura (solo usuarios autenticados como tu CRM)
CREATE POLICY "Permitir lectura solo a autenticados" 
ON public.leads 
FOR SELECT 
TO authenticated 
USING (true);
