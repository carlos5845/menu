import { MENU_DATA } from '../lib/data.ts'
import fs from 'fs'
import path from 'path'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

function generateSeedSql() {
  const lines: string[] = [
    '-- ==============================================================================',
    '-- SEED DATA MIGRATION DESDE LIB/DATA.TS',
    '-- ==============================================================================',
    '',
  ]

  let categoryPos = 1

  for (const cat of MENU_DATA) {
    const catSlug = slugify(cat.id || cat.title)
    const catName = cat.title.replace(/'/g, "''")
    const catSubtitle = cat.subtitle ? cat.subtitle.replace(/'/g, "''") : ''
    const catBg = cat.bgImage ? cat.bgImage.replace(/'/g, "''") : ''

    lines.push(`-- Categoría: ${cat.title}`)
    lines.push(`
INSERT INTO public.categories (name, slug, subtitle, image_url, position, is_active)
VALUES ('${catName}', '${catSlug}', '${catSubtitle}', '${catBg}', ${categoryPos}, true)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, subtitle = EXCLUDED.subtitle, image_url = EXCLUDED.image_url, position = EXCLUDED.position;
`)

    let dishPos = 1
    for (const item of cat.items) {
      const dishSlug = slugify(item.name) + `-${item.id}`
      const dishName = item.name.replace(/'/g, "''")
      const dishDesc = item.description ? item.description.replace(/'/g, "''") : ''
      // Parsear precio "S/45.00" -> 45.00
      const priceNumeric = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0.00
      const dishImg = item.image ? item.image.replace(/'/g, "''") : ''
      const dishTag = item.tag ? `'${item.tag.replace(/'/g, "''")}'` : 'NULL'
      const dishTagColor = item.tagColor ? `'${item.tagColor}'` : "'green'"

      lines.push(`
INSERT INTO public.dishes (
  category_id, name, slug, description, price, image_url, label, label_color, is_available, is_published, position
)
SELECT 
  id, '${dishName}', '${dishSlug}', '${dishDesc}', ${priceNumeric.toFixed(2)}, '${dishImg}', ${dishTag}, ${dishTagColor}, true, true, ${dishPos}
FROM public.categories 
WHERE slug = '${catSlug}'
ON CONFLICT (category_id, slug) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, price = EXCLUDED.price, image_url = EXCLUDED.image_url, label = EXCLUDED.label, position = EXCLUDED.position;
`)
      dishPos++
    }

    categoryPos++
  }

  const outputPath = path.join(process.cwd(), 'supabase', 'seed.sql')
  fs.writeFileSync(outputPath, lines.join('\n'), 'utf-8')
  console.log(`Seed SQL generado exitosamente con ${MENU_DATA.length} categorías en: ${outputPath}`)
}

generateSeedSql()
