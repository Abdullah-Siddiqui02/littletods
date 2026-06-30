import React from 'react';
import { Clock, PhoneCall, MessageCircle, FileText, Mail } from 'lucide-react';

export default function QuickActions({
  phoneNumber = "+919175705175",
  phoneNumberSecondary = "+918207575175",
  emailAddress = "littletoddspreschool@gmail.com",
  whatsAppLink = "https://wa.me/919175705175?text=Hello%20Little%20Todd%27s%20Preschool!%20I%27d%20like%20to%20request%20the%20fee%20structure%20and%20admission%20brochure."
}) {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
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
    <section className="quick-actions-section">
      <div className="container">
        <div className="quick-actions-grid">
          
          {/* Tile 1: Timing (Directly readable, no click required) */}
          <div className="qa-card qa-timing">
            <div className="qa-icon-wrapper">
              <Clock size={24} className="qa-icon" />
            </div>
            <div className="qa-info">
              <h3 className="qa-title">Operating Hours</h3>
              <p className="qa-value">Mon - Fri</p>
              <p className="qa-subtext">9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Tile 2: WhatsApp Chat */}
          <a 
            href={whatsAppLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="qa-card qa-link qa-whatsapp"
          >
            <div className="qa-icon-wrapper">
              <MessageCircle size={24} className="qa-icon" />
            </div>
            <div className="qa-info">
              <h3 className="qa-title">WhatsApp Chat</h3>
              <p className="qa-value">Instant Support</p>
              <p className="qa-subtext">Tap to chat with us</p>
            </div>
          </a>

          {/* Tile 3: Direct Admissions Contact (Call & Email) */}
          <div className="qa-card qa-contact">
            <div className="qa-icon-wrapper">
              <PhoneCall size={22} className="qa-icon" />
            </div>
            <div className="qa-info">
              <h3 className="qa-title">Quick Connect</h3>
              <div className="qa-contact-buttons">
                <a href={`tel:${phoneNumber}`} className="qa-contact-btn" aria-label="Call Admissions">
                  <PhoneCall size={16} />
                  <span>Call</span>
                </a>
                <a href={`mailto:${emailAddress}`} className="qa-contact-btn" aria-label="Email Admissions">
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tile 4: Fee & Curriculum Inquiry */}
          <button 
            onClick={() => scrollToSection('programs')} 
            className="qa-card qa-link qa-fees"
          >
            <div className="qa-icon-wrapper">
              <FileText size={24} className="qa-icon" />
            </div>
            <div className="qa-info">
              <h3 className="qa-title">Fees & Terms</h3>
              <p className="qa-value">Fee Structure</p>
              <p className="qa-subtext">View curriculum details</p>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}
