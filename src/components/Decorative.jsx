import React from "react";

// Squiggle wave divider / text flourish
export function WaveSquiggle({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 120 20" className={className} fill="none">
      <path
        d="M2 14C10 4 18 4 26 14C34 24 42 24 50 14C58 4 66 4 74 14C82 24 90 24 98 14C104 6 112 6 118 12"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Marker curved brush underline
export function UnderlineSquiggle({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 200 16" className={className} fill="none" preserveAspectRatio="none">
      <path
        d="M2 10C30 2 55 2 75 8C95 14 120 14 145 6C165 0 185 4 198 8"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Retro 4-point starburst
export function Starburst({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      <path
        d="M30 2L34 24L56 28L34 32L30 58L26 32L4 28L26 24L30 2Z"
        fill={color}
      />
    </svg>
  );
}

// Delicate 4-point sparkle star
export function SparkleStar({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <path
        d="M20 3L23 16L36 20L23 24L20 37L17 24L4 20L17 16L20 3Z"
        fill={color}
      />
    </svg>
  );
}

// Hand-drawn doodle arrow with dashed shaft
export function DoodleArrow({ className = "", color = "currentColor", flip = false }) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      fill="none"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M4 8C30 4 55 44 94 48"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="7 8"
      />
      <path
        d="M80 40L96 49L84 58"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Dot matrix grid (8x14 circles)
export function DotMatrix({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none">
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => {
          const r = 1.4 + ((row + col) % 3) * 0.5;
          return (
            <circle
              key={`${row}-${col}`}
              cx={col * 15 + 6}
              cy={row * 15 + 6}
              r={r}
              fill={color}
              opacity={0.5}
            />
          );
        })
      )}
    </svg>
  );
}

// Striped washi tape sticker tab
export function WashiTape({ className = "", color = "var(--color-accent)" }) {
  return (
    <div
      className={`washi-tape ${className}`}
      style={{
        backgroundColor: color,
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0 6px, transparent 6px 12px)"
      }}
    />
  );
}

// Spiky sticker badge ("NEW", "2D", etc.)
export function BurstBadge({ className = "", color = "currentColor", children }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
        <path
          d="M50 2L60 20L80 8L76 30L98 34L80 46L94 64L72 60L70 82L54 66L38 86L34 64L12 70L20 50L2 38L24 32L18 12L40 22L50 2Z"
          fill={color}
        />
      </svg>
      <span className="relative z-10 font-display font-extrabold text-[10px] text-[var(--color-canvas)] leading-none select-none">
        {children}
      </span>
    </div>
  );
}

// Section wavy dashed ribbon divider
export function WavyRibbon({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 1440 40" className={className} fill="none" preserveAspectRatio="none">
      <path
        d="M0 20C120 0 240 40 360 20C480 0 600 40 720 20C840 0 960 40 1080 20C1200 0 1320 40 1440 20"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Camera / Storyboard Viewfinder Registration Corner Marks
export function RegistrationMarks() {
  return (
    <>
      <svg
        viewBox="0 0 40 40"
        className="pointer-events-none fixed left-4 top-4 z-30 hidden h-6 w-6 text-[var(--color-ink)] opacity-20 lg:block"
      >
        <path d="M2 14V2H14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <svg
        viewBox="0 0 40 40"
        className="pointer-events-none fixed right-4 top-4 z-30 hidden h-6 w-6 rotate-90 text-[var(--color-ink)] opacity-20 lg:block"
      >
        <path d="M2 14V2H14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <svg
        viewBox="0 0 40 40"
        className="pointer-events-none fixed bottom-4 left-4 z-30 hidden h-6 w-6 -rotate-90 text-[var(--color-ink)] opacity-20 lg:block"
      >
        <path d="M2 14V2H14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <svg
        viewBox="0 0 40 40"
        className="pointer-events-none fixed bottom-4 right-4 z-30 hidden h-6 w-6 rotate-180 text-[var(--color-ink)] opacity-20 lg:block"
      >
        <path d="M2 14V2H14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </>
  );
}

// Social Brand SVG Icons
export function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" fill="currentColor" />
    </svg>
  );
}

export function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
