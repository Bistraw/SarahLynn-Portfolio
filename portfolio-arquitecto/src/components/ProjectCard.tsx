"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onSelect,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="text-white text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/50 px-6 py-2"
          >
            Ver Proyecto
          </motion.span>
        </div>
        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-zinc-800 text-xs tracking-wider uppercase px-3 py-1">
          {project.category}
        </span>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-500 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-3 text-xs text-zinc-400 pt-1">
          <span>{project.location}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.area}</span>
        </div>
      </div>
    </motion.article>
  );
}
