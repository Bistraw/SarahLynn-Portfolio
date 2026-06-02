export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  location: string;
  description: string;
  details: string;
  images: string[];
  area: string;
}

export const categories = [
  "Todos",
  "Diseño Arquitectónico",
  "Modelado y Renderizado",
  "Diseño de Interiores",
  "Dirección y Supervisión de Obra",
];

export const projects: Project[] = [
  {
    id: "campanario",
    title: "Campanario Señor de los Rayos",
    category: "Diseño Arquitectónico",
    year: 2024,
    location: "Fresnillo, Zacatecas, México",
    description:
      "Campanario del templo Señor de los Rayos",
    details:
      "Margarita Maza de Juárez s/ n, Benito Juárez, 99020 Fresnillo, Zac.",
    images: [
      "/images/campanario/fresnillo_señor_rayos1.webp",
      "/images/campanario/fresnillo_señor_rayos2.webp",
      "/images/campanario/fresnillo_señor_rayos3.webp",
    ],
    area: "50 m²",
  },
  {
    id: "redesign",
    title: "Terreno a Hogar",
    category: "Diseño de Interiores",
    year: 2024,
    location: "Santiago de Querétaro, Querétaro",
    description:
      "Transformación de una terreno en un loft residencial de concepto abierto.",
    details:
      "Este proyecto de interiorismo convirtió una antigua bodega textil de los años 40 en un loft contemporáneo de 220 m². Se preservaron elementos industriales originales —vigas de acero, muros de ladrillo aparente y pisos de concreto pulido— integrándolos con mobiliario minimalista y una paleta de materiales cálidos. La iluminación fue diseñada en capas: cenital natural a través de domos recuperados, iluminación arquitectónica LED y luminarias de diseño como piezas escultóricas.",
    images: [
      "/images/renders/r1.jpeg",
      "/images/renders/r2.jpeg",
      "/images/renders/r4.jpeg",
      "/images/renders/r5.jpeg",
      "/images/renders/r6.jpeg",
    ],
    area: "100 m²",
  },
  {
    id: "casa-ceiba",
    title: "Casa Ceiba",
    category: "Dirección y Supervisión de Obra",
    year: 2022,
    location: "Mérida, Yucatán",
    description:
      "Casa tropical que reinterpreta la arquitectura vernácula yucateca con lenguaje contemporáneo.",
    details:
      "Casa Ceiba rinde homenaje a la arquitectura tradicional maya con una reinterpretación moderna. Los muros de piedra caliza local y los techos con pendientes pronunciadas se combinan con concreto aparente y acero corten. Un patio central organiza la distribución y alberga una ceiba centenaria que da nombre al proyecto. El sistema de ventilación pasiva, inspirado en las haciendas henequeneras, elimina la necesidad de aire acondicionado durante 8 meses al año.",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    ],
    area: "380 m²",
  },
  {
    id: "maqueta",
    title: "Renderizado de Maqueta",
    category: "Modelado y Renderizado",
    year: 2024,
    location: "Aguascalientes, Aguascalientes",
    description:
      "Renderizado de maqueta basado en plano.",
    details:
      "Renderizado de maqueta.",
    images: [
      "/images/render_maqueta/r7.jpeg",
    ],
    area: "380 m²",
  },
];
