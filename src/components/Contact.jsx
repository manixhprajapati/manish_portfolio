import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    // Open default mail client or display confirmation
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-padding bg-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Build Something <span className="text-gradient">Extraordinary</span></h2>
          <p className="section-description">
            Have a project in mind, looking for collaboration, or want to discuss engineering opportunities? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-panel">
            <h3>Direct Contact</h3>
            <p>I usually respond within 24 hours.</p>

            <div className="contact-method">
              <div className="contact-icon">✉️</div>
              <div>
                <span className="contact-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-val">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-val">{personalInfo.location}</span>
              </div>
            </div>

            <div className="contact-socials">
              <span className="contact-label">Connect Online</span>
              <div className="social-links">
                {personalInfo.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn glass-panel"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-panel">
            {formSubmitted ? (
              <div className="form-success">
                <span className="success-icon">✓</span>
                <h3>Message Ready</h3>
                <p>Opening your email client to send the message to Manish Prajapati.</p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project, idea, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
