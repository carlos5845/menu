import Image from "next/image";
import { Utensils } from "lucide-react"; // I need to check if lucide-react is installed, if not I can use an SVG.

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center">
      {/* Subtle ambient orange glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#ff7a1a] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative circular outlines */}
      <div className="absolute -top-32 -left-32 w-64 h-64 border border-[#ff7a1a]/20 rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 border border-[#35ff7a]/20 rounded-full pointer-events-none" />

      {/* Minimal Top Navigation */}
      <div className="w-full max-w-7xl px-8 pt-8 z-10 flex flex-col">
        <div className="flex justify-between items-center text-[#f5f5f5] uppercase tracking-[0.2em] text-xs font-light font-sans">
          <span>Quinta Cevichería</span>
          <span>Sabor del Mar</span>
        </div>
        <div className="w-full h-px bg-[#f5f5f5]/10 mt-6" />
      </div>

      {/* Centerpiece */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full relative -mt-10">
        {/* Glow directly behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff7a1a]/30 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
          <Image
            src="/LOGO-CEVICHE.png"
            alt="Manolo's Logo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Minimal Button */}
        <button className="group relative flex flex-col items-center text-[#ff7a1a] uppercase font-bold tracking-widest text-sm hover:text-[#ff9b4f] transition-colors">
          <span className="mb-2">Menú</span>
          <span className="w-8 h-[2px] bg-[#35ff7a] group-hover:w-full transition-all duration-300" />
        </button>
      </div>

      {/* Bottom Feature Cards */}
      <div className="w-full max-w-5xl px-4 pb-12 z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-auto">
        {/* Left Card */}
        <div className="bg-[#1a1a1a]/40 backdrop-blur-md rounded-2xl p-6 border border-[#ff7a1a]/30 shadow-[0_0_15px_rgba(255,122,26,0.1)] w-full sm:w-[320px] shrink-0 flex flex-col justify-center">
          <p className="text-[#35ff7a] italic font-serif text-lg mb-1 whitespace-nowrap">
            Frescura en cada plato
          </p>
          <p className="text-[#f5f5f5]/60 text-xs tracking-wider uppercase font-sans">
            Tradición & Calidad
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-[#222222]/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 w-full sm:w-[320px] shrink-0 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
            {/* Simple SVG icon since lucide might not be installed */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#f5f5f5] text-sm font-medium whitespace-nowrap">
              Ingredientes frescos.
            </span>
            <span className="text-[#35ff7a] text-sm font-semibold whitespace-nowrap">
              Sabor auténtico.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
