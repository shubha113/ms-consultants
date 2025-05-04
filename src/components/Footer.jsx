import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="footer-company">
              <h3>MS Consultants</h3>
              <p>Engineers, Planners, Architects</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>Land Surveying</li>
                <li>Building Plan Approval</li>
                <li>Structural Design</li>
                <li>3D & Vastu Design</li>
                <li>Project Management</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact</h4>
              <ul className="contact-list">
                <li>
                  <span className="icon">📱</span>
                  <span>+91 9927014286</span>
                </li>
                <li>
                  <span className="icon">📍</span>
                  <span>Shop No. 4, Gangoh Road, Nanauta, Saharanpur</span>
                </li>
                <li>
                  <span className="icon">📋</span>
                  <span>Govt. Approved: AM3128892/08082024</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} MS Consultants. All Rights Reserved.
          </div>
          <div className="social-links">
            <a href="#" className="social-link">FB</a>
            <a href="#" className="social-link">IG</a>
            <a href="#" className="social-link">WA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;