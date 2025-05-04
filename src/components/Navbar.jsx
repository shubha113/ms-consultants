import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="#home">
              <div className="logo-text">
                <h1>MS Consultants</h1>
                <p>Engineers, Planners, Architects</p>
              </div>
            </a>
          </div>
          
          <nav className={`navbar-nav ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
              <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
              <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
              <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
          </nav>
          
          <div className="navbar-contact">
            <div className="contact-phone">
              <span className="phone-icon">📱</span>
              <span className="phone-number">+91 9927014286</span>
            </div>
            
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <span className={`menu-icon ${mobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;