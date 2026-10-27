import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="logo-box">MP</span>
            <span className="footer-title">{personalInfo.name}</span>
          </div>
          <p className="footer-copy">
            Designed & developed with modern React, Vite & Claude Code.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="footer-right">
          <button onClick={scrollToTop} className="back-to-top btn-secondary" aria-label="Back to top">
            ↑ Back to Top
          </button>
          <span className="footer-year">© {currentYear} Manish Prajapati. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
