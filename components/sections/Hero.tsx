"use client";

import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import {MapPin} from "lucide-react";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center pt-8 mb-9">
      {/* Background cinematic elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo-hero.webp"
          alt="Background"
          fill
          priority
          quality={80}
          sizes="100vw"
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
                src="/right-brand-removebg-preview.webp"
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
              <button 
                onClick={() => {
                  const el = document.getElementById('smart-navigation');
                  if (el) {
                    const offset = el.getBoundingClientRect().top + window.scrollY - 20;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                    setTimeout(() => document.getElementById('search-input')?.focus(), 600);
                  }
                }}
                className="group flex items-center gap-3 bg-gradient-to-r from-[#ff7a1a] to-[#ff9b4f] text-white px-8 py-3.5 rounded-full font-sans text-sm font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(255,122,26,0.5)] transition-all"
              >
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
              <a 
                href="https://wa.me/51920611777"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-transparent border border-white/20 text-[#25D366] px-8 py-3.5 rounded-full font-sans text-sm font-bold tracking-wider uppercase hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all"
              >
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                RESERVAR
              </a>
            </div>

            {/* Social Media & Location Banner */}
            <div className="flex flex-col gap-6 w-full lg:w-[90%] mt-8 bg-[#121212]/50 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-4">
                
                {/* Location */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Cevichería Manolo's Jr.+Banchero+Rossi+149,+Puno+21002"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ff7a1a]/10 border border-[#ff7a1a]/30 flex items-center justify-center shrink-0 group-hover:bg-[#ff7a1a]/20 group-hover:border-[#ff7a1a]/50 transition-all">
                    <MapPin size={22} className="text-[#ff7a1a] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 font-light uppercase tracking-[0.15em] mb-1 group-hover:text-white/70 transition-colors">Ubícanos en</p>
                    <p className="text-white font-medium text-sm md:text-base leading-tight group-hover:text-[#ff7a1a] transition-colors">Jr. Banchero Rossi 149<br/></p>
                  </div>
                </a>

                {/* Divider */}
                <div className="hidden sm:block h-12 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                <div className="sm:hidden w-full h-[1px] bg-gradient-to-r from-white/10 via-white/10 to-transparent"></div>

                {/* Socials */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {/* Facebook */}
                    <a href="https://www.facebook.com/profile.php?id=100092236969799" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2]]/20 hover:border-[#1877F2]/50 hover:shadow-[0_0_15px_rgba(23,48,50,0.3)] transition-all group">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#1877F2] transition-colors">
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/quinta_cevicheria?utm_source=qr&igsh=M3NrNTB3ejBpcG9w" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E1306C]/20 hover:border-[#E1306C]/50 hover:shadow-[0_0_15px_rgba(225,48,108,0.3)] transition-all group">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#E1306C] transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    
                    {/* TikTok */}
                    <a href="https://www.tiktok.com/@manoloscevichera?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all group">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-colors"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                    </a>
                  </div>
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
                src="/LOGO-CEVICHE.webp"
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
      <div 
        onClick={() => {
          const el = document.getElementById('smart-navigation');
          if (el) {
            const offset = el.getBoundingClientRect().top + window.scrollY - 20;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer group"
      >
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
