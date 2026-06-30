import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';

export default function InquiryForm({
  phoneNumber = "+919175705175",
  phoneSecondary = "+918207575175",
  emailAddress = "littletoddsenglishschool@gmail.com",
  whatsAppLink = "https://wa.me/919175705175"
}) {
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    program: '',
    phone: '',
    visitDate: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.parentName.trim()) newErrors.parentName = 'Please enter your name';
    if (!form.childName.trim()) newErrors.childName = "Please enter your child's name";
    if (!form.childAge) newErrors.childAge = "Please select your child's age group";
    if (!form.program) newErrors.program = 'Please select a program';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build WhatsApp message
    const message = [
      `Hello Little Todd's! I'd like to inquire about admissions.`,
      ``,
      `👤 Parent Name: ${form.parentName}`,
      `👶 Child's Name: ${form.childName}`,
      `🎂 Age Group: ${form.childAge}`,
      `📚 Program: ${form.program}`,
      `📞 Phone: ${form.phone}`,
      form.visitDate ? `📅 Preferred Visit: ${form.visitDate}` : ''
    ].filter(Boolean).join('\n');

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/919175705175?text=${encodedMessage}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const ageOptions = [
    { value: '', label: 'Select age group' },
    { value: '2-3 Years', label: '2 - 3 Years' },
    { value: '3-4 Years', label: '3 - 4 Years' },
    { value: '4-5 Years', label: '4 - 5 Years' },
    { value: '5-6 Years', label: '5 - 6 Years' }
  ];

  const programOptions = [
    { value: '', label: 'Select program' },
    { value: 'Play Group', label: 'Play Group' },
    { value: 'Nursery', label: 'Nursery' },
    { value: 'L.K.G', label: 'L.K.G' },
    { value: 'U.K.G', label: 'U.K.G' }
  ];

  return (
    <section id="inquiry" className="inquiry-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">Start your child's journey today</h2>
          <p className="section-subtitle-text">
            Fill in the details below and we'll connect with you on WhatsApp within minutes.
          </p>
        </div>

        {/* Form Card */}
        <div className="inquiry-form-card">
          <form onSubmit={handleSubmit} noValidate>

            {/* Parent Name */}
            <div className={`form-group ${errors.parentName ? 'has-error' : ''}`}>
              <label htmlFor="parentName" className="form-label">Parent's Name</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                className="form-input"
                placeholder="Enter your full name"
                value={form.parentName}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.parentName && <span className="form-error">{errors.parentName}</span>}
            </div>

            {/* Child Name */}
            <div className={`form-group ${errors.childName ? 'has-error' : ''}`}>
              <label htmlFor="childName" className="form-label">Child's Name</label>
              <input
                type="text"
                id="childName"
                name="childName"
                className="form-input"
                placeholder="Enter your child's name"
                value={form.childName}
                onChange={handleChange}
              />
              {errors.childName && <span className="form-error">{errors.childName}</span>}
            </div>

            {/* Age + Program Row */}
            <div className="form-row">
              <div className={`form-group ${errors.childAge ? 'has-error' : ''}`}>
                <label htmlFor="childAge" className="form-label">Child's Age</label>
                <div className="select-wrapper">
                  <select
                    id="childAge"
                    name="childAge"
                    className="form-select"
                    value={form.childAge}
                    onChange={handleChange}
                  >
                    {ageOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="select-icon" />
                </div>
                {errors.childAge && <span className="form-error">{errors.childAge}</span>}
              </div>

              <div className={`form-group ${errors.program ? 'has-error' : ''}`}>
                <label htmlFor="program" className="form-label">Program</label>
                <div className="select-wrapper">
                  <select
                    id="program"
                    name="program"
                    className="form-select"
                    value={form.program}
                    onChange={handleChange}
                  >
                    {programOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="select-icon" />
                </div>
                {errors.program && <span className="form-error">{errors.program}</span>}
              </div>
            </div>

            {/* Phone */}
            <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="Enter 10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="numeric"
                maxLength={10}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            {/* Preferred Visit Date (optional) */}
            <div className="form-group">
              <label htmlFor="visitDate" className="form-label">
                Preferred Visit Date <span className="form-optional">(Optional)</span>
              </label>
              <input
                type="date"
                id="visitDate"
                name="visitDate"
                className="form-input"
                value={form.visitDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-inquiry-submit">
              <Send size={18} />
              Send Inquiry via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Directory */}
        <div className="contact-directory">
          <h3 className="contact-dir-title">Or reach us directly</h3>
          <div className="contact-dir-grid">

            {/* Phone */}
            <a href={`tel:${phoneNumber}`} className="contact-dir-card cd-phone">
              <div className="cd-icon-wrapper">
                <Phone size={22} />
              </div>
              <div className="cd-info">
                <span className="cd-label">Call Us</span>
                <span className="cd-value">+91 91757 05175</span>
                <span className="cd-sub">+91 82075 75175</span>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${emailAddress}`} className="contact-dir-card cd-email">
              <div className="cd-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="cd-info">
                <span className="cd-label">Email Us</span>
                <span className="cd-value">littletoddsenglish school@gmail.com</span>
              </div>
            </a>

            {/* Address */}
            <div className="contact-dir-card cd-address">
              <div className="cd-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div className="cd-info">
                <span className="cd-label">Visit Us</span>
                <span className="cd-value">Ground Floor, Alfalah Manzil, Saibaba Nagar, L-5, Kondhwa Pune - 411048</span>
              </div>
            </div>

            {/* Timings */}
            <div className="contact-dir-card cd-timing">
              <div className="cd-icon-wrapper">
                <Clock size={22} />
              </div>
              <div className="cd-info">
                <span className="cd-label">School Timings</span>
                <span className="cd-value">Mon – Sat: 9:00 AM – 5:00 PM</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
