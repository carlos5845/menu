-- ==============================================================================
-- CARTA MANOLO - ESQUEMA INICIAL DE BASE DE DATOS
-- Categorías, Platos, RLS y Políticas de Seguridad
-- ==============================================================================

-- Habilitar extensión UUID si no existe
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABLA CATEGORIES
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    subtitle TEXT,
    image_url TEXT,
    position INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TABLA DISHES (Platos)
CREATE TABLE IF NOT EXISTS public.dishes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT,
    ingredients TEXT,
    price NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    image_url TEXT,
    label TEXT, -- 'RECOMENDADO', 'NUEVO', 'ESPECIAL', etc.
    label_color TEXT DEFAULT 'green', -- 'green' | 'coral'
    is_available BOOLEAN DEFAULT true,
    is_published BOOLEAN DEFAULT true,
    position INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(category_id, slug)
);

-- Índices para búsqueda y ordenamiento rápido
CREATE INDEX IF NOT EXISTS idx_categories_position ON public.categories(position);
CREATE INDEX IF NOT EXISTS idx_dishes_category_id ON public.dishes(category_id);
CREATE INDEX IF NOT EXISTS idx_dishes_position ON public.dishes(position);
CREATE INDEX IF NOT EXISTS idx_dishes_is_published ON public.dishes(is_published);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON public.categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_dishes_updated_at
    BEFORE UPDATE ON public.dishes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==============================================================================
-- POLÍTICAS DE SEGURIDAD (Row Level Security - RLS)
-- ==============================================================================

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dishes ENABLE ROW LEVEL SECURITY;

-- Lectura pública: Cualquier comensal puede ver categorías activas y platos publicados
CREATE POLICY "Lectura pública de categorías activas"
    ON public.categories FOR SELECT
    USING (is_active = true OR auth.role() = 'authenticated');

CREATE POLICY "Lectura pública de platos publicados"
    ON public.dishes FOR SELECT
    USING (is_published = true OR auth.role() = 'authenticated');

-- Acceso total solo a usuarios administradores autenticados
CREATE POLICY "Admin gestión completa categorías"
    ON public.categories FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admin gestión completa platos"
    ON public.dishes FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ==============================================================================
-- BUCKETS DE STORAGE (Imágenes de la Carta)
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('menu-images', 'menu-images', true)
ON CONFLICT (id) DO NOTHING;

-- Políticas para el Bucket de imágenes
CREATE POLICY "Imágenes públicas visibles por todos"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'menu-images');

CREATE POLICY "Admin sube y modifica imágenes"
    ON storage.objects FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'menu-images');

CREATE POLICY "Admin elimina imágenes"
    ON storage.objects FOR DELETE
    TO authenticated
    USING (bucket_id = 'menu-images');
