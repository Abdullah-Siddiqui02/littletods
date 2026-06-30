import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer({
  phoneNumber = "+919175705175",
  phoneSecondary = "+918207575175",
  emailAddress = "littletoddsenglishschool@gmail.com"
}) {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Facilities", href: "#facilities" },
    { label: "Contact", href: "#inquiry" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">

        {/* Footer Main Grid */}
        <div className="footer-grid">

          {/* Column 1: Brand */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img
                src="/logo.png"
                alt="Little Todd's Play Group & Nursery Logo"
                className="footer-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="footer-brand-text">
                <span className="footer-brand-name">Little Todd's</span>
                <span className="footer-brand-sub">Play Group & Nursery</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Nurturing curious minds and building strong foundations through play-based learning in a safe, loving environment.
            </p>


          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <nav className="footer-nav">
              {quickLinks.map((link, i) => (
                <a key={i} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-list">

              <a href={`tel:${phoneNumber}`} className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>+91 91757 05175</span>
              </a>

              <a href={`tel:${phoneSecondary}`} className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>+91 82075 75175</span>
              </a>

              <a href={`mailto:${emailAddress}`} className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <span>littletoddsenglish school@gmail.com</span>
              </a>

              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>Ground Floor, Alfalah Manzil, Saibaba Nagar, L-5, Kondhwa Pune - 411048</span>
              </div>

              <div className="footer-contact-item">
                <Clock size={16} className="footer-contact-icon" />
                <span>Mon – Fri: 9:00 AM – 2:00 PM</span>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Little Todd's Play Group & Nursery. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed with ❤️ for Little Todd's
          </p>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
