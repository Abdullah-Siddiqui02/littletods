import React from 'react';
import { ShieldCheck, Palette, Heart, Apple, Users, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={30} />,
      title: "Safe & Secure Space",
      description: "Child-proof classrooms, secure entry, and a friendly environment where your child feels protected and comfortable.",
      themeClass: "wcu-safe"
    },
    {
      icon: <Palette size={30} />,
      title: "Activity-Based Learning",
      description: "Storytelling, painting, clay modeling, and music sessions that make every day exciting and fun for your child.",
      themeClass: "wcu-creative"
    },
    {
      icon: <Heart size={30} />,
      title: "Experienced & Caring Teachers",
      description: "Kind, trained teachers who understand children and guide them with love, patience, and personal attention.",
      themeClass: "wcu-teachers"
    },
    {
      icon: <Apple size={30} />,
      title: "Hygiene & Clean Spaces",
      description: "Clean classrooms, sanitized toys, and child-safe materials to keep your little one healthy every day.",
      themeClass: "wcu-hygiene"
    },
    {
      icon: <Users size={30} />,
      title: "Small Batch Sizes",
      description: "Limited seats per class so every child gets personal attention and care from the teacher.",
      themeClass: "wcu-batch"
    },
    {
      icon: <Star size={30} />,
      title: "Focus on Overall Growth",
      description: "We develop social skills, confidence, physical coordination, and creative thinking alongside early lessons.",
      themeClass: "wcu-growth"
    }
  ];

  return (
    <section id="why-choose-us" className="wcu-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">A safe, happy home for your little one</h2>
          <p className="section-subtitle-text">
            We focus on overall growth, safety, and fun learning activities so your child loves coming to school every day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="wcu-grid">
          {features.map((feature, index) => (
            <div key={index} className={`wcu-card ${feature.themeClass}`}>
              <div className="wcu-icon-box">
                {feature.icon}
              </div>
              <h3 className="wcu-card-title">{feature.title}</h3>
              <p className="wcu-card-text">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        <div className="wcu-trust-strip">
          <div className="trust-strip-item">
            <span className="trust-strip-number">Limited</span>
            <span className="trust-strip-label">Seats Available</span>
          </div>
          <div className="trust-strip-divider"></div>
          <div className="trust-strip-item">
            <span className="trust-strip-number">Mon - Fri</span>
            <span className="trust-strip-label">10 AM to 2 PM</span>
          </div>
          <div className="trust-strip-divider"></div>
          <div className="trust-strip-item">
            <span className="trust-strip-number">2 - 6 Yrs</span>
            <span className="trust-strip-label">Age Group</span>
          </div>
        </div>

      </div>
    </section>
  );
}
