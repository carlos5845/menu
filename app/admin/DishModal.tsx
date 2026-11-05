'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { upsertDishAction } from './actions'
import { X, Upload, Loader2, Sparkles } from 'lucide-react'

interface CategoryItem {
  id: string
  name: string
}

export interface DishFormInitialData {
  id?: string
  name?: string
  category_id?: string
  price?: number
  description?: string
  ingredients?: string
  image_url?: string
  label?: string
  label_color?: string
  is_available?: boolean
  is_published?: boolean
}

interface DishModalProps {
  isOpen: boolean
  onClose: () => void
  categories: CategoryItem[]
  initialData?: DishFormInitialData | null
}

export function DishModal({
  isOpen,
  onClose,
  categories,
  initialData,
}: DishModalProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(
    initialData?.image_url || null
  )
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!isOpen) return null

  const isEditing = Boolean(initialData?.id)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('La imagen no debe superar los 5MB')
        return
      }
      setError(null)
      const objectUrl = URL.createObjectURL(file)
      setPreviewImage(objectUrl)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    if (initialData?.id) {
      formData.set('id', initialData.id)
    }
    if (initialData?.image_url && !fileInputRef.current?.files?.[0]) {
      formData.set('existing_image_url', initialData.image_url)
    }

    const result = await upsertDishAction(formData)

    if (result?.error) {
      setError(result.error)
      setLoading(false)
    } else {
      setLoading(false)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">
              {isEditing ? 'Editar Plato' : 'Nuevo Plato'}
            </h2>
            <p className="text-xs text-white/50 mt-0.5">
              {isEditing
                ? 'Actualiza la información del plato en la carta.'
                : 'Completa los datos para registrar un nuevo plato.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
            {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          {/* Nombre y Categoría */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-semibold text-white/70 mb-2">
                Nombre del Plato *
              </label>
              <input
                name="name"
                type="text"
                required
                defaultValue={initialData?.name || ''}
                placeholder="Ej. CEVICHE CLÁSICO"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff7a1a]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-white/70 mb-2">
                Categoría *
              </label>
              <select
                name="category_id"
                required
                defaultValue={initialData?.category_id || categories[0]?.id || ''}
                className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff7a1a]"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Precio y Etiqueta Destacada */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase font-semibold text-white/70 mb-2">
                Precio (S/.) *
              </label>
              <input
                name="price"
                type="number"
                step="0.5"
                required
                defaultValue={initialData?.price || ''}
                placeholder="Ej. 42.00"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff7a1a]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-white/70 mb-2">
                Etiqueta
              </label>
              <input
                name="label"
                type="text"
                defaultValue={initialData?.label || ''}
                placeholder="Ej. RECOMENDADO, NUEVO"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff7a1a]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-white/70 mb-2">
                Color Etiqueta
              </label>
              <select
                name="label_color"
                defaultValue={initialData?.label_color || 'green'}
                className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff7a1a]"
              >
                <option value="green">Verde (Recomendado)</option>
                <option value="coral">Naranja / Coral (Nuevo)</option>
              </select>
            </div>
          </div>

          {/* Descripción e Ingredientes */}
          <div>
            <label className="block text-xs uppercase font-semibold text-white/70 mb-2">
              Descripción del Plato
            </label>
            <textarea
              name="description"
              rows={2}
              defaultValue={initialData?.description || ''}
              placeholder="Breve reseña de sabor, textura o corte..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff7a1a]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase font-semibold text-white/70 mb-2">
              Ingredientes
            </label>
            <input
              name="ingredients"
              type="text"
              defaultValue={initialData?.ingredients || ''}
              placeholder="Pescado, choclo, camote, ají limo, cebolla morada..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff7a1a]"
            />
          </div>

          {/* Subida de Imagen */}
          <div>
            <label className="block text-xs uppercase font-semibold text-white/70 mb-2">
              Fotografía del Plato
            </label>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden shrink-0 flex items-center justify-center">
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Upload className="w-6 h-6 text-white/30" />
                )}
              </div>
              <div className="flex-1">
                <input
                  ref={fileInputRef}
                  name="image_file"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image_file_input"
                />
                <label
                  htmlFor="image_file_input"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold cursor-pointer transition-all border border-white/10"
                >
                  <Upload className="w-4 h-4" />
                  <span>{previewImage ? 'Cambiar fotografía' : 'Subir fotografía'}</span>
                </label>
                <p className="text-[11px] text-white/40 mt-1">
                  Formatos recomendados: WebP, PNG o JPG (máx. 5MB).
                </p>
              </div>
            </div>
          </div>

          {/* Switches de Estado */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
              <input
                type="checkbox"
                name="is_available"
                value="true"
                defaultChecked={initialData ? initialData.is_available : true}
                className="w-4 h-4 accent-[#ff7a1a] rounded cursor-pointer"
              />
              <span className="text-xs font-semibold text-white">
                Disponible (En stock)
              </span>
            </label>

            <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
              <input
                type="checkbox"
                name="is_published"
                value="true"
                defaultChecked={initialData ? initialData.is_published : true}
                className="w-4 h-4 accent-[#ff7a1a] rounded cursor-pointer"
              />
              <span className="text-xs font-semibold text-white">
                Visible en carta pública
              </span>
            </label>
          </div>

          {/* Footer Botones */}
          <div className="flex items-center justify-end gap-3 pt-5 border-t border-white/10 mt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 text-xs font-bold uppercase transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff7a1a] to-[#d65d07] hover:brightness-110 active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_8px_20px_rgba(255,122,26,0.3)] disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Guardando...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{isEditing ? 'Guardar Cambios' : 'Registrar Plato'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
