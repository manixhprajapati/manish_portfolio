import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { projectsData } from "../data/portfolioData";
import {
  WashiTape,
  BurstBadge,
  SparkleStar,
  Starburst,
  DotMatrix,
  UnderlineSquiggle
} from "./Decorative";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

function ProjectCard({ project, index, onOpen }) {
  const isEven = index % 2 === 0;

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      data-cursor="grow"
      variants={cardVariants}
      whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`group relative block w-full text-left rounded-3xl border-2 border-dashed border-[rgba(245,244,252,0.15)] bg-[var(--color-canvas-raised)] p-3 shadow-[6px_8px_0_0_oklch(0.10_0.03_290)] ${project.rotate} cursor-pointer`}
    >
      {/* Top Washi Tape Sticker */}
      <WashiTape
        color={`var(${project.accent})`}
        className={`absolute -top-3 z-10 ${
          isEven ? "left-6 -rotate-8" : "right-6 rotate-6"
        }`}
      />

      {/* NEW Badge on First Project */}
      {project.badge && (
        <BurstBadge
          color="var(--color-accent)"
          className="absolute -right-4 -top-4 z-10 h-12 w-12 rotate-6 text-[10px] drop-shadow-md"
        >
          {project.badge}
        </BurstBadge>
      )}

      {/* Artwork Thumbnail */}
      <div className="overflow-hidden rounded-2xl bg-black">
        <img
          src={project.img}
          alt={`${project.title} preview`}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Card Info */}
      <div className="px-1 pb-1 pt-4">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-bold text-[var(--color-canvas)]"
          style={{ backgroundColor: `var(${project.accent})` }}
        >
          {project.tag}
        </span>
        <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-[var(--color-ink)]">
          {project.title}
        </h3>
      </div>

      {/* Corner Sparkle on Hover */}
      <SparkleStar className="pointer-events-none absolute -right-2 -top-2 h-5 w-5 text-[var(--color-gold)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </motion.button>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);

  // Close modals on Escape key & manage scroll lock
  useEffect(() => {
    if (!selectedProject && !showAllModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedProject) setSelectedProject(null);
        else setShowAllModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject, showAllModal]);

  // Listen to remote "open-all-projects" custom event
  useEffect(() => {
    const handleOpenAll = () => setShowAllModal(true);
    window.addEventListener("open-all-projects", handleOpenAll);
    return () => window.removeEventListener("open-all-projects", handleOpenAll);
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20 md:px-12">
      {/* Background vectors */}
      <DotMatrix className="pointer-events-none absolute right-4 top-2 h-24 w-40 text-[var(--color-coral)] opacity-25 md:right-14" />
      <Starburst className="pointer-events-none absolute left-[3%] top-24 h-7 w-7 text-[var(--color-cyan)] opacity-70" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--color-accent)]">
              ◉ Featured Work
            </p>
            <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight text-[var(--color-ink)] md:text-4xl">
              Stuff I’m proud to show off
              <UnderlineSquiggle className="absolute -bottom-2 left-0 h-3 w-full text-[var(--color-coral)]" />
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowAllModal(true)}
            data-cursor="grow"
            className="group relative flex items-center gap-1.5 font-display text-sm font-extrabold text-[rgba(245,244,252,0.85)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
            <UnderlineSquiggle className="absolute -bottom-2 left-0 h-2 w-[85%] text-[var(--color-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </button>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpen={setSelectedProject}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal: Single Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
              className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border-2 border-dashed border-[rgba(245,244,252,0.2)] bg-[var(--color-canvas-raised)] p-6 shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] sm:p-8"
            >
              <WashiTape
                color={`var(${selectedProject.accent})`}
                className="absolute -top-3 left-8 z-10"
              />
              <Starburst className="pointer-events-none absolute -right-3 -top-3 h-9 w-9 text-[var(--color-accent)]" />

              <button
                type="button"
                data-cursor="grow"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-canvas)] text-[var(--color-ink)] transition-transform hover:scale-110"
              >
                <X size={16} />
              </button>

              <div className="overflow-hidden rounded-2xl bg-black">
                <img
                  src={selectedProject.img}
                  alt={`${selectedProject.title} full artwork`}
                  className="aspect-square w-full object-cover"
                />
              </div>

              <span
                className="mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold text-[var(--color-canvas)]"
                style={{ backgroundColor: `var(${selectedProject.accent})` }}
              >
                {selectedProject.tag}
              </span>

              <h3 className="relative mt-3 inline-block font-display text-2xl font-extrabold tracking-tight text-[var(--color-ink)]">
                {selectedProject.title}
                <UnderlineSquiggle className="absolute -bottom-2 left-0 h-2 w-full text-[var(--color-accent)]" />
              </h3>

              <p className="mt-5 text-[rgba(245,244,252,0.85)] leading-relaxed">
                {selectedProject.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: View All Projects Drawer */}
      <AnimatePresence>
        {showAllModal && !selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
            onClick={() => setShowAllModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
              className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-3xl border-2 border-dashed border-[rgba(245,244,252,0.2)] bg-[var(--color-canvas-raised)] p-6 shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] sm:p-8"
            >
              <WashiTape
                color="var(--color-accent)"
                className="absolute -top-3 left-8 z-10"
              />
              <Starburst className="pointer-events-none absolute -right-3 -top-3 h-9 w-9 text-[var(--color-accent)]" />

              <button
                type="button"
                data-cursor="grow"
                onClick={() => setShowAllModal(false)}
                aria-label="Close all projects"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-canvas)] text-[var(--color-ink)] transition-transform hover:scale-110"
              >
                <X size={16} />
              </button>

              <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--color-accent)]">
                ◉ All Projects
              </p>
              <h3 className="relative mt-2 inline-block font-display text-2xl font-extrabold tracking-tight text-[var(--color-ink)] md:text-3xl">
                Everything I’ve shipped so far
                <UnderlineSquiggle className="absolute -bottom-2 left-0 h-2 w-full text-[var(--color-accent)]" />
              </h3>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {projectsData.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={idx}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
