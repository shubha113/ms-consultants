import '../styles/services.css';
import surveyingImg from '../assets/images/mark.jpg';
import buildingImg from '../assets/images/approve1.jpg';
import structuralImg from '../assets/images/design.jpg';
import interiorImg from '../assets/images/vastu1.jpg';
import planningImg from '../assets/images/last.jpg';

const Services = () => {
    const services = [
        {
          id: 1,
          title: 'Land Surveying',
          description: 'Precision-driven digital land surveys using advanced Total Station (TS) laser technology, ensuring accurate and reliable measurements for your projects.',
          image: surveyingImg,
          icon: '📏'
        },
        {
          id: 2,
          title: 'Building Plan Approval',
          description: 'End-to-end support for securing building plan approvals, ensuring seamless compliance with all local regulations and authority standards.',
          image: buildingImg,
          icon: '📝'
        },
        {
          id: 3,
          title: 'Structural Design',
          description: 'Innovative and robust structural engineering solutions designed to deliver safe, sustainable, and future-ready constructions.',
          image: structuralImg,
          icon: '🏗️'
        },
        {
          id: 4,
          title: '3D & Vastu Design',
          description: 'Stunning 2D/3D interior and exterior designs thoughtfully integrated with Vastu principles for harmony, aesthetics, and well-being.',
          image: interiorImg,
          icon: '🏠'
        },
        {
          id: 5,
          title: 'Project Management',
          description: 'Comprehensive project management services covering estimation, costing, valuation, site supervision, and professional contracting for flawless execution.',
          image: planningImg,
          icon: '📊'
        }
      ];
      

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive engineering and architectural solutions for all your needs</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-img">
                <img src={service.image} alt={service.title} />
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
