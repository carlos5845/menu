import { createClient } from '@supabase/supabase-js'
import { MENU_DATA } from '../lib/data.ts'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

async function runDirectMigration() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  })

  console.log('Iniciando sincronización con Supabase en la nube...')

  // 1. Verificar si las tablas existen insertando o leyendo
  const { error: checkError } = await supabase.from('categories').select('id').limit(1)

  if (checkError && checkError.message.includes('Could not find the table')) {
    console.log('Las tablas no existen aún en la base de datos.')
    console.log('Debes ejecutar el script SQL en el SQL Editor de tu Dashboard de Supabase.')
    process.exit(1)
  }

  console.log('Tablas detectadas. Insertando categorías y platos...')

  let catPos = 1
  for (const cat of MENU_DATA) {
    const catSlug = slugify(cat.id || cat.title)
    
    // Upsert categoría
    const { data: catData, error: catError } = await supabase
      .from('categories')
      .upsert(
        {
          name: cat.title,
          slug: catSlug,
          subtitle: cat.subtitle || '',
          image_url: cat.bgImage || '/bg_ceviches.webp',
          position: catPos,
          is_active: true,
        },
        { onConflict: 'slug' }
      )
      .select('id')
      .single()

    if (catError || !catData) {
      console.error(`Error al insertar categoría ${cat.title}:`, catError?.message)
      continue
    }

    const categoryId = catData.id
    let dishPos = 1

    for (const item of cat.items) {
      const dishSlug = `${slugify(item.name)}-${item.id}`
      const priceNumeric = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0.0

      const { error: dishError } = await supabase
        .from('dishes')
        .upsert(
          {
            category_id: categoryId,
            name: item.name,
            slug: dishSlug,
            description: item.description || '',
            price: priceNumeric,
            image_url: item.image || '/item_ceviche.webp',
            label: item.tag || null,
            label_color: item.tagColor || 'green',
            is_available: true,
            is_published: true,
            position: dishPos,
          },
          { onConflict: 'category_id,slug' }
        )

      if (dishError) {
        console.error(`Error en plato ${item.name}:`, dishError.message)
      }
      dishPos++
    }

    console.log(`✓ Categoría ${cat.title} (${cat.items.length} platos) sincronizada.`)
    catPos++
  }

  console.log('¡Sincronización completa con Supabase en la nube!')
}

runDirectMigration()
