# Manish Prajapati — Developer Portfolio

A modern, responsive, high-performance developer portfolio built with **React 19**, **Vite 8**, and **Vanilla CSS**. Pre-configured with **Claude Code** for autonomous, AI-driven development.

---

## ✨ Features

- **Sleek Aesthetic**: Deep Obsidian dark theme with glowing Indigo & Cyan accents and glassmorphism.
- **Hero Section**: Dynamic headline, interactive developer code snippet, and real-time availability badge.
- **Interactive Skills Tab**: Category-based filtering (Frontend, Backend & APIs, Tools & Workflows) with animated proficiency indicators.
- **Projects Showcase**: Filterable portfolio projects with direct GitHub links and live demos.
- **About & Experience**: Personal background, development philosophy, and career timeline.
- **Direct Contact Section**: Interactive inquiry form and social links.
- **Fast Build & Dev**: Instant Hot Module Replacement (HMR) and lightning-fast builds powered by Vite.
- **Claude Code Integration**: Native `CLAUDE.md` and `.claude/settings.json` configured for smooth, permission-aware AI pair programming.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 🤖 Developing with Claude Code

This repository includes a dedicated [`CLAUDE.md`](./CLAUDE.md) file and [`.claude/`](./.claude) directory that provide Claude Code with full architectural context, code style rules, and safe auto-approved commands.

To launch Claude in this project:
```bash
claude
```

---

## 📁 Project Structure

```
manish_portfolio/
├── .claude/                # Claude Code configuration & permissions
├── public/                 # Static assets & favicons
├── src/
│   ├── assets/             # Visual assets
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js # Profile data, projects, and skills
│   ├── App.jsx             # Main app container
│   ├── App.css             # Component styling
│   ├── index.css           # Global design system & tokens
│   └── main.jsx            # React root entry
├── CLAUDE.md               # Claude development instructions
├── index.html              # HTML entry & SEO meta tags
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite configuration
```

---

## 👤 Author

- **Manish Prajapati**
- GitHub: [@manixhprajapati](https://github.com/manixhprajapati)
