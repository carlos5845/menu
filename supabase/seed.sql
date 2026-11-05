-- ==============================================================================
-- SEED DATA MIGRATION DESDE LIB/DATA.TS
-- ==============================================================================

-- Categoría: CEVICHES

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('CEVICHES', 'ceviches', 'FRESCURA MARINA EN CADA BOCADO', '/bg_ceviches.webp', 1, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE MANOLO''S', 'ceviche-manolo-s-c1', 'Pescado, langostinos y pulpo en leche de tigre de la casa.', 45.00, '/item_ceviche.webp', 'RECOMENDADO', 'green', true, true, 1
FROM public.categories 
WHERE slug = 'ceviches'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE CLÁSICO', 'ceviche-clasico-c2', 'Pescado blanco fresco, limón, cilantro y ají.', 38.00, '/item_ceviche.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'ceviches'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: TIRADITOS

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('TIRADITOS', 'tiraditos', 'CORTES FINOS, SABOR INTENSO', '/bg_tiraditos.webp', 2, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TIRADITO APASIONADO', 'tiradito-apasionado-t1', 'Láminas de salmón fresco con salsa de maracuyá, hilos de camote frito y ají limo.', 42.00, '/item_tiradito.webp', 'NUEVO', 'coral', true, true, 1
FROM public.categories 
WHERE slug = 'tiraditos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TIRADITO AL OLIVO', 'tiradito-al-olivo-t2', 'Pulpo laminado finamente cubierto con nuestra exclusiva crema de aceitunas botija.', 40.00, '/item_tiradito.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'tiraditos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: MARISCOS

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('MARISCOS', 'mariscos', 'DELICIAS DEL PUERTO', '/bg_mariscos.webp', 3, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'JALEA MIXTA', 'jalea-mixta-m1', 'Chicharrón de mariscos y pescado crujiente acompañado de yuca frita y salsa criolla.', 55.00, '/item_mariscos.webp', 'RECOMENDADO', 'green', true, true, 1
FROM public.categories 
WHERE slug = 'mariscos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ARROZ CON MARISCOS', 'arroz-con-mariscos-m2', 'Arroz al wok con azafrán, cerveza negra, mix de mariscos y un toque de queso parmesano.', 48.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'mariscos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: COMBINADOS

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('COMBINADOS', 'combinados', 'NUESTRAS ESPECIALIDADES COMPLETAS', '/bg_mariscos.webp', 4, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'BALSA PERSONAL', 'balsa-personal-cmb1', 'Ceviche + chicharrón mixto + arroz con marisco + leche de tigre + piqueos de la casa.', 35.00, '/item_mariscos.webp', 'POPULAR', 'coral', true, true, 1
FROM public.categories 
WHERE slug = 'combinados'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: BALSAS (Trucha o Tilapia)

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('BALSAS (Trucha o Tilapia)', 'balsas-trucha-tilapia', 'PARA COMPARTIR CON TODOS', '/bg_mariscos.webp', 5, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'BALSA PERSONAL', 'balsa-personal-btt1', 'Ceviche + chicharrón mixto + arroz con marisco + leche de tigre + piqueos de casa. ', 35.00, '/item_mariscos.webp', 'POPULAR', 'coral', true, true, 1
FROM public.categories 
WHERE slug = 'balsas-trucha-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'DÚO PARA 2 PERSONAS', 'duo-para-2-personas-btt2', 'Ceviche + chicharrón mixto + arroz chaufa de pollo + piqueos de casa + leche de tigre. ', 57.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'balsas-trucha-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TRIPLE PARA 3 PERSONAS', 'triple-para-3-personas-btt3', 'Ceviche + arroz chaufa de pollo + arroz con mariscos + chicharrón mixto + piqueos de casa + leche de tigre. ', 69.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'balsas-trucha-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'FAMILIAR PARA 6 PERSONAS', 'familiar-para-6-personas-btt4', 'Ceviche + arroz chaufa de pollo + arroz con mariscos + chicharrón mixto + piqueos de casa + leche de tigre. ', 125.00, '/item_mariscos.webp', 'RECOMENDADO', 'green', true, true, 4
FROM public.categories 
WHERE slug = 'balsas-trucha-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: BARCOS (Jurel)

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('BARCOS (Jurel)', 'barcos-jurel', 'NUESTRA ESPECIALIDAD EN JUREL', '/bg_mariscos.webp', 6, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'BARCO PERSONAL', 'barco-personal-bj1', 'Ceviche + arroz con mariscos + chicharrón mixto + leche de tigre + piqueos de casa. ', 29.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'barcos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'DÚO PARA 2 PERSONAS', 'duo-para-2-personas-bj2', 'Ceviche + arroz chaufa de pollo + chicharrón mixto + piqueos de casa + leche de tigre. ', 48.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'barcos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TRIPLE PARA 3 PERSONAS', 'triple-para-3-personas-bj3', 'Ceviche + 1 arroz chaufa de pollo + 1 arroz con mariscos + 1 chicharrón mixto + piqueos de casa + leche de tigre. ', 58.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'barcos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'FAMILIAR PARA 6 PERSONAS', 'familiar-para-6-personas-bj4', 'Ceviche + arroz chaufa de pollo + arroz con mariscos + chicharrón mixto + piqueos de casa + leche de tigre. ', 98.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'barcos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: BALSAS Y BARCO VIP (Trucha, Jurel, Tilapia) 

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('BALSAS Y BARCO VIP (Trucha, Jurel, Tilapia) ', 'balsas-barco-vip', 'COMBINACIONES EXCLUSIVAS VIP', '/bg_mariscos.webp', 7, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PERSONAL VIP', 'personal-vip-vip1', 'Ceviche + arroz con mariscos + chicharrón de trucha + leche de tigre + choritos a la chalaca o causa. ', 40.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'balsas-barco-vip'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'DÚO PARA 2 PERSONAS VIP', 'duo-para-2-personas-vip-vip2', 'Ceviche + arroz con marisco + arroz chaufa de pollo + una porción de jalea + choritos a la chalaca o causa + leche de tigre. ', 75.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'balsas-barco-vip'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TRIPLE PARA 3 PERSONAS VIP', 'triple-para-3-personas-vip-vip3', 'Ceviche + chaufa de pollo + arroz con mariscos + chaufa de mariscos + 1 porción de jalea + choritos a la chalaca o causa + leche de tigre.', 95.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'balsas-barco-vip'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'FAMILIAR PARA 4 PERSONAS VIP', 'familiar-para-4-personas-vip-vip4', 'Ceviche + 4 porciones de arroz chaufa o arroz con marisco + 2 porciones de jalea + choritos a la chalaca + causa limeña + leche de tigre.', 125.00, '/item_mariscos.webp', 'RECOMENDADO', 'green', true, true, 4
FROM public.categories 
WHERE slug = 'balsas-barco-vip'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: CEVICHES (Solo limón)

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('CEVICHES (Solo limón)', 'ceviches-solo-limon', 'TRADICIÓN Y FRESCURA', '/bg_ceviches.webp', 8, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE DE JUREL', 'ceviche-de-jurel-csl1', 'Ceviche de jurel + cebolla + camote + lechuga + choclo desgranado. ', 23.00, '/item_ceviche.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'ceviches-solo-limon'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE DE TILAPIA', 'ceviche-de-tilapia-csl2', 'Ceviche de tilapia + cebolla + camote + lechuga + choclo desgranado.', 30.00, '/item_ceviche.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'ceviches-solo-limon'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE CLÁSICO DE TRUCHA', 'ceviche-clasico-de-trucha-csl3', 'Ceviche de trucha + cebolla + camote + lechuga + choclo desgranado.', 30.00, '/item_ceviche.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'ceviches-solo-limon'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: FESTIVAL DE LECHE DE TIGRE 

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('FESTIVAL DE LECHE DE TIGRE ', 'festival-leche-tigre', 'EL SABOR INTENSO DEL CEVICHE', '/bg_ceviches.webp', 9, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'LECHE DE TIGRE', 'leche-de-tigre-lt1', 'Leche de tigre + camote + lechuga + cebolla + choclo desgranado.', 12.00, '/item_ceviche.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'festival-leche-tigre'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'MISTURA DE LECHE DE TIGRE', 'mistura-de-leche-de-tigre-lt2', '3 copas con variedades de leches de tigre basado en diversos ajíes nativos.', 26.00, '/item_ceviche.webp', 'NUEVO', 'coral', true, true, 2
FROM public.categories 
WHERE slug = 'festival-leche-tigre'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ACOMPAÑA TU LECHE DE TIGRE 1', 'acompana-tu-leche-de-tigre-1-lt3', 'Leche de tigre acompañado de arroz con mariscos o arroz chaufa.', 20.00, '/item_ceviche.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'festival-leche-tigre'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ACOMPAÑA TU LECHE DE TIGRE 2', 'acompana-tu-leche-de-tigre-2-lt4', 'Leche de tigre acompañado de chicharrón de pescado o pota. ', 22.00, '/item_ceviche.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'festival-leche-tigre'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: CONO CEVICHERO

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('CONO CEVICHERO', 'conos-adicionales', 'COMPLEMENTOS AL PASO', '/bg_ceviches.webp', 10, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CONO CEVICHERO + ARROZ', 'cono-cevichero-arroz-con2', 'Chicharrón de pescado + papas doradas + yucas doradas + arroz con mariscos o arroz chaufa + sarsa acevichada o sarsa criolla.', 20.00, '/item_ceviche.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'conos-adicionales'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CONO CEVICHERO + LECHE DE TIGRE', 'cono-cevichero-leche-de-tigre-con3', 'Chicharrón de pescado + papas doradas + yucas doradas + sarsa acevichada + copa de leche de tigre.', 22.00, '/item_ceviche.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'conos-adicionales'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: DÚOS DE CASA

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('DÚOS DE CASA', 'duos-jurel', 'CEVICHE DE JUREL', '/bg_mariscos.webp', 11, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + CHICHARRÓN DE POTA', 'ceviche-chicharron-de-pota-dj1', 'Ceviche más chicharrón de pota + yuca frita + papa dorada.', 30.00, '/item_mariscos.webp', 'POPULAR', 'coral', true, true, 1
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + CHICHARRÓN DE PESCADO', 'ceviche-chicharron-de-pescado-dj2', 'Ceviche más chicharrón de pescado + yuca frita + papa dorada.', 28.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CHAUFA DE POLLO', 'ceviche-arroz-chaufa-de-pollo-dj3', 'Ceviche de pescado + lechuga + camote + choclo desgranado + cebolla + arroz chaufa de pollo.', 26.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CHAUFA DE MARISCOS', 'ceviche-arroz-chaufa-de-mariscos-dj4', 'Combinación clásica de ceviche de jurel con chaufa de mariscos.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CON MARISCOS', 'ceviche-arroz-con-mariscos-dj5', 'Ceviche de jurel acompañado de un sabroso arroz con mariscos.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 5
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE POTA + ARROZ CON MARISCO', 'chicharron-de-pota-arroz-con-marisco-dj6', 'Crujiente chicharrón de pota con arroz con mariscos.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 6
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE POTA + ACHAUFA DE MARISCO', 'chicharron-de-pota-achaufa-de-marisco-dj7', 'Chicharrón de pota acompañado de arroz chaufa de mariscos.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 7
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE POTA + ARROZ CHAUFA DE POLLO', 'chicharron-de-pota-arroz-chaufa-de-pollo-dj8', 'Chicharrón de pota con guarnición de chaufa de pollo.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 8
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE PESCADO + ARROZ CON MARISCO', 'chicharron-de-pescado-arroz-con-marisco-dj9', 'Trozos crujientes de pescado frito servidos con arroz con mariscos.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 9
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE PESCADO + ARROZ CHAUFA DE MARISCO', 'chicharron-de-pescado-arroz-chaufa-de-marisco-dj10', 'Pescado frito acompañado de chaufa de mariscos.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 10
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE PESCADO + ARROZ CHAUFA DE POLLO', 'chicharron-de-pescado-arroz-chaufa-de-pollo-dj11', 'Chicharrón de pescado con chaufa de pollo.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 11
FROM public.categories 
WHERE slug = 'duos-jurel'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: DÚOS DE CASA

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('DÚOS DE CASA', 'duos-tilapia', 'CEVICHE DE TILAPIA', '/bg_mariscos.webp', 12, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + CHICHARRÓN DE POTA', 'ceviche-chicharron-de-pota-dt1', 'Ceviche más chicharrón de pota + yuca frita + papa dorada.', 33.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'duos-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + CHICHARRÓN DE PESCADO', 'ceviche-chicharron-de-pescado-dt2', 'Ceviche más chicharrón de pescado + yuca frita + papa dorada.', 32.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'duos-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + DE ARROZ CHAUFA DE POLLO', 'ceviche-de-arroz-chaufa-de-pollo-dt3', 'Ceviche de pescado + lechuga + camote + choclo desgranado + cebolla + arroz chaufa de pollo.', 32.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'duos-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CHAUFA DE MARISCOS', 'ceviche-arroz-chaufa-de-mariscos-dt4', 'Ceviche de tilapia con chaufa de mariscos.', 32.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'duos-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CON MARISCOS', 'ceviche-arroz-con-mariscos-dt5', 'Ceviche de tilapia + lechuga + camote + choclo desgranado + cebolla + arroz con mariscos.', 32.00, '/item_mariscos.webp', NULL, 'green', true, true, 5
FROM public.categories 
WHERE slug = 'duos-tilapia'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: DÚOS DE CASA

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('DÚOS DE CASA', 'duos-trucha', 'CEVICHE DE TRUCHA', '/bg_mariscos.webp', 13, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + CHICHARRÓN DE POTA', 'ceviche-chicharron-de-pota-dtr1', 'Ceviche más chicharrón de pota + yuca frita + papa dorada.', 35.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'duos-trucha'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + CHICHARRÓN DE PESCADO', 'ceviche-chicharron-de-pescado-dtr2', 'Ceviche más chicharrón de pescado + yuca frita + papa dorada.', 32.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'duos-trucha'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + DE ARROZ CHAUFA DE POLLO', 'ceviche-de-arroz-chaufa-de-pollo-dtr3', 'Ceviche de pescado + lechuga + camote + choclo desgranado + cebolla + arroz chaufa de pollo.', 32.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'duos-trucha'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CHAUFA DE MARISCOS', 'ceviche-arroz-chaufa-de-mariscos-dtr4', 'Ceviche de trucha servido con chaufa de mariscos.', 32.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'duos-trucha'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CON MARISCOS', 'ceviche-arroz-con-mariscos-dtr5', 'Ceviche de pescado + lechuga + camote + choclo desgranado + cebolla + arroz con mariscos.', 32.00, '/item_mariscos.webp', NULL, 'green', true, true, 5
FROM public.categories 
WHERE slug = 'duos-trucha'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: ARROCES

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('ARROCES', 'arroces', 'NUESTRAS ESPECIALIDADES AL WOK', '/bg_mariscos.webp', 14, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ARROZ CON MARISCOS', 'arroz-con-mariscos-arr1', 'Deliciosa preparación que combina el sabor y la textura del arroz con una variedad de mariscos frescos.', 25.00, '/item_mariscos.webp', 'RECOMENDADO', 'green', true, true, 1
FROM public.categories 
WHERE slug = 'arroces'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ARROZ CHAUFA DE MARISCOS', 'arroz-chaufa-de-mariscos-arr2', 'Delicioso y abundante arroz chaufa de mariscos que combina la frescura y sabor de los mariscos con el arroz frito y los sabores orientales.', 25.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'arroces'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ARROZ CHAUFA DE POLLO', 'arroz-chaufa-de-pollo-arr3', 'Delicioso arroz frito con trozos de pollo.', 20.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'arroces'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHAUFA DE PESCADO', 'chaufa-de-pescado-arr4', 'Delicioso arroz frito con trozos de chicharrón de pescado.', 25.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'arroces'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: CAUSAS

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('CAUSAS', 'causas', 'TRADICIÓN Y SABOR', '/bg_ceviches.webp', 15, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CAUSA ACEVICHADA (Ceviche de JUREL)', 'causa-acevichada-ceviche-de-jurel-cau1', 'Deliciosa causa cubierto de nuestro tradicional ceviche de pescado.', 25.00, '/item_ceviche.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'causas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CAUSA ACEVICHADA (Ceviche de TRUCHA)', 'causa-acevichada-ceviche-de-trucha-cau2', 'Deliciosa causa cubierto de nuestro tradicional ceviche de pescado.', 33.00, '/item_ceviche.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'causas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CAUSA ACEVICHADA (Ceviche de TILAPIA)', 'causa-acevichada-ceviche-de-tilapia-cau3', 'Deliciosa causa cubierto de nuestro tradicional ceviche de pescado.', 33.00, '/item_ceviche.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'causas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: TRIPLES MARINOS

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('TRIPLES MARINOS', 'triples-marinos', 'CEVICHE DE JUREL Y ESPECIALIDADES DE TRUCHA', '/bg_mariscos.webp', 16, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CON MARISCOS + CHICHARRÓN DE PESCADO', 'ceviche-arroz-con-mariscos-chicharron-de-pescado-tm1', 'Combinación triple clásica de la casa.', 37.00, '/item_mariscos.webp', 'POPULAR', 'coral', true, true, 1
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CON MARISCOS + CHICHARRÓN DE POTA', 'ceviche-arroz-con-mariscos-chicharron-de-pota-tm2', 'Tres delicias combinadas con chicharrón de pota.', 37.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CHAUFA DE POLLO + CHICHARRÓN DE PESCADO', 'ceviche-arroz-chaufa-de-pollo-chicharron-de-pescado-tm3', 'Mezcla de sabores marinos y chaufa.', 37.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CHAUFA DE POLLO + CHICHARRÓN DE POTA', 'ceviche-arroz-chaufa-de-pollo-chicharron-de-pota-tm4', 'Triple especial con chicharrón de pota.', 37.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CHAUFA DE MARISCOS + CHICHARRÓN DE PESCADO', 'ceviche-arroz-chaufa-de-mariscos-chicharron-de-pescado-tm5', 'Un festín de mariscos y pescado fresco.', 37.00, '/item_mariscos.webp', NULL, 'green', true, true, 5
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + ARROZ CHAUFA DE MARISCOS + CHICHARRÓN DE POTA', 'ceviche-arroz-chaufa-de-mariscos-chicharron-de-pota-tm6', 'Ceviche fresco con chaufa y pota crujiente.', 37.00, '/item_mariscos.webp', NULL, 'green', true, true, 6
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE + CHICHARRÓN DE PESCADO + CAUSA', 'ceviche-chicharron-de-pescado-causa-tm7', 'Trío de clásicos con nuestra causa de la casa.', 37.00, '/item_mariscos.webp', NULL, 'green', true, true, 7
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE DE TRUCHA + ARROZ CON MARISCOS + CHICHARRÓN DE PESCADO Ó POTA', 'ceviche-de-trucha-arroz-con-mariscos-chicharron-de-pescado-o-pota-tm8', 'Especialidad en trucha acompañada de arroz y chicharrón a elección.', 42.00, '/item_mariscos.webp', NULL, 'green', true, true, 8
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE DE TRUCHA + CHAUFA MARISCOS + CHICHARRÓN DE PESCADO Ó POTA', 'ceviche-de-trucha-chaufa-mariscos-chicharron-de-pescado-o-pota-tm9', 'Trucha fresca con chaufa y opción de chicharrón.', 42.00, '/item_mariscos.webp', NULL, 'green', true, true, 9
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE DE TRUCHA + CHAUFA DE POLLO + CHICHARRÓN DE PESCADO Ó POTA', 'ceviche-de-trucha-chaufa-de-pollo-chicharron-de-pescado-o-pota-tm10', 'Combinación de trucha, chaufa de pollo y crujiente chicharrón.', 42.00, '/item_mariscos.webp', NULL, 'green', true, true, 10
FROM public.categories 
WHERE slug = 'triples-marinos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: ARMA TU TRIO MARINO

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('ARMA TU TRIO MARINO', 'arma-trio', 'A TU ELECCIÓN', '/bg_mariscos.webp', 17, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ESCOGE 3 OPCIONES', 'escoge-3-opciones-atm1', 'ceviche, leche de tigre, arroz con mariscos, arroz chaufa de mariscos, chicharrón de pota, chicharrón de pescado, causa.', 39.00, '/item_mariscos.webp', 'NUEVO', 'coral', true, true, 1
FROM public.categories 
WHERE slug = 'arma-trio'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: SUDADOS

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('SUDADOS', 'sudados', 'PLATOS CALIENTES DEL MAR', '/bg_mariscos.webp', 18, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'SUDADO DE TRUCHA', 'sudado-de-trucha-sud1', 'Sudado de trucha + porción de arroz blanco.', 25.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'sudados'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'SUDADO DE PESCADO DE MAR', 'sudado-de-pescado-de-mar-sud2', 'Sudado de pescado de mar + porción de arroz blanco.', 28.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'sudados'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PARIHUELA', 'parihuela-sud3', 'Filete de pescado de mar (tilapia) + cangrejo + mixtura de mariscos y mi porción de arroz blanco.', 36.00, '/item_mariscos.webp', 'RECOMENDADO', 'green', true, true, 3
FROM public.categories 
WHERE slug = 'sudados'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: PARA LOS ENGREÍDOS DE CASA

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('PARA LOS ENGREÍDOS DE CASA', 'engreidos-casa', 'OPCIONES PARA NIÑOS', '/bg_ceviches.webp', 19, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CEVICHE KIDS', 'ceviche-kids-kid1', 'Una versión suave y deliciosa para los más pequeños.', 22.00, '/item_ceviche.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'engreidos-casa'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'LECHE DE TIGRE KIDS', 'leche-de-tigre-kids-kid2', 'Leche de tigre especial para niños.', 12.00, '/item_ceviche.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'engreidos-casa'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'NUGGETS DE POLLO CON ARROZ BLANCO', 'nuggets-de-pollo-con-arroz-blanco-kid3', 'Nuggets de pollo + papas fritas + arroz blanco + ensalada de lechuga.', 18.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'engreidos-casa'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'NUGGETS DE POLLO CON CHAUFA', 'nuggets-de-pollo-con-chaufa-kid4', 'Nuggets de pollo + papas fritas + arroz chaufa de pollo + ensalada de lechuga.', 23.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'engreidos-casa'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: FRITOS

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('FRITOS', 'fritos', 'CRUJIENTES Y DELICIOSOS', '/bg_mariscos.webp', 20, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'JALEA PERSONAL', 'jalea-personal-fri1', 'Chicharrón mixto + chicharrón de mariscos + papas doradas + yucas doradas + sarsa criolla acevichada.', 35.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'fritos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PESCADO FRITO DE MAR (ENTERO) CON ARROZ BLANCO', 'pescado-frito-de-mar-entero-con-arroz-blanco-fri2', 'Pescado frito de mar + arroz blanco + papas doradas + yucas doradas + sarsa criolla.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'fritos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PESCADO FRITO DE MAR (ENTERO) CON CHAUFA', 'pescado-frito-de-mar-entero-con-chaufa-fri3', 'Pescado frito de mar + arroz chaufa de pollo + papas doradas + yucas doradas + sarsa criolla.', 35.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'fritos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE PESCADO', 'chicharron-de-pescado-fri4', 'Chicharrón de pescado + arroz blanco + papas doradas + yucas doradas + sarsa criolla.', 28.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'fritos'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: COMBINADOS MANOLO'S

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('COMBINADOS MANOLO''S', 'combinados-manolo', 'BARCO O BALSA', '/bg_mariscos.webp', 21, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PESCADO FRITO DE MAR + ARROZ BLANCO + CEVICHE', 'pescado-frito-de-mar-arroz-blanco-ceviche-cmb2', 'Ceviche de pescado + camote + choclo desgranado + lechuga + cebolla acompañado de pescado frito + porción de arroz blanco.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'combinados-manolo'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PESCADO FRITO DE MAR + CHAUFA DE POLLO + CEVICHE', 'pescado-frito-de-mar-chaufa-de-pollo-ceviche-cmb3', 'Ceviche de pescado + camote + choclo desgranado + lechuga + cebolla acompañado de pescado frito + porción de chaufa de pollo.', 35.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'combinados-manolo'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TRUCHA FRITA + ARROZ BLANCO + CEVICHE', 'trucha-frita-arroz-blanco-ceviche-cmb4', 'Ceviche de pescado + camote + choclo desgranado + lechuga + cebolla acompañado de trucha frita + porción de arroz blanco.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'combinados-manolo'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TRUCHA FRITA + CHAUFA DE POLLO + CEVICHE', 'trucha-frita-chaufa-de-pollo-ceviche-cmb5', 'Ceviche de pescado + camote + choclo desgranado + lechuga + cebolla acompañado de trucha frita + porción de chaufa de pollo.', 35.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'combinados-manolo'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: PORCIONES

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('PORCIONES', 'porciones', 'GUARNICIONES Y EXTRAS', '/bg_mariscos.webp', 22, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'YUCA DORADA', 'yuca-dorada-por1', 'Porción extra de yuca dorada.', 9.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PAPA DORADA', 'papa-dorada-por2', 'Porción extra de papa dorada.', 6.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PAPA SANCOCHADA', 'papa-sancochada-por3', 'Porción extra de papa sancochada.', 4.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CAMOTE SANCOCHADO', 'camote-sancochado-por4', 'Porción extra de camote.', 4.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TEQUEÑOS (6 UNIDADES)', 'tequenos-6-unidades-por5', '6 crujientes tequeños.', 10.00, '/item_mariscos.webp', NULL, 'green', true, true, 5
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE POTA', 'chicharron-de-pota-por6', 'Porción de chicharrón de pota.', 15.00, '/item_mariscos.webp', NULL, 'green', true, true, 6
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE PESCADO', 'chicharron-de-pescado-por7', 'Porción de chicharrón de pescado.', 15.00, '/item_mariscos.webp', NULL, 'green', true, true, 7
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ARROZ BLANCO', 'arroz-blanco-por8', 'Porción de arroz blanco.', 5.00, '/item_mariscos.webp', NULL, 'green', true, true, 8
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHAUFA DE MARISCOS', 'chaufa-de-mariscos-por9', 'Porción de chaufa de mariscos.', 10.00, '/item_mariscos.webp', NULL, 'green', true, true, 9
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ARROZ CON MARISCOS', 'arroz-con-mariscos-por10', 'Porción extra de arroz con mariscos.', 10.00, '/item_mariscos.webp', NULL, 'green', true, true, 10
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHAUFA DE POLLO', 'chaufa-de-pollo-por11', 'Porción extra de chaufa de pollo.', 10.00, '/item_mariscos.webp', NULL, 'green', true, true, 11
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'SARSA CRIOLLA', 'sarsa-criolla-por12', 'Porción de sarsa criolla.', 5.00, '/item_mariscos.webp', NULL, 'green', true, true, 12
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'ENSALADA DE LECHUGA', 'ensalada-de-lechuga-por13', 'Porción de ensalada fresca.', 5.00, '/item_mariscos.webp', NULL, 'green', true, true, 13
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CANCHITA', 'canchita-por14', 'Porción de canchita paccho.', 5.00, '/item_mariscos.webp', NULL, 'green', true, true, 14
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHILCANO ESPECIAL', 'chilcano-especial-por15', 'Taza de chilcano especial.', 5.00, '/item_mariscos.webp', NULL, 'green', true, true, 15
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'PORCIÓN DE CEVICHE', 'porcion-de-ceviche-por16', 'Porción extra de ceviche.', 10.00, '/item_mariscos.webp', NULL, 'green', true, true, 16
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, '6 CHORITOS A LA CHALACA', '6-choritos-a-la-chalaca-por17', '6 choritos preparados a la chalaca.', 15.00, '/item_mariscos.webp', NULL, 'green', true, true, 17
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CAUSA LIMEÑA', 'causa-limena-por18', 'Porción de causa limeña.', 10.00, '/item_mariscos.webp', NULL, 'green', true, true, 18
FROM public.categories 
WHERE slug = 'porciones'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: PLATOS DE LA REGIÓN

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('PLATOS DE LA REGIÓN', 'platos-region', 'SABORES LOCALES', '/bg_mariscos.webp', 23, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'TRUCHA FRITA', 'trucha-frita-reg1', 'Trucha frita + arroz blanco + papas doradas + yucas doradas + tunta + sarsa criolla.', 22.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'platos-region'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE TRUCHA', 'chicharron-de-trucha-reg2', 'Chicharrón de trucha + papas doradas + yucas doradas + tunta + choclo + sarsa criolla.', 25.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'platos-region'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE POLLO', 'chicharron-de-pollo-reg3', 'Chicharrón de pollo + papas doradas + tunta + yucas doradas + choclo + sarsa criolla.', 28.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'platos-region'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COSTILLAR FRITO (MEDIA COSTILLA)', 'costillar-frito-media-costilla-reg4', 'Costillar frito + arroz blanco + tunta + papas doradas + yucas doradas + sarsa criolla.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'platos-region'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN DE CHANCHO', 'chicharron-de-chancho-reg5', 'Chicharrón de chancho + choclo + papas doradas + yucas doradas + tunta + sarsa criolla.', 30.00, '/item_mariscos.webp', NULL, 'green', true, true, 5
FROM public.categories 
WHERE slug = 'platos-region'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: CHICHARRÓN MIXTO

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('CHICHARRÓN MIXTO', 'chicharron-mixto', 'POLLO Y CHANCHO', '/bg_mariscos.webp', 24, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHARRÓN MIXTO (POLLO, CHANCHO)', 'chicharron-mixto-pollo-chancho-cm1', 'Chicharrón mixto, pollo, chancho + choclo + tunta + papas doradas + yucas doradas + sarsa criolla.', 35.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'chicharron-mixto'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;

-- Categoría: BEBIDAS

INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('BEBIDAS', 'bebidas', 'REFRESCOS, GASEOSAS E INFUSIONES', '/bebidas.png', 25, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'LIMONADA 1 LT', 'limonada-1-lt-beb1', 'Refresco', 12.00, '/item_mariscos.webp', NULL, 'green', true, true, 1
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'LIMONADA ½ LT', 'limonada-lt-beb2', 'Refresco', 7.00, '/item_mariscos.webp', NULL, 'green', true, true, 2
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHA MORADA 1 LT', 'chicha-morada-1-lt-beb3', 'Refresco', 12.00, '/item_mariscos.webp', NULL, 'green', true, true, 3
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHA MORADA ½ LT', 'chicha-morada-lt-beb4', 'Refresco', 7.00, '/item_mariscos.webp', NULL, 'green', true, true, 4
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'MARACUYÁ 1 LT', 'maracuya-1-lt-beb5', 'Refresco', 14.00, '/item_mariscos.webp', NULL, 'green', true, true, 5
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'MARACUYÁ ½ LT', 'maracuya-lt-beb6', 'Refresco', 7.00, '/item_mariscos.webp', NULL, 'green', true, true, 6
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COPOAZÚ 1 LT', 'copoazu-1-lt-beb7', 'Fruta de la selva peruana', 15.00, '/item_mariscos.webp', NULL, 'green', true, true, 7
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COPOAZÚ ½ LT', 'copoazu-lt-beb8', 'Fruta de la selva peruana', 8.00, '/item_mariscos.webp', NULL, 'green', true, true, 8
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'MARACUCHICHA 1 LT', 'maracuchicha-1-lt-beb9', 'Refresco mixto', 13.00, '/item_mariscos.webp', NULL, 'green', true, true, 9
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'MARACUCHICHA ½ LT', 'maracuchicha-lt-beb10', 'Refresco mixto', 8.00, '/item_mariscos.webp', NULL, 'green', true, true, 10
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COPOAZÚ (VASO)', 'copoazu-vaso-beb11', 'Vaso personal', 8.00, '/item_mariscos.webp', NULL, 'green', true, true, 11
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'LIMONADA (VASO)', 'limonada-vaso-beb12', 'Vaso personal', 6.00, '/item_mariscos.webp', NULL, 'green', true, true, 12
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'MARACUYÁ (VASO)', 'maracuya-vaso-beb13', 'Vaso personal', 7.00, '/item_mariscos.webp', NULL, 'green', true, true, 13
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CHICHA MORADA (VASO)', 'chicha-morada-vaso-beb14', 'Vaso personal', 7.00, '/item_mariscos.webp', NULL, 'green', true, true, 14
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'INCA KOLA 2 LT', 'inca-kola-2-lt-gas1', 'Gaseosa', 12.00, '/item_mariscos.webp', NULL, 'green', true, true, 15
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COCA COLA 2 LT', 'coca-cola-2-lt-gas2', 'Gaseosa', 12.00, '/item_mariscos.webp', NULL, 'green', true, true, 16
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'INCA KOLA 1 ½ LT', 'inca-kola-1-lt-gas3', 'Gaseosa', 9.00, '/item_mariscos.webp', NULL, 'green', true, true, 17
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COCA COLA 1 ½ LT', 'coca-cola-1-lt-gas4', 'Gaseosa', 9.00, '/item_mariscos.webp', NULL, 'green', true, true, 18
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'INCA KOLA 1 LT', 'inca-kola-1-lt-gas5', 'Gaseosa', 7.00, '/item_mariscos.webp', NULL, 'green', true, true, 19
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COCA COLA 1 LT', 'coca-cola-1-lt-gas6', 'Gaseosa', 7.00, '/item_mariscos.webp', NULL, 'green', true, true, 20
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'INCA KOLA 600 ml', 'inca-kola-600-ml-gas7', 'Gaseosa', 4.50, '/item_mariscos.webp', NULL, 'green', true, true, 21
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COCA COLA 600 ml', 'coca-cola-600-ml-gas8', 'Gaseosa', 4.50, '/item_mariscos.webp', NULL, 'green', true, true, 22
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'INCA KOLA 620 ml', 'inca-kola-620-ml-gas9', 'Gaseosa', 5.00, '/item_mariscos.webp', NULL, 'green', true, true, 23
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COCA COLA 620 ml', 'coca-cola-620-ml-gas10', 'Gaseosa', 5.00, '/item_mariscos.webp', NULL, 'green', true, true, 24
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'INCA KOLA 400 ml', 'inca-kola-400-ml-gas11', 'Gaseosa', 3.50, '/item_mariscos.webp', NULL, 'green', true, true, 25
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COCA COLA 400 ml', 'coca-cola-400-ml-gas12', 'Gaseosa', 3.50, '/item_mariscos.webp', NULL, 'green', true, true, 26
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'AGUA MINERAL (SAN LUIS)', 'agua-mineral-san-luis-gas13', 'Agua embotellada', 3.00, '/item_mariscos.webp', NULL, 'green', true, true, 27
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'AGUA MINERAL (CIELO)', 'agua-mineral-cielo-gas14', 'Agua embotellada', 2.50, '/item_mariscos.webp', NULL, 'green', true, true, 28
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'KOLA ESCOCESA 1 ½ LT', 'kola-escocesa-1-lt-gas15', 'Gaseosa', 10.00, '/item_mariscos.webp', NULL, 'green', true, true, 29
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'KOLA ESCOCESA 2 LT', 'kola-escocesa-2-lt-gas16', 'Gaseosa', 15.00, '/item_mariscos.webp', NULL, 'green', true, true, 30
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'MANZANILLA, ANÍS, TÉ PURO', 'manzanilla-anis-te-puro-inf1', 'Infusión caliente', 3.00, '/item_mariscos.webp', NULL, 'green', true, true, 31
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'COCA', 'coca-inf2', 'Mate de coca caliente', 3.00, '/item_mariscos.webp', NULL, 'green', true, true, 32
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;


INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, 'CAFÉ (SOBRE)', 'cafe-sobre-inf3', 'Café en sobre', 3.50, '/item_mariscos.webp', NULL, 'green', true, true, 33
FROM public.categories 
WHERE slug = 'bebidas'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;
