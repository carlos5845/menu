import Image from "next/image";

import { MENU_DATA } from "@/lib/data";

export function MenuShowcase() {
  return (
    <section className="w-full bg-[#050505] flex flex-col pb-24">
      {MENU_DATA.map((category) => (
        <div key={category.id} id={category.id} className="w-full flex flex-col mb-16 scroll-mt-[140px]">
          {/* Category Banner */}
          <div className="relative w-full h-[350px] md:h-[450px]">
            <Image
              src={category.bgImage}
              alt={category.title}
              fill
              className="object-cover opacity-60"
            />
            {/* Gradient to fade into the black background below */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

            {/* Title & Subtitle positioned at the bottom left of the banner */}
            <div className="absolute bottom-6 left-0 w-full">
              <div className="max-w-5xl mx-auto px-4 sm:px-8">
                <h2 className="text-[#f5f5f5] mb-1 uppercase tracking-tight drop-shadow-md" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
                  {category.title}
                </h2>
                <p className="text-[#ff7a1a] text-sm tracking-[0.1em] font-semibold uppercase font-sans drop-shadow-sm">
                  {category.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items List */}
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-8 flex flex-col gap-10">
            {category.items.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="group flex gap-6 items-center w-full scroll-mt-[140px]"
              >
                {/* Thumbnail Image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 border border-white/5 bg-[#111111]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex justify-between items-start gap-4 border-b border-white/5 pb-4">
                  <div className="flex flex-col">
                    <h3 className="text-[#f5f5f5] text-lg font-bold uppercase tracking-wide mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[#f5f5f5]/60 text-sm font-sans mb-2">
                      {item.description}
                    </p>

                    {/* Status Tags */}
                    {item.tag && (
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={
                            item.tagColor === "coral"
                              ? "text-[#ff7a1a]"
                              : "text-[#35ff7a]"
                          }
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            item.tagColor === "coral"
                              ? "text-[#ff7a1a]"
                              : "text-[#35ff7a]"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex-shrink-0">
                    <span className="text-[#ff7a1a] text-xl font-bold tracking-wider">
                      {item.price}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
