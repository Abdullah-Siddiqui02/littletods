import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Heart, Smile } from 'lucide-react';

export default function AboutUs() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Main Split Layout: Content & Image */}
        <div className="about-main-grid">
          
          {/* Left: Content */}
          <div className="about-content">
            <div className="section-badge">About Our School</div>
            <h2 className="section-title">
              Nurturing curiosity, building confidence
            </h2>
            <p className="about-lead">
              At Little Todd's, we believe that early childhood is the most important time for learning. We provide a safe, friendly, and happy space where children can play, learn, and grow.
            </p>
            <p className="about-description">
              Our simple, activity-based lessons help children learn at their own comfortable pace. We focus on building social skills, creative thinking, and physical coordination to give your child a joyful start to their education.
            </p>
          </div>

          {/* Right: Visual Frame */}
          <div className="about-visual">
            <div className="about-image-frame">
              {!imageError ? (
                <img 
                  src="/about_painting.png" 
                  alt="Preschool child painting in a bright classroom" 
                  className="about-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Fallback SVG: Art Palette & Creativity Illustration */
                <div className="about-image-fallback">
                  <svg className="fallback-svg-about" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="175" r="120" fill="var(--color-accent-light)" />
                    
                    {/* Artists Palette */}
                    <path d="M120,200 C110,130 180,90 250,110 C300,120 310,170 290,210 C270,250 210,260 170,250 C140,240 130,220 120,200 Z" fill="var(--color-primary)" opacity="0.85" />
                    
                    {/* Palette Hole */}
                    <circle cx="170" cy="140" r="14" fill="#FAF6F0" />
                    
                    {/* Paint Blobs */}
                    <circle cx="210" cy="140" r="10" fill="var(--color-secondary)" />
                    <circle cx="240" cy="160" r="10" fill="var(--color-accent)" />
                    <circle cx="230" cy="200" r="12" fill="#E07A5F" />
                    <circle cx="190" cy="210" r="8" fill="#457B9D" />
                    
                    {/* Paint Brush */}
                    <path d="M260,250 L275,235 L330,120 C335,110 345,110 350,120 C355,130 355,140 345,145 L290,260 L275,275 Z" fill="#8D5B4C" />
                    {/* Brush Ferrule */}
                    <path d="M320,140 L335,130 L345,140 L330,150 Z" fill="#C0C0C0" />
                    {/* Brush Bristles */}
                    <path d="M335,120 C340,110 345,100 350,115 C345,120 340,125 335,120 Z" fill="var(--color-secondary)" />
                    
                    {/* Sparkles */}
                    <path d="M90,120 L95,110 L100,120 L95,130 Z" fill="var(--color-accent)" />
                    <path d="M290,80 L293,73 L296,80 L293,87 Z" fill="var(--color-accent)" />
                  </svg>
                  <div className="fallback-text-about">
                    <span>Creative Exploration</span>
                    <small>Art, Play & Sensory Learning</small>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Core Values Cards Grid (Matching "Why Choose Us" Flyer Pillars) */}
        <div className="about-values-grid">
          
          {/* Card 1: Safe & Friendly Environment */}
          <div className="value-card">
            <div className="value-icon-box box-safe">
              <ShieldCheck size={28} />
            </div>
            <h3 className="value-title">Safe & Friendly Environment</h3>
            <p className="value-text">
              A secure, child-friendly space where your child feels comfortable, happy, and safe to learn.
            </p>
          </div>

          {/* Card 2: Activity-Based Learning */}
          <div className="value-card">
            <div className="value-icon-box box-curriculum">
              <Sparkles size={28} />
            </div>
            <h3 className="value-title">Activity-Based Learning</h3>
            <p className="value-text">
              Lessons taught through play, painting, storytelling, and hands-on activities that make learning fun.
            </p>
          </div>

          {/* Card 3: Experienced & Caring Teachers */}
          <div className="value-card">
            <div className="value-icon-box box-educators">
              <Heart size={28} />
            </div>
            <h3 className="value-title">Experienced & Caring Teachers</h3>
            <p className="value-text">
              Kind, certified teachers who understand childhood development and guide children with care.
            </p>
          </div>

          {/* Card 4: Focus on Overall Development */}
          <div className="value-card">
            <div className="value-icon-box box-development">
              <Smile size={28} />
            </div>
            <h3 className="value-title">Focus on Overall Development</h3>
            <p className="value-text">
              Nurturing key life skills, health, social confidence, and physical coordination alongside early lessons.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
