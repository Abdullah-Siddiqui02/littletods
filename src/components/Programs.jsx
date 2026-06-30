import React from 'react';
import { Sparkles, Smile, BookOpen, GraduationCap, ChevronRight, MessageCircle } from 'lucide-react';

export default function Programs() {
  const programsData = [
    {
      id: "play-group",
      title: "Play Group",
      age: "2 to 3 Years",
      icon: <Smile size={32} className="program-icon" />,
      themeClass: "prog-playgroup",
      description: "First steps into a classroom. We focus on speaking, sharing, and learning through simple playtime games.",
      highlights: [
        "Language & speaking skills",
        "Learning to share & play with others",
        "Sensory learning & color recognition"
      ],
      whatsappText: "Hello Little Todd's! I would like to inquire about admissions for the Play Group program (2 to 3 Years) for my child."
    },
    {
      id: "nursery",
      title: "Nursery",
      age: "3 to 4 Years",
      icon: <Sparkles size={32} className="program-icon" />,
      themeClass: "prog-nursery",
      description: "Building motor skills and vocabulary. We teach coordination and basic social skills in a structured day.",
      highlights: [
        "Fine motor skills & coordination",
        "Basic vocabulary & storytelling",
        "Structured learning habits"
      ],
      whatsappText: "Hello Little Todd's! I would like to inquire about admissions for the Nursery program (3 to 4 Years) for my child."
    },
    {
      id: "lkg",
      title: "L.K.G (Lower KG)",
      age: "4 to 5 Years",
      icon: <BookOpen size={32} className="program-icon" />,
      themeClass: "prog-lkg",
      description: "Introducing writing and numbers. We teach letter tracing, numbers, and phonics through fun crafts.",
      highlights: [
        "Tracing letters & early writing",
        "Basic number recognition & counting",
        "Phonics sounds & creative crafts"
      ],
      whatsappText: "Hello Little Todd's! I would like to inquire about admissions for the L.K.G program (4 to 5 Years) for my child."
    },
    {
      id: "ukg",
      title: "U.K.G (Upper KG)",
      age: "5 to 6 Years",
      icon: <GraduationCap size={32} className="program-icon" />,
      themeClass: "prog-ukg",
      description: "Preparing for primary school. We focus on reading sentences, simple addition, and science basics.",
      highlights: [
        "Reading small sentences & phonics",
        "Simple math addition & subtraction",
        "Science questions & classroom teamwork"
      ],
      whatsappText: "Hello Little Todd's! I would like to inquire about admissions for the U.K.G program (5 to 6 Years) for my child."
    }
  ];

  return (
    <section id="programs" className="programs-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">Programs Offered</div>
          <h2 className="section-title">Give your child a joyful start</h2>
          <p className="section-subtitle-text">
            Admissions Open for 2026-27. Select a program below to learn more or send a direct inquiry.
          </p>
        </div>

        {/* Programs Cards Grid */}
        <div className="programs-grid">
          {programsData.map((prog) => (
            <div key={prog.id} className={`program-card ${prog.themeClass}`}>
              
              {/* Card Top: Title, Icon, Age */}
              <div className="program-card-header">
                <div className="program-icon-box">
                  {prog.icon}
                </div>
                <div className="program-title-group">
                  <h3 className="program-card-title">{prog.title}</h3>
                  <span className="program-age-badge">{prog.age}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="program-card-body">
                <p className="program-desc">{prog.description}</p>
                
                <h4 className="program-focus-title">Focus Areas:</h4>
                <ul className="program-highlights">
                  {prog.highlights.map((item, index) => (
                    <li key={index} className="program-highlight-item">
                      <ChevronRight size={16} className="highlight-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <div className="program-card-footer">
                <a 
                  href={`https://wa.me/919175705175?text=${encodeURIComponent(prog.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="program-inquire-btn"
                >
                  <MessageCircle size={18} />
                  <span>Inquire Now</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Callout Info Banner */}
        <div className="programs-callout-banner">
          <div className="callout-content">
            <h3 className="callout-title">Enroll Now — Limited Seats!</h3>
            <p className="callout-text">
              We focus on child-friendly environment, activity-based learning, and overall development. Contact us today to secure a seat.
            </p>
          </div>
          <div className="callout-actions">
            <a 
              href="https://wa.me/919175705175?text=Hello%20Little%20Todd%27s!%20I%27d%20like%20to%20reserve%20a%20seat%20for%20admissions%20for%20the%20upcoming%20batch."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary callout-btn"
            >
              Reserve a Seat
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
