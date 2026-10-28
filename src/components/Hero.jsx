import React from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, ChevronDown, Clapperboard } from "lucide-react";
import MagneticButton from "./MagneticButton";
import {
  WaveSquiggle,
  UnderlineSquiggle,
  Starburst,
  SparkleStar,
  DoodleArrow,
  DotMatrix,
  BurstBadge
} from "./Decorative";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  const handleWatchShowreel = () => {
    const showreelEl = document.getElementById("showreel");
    if (showreelEl) {
      showreelEl.scrollIntoView({ behavior: "smooth" });
    }
    window.dispatchEvent(new Event("play-showreel"));
  };

  const handleViewProjects = () => {
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-24 md:px-12 md:pt-40">
      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-[rgba(176,66,255,0.22)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-52 h-72 w-72 rounded-full bg-[rgba(142,206,52,0.15)] blur-3xl" />

      {/* Decorative vectors */}
      <DotMatrix className="pointer-events-none absolute left-4 bottom-10 h-28 w-44 text-[var(--color-cyan)] opacity-40 md:left-10" />
      <Starburst className="pointer-events-none absolute right-[8%] top-16 h-8 w-8 text-[var(--color-gold)] opacity-70 md:right-[26%]" />
      <SparkleStar className="pointer-events-none absolute left-[6%] top-1/2 h-5 w-5 text-[var(--color-coral)] opacity-70" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2"
      >
        {/* Left Column: Headlines & CTAs */}
        <div>
          {/* Intro pill */}
          <motion.div
            variants={itemVariants}
            className="relative mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-canvas-raised)] border border-[rgba(245,244,252,0.1)] px-4 py-1.5 text-sm font-medium text-[rgba(245,244,252,0.85)] shadow-sm"
          >
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            <span>Hey, I’m</span>
            <WaveSquiggle className="pointer-events-none absolute -bottom-4 left-2 h-3 w-16 text-[rgba(245,244,252,0.25)]" />
          </motion.div>

          {/* Large Title */}
          <motion.h1
            variants={itemVariants}
            className="relative font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl text-[var(--color-ink)]"
          >
            MANISH
            <UnderlineSquiggle className="absolute -bottom-3 left-0 h-4 w-48 text-[var(--color-accent)] sm:w-56 md:w-64" />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-md text-lg font-medium text-[rgba(245,244,252,0.8)]"
          >
            2D Animator &nbsp;·&nbsp; Motion Designer &nbsp;·&nbsp; Creative Developer
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="relative mt-10 flex flex-wrap items-center gap-4"
          >
            {/* Watch Showreel Button */}
            <MagneticButton
              onClick={handleWatchShowreel}
              className="flex items-center gap-2.5 rounded-full bg-[var(--color-accent)] px-7 py-4 font-display text-sm font-extrabold text-[var(--color-canvas)] shadow-[4px_6px_0_0_oklch(0.16_0.04_290)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Play size={16} className="fill-[var(--color-canvas)]" />
              <span>Watch Showreel</span>
            </MagneticButton>

            {/* View Projects Button */}
            <MagneticButton
              onClick={handleViewProjects}
              className="rounded-full border-2 border-dashed border-[rgba(245,244,252,0.25)] px-7 py-4 font-display text-sm font-extrabold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <span>View Projects</span>
            </MagneticButton>

            {/* Hand-drawn arrow */}
            <DoodleArrow className="pointer-events-none absolute -right-16 top-1/2 hidden h-10 w-20 -translate-y-1/2 rotate-6 text-[rgba(245,244,252,0.4)] lg:block" />
          </motion.div>
        </div>

        {/* Right Column: Floating Character Illustration & Stickers */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center md:justify-end"
        >
          {/* Glow backdrop */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-[rgba(176,66,255,0.35)] blur-3xl" />
          <DotMatrix className="pointer-events-none absolute -right-4 bottom-0 h-24 w-40 text-[var(--color-gold)] opacity-40" />

          {/* Floating animated character */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-sm"
          >
            {/* Cutout Image */}
            <img
              src="/img/hero-character-cutout.png"
              alt="Illustrated character holding a clapperboard"
              className="relative z-10 w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] select-none pointer-events-none"
            />

            {/* Rotating Speech Bubble */}
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 right-2 z-20 rounded-2xl bg-[var(--color-cyan)] px-4 py-2 font-display text-xs font-extrabold text-[var(--color-canvas)] shadow-[3px_4px_0_0_oklch(0.16_0.04_290)] select-none"
            >
              Let’s create
              <br />
              something awesome!
            </motion.div>

            {/* Decorative stickers around character */}
            <Clapperboard
              className="absolute -left-6 top-10 z-20 text-[var(--color-gold)] drop-shadow-md"
              size={28}
            />
            <Sparkles
              className="absolute bottom-6 -right-2 z-20 text-[var(--color-accent)] drop-shadow-md"
              size={24}
            />

            {/* Spiky 2D burst badge */}
            <BurstBadge
              color="var(--color-coral)"
              className="absolute -left-8 bottom-16 z-20 hidden h-16 w-16 -rotate-8 sm:flex drop-shadow-md"
            >
              2D
            </BurstBadge>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator prompt */}
      <motion.a
        href="#showreel"
        data-cursor="grow"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[rgba(245,244,252,0.5)] transition-colors hover:text-[var(--color-accent)] md:flex"
        aria-label="Scroll down to showreel"
      >
        <span className="font-display text-xs font-bold uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
