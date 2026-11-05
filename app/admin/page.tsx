import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { logoutAction } from '@/app/admin/actions'
import { DishManagerTable } from './DishManagerTable'
import { 
  Utensils, 
  Layers, 
  Eye, 
  AlertCircle, 
  LogOut, 
  ExternalLink,
  Plus
} from 'lucide-react'

export const metadata = {
  title: "Dashboard | Administración Manolo's",
}

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  // Comprobar autenticación
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Traer categorías
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('position', { ascending: true })

  // Traer platos con categoría
  const { data: dishes } = await supabase
    .from('dishes')
    .select('*, categories(name)')
    .order('position', { ascending: true })

  const totalCategories = categories?.length || 0
  const totalDishes = dishes?.length || 0
  const publishedDishes = dishes?.filter((d) => d.is_published).length || 0
  const unavailableDishes = dishes?.filter((d) => !d.is_available).length || 0

  return (
    <div className="min-h-screen bg-[#070707] text-[#f5f5f5]">
      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a1a] to-[#d65d07] flex items-center justify-center shadow-[0_0_15px_rgba(255,122,26,0.4)]">
              <Utensils className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold uppercase tracking-wider text-white">
                Manolo's Admin
              </h1>
              <p className="text-xs text-white/50">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Ver Carta Pública</span>
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Cerrar Sesión</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#121212]/70 border border-white/10 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Categorías</p>
              <p className="text-2xl font-bold text-white mt-0.5">{totalCategories}</p>
            </div>
          </div>

          <div className="bg-[#121212]/70 border border-white/10 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ff7a1a]/10 text-[#ff7a1a] flex items-center justify-center shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Total Platos</p>
              <p className="text-2xl font-bold text-white mt-0.5">{totalDishes}</p>
            </div>
          </div>

          <div className="bg-[#121212]/70 border border-white/10 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Publicados</p>
              <p className="text-2xl font-bold text-white mt-0.5">{publishedDishes}</p>
            </div>
          </div>

          <div className="bg-[#121212]/70 border border-white/10 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Agotados</p>
              <p className="text-2xl font-bold text-white mt-0.5">{unavailableDishes}</p>
            </div>
          </div>
        </div>

        {/* Dish Manager Table Component */}
        <DishManagerTable dishes={dishes || []} categories={categories || []} />
      </main>
    </div>
  )
}
