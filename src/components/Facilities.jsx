import React from 'react';
import { Palette, Gamepad, BookOpen, Blocks } from 'lucide-react';

export default function Facilities() {
  const facilityList = [
    {
      icon: <Palette size={32} />,
      title: "Creative Art Corner",
      description: "Equipped with child-safe paints, drawing boards, and modeling clay to encourage self-expression and sensory learning.",
      themeClass: "fac-art"
    },
    {
      icon: <Gamepad size={32} />,
      title: "Safe Indoor Play Zone",
      description: "Padded play areas with soft blocks, balance beams, and toys designed to build coordination and sharing habits.",
      themeClass: "fac-play"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Cozy Storytelling Corner",
      description: "A reading space with soft cushions, large picture books, and daily stories read by our loving teachers.",
      themeClass: "fac-story"
    },
    {
      icon: <Blocks size={32} />,
      title: "Active Learning Center",
      description: "Hands-on desks filled with sorting blocks, shape puzzles, and early math tools that make learning active.",
      themeClass: "fac-activity"
    }
  ];

  return (
    <section id="facilities" className="facilities-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">Our Facilities</div>
          <h2 className="section-title">Designed for happy learning</h2>
          <p className="section-subtitle-text">
            Every corner of Little Todd's is crafted to be clean, bright, and filled with learning opportunities.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {facilityList.map((facility, index) => (
            <div key={index} className={`facility-card ${facility.themeClass}`}>
              <div className="facility-icon-container">
                {facility.icon}
              </div>
              <h3 className="facility-card-title">{facility.title}</h3>
              <p className="facility-card-text">{facility.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
