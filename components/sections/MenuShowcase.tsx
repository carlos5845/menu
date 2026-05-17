import Image from "next/image";

const MENU_DATA = [
  {
    id: "ceviches",
    title: "CEVICHES",
    subtitle: "EL ALMA DE LA COSTA",
    alignment: "left" as const,
    bgImage: "/LOGO-CEVICHE.png", // Using the logo as a placeholder for food photography
    items: [
      {
        id: "c1",
        name: "Ceviche Clásico",
        description: "Pesca del día, leche de tigre tradicional, cebolla morada, ají limo, choclo y camote glaseado.",
        price: "$18",
        tag: "RECOMENDADO",
        image: "/LOGO-CEVICHE.png",
      },
      {
        id: "c2",
        name: "Aguachile de Camarón",
        description: "Camarones sumergidos en aguachile verde picante, pepino, cilantro y rábano fresco.",
        price: "$22",
        tag: "NUEVO",
        tagColor: "coral",
        image: "/LOGO-CEVICHE.png",
      },
      {
        id: "c3",
        name: "Ceviche Mixto",
        description: "Combinación de pescados y mariscos bañados en leche de tigre al rocoto.",
        price: "$24",
        image: "/LOGO-CEVICHE.png",
      }
    ]
  },
  {
    id: "tiraditos",
    title: "TIRADITOS",
    subtitle: "CORTES FINOS, SABOR INTENSO",
    alignment: "right" as const,
    bgImage: "/LOGO-CEVICHE.png",
    items: [
      {
        id: "t1",
        name: "Tiradito Apasionado",
        description: "Láminas de salmón fresco con salsa de maracuyá, hilos de camote frito y ají limo.",
        price: "$20",
        tag: "NUEVO",
        image: "/LOGO-CEVICHE.png",
      },
      {
        id: "t2",
        name: "Tiradito al Olivo",
        description: "Pulpo laminado finamente cubierto con nuestra exclusiva crema de aceitunas botija.",
        price: "$22",
        image: "/LOGO-CEVICHE.png",
      }
    ]
  },
  {
    id: "mariscos",
    title: "MARISCOS",
    subtitle: "DELICIAS DEL PUERTO",
    alignment: "left" as const,
    bgImage: "/LOGO-CEVICHE.png",
    items: [
      {
        id: "m1",
        name: "Jalea Mixta",
        description: "Chicharrón de mariscos y pescado crujiente acompañado de yuca frita y salsa criolla.",
        price: "$28",
        tag: "RECOMENDADO",
        image: "/LOGO-CEVICHE.png",
      },
      {
        id: "m2",
        name: "Arroz con Mariscos",
        description: "Arroz al wok con azafrán, cerveza negra, mix de mariscos y un toque de queso parmesano.",
        price: "$26",
        image: "/LOGO-CEVICHE.png",
      }
    ]
  }
];

export function MenuShowcase() {
  return (
    <section className="w-full bg-[#050505] flex flex-col">
      {MENU_DATA.map((category, index) => (
        <div key={category.id} className="relative w-full min-h-screen py-32 flex flex-col justify-center overflow-hidden">
          
          {/* Background Image with Cinematic Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={category.bgImage}
              alt={category.title}
              fill
              className="object-cover opacity-20" // Reduced opacity so the placeholder doesn't overwhelm the design
            />
            {/* The strong black-to-transparent gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 z-10 relative flex flex-col">
            
            {/* Category Header */}
            <div className={`mb-16 flex flex-col ${category.alignment === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
              <h2 className="text-display-xl text-[#f5f5f5] mb-2 uppercase tracking-tight drop-shadow-lg">
                {category.title}
              </h2>
              <p className="text-[#f5f5f5]/60 text-sm tracking-[0.3em] font-light uppercase font-sans">
                {category.subtitle}
              </p>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <article 
                  key={item.id} 
                  className="group relative bg-[#111111]/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/5 hover:border-[#ff7a1a]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,122,26,0.15)] flex gap-4 sm:gap-6 items-start"
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 border border-white/10 shadow-lg group-hover:border-[#ff7a1a]/50 transition-colors duration-500">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1 gap-4">
                      <h3 className="text-[#f5f5f5] text-lg sm:text-xl font-bold uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <span className="text-[#ff7a1a] text-lg sm:text-xl font-bold tracking-wider">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-[#f5f5f5]/65 text-sm font-sans line-clamp-3 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Status Tags */}
                    {item.tag && (
                      <div className="mt-auto">
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/5 border ${
                          item.tagColor === 'coral' 
                            ? 'text-[#ff7a1a] border-[#ff7a1a]/20' 
                            : 'text-[#35ff7a] border-[#35ff7a]/20'
                        }`}>
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}
