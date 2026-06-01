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
  "Residencial",
  "Interiorismo",
];

export const projects: Project[] = [
  {
    id: "casa-horizonte",
    title: "Casa Horizonte",
    category: "Residencial",
    year: 2024,
    location: "Valle de Bravo, México",
    description:
      "Residencia contemporánea que integra espacios abiertos con vistas panorámicas al lago.",
    details:
      "Este proyecto residencial de 450 m² fusiona la arquitectura contemporánea con el entorno natural de Valle de Bravo. Los grandes ventanales de piso a techo permiten una conexión visual constante con el lago, mientras que los materiales locales —piedra volcánica y madera de parota— anclan la estructura al paisaje. La distribución en tres niveles escalonados sigue la topografía natural del terreno, minimizando el impacto ambiental. El diseño bioclimático incorpora ventilación cruzada, captación pluvial y paneles solares.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    area: "450 m²",
  },
  {
    id: "loft-san-angel",
    title: "Loft San Ángel",
    category: "Interiorismo",
    year: 2024,
    location: "San Ángel, CDMX",
    description:
      "Transformación de una bodega industrial en un loft residencial de concepto abierto.",
    details:
      "Este proyecto de interiorismo convirtió una antigua bodega textil de los años 40 en un loft contemporáneo de 220 m². Se preservaron elementos industriales originales —vigas de acero, muros de ladrillo aparente y pisos de concreto pulido— integrándolos con mobiliario minimalista y una paleta de materiales cálidos. La iluminación fue diseñada en capas: cenital natural a través de domos recuperados, iluminación arquitectónica LED y luminarias de diseño como piezas escultóricas.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    area: "220 m²",
  },
  {
    id: "casa-ceiba",
    title: "Casa Ceiba",
    category: "Residencial",
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
];
