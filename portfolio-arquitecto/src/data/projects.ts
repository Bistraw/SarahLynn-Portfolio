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
  "Comercial",
  "Interiorismo",
  "Urbanismo",
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
    id: "torre-lumina",
    title: "Torre Lúmina",
    category: "Comercial",
    year: 2023,
    location: "Ciudad de México",
    description:
      "Edificio corporativo de 12 niveles con fachada cinética que responde a la luz solar.",
    details:
      "Torre Lúmina es un edificio de oficinas premium de 12 niveles ubicado en el corredor Reforma-Santa Fe. Su característica más distintiva es la fachada cinética compuesta por 2,400 paneles de aluminio anodizado que rotan según la posición del sol, reduciendo la ganancia térmica en un 40%. El lobby de doble altura incorpora un jardín vertical de 180 m² que funciona como sistema de purificación de aire natural. El edificio obtuvo certificación LEED Platinum.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
    area: "18,000 m²",
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
    id: "parque-lineal-rio",
    title: "Parque Lineal Río Verde",
    category: "Urbanismo",
    year: 2023,
    location: "Querétaro, México",
    description:
      "Intervención urbana que recupera las márgenes del río como espacio público peatonal.",
    details:
      "Este proyecto de urbanismo regenerativo transforma 3.2 km de las márgenes del Río Querétaro en un corredor verde peatonal y ciclista. El diseño incluye plazas de encuentro, áreas de juego, huertos urbanos comunitarios y un sistema de fitodepuración que mejora la calidad del agua. La vegetación nativa fue seleccionada para crear microclimas confortables y fomentar la biodiversidad local. El proyecto conecta cuatro barrios previamente fragmentados por la infraestructura vehicular.",
    images: [
      "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=1200&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    ],
    area: "3.2 km lineales",
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
  {
    id: "mercado-central",
    title: "Mercado Central Renovado",
    category: "Comercial",
    year: 2024,
    location: "Oaxaca, México",
    description:
      "Renovación integral del mercado municipal preservando su identidad cultural y mejorando funcionalidad.",
    details:
      "La renovación del Mercado Central de Oaxaca aborda la rehabilitación de 4,500 m² de espacio comercial tradicional. El proyecto preserva la estructura original de arcos de ladrillo y bóvedas catalanas mientras introduce sistemas modernos de ventilación, iluminación natural a través de lucernarios y un nuevo sistema de manejo de residuos. Se diseñaron 120 puestos modulares adaptables, áreas de degustación y un mirador en la azotea con vista a Santo Domingo.",
    images: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1200&q=80",
    ],
    area: "4,500 m²",
  },
];
