import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const leadership = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      bio: 'With over 30 years of experience in strategic consulting, Rajesh leads our global operations.',
      expertise: 'M&A, Strategy, Leadership'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operating Officer',
      bio: 'Priya oversees all operational aspects, ensuring excellence in service delivery.',
      expertise: 'Operations, Efficiency, Process Improvement'
    },
    {
      name: 'Arjun Patel',
      role: 'Managing Partner - M&A',
      bio: 'Arjun has led over $5B in successful M&A transactions across multiple industries.',
      expertise: 'M&A, Valuation, Due Diligence'
    },
    {
      name: 'Ananya Reddy',
      role: 'Managing Partner - Fund Raise',
      bio: 'Ananya has helped clients raise over $3B in capital from top-tier investors.',
      expertise: 'Fundraising, Investor Relations, VC/PE'
    }
  ];

  const consultants = [
    { name: 'Vikram Singh', role: 'Senior Consultant', specialty: 'Business Strategy' },
    { name: 'Kavya Iyer', role: 'Senior Consultant', specialty: 'Operations' },
    { name: 'Aditya Gupta', role: 'Senior Consultant', specialty: 'Digital Transformation' },
    { name: 'Nisha Verma', role: 'Senior Consultant', specialty: 'Talent Acquisition' },
    { name: 'Rohan Desai', role: 'Consultant', specialty: 'Financial Advisory' },
    { name: 'Sneha Malhotra', role: 'Consultant', specialty: 'Market Research' },
    { name: 'Karthik Menon', role: 'Consultant', specialty: 'Risk Management' },
    { name: 'Divya Nair', role: 'Consultant', specialty: 'Change Management' }
  ];

  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="team-hero-content">
          <h1>Our Team</h1>
          <p>Meet the experts driving success for our clients worldwide</p>
        </div>
      </section>

      <section className="team-intro">
        <h2>World-Class Expertise</h2>
        <p>
          Our team brings together industry veterans, strategic thinkers, and operational 
          experts with deep domain knowledge across multiple sectors. With consultants who 
          have worked at leading firms and Fortune 500 companies, we deliver insights that 
          drive real business impact.
        </p>
      </section>

      <section className="leadership-section">
        <h2>Leadership Team</h2>
        <div className="leadership-grid">
          {leadership.map((leader, index) => (
            <div key={index} className="team-member-card">
              <div className="member-avatar">
                <div className="avatar-placeholder">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3>{leader.name}</h3>
              <p className="member-role">{leader.role}</p>
              <p className="member-bio">{leader.bio}</p>
              <p className="member-expertise"><strong>Expertise:</strong> {leader.expertise}</p>
              <div className="member-social">
                <a href="#" className="social-btn"><FaLinkedin /></a>
                <a href="#" className="social-btn"><FaEnvelope /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="consultants-section">
        <h2>Our Consultants</h2>
        <div className="consultants-grid">
          {consultants.map((consultant, index) => (
            <div key={index} className="consultant-card">
              <div className="consultant-avatar">
                {consultant.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="consultant-info">
                <h4>{consultant.name}</h4>
                <p className="consultant-role">{consultant.role}</p>
                <p className="consultant-specialty">{consultant.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="join-team">
        <h2>Join Our Team</h2>
        <p>We're always looking for talented professionals to join our growing team</p>
        <a href="/careers" className="btn btn-primary">View Open Positions</a>
      </section>
    </div>
  );
};

export default Team;

