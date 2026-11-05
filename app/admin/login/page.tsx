import { LoginForm } from './LoginForm'

export const metadata = {
  title: "Iniciar Sesión | Admin Manolo's",
  description: "Panel de administración de carta digital",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#070707] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff7a1a]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full flex justify-center z-10">
        <LoginForm />
      </div>
    </div>
  )
}
