import '../styles/testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Homeowner",
      quote: "MS Consultants helped me design my dream home. Their attention to detail and incorporation of Vastu principles made all the difference.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sunita Verma",
      position: "Property Developer",
      quote: "I've worked with many consultants, but MS Consultants stands out for their precision and professionalism. Their land measurement services are unmatched.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anand Singh",
      position: "Business Owner",
      quote: "Getting my commercial building plans approved was a breeze with MS Consultants handling all the paperwork and compliance requirements.",
      rating: 4,
    }
  ];
  
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>What our satisfied clients have to say about our services</p>
        </div>
        
        <div className="grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={i < testimonial.rating ? 'star filled' : 'star'}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;