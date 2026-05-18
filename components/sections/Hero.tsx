import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center pt-8 mb-9">
      {/* Background cinematic elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo-hero.png"
          alt="Background"
          fill
          className="object-cover opacity-60 md:opacity-100"
        />
        {/* Gradients to darken left side and top/bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* Top Navigation Line */}
      <div className="relative z-10 w-full max-w-[1400px] px-8 flex flex-col mt-4">
        <div className="flex justify-between items-center text-[#f5f5f5] uppercase tracking-[0.2em] text-[10px] font-sans">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a1a]" />
            <span>QUINTA CEVICHERÍA</span>
          </div>
          <div className="flex items-center gap-2">
            <span>SABOR DEL MAR</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a1a]" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/10 mt-4" />
      </div>

      {/* Main Content Split */}
      <div className="relative z-10 w-full max-w-[1400px] px-8 flex-1 flex flex-col justify-center pb-8 mt-12 lg:mt-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* LEFT COLUMN - Typography & CTAs */}
          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left pt-12 lg:pt-0">
            <div className="relative w-full lg:w-[90%] aspect-[2/1] mb-6">
              <Image
                src="/right-brand-removebg-preview.png"
                alt="Bienvenido a Manolo's Quinta Cevichería"
                fill
                className="object-contain object-center lg:object-left"
                priority
              />
            </div>

            <p className="text-white/80 w-full lg:w-[90%] font-sans text-sm md:text-base lg:text-lg leading-relaxed mb-10 font-light">
              Tradición, frescura y sabor del mar en cada plato. Ingredientes
              frescos, recetas auténticas y el mejor ambiente para disfrutar.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 lg:mb-6">
              <button className="group flex items-center gap-3 bg-gradient-to-r from-[#ff7a1a] to-[#ff9b4f] text-white px-8 py-3.5 rounded-full font-sans text-sm font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(255,122,26,0.5)] transition-all">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:-translate-y-0.5 transition-transform"
                >
                  <circle cx="12" cy="5" r="3" />
                  <line x1="12" y1="22" x2="12" y2="8" />
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                </svg>
                VER MENÚ
              </button>
              <button className="group flex items-center gap-3 bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-full font-sans text-sm font-bold tracking-wider uppercase hover:bg-white/5 hover:border-white/40 transition-all">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                CONÓCENOS
              </button>
            </div>

            {/* Feature Cards Glassmorphism */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-[90%]">
              {/* Card 1 */}
              <div className="bg-[#121212]/70 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-center gap-4 w-full flex-1 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#ff7a1a]/40 transition-colors">
                <div className="w-11 h-11 rounded-full bg-[#ff7a1a]/10 border border-[#ff7a1a]/30 flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff7a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 12s-3-2-4-2c0 4 4 4 4 4" />
                    <path d="M22 12c-2.73-.01-5.46-1-7-3-3-4-8-4-10-4S1 10 1 12s1.5 7 4 7 7 0 10-4c1.54-2 4.27-2.99 7-3z" />
                    <circle cx="16" cy="10" r="1" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-sm mb-0.5">
                    Frescura diaria
                  </span>
                  <span className="text-white/50 text-[11px] font-light leading-tight">
                    Seleccionamos lo mejor
                    <br />
                    del mar cada día.
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#121212]/70 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-center gap-4 w-full flex-1 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#ff7a1a]/40 transition-colors">
                <div className="w-11 h-11 rounded-full bg-[#ff7a1a]/10 border border-[#ff7a1a]/30 flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff7a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-sm mb-0.5">
                    Sabor auténtico
                  </span>
                  <span className="text-white/50 text-[11px] font-light leading-tight">
                    Recetas tradicionales con
                    <br />
                    un toque único.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Mascot & Food Layering */}
          <div className="w-full relative mt-12 lg:mt-0 pointer-events-none lg:min-h-[500px]">
            {/* Atmospheric Orange Glow Behind */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] bg-[#ff7a1a] opacity-20 rounded-full blur-[100px]" />

            {/* Subtle haze/smoke effect via gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff7a1a]/10 via-transparent to-transparent blur-xl" />

            {/* Mascot Logo */}
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 lg:w-[400px] aspect-square pointer-events-auto hover:scale-[1.05] transition-transform duration-700 ease-out">
              <Image
                src="/LOGO-CEVICHE.png"
                alt="Manolo's Mascot Logo"
                fill
                className="object-contain object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer group">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#ff7a1a]/50 group-hover:bg-[#ff7a1a]/10 transition-all animate-bounce">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white group-hover:text-[#ff7a1a] transition-colors"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
        <span className="text-white/50 text-[9px] tracking-[0.25em] uppercase font-sans group-hover:text-[#ff7a1a] transition-colors">
          DESCUBRE MÁS
        </span>
      </div>
    </section>
  );
}
