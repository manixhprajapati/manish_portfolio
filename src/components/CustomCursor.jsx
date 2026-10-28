import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isGrown, setIsGrown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Fast tracking for center dot
    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });

    // Smooth inertia lag for outer ring
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const hoverable = target.closest('[data-cursor="grow"], button, a, input, video, select, label');
      setIsGrown(!!hoverable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -ml-1 -mt-1 rounded-full bg-[var(--color-accent)]"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease, transform 0.15s ease"
        }}
      />
      {/* Outer Magnetic Ring with mix-blend-difference */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 -ml-5 -mt-5 rounded-full border-2 border-[var(--color-accent)] mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `scale(${isGrown ? 1.6 : 1})`,
          backgroundColor: isGrown ? "rgba(142, 206, 52, 0.2)" : "transparent",
          transition: "transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease, background-color 0.2s ease"
        }}
      />
    </>
  );
}
