"use client";

import { motion } from "framer-motion";

const specializations = [
  { title: "Diseño Residencial", desc: "Casas que dialogan con su entorno" },
  { title: "Arquitectura Comercial", desc: "Espacios funcionales e icónicos" },
  { title: "Interiorismo", desc: "Atmósferas con personalidad" },
  { title: "Urbanismo", desc: "Ciudades más humanas y verdes" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-zinc-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Sarah Lynn - Arquitecta"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-zinc-300 -z-10 hidden lg:block" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-zinc-400 mb-3">
              Sobre Mí
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-8">
              Sarah <span className="font-semibold">Lynn</span>
            </h2>

            <div className="space-y-4 text-zinc-600 leading-relaxed mb-10">
              <p>
                Arquitecta titulada por la Universidad Nacional Autónoma de
                México con maestría en Diseño Sustentable por el Politécnico de
                Milán. Con más de 15 años de experiencia, mi práctica se centra
                en crear espacios que responden al clima, la cultura y las
                necesidades de quienes los habitan.
              </p>
              <p>
                He tenido el privilegio de trabajar en proyectos que van desde
                residencias privadas hasta intervenciones urbanas a gran escala,
                siempre con un compromiso firme con la sostenibilidad y la
                sensibilidad contextual.
              </p>
            </div>

            {/* Specializations */}
            <div className="grid grid-cols-2 gap-4">
              {specializations.map((spec, i) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l-2 border-zinc-300 pl-4 py-2"
                >
                  <h4 className="text-sm font-medium text-zinc-900">
                    {spec.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">{spec.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-10 pt-8 border-t border-zinc-200">
              {[
                { value: "15+", label: "Años de experiencia" },
                { value: "60+", label: "Proyectos realizados" },
                { value: "8", label: "Premios obtenidos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl font-light text-zinc-900">
                    {stat.value}
                  </span>
                  <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
