"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Escuchar",
    description:
      "Comenzamos con una conversación profunda para entender tus necesidades, sueños y estilo de vida. Visitamos el sitio y analizamos el contexto urbano, climático y normativo.",
  },
  {
    number: "02",
    title: "Conceptualizar",
    description:
      "Desarrollamos el concepto arquitectónico a través de bocetos, diagramas, maquetas de estudio o renderizados. Definimos la volumetría, espacialidad y materialidad del proyecto.",
  },
  {
    number: "03",
    title: "Diseñar",
    description:
      "Creamos el proyecto ejecutivo completo: planos arquitectónicos, renders fotorrealistas, especificaciones técnicas y coordinación con ingenierías estructural, eléctrica e hidrosanitaria.",
  },
  {
    number: "04",
    title: "Construir",
    description:
      "Supervisamos cada etapa de la construcción para asegurar que el diseño se materialice con la calidad y los detalles planeados. Gestión de proveedores y control de presupuesto.",
  },
  {
    number: "05",
    title: "Entregar",
    description:
      "Acompañamos la puesta en marcha del espacio, desde la instalación de mobiliario hasta los últimos detalles. Tu espacio listo para ser vivido.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-400 mb-3">
            Metodología
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900">
            El <span className="font-semibold">Proceso</span>
          </h2>
          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Cada proyecto sigue una metodología clara que garantiza resultados
            excepcionales, transparencia y comunicación constante.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`lg:flex items-center lg:mb-16 last:mb-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-[45%] ${
                    i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
                  }`}
                >
                  <span className="text-5xl font-extralight text-zinc-200">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-medium text-zinc-900 mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex lg:w-[10%] justify-center">
                  <div className="w-4 h-4 rounded-full bg-zinc-900 border-4 border-white shadow" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
