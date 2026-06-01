"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1" />
      </svg>
    ),
    title: "Diseño Arquitectónico",
    description:
      "Desarrollo integral de proyectos residenciales y comerciales, desde el concepto inicial hasta los planos ejecutivos. Cada diseño responde al contexto climático, cultural y funcional del sitio.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Interiorismo",
    description:
      "Diseño de interiores que transforma espacios en experiencias. Selección de materiales, mobiliario, iluminación y acabados para crear atmósferas con personalidad única.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    title: "Modelado 3D y Renderizado",
    description:
      "Visualización fotorrealista y modelado BIM para una coordinación precisa del proyecto. Renders, recorridos virtuales y documentación técnica integrada.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Supervisión de Obra",
    description:
      "Dirección y supervisión de obra para garantizar que cada detalle del diseño se materialice con la calidad esperada. Control de tiempos, costos y estándares constructivos.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-400 mb-3">
            Qué Hago
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900">
            Mis <span className="font-semibold">Servicios</span>
          </h2>
          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales de arquitectura y diseño, desde la
            conceptualización hasta la entrega final del proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white p-8 hover:shadow-lg transition-all duration-500 border border-zinc-100 hover:border-zinc-200"
            >
              <div className="text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
