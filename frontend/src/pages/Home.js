import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaHandshake, FaLightbulb, FaUsers, FaArrowRight, FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaHandshake />,
      title: 'Mergers & Acquisitions',
      description: 'Strategic guidance through complex M&A transactions with proven success.',
      link: '/services/mergers-acquisitions'
    },
    {
      icon: <FaChartLine />,
      title: 'Fund Raise',
      description: 'Expert support in securing capital and navigating investment landscapes.',
      link: '/services/fund-raise'
    },
    {
      icon: <FaLightbulb />,
      title: 'Business Consulting',
      description: 'Comprehensive business strategies to drive growth and efficiency.',
      link: '/services/business-consulting'
    },
    {
      icon: <FaUsers />,
      title: 'Talent Acquisition',
      description: 'Finding and securing top-tier talent for your organization.',
      link: '/services/talent-acquisition'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '$10B+', label: 'Transaction Value' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '25+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'Tech Innovations Inc.',
      text: 'Outstanding consulting that transformed our business strategy.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Ventures',
      text: 'Their expertise in fundraising was instrumental to our success.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Transform Your Business
            <span className="hero-accent"> With Strategic Excellence</span>
          </h1>
          <p className="hero-subtitle">
            Leading consulting firm specializing in M&A, fundraising, and business transformation. 
            Partner with industry experts to unlock your organization's full potential.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card card-1">
            <FaChartLine className="card-icon" />
            <h3>500+ Projects</h3>
          </div>
          <div className="hero-card card-2">
            <FaHandshake className="card-icon" />
            <h3>98% Success Rate</h3>
          </div>
          <div className="hero-card card-3">
            <FaLightbulb className="card-icon" />
            <h3>$10B+ Value</h3>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card animate-fade-in">
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive consulting solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Experience That Drives Results</h2>
            <p>
              With over 25 years of industry expertise, we've helped hundreds of companies 
              achieve their strategic objectives. Our team of seasoned professionals brings 
              deep domain knowledge and a track record of success.
            </p>
            <ul className="why-choose-list">
              <li>✓ Proven track record across multiple industries</li>
              <li>✓ Customized strategies aligned with your goals</li>
              <li>✓ End-to-end support throughout the engagement</li>
              <li>✓ Global network of industry partners</li>
            </ul>
            <Link to="/why-choose-us" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="why-choose-visual">
            <div className="visual-stat">
              <h3>25+</h3>
              <p>Years Experience</p>
            </div>
            <div className="visual-stat">
              <h3>50+</h3>
              <p>Expert Consultants</p>
            </div>
            <div className="visual-stat">
              <h3>30+</h3>
              <p>Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-subtitle">Client Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <Link to="/testimonials" className="btn btn-outline">
            Read More Testimonials
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve your strategic objectives</p>
          <Link to="/contact" className="btn btn-white">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

