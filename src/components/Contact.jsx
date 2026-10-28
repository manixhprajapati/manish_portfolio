import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";
import {
  WashiTape,
  Starburst,
  SparkleStar,
  WaveSquiggle,
  UnderlineSquiggle,
  DotMatrix,
  InstagramIcon,
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon
} from "./Decorative";

export default function Contact() {
  const handleEmailClick = () => {
    // Celebration confetti burst!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#8ece34", "#b042ff", "#ff6b4a", "#38bdf8", "#facc15"]
    });
    setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}`;
    }, 400);
  };

  const handleOpenAllProjects = () => {
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
    window.dispatchEvent(new CustomEvent("open-all-projects"));
  };

  return (
    <footer id="contact" className="relative overflow-hidden px-6 pb-12 pt-16 md:px-12">
      {/* Background vectors */}
      <DotMatrix className="pointer-events-none absolute left-4 top-4 h-24 w-40 text-[var(--color-gold)] opacity-20 md:left-16" />
      <SparkleStar className="pointer-events-none absolute right-[8%] top-2 h-5 w-5 rotate-6 text-[var(--color-cyan)] opacity-60" />
      <WaveSquiggle className="pointer-events-none absolute left-[6%] bottom-10 h-4 w-24 text-[rgba(245,244,252,0.15)]" />

      {/* Main CTA Card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-6xl rounded-[2.5rem] border-2 border-dashed border-[rgba(245,244,252,0.15)] bg-[var(--color-canvas-raised)] px-8 py-14 text-center shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] md:px-16"
      >
        {/* Top Washi Tape */}
        <WashiTape
          color="var(--color-violet)"
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
        />

        {/* Decorative corner stars */}
        <SparkleStar className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 text-[var(--color-gold)]" />
        <Starburst className="pointer-events-none absolute -right-4 -top-4 h-10 w-10 text-[var(--color-accent)]" />
        <SparkleStar className="pointer-events-none absolute -bottom-3 right-10 h-6 w-6 text-[var(--color-cyan)]" />

        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--color-accent)]">
          ◉ Let’s Talk
        </p>

        <h2 className="relative mt-3 inline-block font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] md:text-6xl">
          Got a project? Let’s create
          <br /> something dope.
          <UnderlineSquiggle className="absolute -bottom-3 left-1/2 h-4 w-2/3 -translate-x-1/2 text-[var(--color-accent)]" />
        </h2>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            onClick={handleEmailClick}
            className="flex items-center gap-2.5 rounded-full bg-[var(--color-accent)] px-8 py-4 font-display text-sm font-extrabold text-[var(--color-canvas)] shadow-[4px_6px_0_0_oklch(0.16_0.04_290)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail size={16} />
            <span>{personalInfo.email}</span>
          </MagneticButton>

          <MagneticButton
            onClick={handleOpenAllProjects}
            className="flex items-center gap-2 rounded-full border-2 border-[rgba(245,244,252,0.25)] px-8 py-4 font-display text-sm font-extrabold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </MagneticButton>
        </div>
      </motion.div>

      {/* Footer Bottom Bar */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[rgba(245,244,252,0.6)] md:flex-row">
        <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="grow"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(245,244,252,0.15)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="grow"
            aria-label="Instagram Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(245,244,252,0.15)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <InstagramIcon size={15} />
          </a>
          <a
            href={personalInfo.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="grow"
            aria-label="YouTube Channel"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(245,244,252,0.15)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <YoutubeIcon size={15} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="grow"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(245,244,252,0.15)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <LinkedinIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
