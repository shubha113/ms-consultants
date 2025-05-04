import { useState, useRef } from 'react';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Sending your message...'
    });
    
    try {
      const result = await emailjs.sendForm(
        'service_8njoi17', 
        'template_9qqiitw',
        form.current,
        'PviMKdskvQrAop9rZ'
      );
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      });
    }
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch for your construction and design needs</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>+91 9927014286</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>Super Market Shop No. 4, Gangoh Road</p>
              <p>Nanauta, Saharanpur</p>
              <p>Near Sarkari Hospital</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday: 9 AM - 6 PM</p>
              <p>Sunday: Closed</p>
            </div>
            
            <div className="contact-credentials">
              <div className="credential">
                <span className="credential-label">Lead Engineer:</span>
                <span className="credential-value">Er. Mohd. Sadiq (Chartered Engineer, Civil)</span>
              </div>
              <div className="credential">
                <span className="credential-label">Govt. Approval:</span>
                <span className="credential-value">AM3128892/08082024</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
              
              {formStatus.submitted && (
                <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;