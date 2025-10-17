import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CaseStudies.css';

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: 'Tech Unicorn $500M Series C Raise',
      category: 'Fund Raise',
      client: 'SaaS Startup',
      challenge: 'Rapidly growing SaaS company needed significant capital to scale operations globally.',
      result: 'Successfully raised $500M Series C from top-tier VCs at $2.5B valuation',
      metrics: ['500% ROI', '$500M Raised', '2.5B Valuation']
    },
    {
      id: 2,
      title: 'Healthcare M&A Integration',
      category: 'M&A',
      client: 'Healthcare Provider',
      challenge: 'Major acquisition requiring complex integration of systems, processes, and teams.',
      result: 'Seamless integration completed in 6 months, $50M in synergies realized',
      metrics: ['6 Months', '$50M Synergies', '98% Retention']
    },
    {
      id: 3,
      title: 'Manufacturing Digital Transformation',
      category: 'Business Consulting',
      client: 'Manufacturing Corp',
      challenge: 'Legacy manufacturer needed to modernize operations and embrace digital technologies.',
      result: '40% efficiency improvement, $20M cost savings annually',
      metrics: ['40% Efficiency', '$20M Savings', '18 Months']
    },
    {
      id: 4,
      title: 'FinTech Executive Team Build',
      category: 'Talent Acquisition',
      client: 'FinTech Startup',
      challenge: 'Fast-growing fintech needed to build an experienced C-suite quickly.',
      result: 'Recruited complete C-suite in 90 days, including CEO, CFO, CTO',
      metrics: ['90 Days', '12 Positions', '95% Success Rate']
    },
    {
      id: 5,
      title: 'Retail Chain Expansion Strategy',
      category: 'Business Consulting',
      client: 'Retail Chain',
      challenge: 'Regional retailer planning national expansion needed comprehensive strategy.',
      result: 'Successful expansion to 100 new locations, 3x revenue growth',
      metrics: ['100 Locations', '3x Revenue', '24 Months']
    },
    {
      id: 6,
      title: 'PE-Backed Acquisition',
      category: 'M&A',
      client: 'Private Equity Firm',
      challenge: 'PE firm seeking to acquire and consolidate fragmented industry.',
      result: 'Identified and closed 5 strategic acquisitions, created market leader',
      metrics: ['5 Acquisitions', '$300M Total', 'Market Leader']
    }
  ];

  return (
    <div className="case-studies-page">
      <section className="case-studies-hero">
        <div className="case-studies-hero-content">
          <h1>Case Studies</h1>
          <p>Real results from real clients across industries</p>
        </div>
      </section>

      <section className="case-studies-intro">
        <h2>Proven Track Record of Success</h2>
        <p>
          Our work speaks for itself. Explore how we've helped clients across industries achieve 
          remarkable results through strategic consulting, operational excellence, and innovative solutions.
        </p>
      </section>

      <section className="case-studies-grid-section">
        <div className="case-studies-grid">
          {cases.map((caseStudy) => (
            <div key={caseStudy.id} className="case-study-card">
              <span className="case-category">{caseStudy.category}</span>
              <h3>{caseStudy.title}</h3>
              <p className="case-client"><strong>Client:</strong> {caseStudy.client}</p>
              <p className="case-challenge"><strong>Challenge:</strong> {caseStudy.challenge}</p>
              <p className="case-result"><strong>Result:</strong> {caseStudy.result}</p>
              <div className="case-metrics">
                {caseStudy.metrics.map((metric, idx) => (
                  <span key={idx} className="metric-badge">{metric}</span>
                ))}
              </div>
              <Link to={`/case-studies/${caseStudy.id}`} className="case-link">
                Read Full Story <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="case-studies-cta">
        <h2>Ready to Write Your Success Story?</h2>
        <p>Let's discuss how we can help you achieve similar results</p>
        <Link to="/contact" className="btn btn-white">Get Started</Link>
      </section>
    </div>
  );
};

export default CaseStudies;

