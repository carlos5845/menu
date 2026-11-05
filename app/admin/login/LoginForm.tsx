'use client'

import { useState } from 'react'
import { loginAction } from '../actions'
import { Utensils, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react'

export function LoginForm() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const result = await loginAction(formData)

    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-[540px] p-8 sm:p-12 rounded-3xl bg-[#121212]/90 backdrop-blur-2xl border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] mx-auto">
      {/* Brand Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff7a1a] to-[#d65d07] p-[1px] mb-4 shadow-[0_0_30px_rgba(255,122,26,0.3)]">
          <div className="w-full h-full bg-[#0a0a0a] rounded-2xl flex items-center justify-center">
            <Utensils className="text-[#ff7a1a] w-8 h-8" />
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white uppercase">
          Cevichería Manolo's
        </h1>
        <p className="text-white/60 text-sm mt-1">
          Panel de Administración de Carta
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3 animate-shake">
          <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="w-full">
          <label className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-2.5">
            Correo Electrónico
          </label>
          <div className="relative flex items-center w-full">
            <Mail className="absolute left-4 text-white/40 w-5 h-5 pointer-events-none" />
            <input
              name="email"
              type="email"
              required
              defaultValue="admin@manolos.pe"
              placeholder="admin@manolos.pe"
              className="w-full block bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white text-base focus:outline-none focus:border-[#ff7a1a] focus:ring-1 focus:ring-[#ff7a1a] transition-all"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-2.5">
            Contraseña
          </label>
          <div className="relative flex items-center w-full">
            <Lock className="absolute left-4 text-white/40 w-5 h-5 pointer-events-none" />
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••••••"
              className="w-full block bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white text-base focus:outline-none focus:border-[#ff7a1a] focus:ring-1 focus:ring-[#ff7a1a] transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full py-4 bg-gradient-to-r from-[#ff7a1a] to-[#e66000] text-white font-bold text-sm tracking-wider uppercase rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(255,122,26,0.35)] disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Verificando...</span>
            </>
          ) : (
            <>
              <span>Ingresar al Panel</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {/* Footer info */}
      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-xs text-white/40">
          Acceso exclusivo para el administrador de la cevichería.
        </p>
      </div>
    </div>
  )
}
