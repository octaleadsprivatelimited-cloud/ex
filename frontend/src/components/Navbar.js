import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className={`top-bar ${isScrolled ? 'hidden' : ''}`}>
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item"><FaPhone /> +91 80089 22112</span>
            <span className="top-bar-item"><FaEnvelope /> rg@exigoconsulting.in</span>
          </div>
          <div className="top-bar-right">
            <Link to="/careers" className="top-bar-link">Careers</Link>
            <Link to="/resources" className="top-bar-link">Resources</Link>
          </div>
        </div>
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img 
              src="https://exigoconsulting.in/wp-content/uploads/2024/12/Untitled-design-10-1.png" 
              alt="Exigo Consulting" 
              className="logo-image"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu-desktop">
            <Link to="/about" className="navbar-link">About</Link>
            
            <div 
              className="navbar-dropdown"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <span className="navbar-link dropdown-trigger">
                Services <FaChevronDown className="dropdown-icon" />
              </span>
              <div className={`dropdown-menu ${servicesDropdown ? 'show' : ''}`}>
                <div className="dropdown-content">
                  <Link to="/services" className="dropdown-item featured">
                    <strong>All Services</strong>
                    <span className="item-desc">Complete overview</span>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/services/mergers-acquisitions" className="dropdown-item">
                    <strong>Mergers & Acquisitions</strong>
                    <span className="item-desc">Strategic M&A advisory</span>
                  </Link>
                  <Link to="/services/fund-raise" className="dropdown-item">
                    <strong>Fund Raise</strong>
                    <span className="item-desc">Capital raising expertise</span>
                  </Link>
                  <Link to="/services/business-consulting" className="dropdown-item">
                    <strong>Business Consulting</strong>
                    <span className="item-desc">Strategic business solutions</span>
                  </Link>
                  <Link to="/services/talent-acquisition" className="dropdown-item">
                    <strong>Talent Acquisition</strong>
                    <span className="item-desc">Executive search & hiring</span>
                  </Link>
                  <Link to="/services/other-services" className="dropdown-item">
                    <strong>Other Services</strong>
                    <span className="item-desc">Specialized consulting</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/industries" className="navbar-link">Industries</Link>
            <Link to="/case-studies" className="navbar-link">Case Studies</Link>
            <Link to="/team" className="navbar-link">Team</Link>
            <Link to="/blog" className="navbar-link">Blog</Link>
            <Link to="/contact" className="navbar-link navbar-cta">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="navbar-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${isOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <div className="mobile-menu-inner">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
              >
                <Link to="/about" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>About</span>
                </Link>
              </motion.div>
              
              <motion.div
                className="mobile-dropdown"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 100 }}
              >
                <button className="mobile-link dropdown-trigger" onClick={toggleMobileServices}>
                  <div className="link-dot"></div>
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="dropdown-icon-wrapper"
                  >
                    <FaChevronDown className="dropdown-icon" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      className="mobile-dropdown-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Link to="/services" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          All Services
                        </Link>
                        <Link to="/services/mergers-acquisitions" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Mergers & Acquisitions
                        </Link>
                        <Link to="/services/fund-raise" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Fund Raise
                        </Link>
                        <Link to="/services/business-consulting" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Business Consulting
                        </Link>
                        <Link to="/services/talent-acquisition" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Talent Acquisition
                        </Link>
                        <Link to="/services/other-services" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Other Services
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              >
                <Link to="/industries" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Industries</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
              >
                <Link to="/case-studies" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Case Studies</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              >
                <Link to="/team" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Team</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, type: 'spring', stiffness: 100 }}
              >
                <Link to="/blog" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Blog</span>
                </Link>
              </motion.div>
              
              <motion.div 
                className="mobile-menu-footer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              >
                <Link to="/contact" className="mobile-cta">
                  Get In Touch
                </Link>
                <div className="mobile-contact-info">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <FaPhone /> +91 80089 22112
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                  >
                    <FaEnvelope /> rg@exigoconsulting.in
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

