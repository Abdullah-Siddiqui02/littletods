import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  // Configurable contact details from school flyer
  const phone = "+919175705175";
  const phoneSecondary = "+918207575175";
  const email = "littletoddsenglishschool@gmail.com";
  
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

        {/* Section 5: Facilities */}
        <Facilities />

        {/* Section 7: Parent Inquiry Form & Contact Directory */}
        <InquiryForm
          phoneNumber={phone}
          phoneSecondary={phoneSecondary}
          emailAddress={email}
          whatsAppLink={whatsapp}
        />
      </main>

      {/* Footer */}
      <Footer
        phoneNumber={phone}
        phoneSecondary={phoneSecondary}
        emailAddress={email}
      />

      {/* Floating Action Bar (WhatsApp & Direct Dial) */}
      <FloatingActions phoneNumber={phone} whatsAppLink={whatsapp} />
    </div>
  );
}

export default App;
