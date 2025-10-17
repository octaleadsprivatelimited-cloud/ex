import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import './Resources.css';

const Resources = () => {
  const resources = [
    { title: 'M&A Playbook 2025', type: 'PDF Guide', description: 'Comprehensive guide to successful M&A transactions' },
    { title: 'Fundraising Strategy Template', type: 'Template', description: 'Step-by-step template for planning your fundraise' },
    { title: 'Business Transformation Framework', type: 'Whitepaper', description: 'Framework for driving organizational change' },
    { title: 'Market Analysis Report', type: 'Report', description: 'Industry trends and market insights for 2025' },
    { title: 'Talent Acquisition Best Practices', type: 'E-book', description: 'Strategies for building high-performance teams' },
    { title: 'Financial Modeling Templates', type: 'Spreadsheet', description: 'Excel templates for financial analysis' }
  ];

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero-content">
          <h1>Resources</h1>
          <p>Free guides, templates, and insights to help your business grow</p>
        </div>
      </section>

      <section className="resources-grid-section">
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <span className="resource-type">{resource.type}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <button className="btn btn-primary">
                <FaFileDownload /> Download
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;

