import { createClient } from '@supabase/supabase-js'

async function unifyCategories() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  })

  console.log('Iniciando unificación y agrupación natural de categorías...')

  // Obtener todas las categorías actuales
  const { data: cats, error: catError } = await supabase.from('categories').select('*')
  if (catError || !cats) {
    console.error('Error al obtener categorías:', catError)
    return
  }

  const getCatId = (slug: string) => cats.find((c) => c.slug === slug)?.id

  const cevichesId = getCatId('ceviches')
  const cevichesSoloLimonId = getCatId('ceviches-solo-limon')
  const conosId = getCatId('conos-adicionales')
  const lecheTigreId = getCatId('festival-leche-tigre')

  // 1. AGRUPAR EN "CEVICHES":
  // Mover platos de "ceviches-solo-limon", "conos-adicionales" y "festival-leche-tigre" hacia "ceviches"
  if (cevichesId) {
    const toMerge = [cevichesSoloLimonId, conosId, lecheTigreId].filter(Boolean)
    const { error: moveError } = await supabase
      .from('dishes')
      .update({ category_id: cevichesId })
      .in('category_id', toMerge)

    if (moveError) console.error('Error moviendo ceviches:', moveError)
    else console.log('✓ Platos de ceviches unificados en la categoría CEVICHES')

    // Desactivar categorías secundarias absorbidas
    await supabase.from('categories').update({ is_active: false }).in('id', toMerge)
  }

  // 2. AGRUPAR EN "MARISCOS Y ARROCES":
  // Mover platos de "arroces" hacia "mariscos" para que tenga jalea + arroces + especialidades
  const mariscosId = getCatId('mariscos')
  const arrocesId = getCatId('arroces')
  if (mariscosId && arrocesId) {
    await supabase
      .from('categories')
      .update({ name: 'MARISCOS Y ARROCES', subtitle: 'DELICIAS DEL PUERTO Y AL WOK' })
      .eq('id', mariscosId)

    await supabase
      .from('dishes')
      .update({ category_id: mariscosId })
      .eq('category_id', arrocesId)

    await supabase.from('categories').update({ is_active: false }).eq('id', arrocesId)
    console.log('✓ Platos de arroces integrados en MARISCOS Y ARROCES')
  }

  // 3. AGRUPAR EN "COMBINADOS Y ESPECIALIDADES":
  // Unificar combinados sueltos y combinados-manolo
  const combinadosId = getCatId('combinados')
  const combinadosManoloId = getCatId('combinados-manolo')
  if (combinadosId && combinadosManoloId) {
    await supabase
      .from('categories')
      .update({ name: "COMBINADOS Y BARCOS", subtitle: 'BALSAS, BARCOS Y COMBINADOS DE LA CASA' })
      .eq('id', combinadosId)

    await supabase
      .from('dishes')
      .update({ category_id: combinadosId })
      .eq('category_id', combinadosManoloId)

    await supabase.from('categories').update({ is_active: false }).eq('id', combinadosManoloId)
    console.log('✓ Platos de combinados unificados')
  }

  // 4. DISTINGUIR LOS DÚOS DE CASA:
  // duos-jurel -> DÚOS (JUREL)
  // duos-tilapia -> DÚOS (TILAPIA)
  // duos-trucha -> DÚOS (TRUCHA)
  const duosJurelId = getCatId('duos-jurel')
  const duosTilapiaId = getCatId('duos-tilapia')
  const duosTruchaId = getCatId('duos-trucha')

  if (duosJurelId) {
    await supabase.from('categories').update({ name: 'DÚOS (Jurel)' }).eq('id', duosJurelId)
  }
  if (duosTilapiaId) {
    await supabase.from('categories').update({ name: 'DÚOS (Tilapia)' }).eq('id', duosTilapiaId)
  }
  if (duosTruchaId) {
    await supabase.from('categories').update({ name: 'DÚOS (Trucha)' }).eq('id', duosTruchaId)
  }
  console.log('✓ Nombres de Dúos diferenciados por tipo de pescado')

  // 5. UNIFICAR CHICHARRÓN MIXTO EN PLATOS DE LA REGIÓN
  const platosRegionId = getCatId('platos-region')
  const chicharronMixtoId = getCatId('chicharron-mixto')
  if (platosRegionId && chicharronMixtoId) {
    await supabase
      .from('dishes')
      .update({ category_id: platosRegionId })
      .eq('category_id', chicharronMixtoId)

    await supabase.from('categories').update({ is_active: false }).eq('id', chicharronMixtoId)
    console.log('✓ Chicharrón mixto unificado en Platos de la Región')
  }

  console.log('¡Unificación completada exitosamente!')
}

unifyCategories()
