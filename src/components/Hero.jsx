import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Building Your Vision, Crafting Your Future</h1>
          <p>Professional Engineering, Planning & Architectural Solutions</p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Contact Us</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
          <div className="hero-badge">
            <span>Govt. Approved AM3128892/08082024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;