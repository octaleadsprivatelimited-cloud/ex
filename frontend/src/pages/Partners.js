import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    'Leading Global Bank', 'Tech Giants', 'Investment Firms', 'Industry Associations',
    'Academic Institutions', 'Law Firms', 'Accounting Firms', 'Technology Providers'
  ];

  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="partners-hero-content">
          <h1>Our Partners</h1>
          <p>Collaborating with industry leaders to deliver exceptional value</p>
        </div>
      </section>

      <section className="partners-content">
        <h2>Strategic Partnerships</h2>
        <p>
          We maintain strategic partnerships with leading organizations across industries to provide 
          our clients with comprehensive solutions and unparalleled expertise.
        </p>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <h3>{partner}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partners;

