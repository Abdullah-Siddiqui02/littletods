import React, { useState } from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function Hero({ phoneNumber = "+1234567890" }) {
  const [imageError, setImageError] = useState(false);

  const scrollToInquiry = () => {
    const element = document.getElementById('inquiry');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Admissions Open 2026 - 2027
          </div>
          <h1 className="hero-title">
            Give your child a <span className="text-highlight">joyful start</span> to learning!
          </h1>
          <p className="hero-tagline">
            Admissions open for 2026-2027. We provide a safe, friendly, and activity-based environment for Play Group, Nursery, L.K.G, and U.K.G.
          </p>

          {/* Call-to-Actions (Large Targets) */}
          <div className="hero-actions">
            <button onClick={scrollToInquiry} className="btn btn-primary hero-btn-visit">
              <Calendar className="btn-icon" size={20} />
              Book a Campus Visit
            </button>
            <a href={`tel:${phoneNumber}`} className="btn btn-outline hero-btn-call">
              <Phone className="btn-icon" size={20} />
              Call Admissions
            </a>
          </div>

          {/* Quick trust indicator */}
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-number">1:8</span>
              <span className="trust-label">Teacher-Child Ratio</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-number">100%</span>
              <span className="trust-label">Safe & Secure Campus</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            {!imageError ? (
              <img 
                src="/hero_children.png" 
                alt="Happy diverse preschool children playing with wooden toys in a bright classroom" 
                className="hero-image"
                onError={() => setImageError(true)}
              />
            ) : (
              /* Fallback SVG Illustration: Safe, Modern, Scandinavian style learning blocks */
              <div className="hero-image-fallback">
                <svg className="fallback-svg" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Soft Circle */}
                  <circle cx="200" cy="175" r="130" fill="var(--color-bg-soft)" />
                  
                  {/* Decorative Sparkles & Shapes */}
                  <path d="M70,80 Q80,70 90,80 T110,80" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <circle cx="320" cy="90" r="10" fill="var(--color-accent)" />
                  <rect x="300" y="250" width="30" height="30" rx="6" fill="var(--color-secondary)" transform="rotate(15 300 250)" />
                  
                  {/* Building Block 1 (Large Base) */}
                  <rect x="110" y="210" width="180" height="60" rx="8" fill="var(--color-secondary)" />
                  <circle cx="140" cy="240" r="8" fill="#FFF" opacity="0.3" />
                  <circle cx="200" cy="240" r="8" fill="#FFF" opacity="0.3" />
                  <circle cx="260" cy="240" r="8" fill="#FFF" opacity="0.3" />
                  
                  {/* Building Block 2 (Medium - Terracotta) */}
                  <rect x="130" y="140" width="100" height="60" rx="8" fill="var(--color-primary)" />
                  <circle cx="160" cy="170" r="6" fill="#FFF" opacity="0.3" />
                  <circle cx="200" cy="170" r="6" fill="#FFF" opacity="0.3" />
                  
                  {/* Building Block 3 (Roof Triangle - Gold) */}
                  <path d="M230,200 L290,200 L260,140 Z" fill="var(--color-accent)" stroke="var(--color-accent)" strokeWidth="6" strokeLinejoin="round" />
                  
                  {/* Character/Cute Face on Terracotta Block */}
                  <circle cx="165" cy="165" r="2" fill="#FFF" />
                  <circle cx="195" cy="165" r="2" fill="#FFF" />
                  <path d="M175,175 Q180,180 185,175" stroke="#FFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                  
                  {/* Warm Sun in corner */}
                  <circle cx="200" cy="70" r="25" fill="var(--color-accent)" />
                </svg>
                <div className="fallback-text">
                  <span>Little Todd's</span>
                  <small>Play Group & Nursery</small>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
