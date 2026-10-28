import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";
import {
  WashiTape,
  Starburst,
  SparkleStar,
  WaveSquiggle,
  UnderlineSquiggle,
  DoodleArrow,
  DotMatrix,
  InstagramIcon,
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon
} from "./Decorative";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative overflow-x-hidden px-6 py-20 md:px-12">
      {/* Background vector accents */}
      <DotMatrix className="pointer-events-none absolute left-2 top-6 h-24 w-40 text-[var(--color-violet)] opacity-25 md:left-10" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Column: Tilted Framed Portrait with Stickers */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-[2rem] bg-[var(--color-canvas-raised)] p-6 shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] -rotate-2">
            {/* Top Washi Tape */}
            <WashiTape
              color="var(--color-coral)"
              className="absolute -top-3 left-10 z-10"
            />

            {/* Portrait Image */}
            <img
              src="/img/hero-character-cutout.png"
              alt={`Portrait illustration of ${personalInfo.name}`}
              className="w-64 md:w-72 drop-shadow-md select-none pointer-events-none"
            />

            {/* Corner Stickers */}
            <Starburst className="pointer-events-none absolute -right-4 -top-4 h-9 w-9 text-[var(--color-accent)]" />
            <SparkleStar className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 text-[var(--color-gold)]" />

            {/* Speech Badge */}
            <div className="pointer-events-none absolute -right-10 top-1/3 hidden rotate-3 rounded-xl bg-[var(--color-coral)] px-3 py-1.5 font-display text-xs font-extrabold text-[var(--color-canvas)] shadow-[3px_4px_0_0_oklch(0.16_0.04_290)] sm:block select-none">
              That’s me!
            </div>

            {/* Bottom Wave Squiggle */}
            <WaveSquiggle className="pointer-events-none absolute left-1/2 -bottom-8 h-4 w-24 -translate-x-1/2 text-[rgba(245,244,252,0.2)]" />
          </div>
        </motion.div>

        {/* Right Column: Bio & Expandable Story */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--color-accent)]">
            ◉ About Me
          </p>
          <h2 className="relative inline-block mt-2 font-display text-3xl font-extrabold tracking-tight text-[var(--color-ink)] md:text-4xl">
            {personalInfo.headline}
            <UnderlineSquiggle className="absolute -bottom-2 left-0 h-3 w-full text-[var(--color-violet)]" />
          </h2>

          <p className="mt-5 max-w-lg text-[rgba(245,244,252,0.85)] leading-relaxed">
            {personalInfo.aboutShort}
          </p>

          {/* Expandable story accordion */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 max-w-lg space-y-3 border-l-2 border-dashed border-[rgba(142,206,52,0.4)] pl-4 text-[rgba(245,244,252,0.75)]">
                  {personalInfo.aboutLong.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats Counters */}
          <div className="mt-8 flex flex-wrap gap-8">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-extrabold text-[var(--color-accent)]">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-[rgba(245,244,252,0.7)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Actions & Socials */}
          <div className="relative mt-9 flex flex-wrap items-center gap-4">
            <DoodleArrow className="pointer-events-none absolute -top-9 left-6 hidden h-8 w-16 -rotate-[100deg] text-[rgba(245,244,252,0.3)] sm:block" />

            {/* Toggle Button */}
            <MagneticButton
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-4 font-display text-sm font-extrabold text-[var(--color-canvas)] shadow-[4px_6px_0_0_oklch(0.16_0.04_290)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles size={16} />
              <span>{expanded ? "Show Less" : "More About Me"}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </MagneticButton>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                aria-label="GitHub Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[rgba(245,244,252,0.15)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                aria-label="Instagram Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[rgba(245,244,252,0.15)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                aria-label="YouTube Channel"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[rgba(245,244,252,0.15)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                aria-label="LinkedIn Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[rgba(245,244,252,0.15)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
