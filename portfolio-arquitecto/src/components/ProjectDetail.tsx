"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  }, [project.images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, nextImage, prevImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gallery */}
        <div className="relative aspect-[16/9] bg-zinc-100 overflow-hidden">
          {project.images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`${project.title} - Imagen ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Imagen anterior"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Siguiente imagen"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentImage ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Project info */}
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-zinc-100 text-zinc-700 text-xs tracking-wider uppercase px-3 py-1">
              {project.category}
            </span>
            <span className="text-sm text-zinc-400">{project.year}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-2">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-6 text-sm text-zinc-500 mb-8">
            <div>
              <span className="text-zinc-400 block text-xs uppercase tracking-wider">Ubicación</span>
              {project.location}
            </div>
            <div>
              <span className="text-zinc-400 block text-xs uppercase tracking-wider">Área</span>
              {project.area}
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-8">
            <p className="text-zinc-600 leading-relaxed text-base">
              {project.details}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
