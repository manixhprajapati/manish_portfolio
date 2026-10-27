import { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { key: 'frontend', label: 'Frontend Development' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'tools', label: 'Tools & Workflows' }
  ];

  return (
    <section className="section-padding bg-alt" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Technical <span className="text-gradient">Skills & Arsenal</span></h2>
          <p className="section-description">
            A versatile toolkit covering modern frontend frameworks, backend runtimes, and developer tooling.
          </p>
        </div>

        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillsData[activeCategory].map((skill, index) => (
            <div key={index} className="skill-card glass-panel">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-badge-list">
          <div className="badge-tag">React 19</div>
          <div className="badge-tag">JavaScript (ES6+)</div>
          <div className="badge-tag">Node.js</div>
          <div className="badge-tag">Vite</div>
          <div className="badge-tag">Express.js</div>
          <div className="badge-tag">RESTful APIs</div>
          <div className="badge-tag">Git & GitHub</div>
          <div className="badge-tag">Claude Code</div>
          <div className="badge-tag">CSS3 & HTML5</div>
          <div className="badge-tag">Oxlint</div>
        </div>
      </div>
    </section>
  );
}
