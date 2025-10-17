import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaChartLine, FaLightbulb, FaUsers, FaCog, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaHandshake />,
      title: 'Mergers & Acquisitions',
      description: 'Navigate complex M&A transactions with confidence. Our experienced team provides end-to-end support from initial strategy through post-transaction integration.',
      features: ['Deal Structuring', 'Due Diligence', 'Valuation', 'Integration Planning'],
      link: '/services/mergers-acquisitions'
    },
    {
      icon: <FaChartLine />,
      title: 'Fund Raise',
      description: 'Secure the capital you need to grow. We connect you with the right investors and guide you through every stage of the fundraising process.',
      features: ['Investor Relations', 'Pitch Development', 'Term Negotiation', 'Capital Strategy'],
      link: '/services/fund-raise'
    },
    {
      icon: <FaLightbulb />,
      title: 'Business Consulting',
      description: 'Transform your business with strategic insights and operational excellence. Our consultants deliver actionable strategies for sustainable growth.',
      features: ['Strategy Development', 'Operations Optimization', 'Change Management', 'Growth Planning'],
      link: '/services/business-consulting'
    },
    {
      icon: <FaUsers />,
      title: 'Talent Acquisition',
      description: 'Build exceptional teams with our talent acquisition services. From executive search to volume hiring, we find the right people for your organization.',
      features: ['Executive Search', 'Bulk Hiring', 'Assessment', 'Onboarding Support'],
      link: '/services/talent-acquisition'
    },
    {
      icon: <FaCog />,
      title: 'Other Services',
      description: 'Comprehensive business solutions including digital transformation, risk management, market research, and international expansion strategies.',
      features: ['Digital Transformation', 'Risk & Compliance', 'Market Research', 'Financial Advisory'],
      link: '/services/other-services'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive consulting solutions designed to drive your business forward</p>
        </div>
      </section>

      <section className="services-overview">
        <div className="section-intro">
          <h2>What We Do</h2>
          <p>
            We provide end-to-end consulting services across all critical business functions. 
            Our team of experts brings deep industry knowledge and proven methodologies to help 
            you achieve your strategic objectives.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-icon">{service.icon}</div>
              <div className="service-detail-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to={service.link} className="service-detail-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Not Sure Where to Start?</h2>
        <p>Let's discuss your needs and find the right solution for your business</p>
        <Link to="/contact" className="btn btn-white">Contact Us Today</Link>
      </section>
    </div>
  );
};

export default Services;

