import React from 'react';
import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    { icon: <FaAward />, title: 'Excellence', text: 'We deliver exceptional results through expertise and dedication' },
    { icon: <FaHandshake />, title: 'Integrity', text: 'Trust and transparency guide every client relationship' },
    { icon: <FaUsers />, title: 'Collaboration', text: 'We work alongside you as partners in success' },
    { icon: <FaGlobeAmericas />, title: 'Innovation', text: 'Forward-thinking solutions for complex challenges' }
  ];

  const milestones = [
    { year: '1998', event: 'Founded in New York City' },
    { year: '2005', event: 'Expanded to international markets' },
    { year: '2012', event: 'Reached $1B in transaction value' },
    { year: '2018', event: 'Opened 10th global office' },
    { year: '2023', event: 'Celebrated 25 years of excellence' },
    { year: '2025', event: 'Leading digital transformation' }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Transforming businesses through strategic excellence for over 25 years</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-content">
          <h2>Who We Are</h2>
          <p>
            Founded in 1998, Corporate Consulting Solutions has grown from a small New York-based 
            firm to a global consulting powerhouse. With offices across five continents and a team 
            of over 200 professionals, we've helped hundreds of companies achieve their strategic 
            objectives.
          </p>
          <p>
            Our success is built on deep industry expertise, innovative problem-solving, and an 
            unwavering commitment to client success. We don't just provide advice – we partner 
            with you to drive meaningful, measurable results.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-box">
            <h3>25+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-box">
            <h3>200+</h3>
            <p>Expert Consultants</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>Successful Projects</p>
          </div>
          <div className="stat-box">
            <h3>50+</h3>
            <p>Countries Served</p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mv-card">
          <h2>Our Mission</h2>
          <p>
            To empower organizations with strategic insights and operational excellence, 
            enabling them to achieve sustainable growth and lasting competitive advantage.
          </p>
        </div>
        <div className="mv-card">
          <h2>Our Vision</h2>
          <p>
            To be the world's most trusted consulting partner, known for transforming 
            businesses and creating value that endures for generations.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-content">
                <p>{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Want to Learn More?</h2>
        <p>Discover how we can help transform your business</p>
        <div className="cta-buttons">
          <Link to="/team" className="btn btn-white">Meet Our Team</Link>
          <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default About;

