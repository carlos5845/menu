export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  tagColor?: "coral" | "green";
  image: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  bgImage: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    id: "ceviches",
    title: "CEVICHES",
    subtitle: "FRESCURA MARINA EN CADA BOCADO",
    bgImage: "/bg_ceviches.png",
    items: [
      {
        id: "c1",
        name: "CEVICHE MANOLO'S",
        description:
          "Pescado, langostinos y pulpo en leche de tigre de la casa.",
        price: "S/45.00",
        tag: "RECOMENDADO",
        tagColor: "green",
        image: "/item_ceviche.png",
      },
      {
        id: "c2",
        name: "CEVICHE CLÁSICO",
        description: "Pescado blanco fresco, limón, cilantro y ají.",
        price: "S/38.00",
        image: "/item_ceviche.png",
      },
    ],
  },
  {
    id: "tiraditos",
    title: "TIRADITOS",
    subtitle: "CORTES FINOS, SABOR INTENSO",
    bgImage: "/bg_tiraditos.png",
    items: [
      {
        id: "t1",
        name: "TIRADITO APASIONADO",
        description:
          "Láminas de salmón fresco con salsa de maracuyá, hilos de camote frito y ají limo.",
        price: "S/42.00",
        tag: "NUEVO",
        tagColor: "coral",
        image: "/item_tiradito.png",
      },
      {
        id: "t2",
        name: "TIRADITO AL OLIVO",
        description:
          "Pulpo laminado finamente cubierto con nuestra exclusiva crema de aceitunas botija.",
        price: "S/40.00",
        image: "/item_tiradito.png",
      },
    ],
  },
  {
    id: "mariscos",
    title: "MARISCOS",
    subtitle: "DELICIAS DEL PUERTO",
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "m1",
        name: "JALEA MIXTA",
        description:
          "Chicharrón de mariscos y pescado crujiente acompañado de yuca frita y salsa criolla.",
        price: "S/55.00",
        tag: "RECOMENDADO",
        tagColor: "green",
        image: "/item_mariscos.png",
      },
      {
        id: "m2",
        name: "ARROZ CON MARISCOS",
        description:
          "Arroz al wok con azafrán, cerveza negra, mix de mariscos y un toque de queso parmesano.",
        price: "S/48.00",
        image: "/item_mariscos.png",
      },
    ],
  },
  {
    id: "combinados",
    title: "COMBINADOS",
    subtitle: "NUESTRAS ESPECIALIDADES COMPLETAS",
    bgImage: "/bg_mariscos.png", // Reutilizando un fondo, luego puedes cambiarlo
    items: [
      {
        id: "cmb1",
        name: "BALSA PERSONAL",
        description:
          "Ceviche + chicharrón mixto + arroz con marisco + leche de tigre + piqueos de la casa.",
        price: "S/35.00",
        tag: "POPULAR",
        tagColor: "coral",
        image: "/item_mariscos.png", // Reutilizando la foto, luego puedes cambiarla
      }
    ],
  },
  {
  id: "balsas-trucha-tilapia",
  title: "BALSAS (Trucha o Tilapia)",
  subtitle: "PARA COMPARTIR CON TODOS",
  bgImage: "/bg_mariscos.png",
  items: [
    {
      id: "btt1",
      name: "BALSA PERSONAL",
      description:
        "Ceviche + chicharrón mixto + arroz con marisco + leche de tigre + piqueos de casa. ",
      price: "S/35.00",
      tag: "POPULAR",
      tagColor: "coral",
      image: "/item_mariscos.png",
    },
    {
      id: "btt2",
      name: "DÚO PARA 2 PERSONAS",
      description:
        "Ceviche + chicharrón mixto + arroz chaufa de pollo + piqueos de casa + leche de tigre. ",
      price: "S/57.00",
      image: "/item_mariscos.png",
    },
    {
      id: "btt3",
      name: "TRIPLE PARA 3 PERSONAS",
      description:
        "Ceviche + arroz chaufa de pollo + arroz con mariscos + chicharrón mixto + piqueos de casa + leche de tigre. ",
      price: "S/69.00",
      image: "/item_mariscos.png",
    },
    {
      id: "btt4",
      name: "FAMILIAR PARA 6 PERSONAS",
      description:
        "Ceviche + arroz chaufa de pollo + arroz con mariscos + chicharrón mixto + piqueos de casa + leche de tigre. ",
      price: "S/125.00",
      tag: "RECOMENDADO",
      tagColor: "green",
      image: "/item_mariscos.png",
    },
  ],
},

{
  id: "barcos-jurel",
  title: "BARCOS (Jurel)",
  subtitle: "NUESTRA ESPECIALIDAD EN JUREL",
  bgImage: "/bg_mariscos.png",
  items: [
    {
      id: "bj1",
      name: "BARCO PERSONAL",
      description:
        "Ceviche + arroz con mariscos + chicharrón mixto + leche de tigre + piqueos de casa. ",
      price: "S/29.00",
      image: "/item_mariscos.png",
    },
    {
      id: "bj2",
      name: "DÚO PARA 2 PERSONAS",
      description:
        "Ceviche + arroz chaufa de pollo + chicharrón mixto + piqueos de casa + leche de tigre. ",
      price: "S/48.00",
      image: "/item_mariscos.png",
    },
    {
      id: "bj3",
      name: "TRIPLE PARA 3 PERSONAS",
      description:
        "Ceviche + 1 arroz chaufa de pollo + 1 arroz con mariscos + 1 chicharrón mixto + piqueos de casa + leche de tigre. ",
      price: "S/58.00",
      image: "/item_mariscos.png",
    },
    {
      id: "bj4",
      name: "FAMILIAR PARA 6 PERSONAS",
      description:
        "Ceviche + arroz chaufa de pollo + arroz con mariscos + chicharrón mixto + piqueos de casa + leche de tigre. ",
      price: "S/98.00",
      image: "/item_mariscos.png",
    },
  ],
},

