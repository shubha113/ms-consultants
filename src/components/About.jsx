import '../styles/about.css';
import aboutImage from '../assets/images/main.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-header">
              <h2>About MS Consultants</h2>
              <p>Your trusted partner in construction and design</p>
            </div>
            <p>MS Consultants is a government-approved firm of professional engineers, planners, and architects led by Er. Mohd. Sadiq, Chartered Engineer (Civil).</p>
            <p>With years of experience in the construction industry, we provide comprehensive services including building plan approvals, structural design, landscaping, 3D designing, Vastu planning, estimation, site supervision, and much more.</p>
            <p>Our team uses advanced technology like Digital Computer Laser Machines for precise land measurement, ensuring accuracy in all our projects.</p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Government Approved</div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Certified Engineers</div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Modern Technology</div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
          <div className="image-container">
          <div className="image-box" style={{ backgroundImage: `url(${aboutImage})` }}></div>
          <div className="experience-badge">
            <span className="years">7+</span>
            <span className="text">Years of Experience</span>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
