import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import FloatingActions from './components/FloatingActions';

function App() {
  // Configurable contact details from school flyer
  const phone = "+919175705175";
  const phoneSecondary = "+918207575175";
  const email = "littletoddspreschool@gmail.com";
  
  // WhatsApp link using primary number +91 9175705175
  const whatsapp = "https://wa.me/919175705175?text=Hello%20Little%20Todd%27s%20Preschool!%20I%27d%20like%20to%20inquire%20about%20admissions%20for%20my%20child.";

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Section 1: Hero */}
        <Hero phoneNumber={phone} />

        {/* Section 2: Quick Actions (Timing, WhatsApp, Connect, Fees) */}
        <QuickActions phoneNumber={phone} emailAddress={email} whatsAppLink={whatsapp} />

        {/* Section 2: About Us */}
        <AboutUs />

        {/* Section 3: Programs Offered */}
        <Programs />

        {/* Section 4: Why Choose Us */}
        <WhyChooseUs />

        <section id="inquiry" style={{ padding: '80px 20px', minHeight: '800px', backgroundColor: 'var(--color-bg-primary)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '20px' }}>Parent Inquiry Form</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}>
              A high-conversion inquiry form and contact directory will be built here, optimized to minimize typing and maximize speed on mobile devices.
            </p>
            <div style={{ padding: '40px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px var(--color-shadow)', maxWidth: '500px', margin: '0 auto' }}>
              <p style={{ fontStyle: 'italic' }}>Contact Form Placeholder</p>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Bar (WhatsApp & Direct Dial) */}
      <FloatingActions phoneNumber={phone} whatsAppLink={whatsapp} />

      {/* Simple Footer Placeholder */}
      <footer style={{ backgroundColor: 'var(--color-secondary)', color: '#fff', padding: '40px 20px', textAlign: 'center', fontSize: '0.9rem' }}>
        <div className="container">
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>© 2026 Little Todds Preschool. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>Designed mobile-first with love & safety in mind.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
