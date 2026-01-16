import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <h1 className="contact-title">Let's Collaborate</h1>
            <p className="contact-subtitle">
              Open to collaborations, inquiries, or just a friendly chat. Let's create something amazing together.
            </p>
          </div>

          {/* Main Content */}
          <div className="contact-grid">
            {/* Left Side - Form */}
            <div className="form-card">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>

              <button onClick={handleSubmit} className="submit-button">
                Send Message
              </button>
            </div>

            {/* Right Side - Contact Details */}
            <div className="details-card">
              <h3 className="details-title">Contact Details</h3>

              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">
                    <FiMail className="icon" />
                  </div>
                  <div>
                    <p className="info-label">Email</p>
                    <p className="info-value">amayahiruni2002@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FiPhone className="icon" />
                  </div>
                  <div>
                    <p className="info-label">Phone</p>
                    <p className="info-value">0717466262</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FiMapPin className="icon" />
                  </div>
                  <div>
                    <p className="info-label">Location</p>
                    <p className="info-value">175/A/12,Mahawaththa Road,Palenwaththa,Pannnipitiya,Sri lanka</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h4 className="social-title">Find me on</h4>
                <div className="social-links">
                  <button 
                    onClick={() => window.open('https://linkedin.com', '_blank')} 
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="icon" />
                  </button>
                  <button 
                    onClick={() => window.open('https://twitter.com', '_blank')} 
                    className="social-link"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="icon" />
                  </button>
                  <button 
                    onClick={() => window.open('https://github.com', '_blank')} 
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <FaGithub className="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
        }

        .contact-section {
          min-height: 100vh;
          background-color: #e5eff9ff;
          padding: 64px 16px;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Styles */
        .contact-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .contact-title {
          font-size: 48px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }

        .contact-subtitle {
          color: #6b7280;
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Grid Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 3fr 2fr;
          }
        }

        /* Form Card */
        .form-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 32px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          color: #111827;
          font-weight: 500;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 16px;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          color: #111827;
          font-size: 14px;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #3b82f6;
          background-color: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: none;
          font-family: inherit;
        }

        .submit-button {
          background-color: #3b82f6;
          color: white;
          padding: 12px 32px;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        /* Details Card */
        .details-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 32px;
        }

        .details-title {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 24px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .info-icon {
          width: 48px;
          height: 48px;
          background-color: #eff6ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-icon .icon {
          width: 20px;
          height: 20px;
          color: #3b82f6;
        }

        .info-label {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .info-value {
          color: #111827;
          font-weight: 500;
          font-size: 15px;
        }

        /* Social Section */
        .social-section {
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid #e5e7eb;
        }

        .social-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 48px;
          height: 48px;
          background-color: #f3f4f6;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-link:hover {
          background-color: #e5e7eb;
          transform: translateY(-2px);
        }

        .social-link .icon {
          width: 20px;
          height: 20px;
          color: #374151;
        }

        /* Responsive */
        @media (max-width: 767px) {
          .contact-title {
            font-size: 36px;
          }

          .contact-subtitle {
            font-size: 16px;
          }
/* Contact.css eke add karanna */
.contact-section {
  min-height: 100vh;
  background-color: #e5eff9ff;
  padding: 64px 16px;
  display: flex;
  align-items: center;
}

/* subtle fade up cards */
.form-card,
.details-card {
  opacity: 0;
  transform: translateY(18px);
  animation: contactIn 700ms cubic-bezier(.2, .9, .2, 1) forwards;
}

.form-card {
  animation-delay: .06s;
}
.details-card {
  animation-delay: .16s;
}

@keyframes contactIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

          .form-card,
          .details-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;