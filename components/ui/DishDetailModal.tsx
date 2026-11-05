'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { MenuItem } from '@/lib/data'
import { 
  X, 
  Share2, 
  Check, 
  MessageCircle, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  XCircle,
  Utensils
} from 'lucide-react'

interface DishDetailModalProps {
  item: MenuItem | null
  onClose: () => void
}

export function DishDetailModal({ item, onClose }: DishDetailModalProps) {
  const [copied, setCopied] = useState(false)

  // Cerrar con Escape y bloquear scroll del body
  useEffect(() => {
    if (!item) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  // Compartir enlace o copiar al portapapeles
  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}#${item.id}` : ''
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${item.name} - Cevichería Manolo's`,
          text: `Mira este delicioso plato: ${item.name} en Cevichería Manolo's`,
          url: shareUrl,
        })
      } catch {
        // Ignorar si cancela
      }
    } else {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Enlace directo de WhatsApp con mensaje personalizado del plato
  const whatsappNumber = '51920611777'
  const whatsappMessage = encodeURIComponent(
    `¡Hola Cevichería Manolo's! Deseo consultar/pedir este plato: *${item.name}* (${item.price}).`
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div 
      className="fixed inset-0 z-[100] w-screen h-screen flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[520px] bg-[#0e0e0e] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera / Imagen Hero del Plato */}
        <div className="relative w-full h-64 sm:h-72 bg-[#141414] shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            priority
          />
          {/* Gradiente oscuro inferior para fusionar con la tarjeta */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-black/40" />

          {/* Botón Cerrar Flotante */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/80 hover:text-white flex items-center justify-center hover:bg-black/80 transition-all cursor-pointer shadow-lg z-10"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Categoría y Tag en la esquina inferior de la foto */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            {item.categoryName && (
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/80 border border-white/10 flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-[#ff7a1a]" />
                {item.categoryName}
              </span>
            )}
            {item.tag && (
              <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                item.tagColor === 'coral'
                  ? 'bg-[#ff7a1a]/20 text-[#ff7a1a] border-[#ff7a1a]/40 backdrop-blur-md'
                  : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 backdrop-blur-md'
              }`}>
                <Sparkles className="w-3 h-3" />
                {item.tag}
              </span>
            )}
          </div>
        </div>

        {/* Cuerpo de la Información */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto">
          {/* Nombre y Precio */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {item.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                {item.isAvailable !== false ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Disponible hoy
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400">
                    <XCircle className="w-3.5 h-3.5" />
                    Agotado por hoy
                  </span>
                )}
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#ff7a1a] tracking-tight">
                {item.price}
              </span>
            </div>
          </div>

          {/* Descripción */}
          {item.description && (
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                {item.description}
              </p>
            </div>
          )}

          {/* Ingredientes si están disponibles */}
          {item.ingredients && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[#ff7a1a]" />
                Ingredientes y Preparación
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                {item.ingredients}
              </p>
            </div>
          )}

          {/* Botón WhatsApp de Acción */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#25D366] text-white font-bold text-sm tracking-wider uppercase rounded-2xl hover:bg-[#20ba59] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_8px_25px_rgba(37,211,102,0.3)] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Consultar / Pedir por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
