import { createClient } from '@/lib/supabase/server'
import { MenuCategory, MenuItem, MENU_DATA } from '@/lib/data'

export async function getMenuData(): Promise<MenuCategory[]> {
  try {
    const supabase = await createClient()

    // Traer categorías activas ordenadas por posición
    const { data: dbCategories, error: catError } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('position', { ascending: true })

    if (catError || !dbCategories || dbCategories.length === 0) {
      console.warn('Usando MENU_DATA de fallback (error o categorías vacías en BD)')
      return MENU_DATA
    }

    // Traer platos publicados ordenados por posición
    const { data: dbDishes, error: dishError } = await supabase
      .from('dishes')
      .select('*')
      .eq('is_published', true)
      .order('position', { ascending: true })

    if (dishError || !dbDishes) {
      console.warn('Usando MENU_DATA de fallback (error en platos BD)')
      return MENU_DATA
    }

    // Construir estructura de MenuCategory con MenuItem
    const categories: MenuCategory[] = dbCategories.map((cat) => {
      const categoryDishes = dbDishes.filter((d) => d.category_id === cat.id)

      const items: MenuItem[] = categoryDishes.map((d) => ({
        id: d.slug || d.id,
        name: d.name,
        description: d.description || '',
        price: `S/${Number(d.price).toFixed(2)}`,
        tag: d.label || undefined,
        tagColor: (d.label_color as 'coral' | 'green') || 'green',
        image: d.image_url || '/item_ceviche.webp',
        isAvailable: d.is_available,
        ingredients: d.ingredients || '',
        categoryName: cat.name,
      }))

      return {
        id: cat.slug || cat.id,
        title: cat.name,
        subtitle: cat.subtitle || '',
        bgImage: cat.image_url || '/bg_ceviches.webp',
        items,
      }
    })

    return categories
  } catch (error) {
    console.error('Error al conectar con Supabase en getMenuData:', error)
    return MENU_DATA
  }
}
