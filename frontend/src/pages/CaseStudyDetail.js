import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const caseStudy = {
    title: 'Tech Unicorn $500M Series C Raise',
    category: 'Fund Raise',
    client: 'Leading SaaS Company',
    industry: 'Technology / SaaS',
    duration: '6 months',
    overview: 'A rapidly growing SaaS company approached us to help secure significant capital to fuel their global expansion plans. With strong traction but limited fundraising experience, they needed expert guidance to navigate the complex world of venture capital.',
    challenge: [
      'Limited previous fundraising experience',
      'Competitive landscape with multiple similar companies',
      'Need to balance valuation expectations with market realities',
      'Tight timeline to close before planned expansion',
      'Multiple stakeholders with different priorities'
    ],
    solution: [
      'Developed comprehensive fundraising strategy and timeline',
      'Created compelling pitch deck highlighting unique value proposition',
      'Built detailed financial models and projections',
      'Identified and targeted 50+ relevant investors',
      'Managed entire process from initial outreach to term sheet negotiation',
      'Coordinated due diligence across multiple stakeholder groups'
    ],
    results: [
      'Successfully raised $500M in Series C funding',
      'Achieved $2.5B post-money valuation',
      'Secured investments from top-tier VCs including Sequoia and Andreessen Horowitz',
      'Oversubscribed round with 3x more interest than target',
      'Completed entire process in 6 months',
      'Positioned company as category leader in their space'
    ],
    impact: {
      revenue: '500% ROI',
      timeline: '6 Months',
      satisfaction: '10/10 Client Rating'
    }
  };

  return (
    <div className="case-detail-page">
      <section className="case-detail-hero">
        <div className="case-detail-hero-content">
          <Link to="/case-studies" className="back-link">
            <FaArrowLeft /> Back to Case Studies
          </Link>
          <span className="detail-category">{caseStudy.category}</span>
          <h1>{caseStudy.title}</h1>
          <div className="case-meta">
            <span><strong>Client:</strong> {caseStudy.client}</span>
            <span><strong>Industry:</strong> {caseStudy.industry}</span>
            <span><strong>Duration:</strong> {caseStudy.duration}</span>
          </div>
        </div>
      </section>

      <section className="case-detail-content">
        <div className="detail-section">
          <h2>Overview</h2>
          <p>{caseStudy.overview}</p>
        </div>

        <div className="detail-section">
          <h2>The Challenge</h2>
          <ul className="detail-list">
            {caseStudy.challenge.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Our Solution</h2>
          <ul className="detail-list">
            {caseStudy.solution.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Results & Impact</h2>
          <div className="impact-metrics">
            <div className="impact-card">
              <h3>{caseStudy.impact.revenue}</h3>
              <p>Return on Investment</p>
            </div>
            <div className="impact-card">
              <h3>{caseStudy.impact.timeline}</h3>
              <p>Project Duration</p>
            </div>
            <div className="impact-card">
              <h3>{caseStudy.impact.satisfaction}</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
          <ul className="detail-list">
            {caseStudy.results.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-detail-cta">
        <h2>Want Similar Results for Your Business?</h2>
        <p>Let's discuss how we can help you achieve your goals</p>
        <Link to="/contact" className="btn btn-white">Contact Us</Link>
      </section>
    </div>
  );
};

export default CaseStudyDetail;

