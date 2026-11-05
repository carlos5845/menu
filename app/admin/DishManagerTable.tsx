'use client'

import { useState, useTransition } from 'react'
import Image from 'next/image'
import { 
  toggleDishAvailabilityAction, 
  toggleDishPublishedAction, 
  updateDishPriceAction,
  deleteDishAction
} from './actions'
import { DishModal, DishFormInitialData } from './DishModal'
import { 
  Search, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  EyeOff, 
  Edit3, 
  Check, 
  X,
  Plus,
  Trash2,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Flame,
  Sparkles
} from 'lucide-react'

interface DishItem {
  id: string
  name: string
  description?: string
  ingredients?: string
  price: number
  image_url?: string
  label?: string
  label_color?: string
  is_available: boolean
  is_published: boolean
  category_id: string
  categories?: { name: string } | null
}

interface CategoryItem {
  id: string
  name: string
  image_url?: string
}

export function DishManagerTable({
  dishes,
  categories,
}: {
  dishes: DishItem[]
  categories: CategoryItem[]
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null)
  const [tempPrice, setTempPrice] = useState<string>('')
  const [isPending, startTransition] = useTransition()

  // Estado para el modal de plato
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInitialData, setModalInitialData] = useState<DishFormInitialData | null>(null)

  const handleOpenCreate = () => {
    setModalInitialData(null)
    setIsModalOpen(true)
  }

  const handleOpenEdit = (dish: DishItem) => {
    setModalInitialData({
      id: dish.id,
      name: dish.name,
      category_id: dish.category_id,
      price: dish.price,
      description: dish.description,
      ingredients: dish.ingredients,
      image_url: dish.image_url,
      label: dish.label,
      label_color: dish.label_color,
      is_available: dish.is_available,
      is_published: dish.is_published,
    })
    setIsModalOpen(true)
  }

  const handleDeleteDish = (dishId: string, dishName: string) => {
    if (confirm(`¿Estás seguro de que deseas eliminar permanentemente el plato "${dishName}"?`)) {
      startTransition(async () => {
        await deleteDishAction(dishId)
      })
    }
  }

  // Filtrado reactivo
  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch =
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (dish.description && dish.description.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory =
      selectedCategory === 'all' || dish.category_id === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleToggleAvailability = (dishId: string, currentAvailable: boolean) => {
    startTransition(async () => {
      await toggleDishAvailabilityAction(dishId, currentAvailable)
    })
  }

  const handleTogglePublished = (dishId: string, currentPublished: boolean) => {
    startTransition(async () => {
      await toggleDishPublishedAction(dishId, currentPublished)
    })
  }

  const handleSavePrice = (dishId: string) => {
    const numeric = parseFloat(tempPrice)
    if (isNaN(numeric) || numeric < 0) return

    startTransition(async () => {
      await updateDishPriceAction(dishId, numeric)
      setEditingPriceId(null)
    })
  }

  return (
    <div className="flex flex-col gap-8">
      {/* 1. SECCIÓN DE CATEGORÍAS TIPO APP MÓVIL (Con círculos / iconos y selector naranja) */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/70">
            Categorías del Menú
          </h2>
          <span className="text-xs text-white/40">
            {categories.length} categorías registradas
          </span>
        </div>

        {/* Category Cards Carousel */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide pt-1">
          {/* Opción "Todas" */}
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex flex-col items-center justify-center min-w-[90px] sm:min-w-[110px] h-[105px] sm:h-[120px] rounded-3xl p-3 transition-all duration-300 border cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-b from-[#ff7a1a] to-[#e66000] text-white border-[#ff9e54] shadow-[0_8px_25px_rgba(255,122,26,0.4)] scale-105'
                : 'bg-[#141414] text-white/70 border-white/10 hover:border-white/20 hover:bg-[#1a1a1a]'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-inner ${
              selectedCategory === 'all' ? 'bg-white/20' : 'bg-white/5'
            }`}>
              <Sparkles className={`w-6 h-6 ${selectedCategory === 'all' ? 'text-white' : 'text-[#ff7a1a]'}`} />
            </div>
            <span className="text-xs font-bold uppercase tracking-tight text-center">
              Todos
            </span>
          </button>

          {/* Categorías de la base de datos */}
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center justify-center min-w-[90px] sm:min-w-[110px] h-[105px] sm:h-[120px] rounded-3xl p-3 transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#ff7a1a] to-[#e66000] text-white border-[#ff9e54] shadow-[0_8px_25px_rgba(255,122,26,0.4)] scale-105'
                    : 'bg-[#141414] text-white/70 border-white/10 hover:border-white/20 hover:bg-[#1a1a1a]'
                }`}
              >
                <div className={`w-12 h-12 rounded-full overflow-hidden relative mb-2 shadow-md border ${
                  isSelected ? 'border-white/30' : 'border-white/10'
                }`}>
                  <Image
                    src={cat.image_url || '/item_mariscos.webp'}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-tight text-center truncate max-w-[85px]">
                  {cat.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 2. BARRA DE CONTROL (Buscador ancho completo estilo imagen de referencia, switch vista y botón Nuevo Plato) */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#121212]/80 border border-white/10 p-4 sm:p-5 rounded-3xl shadow-xl">
        {/* Buscador de gran tamaño horizontal */}
        <div className="relative flex-1 w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center pointer-events-none">
            <Search className="text-white/60 w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por plato, ingrediente, categoría o precio..."
            className="w-full bg-[#181818] border border-white/10 rounded-2xl pl-16 pr-5 py-4 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[#ff7a1a] focus:ring-1 focus:ring-[#ff7a1a] transition-all shadow-inner"
          />
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
          {/* Switch Grid Cards vs Table */}
          <div className="flex items-center bg-[#181818] border border-white/10 rounded-2xl p-1.5">
            <button
              onClick={() => setViewMode('cards')}
              className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-[#ff7a1a] text-white shadow-md'
                  : 'text-white/40 hover:text-white'
              }`}
              title="Vista de Tarjetas Modernas"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-[#ff7a1a] text-white shadow-md'
                  : 'text-white/40 hover:text-white'
              }`}
              title="Vista de Tabla"
            >
              <List className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleOpenCreate}
            className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#ff7a1a] to-[#d65d07] hover:brightness-110 active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-[0_8px_20px_rgba(255,122,26,0.35)] cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            <span>Nuevo Plato</span>
          </button>
        </div>
      </div>

      {/* 3. VISTA 1: DISEÑO DE TARJETAS FLOTANTES (ESTILO DE LA IMAGEN) */}
      {viewMode === 'cards' ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              Platos Populares y Destacados ({filteredDishes.length})
            </h3>
          </div>

          {filteredDishes.length === 0 ? (
            <div className="py-16 text-center text-white/40 bg-[#121212]/50 border border-white/5 rounded-3xl">
              No se encontraron platos que coincidan con la búsqueda o categoría seleccionada.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-6 pt-12">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className={`group relative flex flex-col justify-between rounded-[32px] p-6 pt-14 border transition-all duration-300 ${
                    !dish.is_available
                      ? 'bg-[#181212] border-rose-500/20 shadow-[0_10px_30px_rgba(244,63,94,0.08)]'
                      : dish.label
                      ? 'bg-gradient-to-b from-[#1a140f] to-[#141414] border-[#ff7a1a]/30 shadow-[0_10px_35px_rgba(255,122,26,0.12)]'
                      : 'bg-[#141414] border-white/10 hover:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  {/* IMAGEN FLOTANTE CIRCULAR EN EL TOPE (Sobresale hacia arriba igual que el diseño) */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.7)] border-4 border-[#070707] bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={dish.image_url || '/item_ceviche.webp'}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Badges superiores (Agotado o Etiqueta) */}
                  <div className="flex items-center justify-between w-full mb-2">
                    {dish.label ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#ff7a1a]/20 text-[#ff7a1a] border border-[#ff7a1a]/30 flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        {dish.label}
                      </span>
                    ) : <span />}

                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      dish.is_available
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    }`}>
                      {dish.is_available ? 'Disponible' : 'Agotado'}
                    </span>
                  </div>

                  {/* Nombre y Descripción */}
                  <div className="text-center my-2">
                    <h4 className="text-base font-bold text-white uppercase tracking-tight line-clamp-1 group-hover:text-[#ff7a1a] transition-colors">
                      {dish.name}
                    </h4>
                    <p className="text-xs text-white/50 line-clamp-2 mt-1.5 font-normal leading-relaxed">
                      {dish.description || 'Especialidad fresca de la casa'}
                    </p>
                  </div>

                  {/* Categoría y Datos */}
                  <div className="flex items-center justify-center gap-2 py-2 border-y border-white/5 text-[11px] text-white/40 my-2">
                    <span>{dish.categories?.name || 'Carta'}</span>
                    <span>•</span>
                    <span>{dish.is_published ? 'Visible' : 'Oculto'}</span>
                  </div>

                  {/* PIE DE TARJETA: PRECIO Y BOTONES DE ACCIÓN (Editar, toggle y eliminar) */}
                  <div className="flex items-center justify-between pt-2">
                    {/* Precio Editable */}
                    {editingPriceId === dish.id ? (
                      <div className="flex items-center gap-1">
                        <span className="text-white/60 text-xs">S/</span>
                        <input
                          type="number"
                          step="0.5"
                          autoFocus
                          value={tempPrice}
                          onChange={(e) => setTempPrice(e.target.value)}
                          className="w-16 bg-white/10 border border-[#ff7a1a] rounded-lg px-1.5 py-1 text-xs text-white focus:outline-none"
                        />
                        <button
                          onClick={() => handleSavePrice(dish.id)}
                          className="p-1 rounded bg-emerald-500/20 text-emerald-400"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setEditingPriceId(null)}
                          className="p-1 rounded bg-white/10 text-white/60"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setEditingPriceId(dish.id)
                          setTempPrice(dish.price.toString())
                        }}
                        className="cursor-pointer group/price flex items-center gap-1"
                        title="Clic para editar precio"
                      >
                        <span className="text-xl font-extrabold text-[#ff7a1a]">
                          S/{Number(dish.price).toFixed(2)}
                        </span>
                        <Edit3 className="w-3 h-3 text-white/20 group-hover/price:text-[#ff7a1a]" />
                      </div>
                    )}

                    {/* Botones de Acción en lugar del + */}
                    <div className="flex items-center gap-1.5">
                      {/* Toggle Disponible/Agotado */}
                      <button
                        onClick={() => handleToggleAvailability(dish.id, dish.is_available)}
                        disabled={isPending}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                          dish.is_available
                            ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20'
                            : 'bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 border border-rose-500/30'
                        }`}
                        title={dish.is_available ? 'Marcar como Agotado' : 'Marcar como Disponible'}
                      >
                        {dish.is_available ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <XCircle className="w-4 h-4" />
                        )}
                      </button>

                      {/* Botón Editar Completo (En el círculo naranja distintivo de la imagen) */}
                      <button
                        onClick={() => handleOpenEdit(dish)}
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#e66000] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(255,122,26,0.35)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                        title="Editar plato completo y foto"
                      >
                        <SlidersHorizontal className="w-4 h-4" />
                      </button>

                      {/* Botón Eliminar */}
                      <button
                        onClick={() => handleDeleteDish(dish.id, dish.name)}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-400 border border-white/5 hover:border-red-500/20 flex items-center justify-center transition-all cursor-pointer"
                        title="Eliminar plato"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* VISTA 2: TABLA CLÁSICA */
        <div className="bg-[#121212]/70 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-white/50 font-semibold">
                  <th className="py-4 px-6">Plato</th>
                  <th className="py-4 px-6">Categoría</th>
                  <th className="py-4 px-6">Precio</th>
                  <th className="py-4 px-6 text-center">Disponibilidad</th>
                  <th className="py-4 px-6 text-center">Visibilidad</th>
                  <th className="py-4 px-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {filteredDishes.map((dish) => (
                  <tr key={dish.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 overflow-hidden relative shrink-0">
                          <Image
                            src={dish.image_url || '/item_ceviche.webp'}
                            alt={dish.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-white uppercase tracking-wide">
                              {dish.name}
                            </p>
                            {dish.label && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ff7a1a]/20 text-[#ff7a1a] border border-[#ff7a1a]/30">
                                {dish.label}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-white/50 max-w-xs truncate mt-0.5">
                            {dish.description || 'Sin descripción'}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6 text-white/70 font-medium">
                      {dish.categories?.name || 'General'}
                    </td>

                    <td className="py-4 px-6">
                      <span className="font-bold text-[#ff7a1a]">
                        S/{Number(dish.price).toFixed(2)}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleToggleAvailability(dish.id, dish.is_available)}
                        disabled={isPending}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                          dish.is_available
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {dish.is_available ? 'Disponible' : 'Agotado'}
                      </button>
                    </td>

                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleTogglePublished(dish.id, dish.is_published)}
                        disabled={isPending}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                          dish.is_published
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : 'bg-white/5 text-white/40 border border-white/10'
                        }`}
                      >
                        {dish.is_published ? 'Visible' : 'Oculto'}
                      </button>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenEdit(dish)}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                        >
                          <SlidersHorizontal className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteDish(dish.id, dish.name)}
                          className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Crear / Editar Plato */}
      <DishModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
        initialData={modalInitialData}
      />
    </div>
  )
}
