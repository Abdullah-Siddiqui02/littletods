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
            <img 
              src="/logo.png" 
              alt="Little Todd's Logo" 
              className="navbar-logo"
            />
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
