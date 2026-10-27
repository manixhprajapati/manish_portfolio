# Manish Prajapati — Portfolio Development Guide

Welcome to the development environment for **Manish Prajapati's Portfolio**. This project is a modern, high-performance web portfolio built with React and Vite.

---

## 🚀 Quick Reference Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local Vite development server with HMR |
| `npm run build` | Build optimized production bundle into `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Oxlint fast linter across the project |

---

## 🛠 Tech Stack & Architecture

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS with modern CSS custom properties, dark-mode glassmorphism design system, smooth micro-animations
- **Typography**: Google Fonts (`Outfit` for display headings, `Inter` for clean body typography)
- **Tooling**: Oxlint for lightning-fast linting, Git for version control
- **Deployment Target**: Vercel / GitHub Pages / Netlify

### Directory Structure

```
manish_portfolio/
├── .claude/                # Claude Code configuration & permissions
├── public/                 # Static assets (favicons, icons)
├── src/
│   ├── assets/             # Images, SVG icons, visuals
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js # Structured data for skills, projects, info
│   ├── App.jsx             # Main application layout
│   ├── App.css             # Main layout & component styling
│   ├── index.css           # Global design system, CSS variables & reset
│   └── main.jsx            # Application entry point
├── CLAUDE.md               # Claude Code development instructions
├── index.html              # HTML entry with SEO metadata & fonts
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Vite build configuration
```

---

## 🎨 Design System & Aesthetic Standards

1. **Color Palette**:
   - Background Primary: `#0b0f19` (Deep Obsidian)
   - Background Secondary: `#121826` (Slate Night)
   - Accent Primary: `#6366f1` (Indigo Glow)
   - Accent Secondary: `#8b5cf6` (Electric Purple)
   - Accent Cyan: `#06b6d4` (Cyber Cyan)
   - Text Primary: `#f8fafc`
   - Text Muted: `#94a3b8`
   - Borders / Glass: `rgba(255, 255, 255, 0.08)` with `backdrop-filter: blur(12px)`

2. **Styling Principles**:
   - Use CSS custom properties defined in `index.css`.
   - Prefer Vanilla CSS over heavy utility libraries for maximum performance and complete design control.
   - Maintain full mobile responsiveness (fluid typography, flexbox/grid, media queries).
   - Add hover states, subtle gradient glows, and transition smoothing (`0.25s cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 🤖 Claude Code Guidelines

- **Autonomous Execution**: When asked to add sections, fix styles, or update content, complete all steps and run `npm run build` or `npm run lint` to verify before completing.
- **Component Modularity**: Keep components clean, self-contained, and driven by data in `src/data/portfolioData.js`.
- **Git Hygiene**:
  - Write concise, descriptive commit messages following Conventional Commits (`feat: ...`, `fix: ...`, `style: ...`, `docs: ...`).
  - Remote origin: `https://github.com/manixhprajapati/manish_portfolio.git`
