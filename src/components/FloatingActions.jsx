import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export default function FloatingActions({ 
  phoneNumber = "+919175705175", 
  whatsAppLink = "https://wa.me/919175705175?text=Hello%20Little%20Todd%27s%20Preschool!%20I%27d%20like%20to%20inquire%20about%20admissions%20for%20my%20child." 
}) {
  return (
    <div className="floating-actions-container">
      {/* WhatsApp Button */}
      <a 
        href={whatsAppLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn float-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageSquare size={22} fill="currentColor" className="float-icon" />
        <span className="float-text">WhatsApp</span>
      </a>

      {/* Call Button */}
      <a 
        href={`tel:${phoneNumber}`} 
        className="floating-btn float-call"
        aria-label="Call Little Todds Preschool"
      >
        <Phone size={22} fill="currentColor" className="float-icon" />
        <span className="float-text">Call Now</span>
      </a>
    </div>
  );
}
