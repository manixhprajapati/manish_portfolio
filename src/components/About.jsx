import { experienceData } from '../data/portfolioData';

export default function About() {
  const highlights = [
    { title: "Clean Code", desc: "Writing readable, maintainable, and well-structured code with modern standards." },
    { title: "Performance First", desc: "Optimizing bundle size, rendering performance, and web vitals." },
    { title: "User-Centric Design", desc: "Designing responsive, intuitive user interfaces that delight users." }
  ];

  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Driving Impact Through <span className="text-gradient">Technology</span></h2>
          <p className="section-description">
            A developer passionate about modern web ecosystems, developer tooling, and building products that scale.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-narrative glass-panel">
            <h3>Philosophy & Approach</h3>
            <p>
              I bridge the gap between creative visual design and engineering efficiency. Whether architecting interactive user interfaces in React or writing server-side APIs in Node.js, my goal is always to deliver robust, scalable, and responsive software.
            </p>
            <p>
              Currently expanding my capabilities with AI-driven development workflows like Claude Code and modern automated tooling to ship faster without sacrificing quality.
            </p>

            <div className="highlights-row">
              {highlights.map((h, i) => (
                <div key={i} className="highlight-item">
                  <div className="highlight-bullet"></div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-column" id="experience">
            <h3 className="subhead">Experience & Milestones</h3>
            <div className="timeline">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="timeline-card glass-panel">
                  <div className="timeline-period">{exp.period}</div>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
