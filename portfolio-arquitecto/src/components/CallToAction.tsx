"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mt-6 text-lg text-white/60 font-light leading-relaxed">
          Nos encantaría escuchar tu idea. Cada gran espacio comienza con una
          conversación. Agenda una consulta sin compromiso y exploremos juntos
          las posibilidades.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-10 px-10 py-4 bg-white text-zinc-900 text-sm tracking-widest uppercase hover:bg-zinc-100 transition-colors duration-300"
        >
          Agenda una Consulta
        </button>
      </motion.div>
    </section>
  );
}
