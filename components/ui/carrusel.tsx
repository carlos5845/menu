"use client";

import { useEffect, useRef, useState } from "react";

const CAROUSEL_IMAGES = [
  "/bg_ceviches.png",
  "/item_mariscos.png",
  "/bg_tiraditos.png",
  "/item_ceviche.png",
  "/bg_mariscos.png",
  "/item_tiradito.png",
  "/barco.png",
];

export default function Carrusel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationId: number;
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 0.7;

    const step = () => {
      if (!isHovered && container && firstSetRef.current) {
        container.scrollLeft += scrollStep;

        if (container.scrollLeft >= firstSetRef.current.offsetWidth) {
          container.scrollLeft -= firstSetRef.current.offsetWidth;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FF7425] py-10 md:py-16 z-20 flex items-center justify-center -rotate-2 scale-[1.03]">
      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div ref={trackRef} className="flex w-max">
          {[1, 2, 3].map((set) => (
            <div
              key={set}
              ref={set === 1 ? firstSetRef : null}
              className="flex items-center gap-5 md:gap-6 px-3"
            >
              {CAROUSEL_IMAGES.map((src, idx) => (
                <div
                  key={`set${set}-${idx}`}
                  className="relative h-[220px] md:h-[360px] w-[220px] md:w-[290px] shrink-0 rounded-2xl overflow-hidden shadow-md group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Imagen ${idx}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