{
  id: "balsas-barco-vip",
  title: "BALSAS Y BARCO VIP (Trucha, Jurel, Tilapia) ",
  subtitle: "COMBINACIONES EXCLUSIVAS VIP",
  bgImage: "/bg_mariscos.png",
  items: [
    {
      id: "vip1",
      name: "PERSONAL VIP",
      description:
        "Ceviche + arroz con mariscos + chicharrón de trucha + leche de tigre + choritos a la chalaca o causa. ",
      price: "S/40.00",
      image: "/item_mariscos.png",
    },
    {
      id: "vip2",
      name: "DÚO PARA 2 PERSONAS VIP",
      description:
        "Ceviche + arroz con marisco + arroz chaufa de pollo + una porción de jalea + choritos a la chalaca o causa + leche de tigre. ",
      price: "S/75.00",
      image: "/item_mariscos.png",
    },
    {
      id: "vip3",
      name: "TRIPLE PARA 3 PERSONAS VIP",
      description:
        "Ceviche + chaufa de pollo + arroz con mariscos + chaufa de mariscos + 1 porción de jalea + choritos a la chalaca o causa + leche de tigre.",
      price: "S/95.00",
      image: "/item_mariscos.png",
    },
    {
      id: "vip4",
      name: "FAMILIAR PARA 4 PERSONAS VIP",
      description:
        "Ceviche + 4 porciones de arroz chaufa o arroz con marisco + 2 porciones de jalea + choritos a la chalaca + causa limeña + leche de tigre.",
      price: "S/125.00",
      tag: "RECOMENDADO",
      tagColor: "green",
      image: "/item_mariscos.png",
    },
  ],
},

{
  id: "ceviches-solo-limon",
  title: "CEVICHES (Solo limón)",
  subtitle: "TRADICIÓN Y FRESCURA",
  bgImage: "/bg_ceviches.png",
  items: [
    {
      id: "csl1",
      name: "CEVICHE DE JUREL",
      description:
        "Ceviche de jurel + cebolla + camote + lechuga + choclo desgranado. ",
      price: "S/23.00",
      image: "/item_ceviche.png",
    },
    {
      id: "csl2",
      name: "CEVICHE DE TILAPIA",
      description:
        "Ceviche de tilapia + cebolla + camote + lechuga + choclo desgranado.",
      price: "S/30.00",
      image: "/item_ceviche.png",
    },
    {
      id: "csl3",
      name: "CEVICHE CLÁSICO DE TRUCHA",
      description:
        "Ceviche de trucha + cebolla + camote + lechuga + choclo desgranado.",
      price: "S/30.00",
      image: "/item_ceviche.png",
    },
  ],
},

