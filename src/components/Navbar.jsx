import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SparkleStar, UnderlineSquiggle } from "./Decorative";

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "Projects", href: "#projects" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md bg-[rgba(22,17,36,0.7)] border-b border-[rgba(245,244,252,0.06)]"
      >
        {/* Brand Logo */}
        <a
          href="#top"
          onClick={(e) => handleScrollTo(e, "#top")}
          data-cursor="grow"
          className="relative font-display text-2xl font-extrabold tracking-tight text-[var(--color-ink)] flex items-center select-none"
        >
          <span>MANISH</span>
          <span className="text-[var(--color-accent)]">.</span>
          <SparkleStar className="pointer-events-none absolute -right-4 -top-3 h-4 w-4 rotate-12 text-[var(--color-gold)]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              data-cursor="grow"
              className="group relative text-sm font-medium text-[rgba(245,244,252,0.8)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.name}
              <UnderlineSquiggle className="absolute -bottom-2.5 left-0 h-2 w-full text-[var(--color-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          data-cursor="grow"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-[rgba(245,244,252,0.25)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-30 border-b border-[rgba(245,244,252,0.12)] bg-[var(--color-canvas-raised)] px-6 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.5)] md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-display text-lg font-bold text-[rgba(245,244,252,0.85)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
