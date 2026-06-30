import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll class for transition effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll to element and close mobile menu
  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
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
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo & Brand Name */}
          <a href="#" className="navbar-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <svg className="navbar-logo" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="50" cy="50" r="45" fill="var(--color-bg-soft)" />
              {/* Teddy Bear Head */}
              <circle cx="50" cy="52" r="22" fill="var(--color-primary)" />
              {/* Ears */}
              <circle cx="32" cy="35" r="9" fill="var(--color-primary)" />
              <circle cx="32" cy="35" r="5" fill="var(--color-bg-soft)" />
              <circle cx="68" cy="35" r="9" fill="var(--color-primary)" />
              <circle cx="68" cy="35" r="5" fill="var(--color-bg-soft)" />
              {/* Snout */}
              <circle cx="50" cy="58" r="8" fill="var(--color-accent)" />
              <polygon points="50,55 46,58 54,58" fill="var(--color-text-main)" />
              {/* Eyes */}
              <circle cx="43" cy="48" r="2.5" fill="var(--color-text-main)" />
              <circle cx="57" cy="48" r="2.5" fill="var(--color-text-main)" />
            </svg>
            <div className="navbar-title-group">
              <span className="navbar-title">Little Todd's</span>
              <span className="navbar-subtitle">PLAY GROUP & NURSERY</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-desktop-nav" aria-label="Main Navigation">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('programs')} className="nav-link">Programs</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="nav-link">Why Us</button>
            <button onClick={() => scrollToSection('inquiry')} className="nav-link">Contact</button>
          </nav>

          {/* Desktop Action Button */}
          <div className="navbar-desktop-action">
            <button onClick={() => scrollToSection('inquiry')} className="btn btn-secondary nav-cta-btn">
              <Calendar className="btn-icon" size={18} />
              Book a Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="navbar-mobile-toggle" 
            onClick={toggleMenu} 
            aria-expanded={isOpen} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`navbar-mobile-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <nav className="navbar-mobile-nav">
          <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About Us</button>
          <button onClick={() => scrollToSection('programs')} className="mobile-nav-link">Programs & Fees</button>
          <button onClick={() => scrollToSection('why-choose-us')} className="mobile-nav-link">Why Choose Us</button>
          <button onClick={() => scrollToSection('inquiry')} className="mobile-nav-link">Contact & Locate</button>
          
          <button onClick={() => scrollToSection('inquiry')} className="btn btn-primary mobile-nav-cta">
            <Calendar className="btn-icon" size={20} />
            Book a Visit Now
          </button>
        </nav>
      </div>
      
      {/* Mobile Drawer Overlay */}
      {isOpen && <div className="navbar-mobile-overlay" onClick={toggleMenu} />}
    </>
  );
}
