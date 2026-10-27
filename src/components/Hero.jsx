import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            {personalInfo.role}
          </h2>

          <p className="hero-description">
            {personalInfo.tagline} {personalInfo.bio}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero-stats">
            {personalInfo.stats.map((stat, index) => (
              <div key={index} className="stat-card glass-panel">
                <span className="stat-value text-gradient">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card glass-panel">
            <div className="code-header">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
              <span className="code-title">developer.js</span>
            </div>
            <pre className="code-content">
              <code>
{`const developer = {
  name: "${personalInfo.name}",
  skills: ["React", "JavaScript", "Node", "Vite"],
  traits: ["Fast Learner", "Problem Solver"],
  readyForNextRole: true,
  build: () => {
    return "Delivering high-impact software";
  }
};`}
              </code>
            </pre>
            <div className="visual-badge">
              <span>⚡ Ready for Production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
