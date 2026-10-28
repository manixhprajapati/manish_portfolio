import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import {
  WashiTape,
  Starburst,
  SparkleStar,
  DotMatrix,
  DoodleArrow,
  WavyRibbon
} from "./Decorative";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const handleRemotePlay = () => {
      const video = videoRef.current;
      if (video && video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    window.addEventListener("play-showreel", handleRemotePlay);
    return () => window.removeEventListener("play-showreel", handleRemotePlay);
  }, []);

  return (
    <section id="showreel" className="relative overflow-hidden px-6 py-20 md:px-12">
      {/* Background vector accents */}
      <DotMatrix className="pointer-events-none absolute right-2 top-6 h-24 w-40 text-[var(--color-violet)] opacity-30 md:right-10" />
      <SparkleStar className="pointer-events-none absolute left-[4%] top-10 h-5 w-5 text-[var(--color-gold)] opacity-70" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--color-accent)]">
              ◉ Showreel
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[var(--color-ink)] md:text-4xl">
              A quick glimpse of my work
              <br className="hidden md:block" /> and my love for bringing stories to life.
            </h2>
          </div>
        </motion.div>

        {/* Tilted Showreel Video Container */}
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 rounded-3xl border-2 border-[rgba(245,244,252,0.12)] bg-[var(--color-canvas-raised)] p-3 shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] -rotate-1"
        >
          {/* Washi tape stickers at corners */}
          <WashiTape
            color="var(--color-gold)"
            className="absolute -top-3 left-8 z-10 -rotate-6"
          />
          <WashiTape
            color="var(--color-cyan)"
            className="absolute -top-3 right-10 z-10 rotate-8"
          />
          <Starburst className="pointer-events-none absolute -right-3 -bottom-3 z-10 h-8 w-8 text-[var(--color-gold)]" />

          {/* Video Screen */}
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
            <video
              ref={videoRef}
              src="/video/showreel.mp4"
              poster="/img/showreel-poster.png"
              className="h-full w-full object-cover cursor-pointer"
              playsInline
              loop
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* Play Overlay with Glowing Action Button */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
              }`}
            >
              <button
                type="button"
                data-cursor="grow"
                onClick={togglePlay}
                aria-label="Play showreel video"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent)] shadow-[0_0_0_8px_rgba(245,244,252,0.12)] transition-transform duration-200 hover:scale-110 active:scale-95"
              >
                <Play size={28} className="ml-1 fill-[var(--color-canvas)] text-[var(--color-canvas)]" />
              </button>
            </div>

            {/* Active Pause Button */}
            {isPlaying && (
              <button
                type="button"
                data-cursor="grow"
                onClick={togglePlay}
                aria-label="Pause showreel"
                className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(22,17,36,0.7)] text-[var(--color-ink)] backdrop-blur-md transition-transform duration-200 hover:scale-110"
              >
                <Pause size={16} className="fill-current" />
              </button>
            )}

            {/* Subtle doodle arrow */}
            <DoodleArrow className="pointer-events-none absolute -left-2 bottom-4 hidden h-10 w-16 text-[rgba(245,244,252,0.5)] sm:block" />
          </div>
        </motion.div>

        {/* Wavy dashed section divider */}
        <WavyRibbon className="mt-16 h-8 w-full text-[rgba(245,244,252,0.15)]" />
      </div>
    </section>
  );
}
