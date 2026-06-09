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
    location: "Aguascalientes, Aguascalientes",
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
    id: "abada",
    title: "Residencial Abada",
    category: "Dirección y Supervisión de Obra",
    year: 2022,
    location: "Aguascalientes, Aguascalientes",
    description:
      "Desarrollo residencial proyectado dentro de un entorno seguro, rodeado de arboles frutales y amenidades de gran clase; ubicado en la mejor zona de Aguascalientes, el nor-poniente de la ciudad.",
    details:
      "El proyecto integra dentro de su diseño amenidades como casa club, cancha de tenis, cancha de pasto sintético, alberca exterior y terraza, trotapista, kids playground, pet park, zona de asadores, fogatero y huerto urbano; todo pensado y diseñado para mejorar el nivel de vida de las personas y crear un ecosistema en armonía.",
    images: [
      "/images/abada/project-single-1.jpg",
      "/images/abada/project-single-2.jpg",
      "/images/abada/project-single-3.jpg",
      "/images/abada/project-single-4.jpg",
      "/images/abada/project-single-15.jpg",
    ],
    area: "112 m² por casa",
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
