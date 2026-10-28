import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CustomCursor from "./components/CustomCursor";
import { RegistrationMarks, WavyRibbon } from "./components/Decorative";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function SectionDivider({ color }) {
  return (
    <div className="px-6 md:px-12 my-6">
      <WavyRibbon className="mx-auto h-6 w-full max-w-6xl" color={color} />
    </div>
  );
}

export default function App() {
  // Initialize Lenis Smooth Inertial Scrolling Engine
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true
    });

    lenis.on("scroll", ScrollTrigger.update);

    const handleRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(handleRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(handleRaf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-canvas)]">
      {/* Dynamic Magnetic Trailing Cursor */}
      <CustomCursor />

      {/* Storyboard Camera Registration Viewfinder Marks */}
      <RegistrationMarks />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Video Showreel Section */}
        <Showreel />

        {/* Divider 1 */}
        <SectionDivider color="var(--color-violet)" />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Divider 2 */}
        <SectionDivider color="var(--color-coral)" />

        {/* Software Toolkit */}
        <Toolkit />

        {/* Divider 3 */}
        <SectionDivider color="var(--color-cyan)" />

        {/* About Story & Stats */}
        <About />
      </main>

      {/* Contact Call-to-action & Footer */}
      <Contact />
    </div>
  );
}