{
  id: "festival-leche-tigre",
  title: "FESTIVAL DE LECHE DE TIGRE ",
  subtitle: "EL SABOR INTENSO DEL CEVICHE",
  bgImage: "/bg_ceviches.png",
  items: [
    {
      id: "lt1",
      name: "LECHE DE TIGRE",
      description:
        "Leche de tigre + camote + lechuga + cebolla + choclo desgranado.",
      price: "S/12.00",
      image: "/item_ceviche.png",
    },
    {
      id: "lt2",
      name: "MISTURA DE LECHE DE TIGRE",
      description:
        "3 copas con variedades de leches de tigre basado en diversos ajíes nativos.",
      price: "S/26.00",
      tag: "NUEVO",
      tagColor: "coral",
      image: "/item_ceviche.png",
    },
    {
      id: "lt3",
      name: "ACOMPAÑA TU LECHE DE TIGRE 1",
      description:
        "Leche de tigre acompañado de arroz con mariscos o arroz chaufa.",
      price: "S/20.00",
      image: "/item_ceviche.png",
    },
    {
      id: "lt4",
      name: "ACOMPAÑA TU LECHE DE TIGRE 2",
      description:
        "Leche de tigre acompañado de chicharrón de pescado o pota. ",
      price: "S/22.00",
      image: "/item_ceviche.png",
    },
  ],
},
    {
    id: "conos-adicionales",
    title: "CONO CEVICHERO", // [cite: 36]
    subtitle: "COMPLEMENTOS AL PASO",
    bgImage: "/bg_ceviches.png",
    items: [
      {
        id: "con2",
        name: "CONO CEVICHERO + ARROZ", // [cite: 38]
        description: "Chicharrón de pescado + papas doradas + yucas doradas + arroz con mariscos o arroz chaufa + sarsa acevichada o sarsa criolla.", // [cite: 38]
        price: "S/20.00", // [cite: 38]
        image: "/item_ceviche.png"
      },
      {
        id: "con3",
        name: "CONO CEVICHERO + LECHE DE TIGRE", // [cite: 39]
        description: "Chicharrón de pescado + papas doradas + yucas doradas + sarsa acevichada + copa de leche de tigre.", // [cite: 39]
        price: "S/22.00", // [cite: 39]
        image: "/item_ceviche.png"
      }
    ]
  },
  {
    id: "duos-jurel",
    title: "DÚOS DE CASA", // [cite: 40]
    subtitle: "CEVICHE DE JUREL", // [cite: 40]
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "dj1",
        name: "CEVICHE + CHICHARRÓN DE POTA", // [cite: 41]
        description: "Ceviche más chicharrón de pota + yuca frita + papa dorada.", // [cite: 41]
        price: "S/30.00", // [cite: 41]
        tag: "POPULAR",
        tagColor: "coral",
        image: "/item_mariscos.png"
      },
      {
        id: "dj2",
        name: "CEVICHE + CHICHARRÓN DE PESCADO", // [cite: 42]
        description: "Ceviche más chicharrón de pescado + yuca frita + papa dorada.", // [cite: 42]
        price: "S/28.00", // [cite: 42]
        image: "/item_mariscos.png"
      },
      {
        id: "dj3",
        name: "CEVICHE + ARROZ CHAUFA DE POLLO", // [cite: 43]
        description: "Ceviche de pescado + lechuga + camote + choclo desgranado + cebolla + arroz chaufa de pollo.", // [cite: 43]
        price: "S/26.00", // [cite: 43]
        image: "/item_mariscos.png"
      },
      {
        id: "dj4",
        name: "CEVICHE + ARROZ CHAUFA DE MARISCOS", // [cite: 44]
        description: "Combinación clásica de ceviche de jurel con chaufa de mariscos.", // [cite: 44]
        price: "S/30.00", // [cite: 44]
        image: "/item_mariscos.png"
      },
      {
        id: "dj5",
        name: "CEVICHE + ARROZ CON MARISCOS", // [cite: 45]
        description: "Ceviche de jurel acompañado de un sabroso arroz con mariscos.", // [cite: 45]
        price: "S/30.00", // [cite: 45]
        image: "/item_mariscos.png"
      },
      {
        id: "dj6",
        name: "CHICHARRÓN DE POTA + ARROZ CON MARISCO", // [cite: 46]
        description: "Crujiente chicharrón de pota con arroz con mariscos.", // [cite: 46]
        price: "S/30.00", // [cite: 46]
        image: "/item_mariscos.png"
      },
      {
        id: "dj7",
        name: "CHICHARRÓN DE POTA + ACHAUFA DE MARISCO", // [cite: 47]
        description: "Chicharrón de pota acompañado de arroz chaufa de mariscos.", // [cite: 47]
        price: "S/30.00", // [cite: 47]
        image: "/item_mariscos.png"
      },
      {
        id: "dj8",
        name: "CHICHARRÓN DE POTA + ARROZ CHAUFA DE POLLO", // [cite: 48]
        description: "Chicharrón de pota con guarnición de chaufa de pollo.", // [cite: 48]
        price: "S/30.00", // [cite: 48]
        image: "/item_mariscos.png"
      },
      {
        id: "dj9",
        name: "CHICHARRÓN DE PESCADO + ARROZ CON MARISCO", // [cite: 49]
        description: "Trozos crujientes de pescado frito servidos con arroz con mariscos.", // [cite: 49]
        price: "S/30.00", // [cite: 49]
        image: "/item_mariscos.png"
      },
      {
        id: "dj10",
        name: "CHICHARRÓN DE PESCADO + ARROZ CHAUFA DE MARISCO", // [cite: 50]
        description: "Pescado frito acompañado de chaufa de mariscos.", // [cite: 50]
        price: "S/30.00", // [cite: 50]
        image: "/item_mariscos.png"
      },
      {
        id: "dj11",
        name: "CHICHARRÓN DE PESCADO + ARROZ CHAUFA DE POLLO", // [cite: 51]
        description: "Chicharrón de pescado con chaufa de pollo.", // [cite: 51]
        price: "S/30.00", // [cite: 51]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "duos-tilapia",
    title: "DÚOS DE CASA", // [cite: 52]
    subtitle: "CEVICHE DE TILAPIA", // [cite: 52]
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "dt1",
        name: "CEVICHE + CHICHARRÓN DE POTA", // [cite: 53]
        description: "Ceviche más chicharrón de pota + yuca frita + papa dorada.", // [cite: 53]
        price: "S/33.00", // [cite: 53]
        image: "/item_mariscos.png"
      },
      {
        id: "dt2",
        name: "CEVICHE + CHICHARRÓN DE PESCADO", // [cite: 54]
        description: "Ceviche más chicharrón de pescado + yuca frita + papa dorada.", // [cite: 54, 55]
        price: "S/32.00", // [cite: 54]
        image: "/item_mariscos.png"
      },
      {
        id: "dt3",
        name: "CEVICHE + DE ARROZ CHAUFA DE POLLO", // [cite: 56]
        description: "Ceviche de pescado + lechuga + camote + choclo desgranado + cebolla + arroz chaufa de pollo.", // [cite: 56]
        price: "S/32.00", // [cite: 56]
        image: "/item_mariscos.png"
      },
      {
        id: "dt4",
        name: "CEVICHE + ARROZ CHAUFA DE MARISCOS", // [cite: 57]
        description: "Ceviche de tilapia con chaufa de mariscos.", // [cite: 57]
        price: "S/32.00", // [cite: 57]
        image: "/item_mariscos.png"
      },
      {
        id: "dt5",
        name: "CEVICHE + ARROZ CON MARISCOS", // [cite: 58]
        description: "Ceviche de tilapia + lechuga + camote + choclo desgranado + cebolla + arroz con mariscos.", // [cite: 58, 59]
        price: "S/32.00", // [cite: 58]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "duos-trucha",
    title: "DÚOS DE CASA", // [cite: 60]
    subtitle: "CEVICHE DE TRUCHA", // [cite: 60]
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "dtr1",
        name: "CEVICHE + CHICHARRÓN DE POTA", // [cite: 61]
        description: "Ceviche más chicharrón de pota + yuca frita + papa dorada.", // [cite: 61, 62]
        price: "S/35.00", // [cite: 61]
        image: "/item_mariscos.png"
      },
      {
        id: "dtr2",
        name: "CEVICHE + CHICHARRÓN DE PESCADO", // [cite: 63]
        description: "Ceviche más chicharrón de pescado + yuca frita + papa dorada.", // [cite: 63]
        price: "S/32.00", // [cite: 63]
        image: "/item_mariscos.png"
      },
      {
        id: "dtr3",
        name: "CEVICHE + DE ARROZ CHAUFA DE POLLO", // [cite: 64]
        description: "Ceviche de pescado + lechuga + camote + choclo desgranado + cebolla + arroz chaufa de pollo.", // [cite: 64]
        price: "S/32.00", // [cite: 64]
        image: "/item_mariscos.png"
      },
      {
        id: "dtr4",
        name: "CEVICHE + ARROZ CHAUFA DE MARISCOS", // [cite: 65]
        description: "Ceviche de trucha servido con chaufa de mariscos.", // [cite: 65]
        price: "S/32.00", // [cite: 65]
        image: "/item_mariscos.png"
      },
      {
        id: "dtr5",
        name: "CEVICHE + ARROZ CON MARISCOS", // [cite: 66]
        description: "Ceviche de pescado + lechuga + camote + choclo desgranado + cebolla + arroz con mariscos.", // [cite: 66]
        price: "S/32.00", // [cite: 66]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "arroces",
    title: "ARROCES", // [cite: 67]
    subtitle: "NUESTRAS ESPECIALIDADES AL WOK",
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "arr1",
        name: "ARROZ CON MARISCOS", // [cite: 68]
        description: "Deliciosa preparación que combina el sabor y la textura del arroz con una variedad de mariscos frescos.", // [cite: 68]
        price: "S/25.00", // [cite: 68]
        tag: "RECOMENDADO",
        tagColor: "green",
        image: "/item_mariscos.png"
      },
      {
        id: "arr2",
        name: "ARROZ CHAUFA DE MARISCOS", // [cite: 69]
        description: "Delicioso y abundante arroz chaufa de mariscos que combina la frescura y sabor de los mariscos con el arroz frito y los sabores orientales.", // [cite: 69]
        price: "S/25.00", // [cite: 69]
        image: "/item_mariscos.png"
      },
      {
        id: "arr3",
        name: "ARROZ CHAUFA DE POLLO", // [cite: 70]
        description: "Delicioso arroz frito con trozos de pollo.", // [cite: 70]
        price: "S/20.00", // [cite: 70]
        image: "/item_mariscos.png"
      },
      {
        id: "arr4",
        name: "CHAUFA DE PESCADO", // [cite: 71]
        description: "Delicioso arroz frito con trozos de chicharrón de pescado.", // [cite: 71]
        price: "S/25.00", // [cite: 71]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "causas",
    title: "CAUSAS", // [cite: 72]
    subtitle: "TRADICIÓN Y SABOR",
    bgImage: "/bg_ceviches.png",
    items: [
      {
        id: "cau1",
        name: "CAUSA ACEVICHADA (Ceviche de JUREL)", // [cite: 73]
        description: "Deliciosa causa cubierto de nuestro tradicional ceviche de pescado.", // [cite: 73]
        price: "S/25.00", // [cite: 73]
        image: "/item_ceviche.png"
      },
      {
        id: "cau2",
        name: "CAUSA ACEVICHADA (Ceviche de TRUCHA)", // [cite: 74]
        description: "Deliciosa causa cubierto de nuestro tradicional ceviche de pescado.", // [cite: 74]
        price: "S/33.00", // [cite: 74]
        image: "/item_ceviche.png"
      },
      {
        id: "cau3",
        name: "CAUSA ACEVICHADA (Ceviche de TILAPIA)", // [cite: 75]
        description: "Deliciosa causa cubierto de nuestro tradicional ceviche de pescado.", // [cite: 75]
        price: "S/33.00", // [cite: 75]
        image: "/item_ceviche.png"
      }
    ]
  },
  {
    id: "triples-marinos",
    title: "TRIPLES MARINOS", // [cite: 76]
    subtitle: "CEVICHE DE JUREL Y ESPECIALIDADES DE TRUCHA", // [cite: 76]
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "tm1",
        name: "CEVICHE + ARROZ CON MARISCOS + CHICHARRÓN DE PESCADO", // [cite: 77]
        description: "Combinación triple clásica de la casa.", // [cite: 77]
        price: "S/37.00", // [cite: 77]
        tag: "POPULAR",
        tagColor: "coral",
        image: "/item_mariscos.png"
      },
      {
        id: "tm2",
        name: "CEVICHE + ARROZ CON MARISCOS + CHICHARRÓN DE POTA", // [cite: 78]
        description: "Tres delicias combinadas con chicharrón de pota.", // [cite: 78]
        price: "S/37.00", // [cite: 78]
        image: "/item_mariscos.png"
      },
      {
        id: "tm3",
        name: "CEVICHE + ARROZ CHAUFA DE POLLO + CHICHARRÓN DE PESCADO", // [cite: 79]
        description: "Mezcla de sabores marinos y chaufa.", // [cite: 79]
        price: "S/37.00", // [cite: 79]
        image: "/item_mariscos.png"
      },
      {
        id: "tm4",
        name: "CEVICHE + ARROZ CHAUFA DE POLLO + CHICHARRÓN DE POTA", // [cite: 80]
        description: "Triple especial con chicharrón de pota.", // [cite: 80]
        price: "S/37.00", // [cite: 80]
        image: "/item_mariscos.png"
      },
      {
        id: "tm5",
        name: "CEVICHE + ARROZ CHAUFA DE MARISCOS + CHICHARRÓN DE PESCADO", // [cite: 81]
        description: "Un festín de mariscos y pescado fresco.", // [cite: 81]
        price: "S/37.00", // [cite: 81]
        image: "/item_mariscos.png"
      },
      {
        id: "tm6",
        name: "CEVICHE + ARROZ CHAUFA DE MARISCOS + CHICHARRÓN DE POTA", // [cite: 82]
        description: "Ceviche fresco con chaufa y pota crujiente.", // [cite: 82]
        price: "S/37.00", // [cite: 82]
        image: "/item_mariscos.png"
      },
      {
        id: "tm7",
        name: "CEVICHE + CHICHARRÓN DE PESCADO + CAUSA", // [cite: 83]
        description: "Trío de clásicos con nuestra causa de la casa.", // [cite: 83]
        price: "S/37.00", // [cite: 83]
        image: "/item_mariscos.png"
      },
      {
        id: "tm8",
        name: "CEVICHE DE TRUCHA + ARROZ CON MARISCOS + CHICHARRÓN DE PESCADO Ó POTA", // [cite: 84]
        description: "Especialidad en trucha acompañada de arroz y chicharrón a elección.", // [cite: 84]
        price: "S/42.00", // [cite: 84]
        image: "/item_mariscos.png"
      },
      {
        id: "tm9",
        name: "CEVICHE DE TRUCHA + CHAUFA MARISCOS + CHICHARRÓN DE PESCADO Ó POTA", // [cite: 85]
        description: "Trucha fresca con chaufa y opción de chicharrón.", // [cite: 85]
        price: "S/42.00", // [cite: 85]
        image: "/item_mariscos.png"
      },
      {
        id: "tm10",
        name: "CEVICHE DE TRUCHA + CHAUFA DE POLLO + CHICHARRÓN DE PESCADO Ó POTA", // [cite: 86]
        description: "Combinación de trucha, chaufa de pollo y crujiente chicharrón.", // [cite: 86]
        price: "S/42.00", // [cite: 86]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "arma-trio",
    title: "ARMA TU TRIO MARINO", // [cite: 87]
    subtitle: "A TU ELECCIÓN",
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "atm1",
        name: "ESCOGE 3 OPCIONES", // [cite: 88]
        description: "ceviche, leche de tigre, arroz con mariscos, arroz chaufa de mariscos, chicharrón de pota, chicharrón de pescado, causa.", // [cite: 88]
        price: "S/39.00", // [cite: 88]
        tag: "NUEVO",
        tagColor: "coral",
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "sudados",
    title: "SUDADOS", // [cite: 89]
    subtitle: "PLATOS CALIENTES DEL MAR",
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "sud1",
        name: "SUDADO DE TRUCHA", // [cite: 90]
        description: "Sudado de trucha + porción de arroz blanco.", // [cite: 90]
        price: "S/25.00", // [cite: 90]
        image: "/item_mariscos.png"
      },
      {
        id: "sud2",
        name: "SUDADO DE PESCADO DE MAR", // [cite: 91]
        description: "Sudado de pescado de mar + porción de arroz blanco.", // [cite: 91]
        price: "S/28.00", // [cite: 91]
        image: "/item_mariscos.png"
      },
      {
        id: "sud3",
        name: "PARIHUELA", // [cite: 92]
        description: "Filete de pescado de mar (tilapia) + cangrejo + mixtura de mariscos y mi porción de arroz blanco.", // [cite: 92]
        price: "S/36.00", // [cite: 92]
        tag: "RECOMENDADO",
        tagColor: "green",
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "engreidos-casa",
    title: "PARA LOS ENGREÍDOS DE CASA", // [cite: 93]
    subtitle: "OPCIONES PARA NIÑOS",
    bgImage: "/bg_ceviches.png",
    items: [
      {
        id: "kid1",
        name: "CEVICHE KIDS", // [cite: 94]
        description: "Una versión suave y deliciosa para los más pequeños.", // [cite: 94]
        price: "S/22.00", // [cite: 94]
        image: "/item_ceviche.png"
      },
      {
        id: "kid2",
        name: "LECHE DE TIGRE KIDS", // [cite: 95]
        description: "Leche de tigre especial para niños.", // [cite: 95]
        price: "S/12.00", // [cite: 95]
        image: "/item_ceviche.png"
      },
      {
        id: "kid3",
        name: "NUGGETS DE POLLO CON ARROZ BLANCO", // [cite: 96]
        description: "Nuggets de pollo + papas fritas + arroz blanco + ensalada de lechuga.", // [cite: 96]
        price: "S/18.00", // [cite: 96]
        image: "/item_mariscos.png"
      },
      {
        id: "kid4",
        name: "NUGGETS DE POLLO CON CHAUFA", // [cite: 98]
        description: "Nuggets de pollo + papas fritas + arroz chaufa de pollo + ensalada de lechuga.", // [cite: 98]
        price: "S/23.00", // [cite: 98]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "fritos",
    title: "FRITOS", // [cite: 97]
    subtitle: "CRUJIENTES Y DELICIOSOS",
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "fri1",
        name: "JALEA PERSONAL", // [cite: 99]
        description: "Chicharrón mixto + chicharrón de mariscos + papas doradas + yucas doradas + sarsa criolla acevichada.", // [cite: 99]
        price: "S/35.00", // [cite: 99]
        image: "/item_mariscos.png"
      },
      {
        id: "fri2",
        name: "PESCADO FRITO DE MAR (ENTERO) CON ARROZ BLANCO", // [cite: 100]
        description: "Pescado frito de mar + arroz blanco + papas doradas + yucas doradas + sarsa criolla.", // [cite: 100]
        price: "S/30.00", // [cite: 100]
        image: "/item_mariscos.png"
      },
      {
        id: "fri3",
        name: "PESCADO FRITO DE MAR (ENTERO) CON CHAUFA", // [cite: 101]
        description: "Pescado frito de mar + arroz chaufa de pollo + papas doradas + yucas doradas + sarsa criolla.", // [cite: 101]
        price: "S/35.00", // [cite: 101]
        image: "/item_mariscos.png"
      },
      {
        id: "fri4",
        name: "CHICHARRÓN DE PESCADO", // [cite: 102]
        description: "Chicharrón de pescado + arroz blanco + papas doradas + yucas doradas + sarsa criolla.", // [cite: 102]
        price: "S/28.00", // [cite: 102]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "combinados-manolo",
    title: "COMBINADOS MANOLO'S", // [cite: 103]
    subtitle: "BARCO O BALSA", // [cite: 103]
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "cmb2",
        name: "PESCADO FRITO DE MAR + ARROZ BLANCO + CEVICHE", // [cite: 104]
        description: "Ceviche de pescado + camote + choclo desgranado + lechuga + cebolla acompañado de pescado frito + porción de arroz blanco.", // [cite: 104]
        price: "S/30.00", // [cite: 104]
        image: "/item_mariscos.png"
      },
      {
        id: "cmb3",
        name: "PESCADO FRITO DE MAR + CHAUFA DE POLLO + CEVICHE", // [cite: 105]
        description: "Ceviche de pescado + camote + choclo desgranado + lechuga + cebolla acompañado de pescado frito + porción de chaufa de pollo.", // [cite: 105]
        price: "S/35.00", // [cite: 105]
        image: "/item_mariscos.png"
      },
      {
        id: "cmb4",
        name: "TRUCHA FRITA + ARROZ BLANCO + CEVICHE", // [cite: 106]
        description: "Ceviche de pescado + camote + choclo desgranado + lechuga + cebolla acompañado de trucha frita + porción de arroz blanco.", // [cite: 106]
        price: "S/30.00", // [cite: 106]
        image: "/item_mariscos.png"
      },
      {
        id: "cmb5",
        name: "TRUCHA FRITA + CHAUFA DE POLLO + CEVICHE", // [cite: 107]
        description: "Ceviche de pescado + camote + choclo desgranado + lechuga + cebolla acompañado de trucha frita + porción de chaufa de pollo.", // [cite: 107]
        price: "S/35.00", // [cite: 107]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "porciones",
    title: "PORCIONES", // [cite: 108]
    subtitle: "GUARNICIONES Y EXTRAS",
    bgImage: "/bg_mariscos.png",
    items: [
      { id: "por1", name: "YUCA DORADA", description: "Porción extra de yuca dorada.", price: "S/9.00", image: "/item_mariscos.png" }, // [cite: 109]
      { id: "por2", name: "PAPA DORADA", description: "Porción extra de papa dorada.", price: "S/6.00", image: "/item_mariscos.png" }, // [cite: 110]
      { id: "por3", name: "PAPA SANCOCHADA", description: "Porción extra de papa sancochada.", price: "S/4.00", image: "/item_mariscos.png" }, // [cite: 111]
      { id: "por4", name: "CAMOTE SANCOCHADO", description: "Porción extra de camote.", price: "S/4.00", image: "/item_mariscos.png" }, // [cite: 112]
      { id: "por5", name: "TEQUEÑOS (6 UNIDADES)", description: "6 crujientes tequeños.", price: "S/10.00", image: "/item_mariscos.png" }, // [cite: 113]
      { id: "por6", name: "CHICHARRÓN DE POTA", description: "Porción de chicharrón de pota.", price: "S/15.00", image: "/item_mariscos.png" }, // [cite: 114]
      { id: "por7", name: "CHICHARRÓN DE PESCADO", description: "Porción de chicharrón de pescado.", price: "S/15.00", image: "/item_mariscos.png" }, // [cite: 115]
      { id: "por8", name: "ARROZ BLANCO", description: "Porción de arroz blanco.", price: "S/5.00", image: "/item_mariscos.png" }, // [cite: 116]
      { id: "por9", name: "CHAUFA DE MARISCOS", description: "Porción de chaufa de mariscos.", price: "S/10.00", image: "/item_mariscos.png" }, // [cite: 117]
      { id: "por10", name: "ARROZ CON MARISCOS", description: "Porción extra de arroz con mariscos.", price: "S/10.00", image: "/item_mariscos.png" }, // [cite: 118]
      { id: "por11", name: "CHAUFA DE POLLO", description: "Porción extra de chaufa de pollo.", price: "S/10.00", image: "/item_mariscos.png" }, // [cite: 119]
      { id: "por12", name: "SARSA CRIOLLA", description: "Porción de sarsa criolla.", price: "S/5.00", image: "/item_mariscos.png" }, // [cite: 120]
      { id: "por13", name: "ENSALADA DE LECHUGA", description: "Porción de ensalada fresca.", price: "S/5.00", image: "/item_mariscos.png" }, // [cite: 121]
      { id: "por14", name: "CANCHITA", description: "Porción de canchita paccho.", price: "S/5.00", image: "/item_mariscos.png" }, // [cite: 122]
      { id: "por15", name: "CHILCANO ESPECIAL", description: "Taza de chilcano especial.", price: "S/5.00", image: "/item_mariscos.png" }, // [cite: 123]
      { id: "por16", name: "PORCIÓN DE CEVICHE", description: "Porción extra de ceviche.", price: "S/10.00", image: "/item_mariscos.png" }, // [cite: 124]
      { id: "por17", name: "6 CHORITOS A LA CHALACA", description: "6 choritos preparados a la chalaca.", price: "S/15.00", image: "/item_mariscos.png" }, // [cite: 125]
      { id: "por18", name: "CAUSA LIMEÑA", description: "Porción de causa limeña.", price: "S/10.00", image: "/item_mariscos.png" } // [cite: 126]
    ]
  },
  {
    id: "platos-region",
    title: "PLATOS DE LA REGIÓN", // [cite: 127]
    subtitle: "SABORES LOCALES",
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "reg1",
        name: "TRUCHA FRITA", // [cite: 128]
        description: "Trucha frita + arroz blanco + papas doradas + yucas doradas + tunta + sarsa criolla.", // [cite: 128]
        price: "S/22.00", // [cite: 128]
        image: "/item_mariscos.png"
      },
      {
        id: "reg2",
        name: "CHICHARRÓN DE TRUCHA", // [cite: 129]
        description: "Chicharrón de trucha + papas doradas + yucas doradas + tunta + choclo + sarsa criolla.", // [cite: 129]
        price: "S/25.00", // [cite: 129]
        image: "/item_mariscos.png"
      },
      {
        id: "reg3",
        name: "CHICHARRÓN DE POLLO", // [cite: 130]
        description: "Chicharrón de pollo + papas doradas + tunta + yucas doradas + choclo + sarsa criolla.", // [cite: 130]
        price: "S/28.00", // [cite: 130]
        image: "/item_mariscos.png"
      },
      {
        id: "reg4",
        name: "COSTILLAR FRITO (MEDIA COSTILLA)", // [cite: 131]
        description: "Costillar frito + arroz blanco + tunta + papas doradas + yucas doradas + sarsa criolla.", // [cite: 131]
        price: "S/30.00", // [cite: 131]
        image: "/item_mariscos.png"
      },
      {
        id: "reg5",
        name: "CHICHARRÓN DE CHANCHO", // [cite: 132]
        description: "Chicharrón de chancho + choclo + papas doradas + yucas doradas + tunta + sarsa criolla.", // [cite: 132]
        price: "S/30.00", // [cite: 132]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "chicharron-mixto",
    title: "CHICHARRÓN MIXTO", // [cite: 133]
    subtitle: "POLLO Y CHANCHO",
    bgImage: "/bg_mariscos.png",
    items: [
      {
        id: "cm1",
        name: "CHICHARRÓN MIXTO (POLLO, CHANCHO)", // [cite: 134]
        description: "Chicharrón mixto, pollo, chancho + choclo + tunta + papas doradas + yucas doradas + sarsa criolla.", // [cite: 134, 135]
        price: "S/35.00", // [cite: 134]
        image: "/item_mariscos.png"
      }
    ]
  },
  {
    id: "bebidas",
    title: "BEBIDAS", // [cite: 136]
    subtitle: "REFRESCOS, GASEOSAS E INFUSIONES",
    bgImage: "/bg_mariscos.png",
    items: [
      { id: "beb1", name: "LIMONADA 1 LT", description: "Refresco", price: "S/12.00", image: "/item_mariscos.png" }, // [cite: 137]
      { id: "beb2", name: "LIMONADA ½ LT", description: "Refresco", price: "S/7.00", image: "/item_mariscos.png" }, // [cite: 138]
      { id: "beb3", name: "CHICHA MORADA 1 LT", description: "Refresco", price: "S/12.00", image: "/item_mariscos.png" }, // [cite: 139]
      { id: "beb4", name: "CHICHA MORADA ½ LT", description: "Refresco", price: "S/7.00", image: "/item_mariscos.png" }, // [cite: 140]
      { id: "beb5", name: "MARACUYÁ 1 LT", description: "Refresco", price: "S/14.00", image: "/item_mariscos.png" }, // [cite: 141]
      { id: "beb6", name: "MARACUYÁ ½ LT", description: "Refresco", price: "S/7.00", image: "/item_mariscos.png" }, // [cite: 142]
      { id: "beb7", name: "COPOAZÚ 1 LT", description: "Fruta de la selva peruana", price: "S/15.00", image: "/item_mariscos.png" }, // [cite: 143]
      { id: "beb8", name: "COPOAZÚ ½ LT", description: "Fruta de la selva peruana", price: "S/8.00", image: "/item_mariscos.png" }, // [cite: 144]
      { id: "beb9", name: "MARACUCHICHA 1 LT", description: "Refresco mixto", price: "S/13.00", image: "/item_mariscos.png" }, // [cite: 145]
      { id: "beb10", name: "MARACUCHICHA ½ LT", description: "Refresco mixto", price: "S/8.00", image: "/item_mariscos.png" }, // [cite: 146]

      { id: "beb11", name: "COPOAZÚ (VASO)", description: "Vaso personal", price: "S/8.00", image: "/item_mariscos.png" }, // [cite: 147, 148]
      { id: "beb12", name: "LIMONADA (VASO)", description: "Vaso personal", price: "S/6.00", image: "/item_mariscos.png" }, // [cite: 149]
      { id: "beb13", name: "MARACUYÁ (VASO)", description: "Vaso personal", price: "S/7.00", image: "/item_mariscos.png" }, // [cite: 150]
      { id: "beb14", name: "CHICHA MORADA (VASO)", description: "Vaso personal", price: "S/7.00", image: "/item_mariscos.png" }, // [cite: 151]

      { id: "gas1", name: "INCA KOLA 2 LT", description: "Gaseosa", price: "S/12.00", image: "/item_mariscos.png" }, // [cite: 152, 153]
      { id: "gas2", name: "COCA COLA 2 LT", description: "Gaseosa", price: "S/12.00", image: "/item_mariscos.png" }, // [cite: 154]
      { id: "gas3", name: "INCA KOLA 1 ½ LT", description: "Gaseosa", price: "S/9.00", image: "/item_mariscos.png" }, // [cite: 155]
      { id: "gas4", name: "COCA COLA 1 ½ LT", description: "Gaseosa", price: "S/9.00", image: "/item_mariscos.png" }, // [cite: 156]
      { id: "gas5", name: "INCA KOLA 1 LT", description: "Gaseosa", price: "S/7.00", image: "/item_mariscos.png" }, // [cite: 157]
      { id: "gas6", name: "COCA COLA 1 LT", description: "Gaseosa", price: "S/7.00", image: "/item_mariscos.png" }, // [cite: 158]
      { id: "gas7", name: "INCA KOLA 600 ml", description: "Gaseosa", price: "S/4.50", image: "/item_mariscos.png" }, // [cite: 159]
      { id: "gas8", name: "COCA COLA 600 ml", description: "Gaseosa", price: "S/4.50", image: "/item_mariscos.png" }, // [cite: 160]
      { id: "gas9", name: "INCA KOLA 620 ml", description: "Gaseosa", price: "S/5.00", image: "/item_mariscos.png" }, // [cite: 161]
      { id: "gas10", name: "COCA COLA 620 ml", description: "Gaseosa", price: "S/5.00", image: "/item_mariscos.png" }, // [cite: 161]
      { id: "gas11", name: "INCA KOLA 400 ml", description: "Gaseosa", price: "S/3.50", image: "/item_mariscos.png" }, // [cite: 162]
      { id: "gas12", name: "COCA COLA 400 ml", description: "Gaseosa", price: "S/3.50", image: "/item_mariscos.png" }, // [cite: 163]
      { id: "gas13", name: "AGUA MINERAL (SAN LUIS)", description: "Agua embotellada", price: "S/3.00", image: "/item_mariscos.png" }, // [cite: 164]
      { id: "gas14", name: "AGUA MINERAL (CIELO)", description: "Agua embotellada", price: "S/2.50", image: "/item_mariscos.png" }, // [cite: 165]
      { id: "gas15", name: "KOLA ESCOCESA 1 ½ LT", description: "Gaseosa", price: "S/10.00", image: "/item_mariscos.png" }, // [cite: 166]
      { id: "gas16", name: "KOLA ESCOCESA 2 LT", description: "Gaseosa", price: "S/15.00", image: "/item_mariscos.png" }, // [cite: 167]

      { id: "inf1", name: "MANZANILLA, ANÍS, TÉ PURO", description: "Infusión caliente", price: "S/3.00", image: "/item_mariscos.png" }, // [cite: 168, 169]
      { id: "inf2", name: "COCA", description: "Mate de coca caliente", price: "S/3.00", image: "/item_mariscos.png" }, // [cite: 170]
      { id: "inf3", name: "CAFÉ (SOBRE)", description: "Café en sobre", price: "S/3.50", image: "/item_mariscos.png" } // [cite: 171]
    ]
  }
];
