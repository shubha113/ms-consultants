import { useState } from 'react';
import '../styles/projects.css';
import project1 from '../assets/images/3bhk.jpg';
import project2 from '../assets/images/renovation.jpg';
import project3 from '../assets/images/interior.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: '3BHK House Design',
      category: 'residential',
      image: project1,
      description: 'Complete floor plan and 3D elevation for a 3BHK house in a local residential area.'
    },
    {
      id: 2,
      title: 'Retail Shop Renovation',
      category: 'commercial',
      image: project2,
      description: 'Interior renovation and front elevation redesign for a small retail shop.'
    },
    {
      id: 3,
      title: 'House Interior Design',
      category: 'residential',
      image: project3,
      description: 'Interior planning and space optimization for a compact residential home with modern aesthetics.'
    }    
  ];
  

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Our Projects</h2>
          <p>Some of our finest works that showcase our expertise</p>
        </div>
        
        <div className="project-filter">
          <button 
            className={activeTab === 'all' ? 'active' : ''} 
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={activeTab === 'residential' ? 'active' : ''} 
            onClick={() => setActiveTab('residential')}
          >
            Residential
          </button>
          <button 
            className={activeTab === 'commercial' ? 'active' : ''} 
            onClick={() => setActiveTab('commercial')}
          >
            Commercial
          </button>
          <button 
            className={activeTab === 'institutional' ? 'active' : ''} 
            onClick={() => setActiveTab('institutional')}
          >
            Institutional
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
