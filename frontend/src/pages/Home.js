import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaHandshake, FaLightbulb, FaUsers, FaArrowRight, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroServices = [
    {
      icon: <FaHandshake />,
      title: 'Mergers & Acquisitions',
      description: 'Strategic M&A advisory and execution',
      link: '/services/mergers-acquisitions'
    },
    {
      icon: <FaChartLine />,
      title: 'Fund Raise',
      description: 'Capital raising and investment strategies',
      link: '/services/fund-raise'
    },
    {
      icon: <FaLightbulb />,
      title: 'Business Consulting',
      description: 'Transform and optimize operations',
      link: '/services/business-consulting'
    },
    {
      icon: <FaUsers />,
      title: 'Talent Acquisition',
      description: 'Finding and securing top-tier talent',
      link: '/services/talent-acquisition'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroServices.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [heroServices.length]);

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
      {/* Hero Section - Deloitte Inspired */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content animate-fade-in">
            <div className="hero-tagline">Connecting Vision to Value</div>
            <h1 className="hero-title">
              Making an impact<br />
              <span className="hero-accent">that matters.</span>
            </h1>
            <p className="hero-subtitle">
              Since our inception, Exigo Consulting has been about creating connections. With our clients, our talent, and our communities. Connecting with leaders across industries, we are transforming businesses—driving growth that makes a difference.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Let's Connect <FaArrowRight />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hero-slider-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="hero-slider"
              >
                <Link 
                  to={heroServices[currentSlide].link} 
                  className="hero-slide-link"
                >
                  <div className="hero-slide-icon">
                    {heroServices[currentSlide].icon}
                  </div>
                  <div className="hero-slide-content">
                    <h3>{heroServices[currentSlide].title}</h3>
                    <p>{heroServices[currentSlide].description}</p>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
            
            {/* Slider Indicators */}
            <div className="slider-indicators">
              {heroServices.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="slider-nav">
              <button
                className="slider-arrow prev"
                onClick={() => setCurrentSlide((prev) => 
                  prev === 0 ? heroServices.length - 1 : prev - 1
                )}
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                className="slider-arrow next"
                onClick={() => setCurrentSlide((prev) => 
                  (prev + 1) % heroServices.length
                )}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
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

