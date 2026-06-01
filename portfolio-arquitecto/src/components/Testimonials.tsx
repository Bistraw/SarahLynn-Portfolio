"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Marco transformó nuestra visión en una casa que supera todo lo que imaginamos. Su atención al detalle y capacidad de escucha son excepcionales. Cada rincón cuenta una historia.",
    author: "María Elena Rodríguez",
    role: "Propietaria, Casa Cavalia",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "La fachada cinética de Torre Lúmina se ha convertido en un ícono del corredor corporativo. Logró un equilibrio perfecto entre estética y eficiencia energética.",
    author: "Ing. Carlos Mendoza",
    role: "Director General, Grupo Inmobiliario Alfa",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote:
      "El Parque Lineal Río Verde revitalizó completamente nuestro barrio. Donde antes había abandono, ahora hay familias, ciclistas y vida comunitaria. Un proyecto transformador.",
    author: "Arq. Patricia Sánchez",
    role: "Directora de Desarrollo Urbano, Querétaro",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    quote:
      "Convertir nuestra antigua bodega en un loft fue un reto enorme. Marco preservó la esencia industrial del espacio y lo dotó de una calidez que no creíamos posible.",
    author: "Roberto Ávila",
    role: "Propietario, Loft San Ángel",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-400 mb-3">
            Testimonios
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            Lo que dicen <span className="font-semibold">mis clientes</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[300px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 mx-auto mb-8 text-zinc-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-300 mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium text-sm">
                    {testimonials[current].author}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-zinc-600 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all"
              aria-label="Testimonio anterior"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-white" : "w-2 bg-zinc-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-zinc-600 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all"
              aria-label="Siguiente testimonio"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
