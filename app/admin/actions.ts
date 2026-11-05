'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Por favor ingresa correo y contraseña.' }
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return { 
      error: 'Variables de entorno no configuradas en Vercel (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY).' 
    }
  }

  let success = false

  try {
    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { error: `Credenciales inválidas o error de autenticación: ${error.message}` }
    }

    success = true
  } catch (err: any) {
    return { error: `Error en el servidor: ${err?.message || 'Error inesperado'}` }
  }

  if (success) {
    redirect('/admin')
  }
}

export async function logoutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}

export async function toggleDishAvailabilityAction(dishId: string, currentAvailable: boolean) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('dishes')
    .update({ is_available: !currentAvailable })
    .eq('id', dishId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  return { success: true }
}

export async function toggleDishPublishedAction(dishId: string, currentPublished: boolean) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('dishes')
    .update({ is_published: !currentPublished })
    .eq('id', dishId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  return { success: true }
}

export async function updateDishPriceAction(dishId: string, newPrice: number) {
  const supabase = await createClient()

  if (isNaN(newPrice) || newPrice < 0) {
    return { error: 'Precio inválido' }
  }

  const { error } = await supabase
    .from('dishes')
    .update({ price: newPrice })
    .eq('id', dishId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  return { success: true }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export async function upsertDishAction(formData: FormData) {
  const supabase = await createClient()

  const id = formData.get('id') as string | null
  const name = (formData.get('name') as string)?.trim()
  const category_id = formData.get('category_id') as string
  const price = parseFloat(formData.get('price') as string)
  const description = (formData.get('description') as string)?.trim() || ''
  const ingredients = (formData.get('ingredients') as string)?.trim() || ''
  const label = (formData.get('label') as string)?.trim() || null
  const label_color = (formData.get('label_color') as string) || 'green'
  const is_available = formData.get('is_available') === 'true'
  const is_published = formData.get('is_published') === 'true'
  const image_file = formData.get('image_file') as File | null
  let image_url = (formData.get('existing_image_url') as string) || ''

  if (!name || !category_id || isNaN(price)) {
    return { error: 'Nombre, categoría y precio son obligatorios.' }
  }

  // 1. Si viene una nueva imagen, subirla a Supabase Storage
  if (image_file && image_file.size > 0) {
    const ext = image_file.name.split('.').pop() || 'webp'
    const fileName = `${Date.now()}-${slugify(name)}.${ext}`
    const filePath = `dishes/${fileName}`

    const arrayBuffer = await image_file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const { error: uploadError } = await supabase.storage
      .from('menu-images')
      .upload(filePath, buffer, {
        contentType: image_file.type || 'image/webp',
        upsert: true,
      })

    if (uploadError) {
      return { error: `Error al subir imagen: ${uploadError.message}` }
    }

    const { data: publicUrlData } = supabase.storage
      .from('menu-images')
      .getPublicUrl(filePath)

    image_url = publicUrlData.publicUrl
  }

  const slug = `${slugify(name)}-${Date.now().toString().slice(-4)}`

  // 2. Insert o Update en Postgres
  if (id) {
    // UPDATE
    const updatePayload: Record<string, any> = {
      name,
      category_id,
      price,
      description,
      ingredients,
      label,
      label_color,
      is_available,
      is_published,
    }
    if (image_url) {
      updatePayload.image_url = image_url
    }

    const { error } = await supabase
      .from('dishes')
      .update(updatePayload)
      .eq('id', id)

    if (error) return { error: error.message }
  } else {
    // INSERT
    const { error } = await supabase
      .from('dishes')
      .insert({
        name,
        slug,
        category_id,
        price,
        description,
        ingredients,
        image_url: image_url || '/item_ceviche.webp',
        label,
        label_color,
        is_available,
        is_published,
      })

    if (error) return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  return { success: true }
}

export async function deleteDishAction(dishId: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('dishes')
    .delete()
    .eq('id', dishId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  return { success: true }
}
