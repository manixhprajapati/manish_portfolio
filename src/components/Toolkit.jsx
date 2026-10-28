import React from "react";
import { motion } from "framer-motion";
import {
  WandSparkles,
  Video,
  Palette,
  Image as ImageIcon,
  Box,
  Code2
} from "lucide-react";
import {
  DotMatrix,
  SparkleStar,
  Starburst,
  UnderlineSquiggle,
  DoodleArrow
} from "./Decorative";

const tools = [
  {
    name: "Toon Boom Harmony",
    icon: WandSparkles,
    accent: "--color-violet",
    tilt: "-rotate-3"
  },
  {
    name: "After Effects",
    icon: Video,
    accent: "--color-coral",
    tilt: "rotate-2"
  },
  {
    name: "Adobe Illustrator",
    icon: Palette,
    accent: "--color-cyan",
    tilt: "-rotate-2"
  },
  {
    name: "Photoshop",
    icon: ImageIcon,
    accent: "--color-gold",
    tilt: "rotate-3"
  },
  {
    name: "Blender 3D",
    icon: Box,
    accent: "--color-accent",
    tilt: "-rotate-2"
  },
  {
    name: "React & Motion",
    icon: Code2,
    accent: "--color-cyan",
    tilt: "rotate-2"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const chipVariants = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative overflow-hidden px-6 py-20 md:px-12">
      {/* Background vector accents */}
      <DotMatrix className="pointer-events-none absolute right-2 bottom-4 h-24 w-40 text-[var(--color-accent)] opacity-25 md:right-12" />
      <SparkleStar className="pointer-events-none absolute left-[5%] top-4 h-5 w-5 text-[var(--color-cyan)] opacity-70" />
      <Starburst className="pointer-events-none absolute right-[6%] top-10 h-6 w-6 text-[var(--color-coral)] opacity-70" />
      <SparkleStar className="pointer-events-none absolute left-[12%] bottom-6 h-4 w-4 rotate-12 text-[var(--color-violet)] opacity-60" />

      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--color-accent)]">
          ◉ Toolkit
        </p>
        <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight text-[var(--color-ink)] md:text-4xl">
          Software that does the heavy lifting
          <UnderlineSquiggle className="absolute -bottom-2 left-0 h-3 w-full text-[var(--color-accent)]" />
        </h2>
        <DoodleArrow className="pointer-events-none mt-1 hidden h-8 w-16 text-[rgba(245,244,252,0.3)] sm:block" />

        {/* Tilted Tool Chips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {tools.map(({ name, icon: Icon, accent, tilt }) => (
            <motion.div
              key={name}
              data-cursor="grow"
              variants={chipVariants}
              whileHover={{ rotate: 0, scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
              className={`group relative flex items-center gap-3 rounded-2xl border-2 border-dashed border-[rgba(245,244,252,0.15)] bg-[var(--color-canvas-raised)] px-5 py-4 shadow-[4px_5px_0_0_oklch(0.10_0.03_290)] ${tilt} cursor-default select-none`}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: `var(${accent})` }}
              >
                <Icon size={18} className="text-[var(--color-canvas)]" />
              </span>
              <span className="font-display text-sm font-extrabold text-[var(--color-ink)]">
                {name}
              </span>

              {/* Sparkle on hover */}
              <SparkleStar className="pointer-events-none absolute -right-2 -top-2 h-4 w-4 rotate-6 text-[var(--color-gold)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
