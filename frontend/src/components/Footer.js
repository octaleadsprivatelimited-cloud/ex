import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletter = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/newsletter', { email });
      setMessage('Successfully subscribed!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const services = [
    { name: 'Mergers & Acquisitions', path: '/services/mergers-acquisitions', desc: 'Strategic M&A advisory' },
    { name: 'Fund Raise', path: '/services/fund-raise', desc: 'Capital raising expertise' },
    { name: 'Business Consulting', path: '/services/business-consulting', desc: 'Strategic solutions' },
    { name: 'Talent Acquisition', path: '/services/talent-acquisition', desc: 'Executive search' },
    { name: 'Other Services', path: '/services/other-services', desc: 'Specialized consulting' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Our Approach', path: '/our-approach' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Careers', path: '/careers' },
    { name: 'Partners', path: '/partners' }
  ];

  const resources = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog & Insights', path: '/blog' },
    { name: 'Resources', path: '/resources' },
    { name: 'Industries', path: '/industries' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' }
  ];

  const quickLinks = [
    { name: 'News & Updates', path: '/news' },
    { name: 'Events', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' }
  ];

  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="footer-cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our consulting expertise can drive your success</p>
          <Link to="/contact" className="footer-cta-button">
            Schedule a Consultation <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Mega Menu Section */}
      <div className="footer-mega-menu">
        <div className="footer-mega-content">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <div className="footer-logo">
              <img 
                src="https://exigoconsulting.in/wp-content/uploads/2024/12/Untitled-design-10-1.png" 
                alt="Exigo Consulting" 
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Leading global consulting firm specializing in M&A, fundraising, and business transformation. 
              Delivering exceptional results for over 25 years.
            </p>
            
            <div className="footer-contact-cards">
              <div className="contact-card">
                <FaPhone className="contact-icon" />
                <div>
                  <span className="contact-label">Call Us</span>
                  <a href="tel:+918008922112" className="contact-value">+91 80089 22112</a>
                </div>
              </div>
              <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:rg@exigoconsulting.in" className="contact-value">rg@exigoconsulting.in</a>
                </div>
              </div>
              <div className="contact-card">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="contact-label">Visit Us</span>
                  <span className="contact-value">Hyderabad, Telangana, India - 500016</span>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Our Services</h4>
            <ul className="footer-links-list">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="footer-link">
                    <FaChevronRight className="link-icon" />
                    <div>
                      <span className="link-name">{service.name}</span>
                      <span className="link-desc">{service.desc}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links-list">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-link">
                    <FaChevronRight className="link-icon" />
                    <span className="link-name">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Resources</h4>
            <ul className="footer-links-list">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-link">
                    <FaChevronRight className="link-icon" />
                    <span className="link-name">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="footer-quick-links">
              <h4 className="footer-column-title">Quick Links</h4>
              <ul className="footer-links-list compact">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="footer-link small">
                      <FaChevronRight className="link-icon" />
                      <span className="link-name">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter-section">
            <h4 className="footer-column-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get insights & updates
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </div>
              {message && <p className="newsletter-message">{message}</p>}
            </form>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Corporate Consulting Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Trusted by leading businesses worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

