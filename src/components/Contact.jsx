import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const form = useRef();
  
  // Form state
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  
  // UI states
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');
  
  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  // Validate form before sending
  const validateForm = () => {
    if (!formData.from_name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.from_email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    return true;
  };
  
  // Send email function
  const sendEmail = async (e) => {
    e.preventDefault();
    
    // Validate
    if (!validateForm()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    
    setStatus('sending');
    setErrorMessage('');
    
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email sent successfully!', response.text);
      setStatus('success');
      
      // Reset form
      setFormData({ from_name: '', from_email: '', message: '' });
      form.current.reset();
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };
  
  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <h2>Get In Touch</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}
        >
          {/* Contact Info - Left Side */}
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href={`mailto:${personalInfo.email}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
                <FaEnvelope style={{ color: 'var(--accent)' }} /> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
                <FaPhone style={{ color: 'var(--accent)' }} /> {personalInfo.phone}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FaMapMarkerAlt style={{ color: 'var(--accent)' }} /> {personalInfo.location}
              </div>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
                <FaGithub style={{ color: 'var(--accent)' }} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
                <FaLinkedin style={{ color: 'var(--accent)' }} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Send Me a Message</h3>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div style={{
                background: '#10b981',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && errorMessage && (
              <div style={{
                background: '#ef4444',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ⚠️ {errorMessage}
              </div>
            )}
            
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name *"
                value={formData.from_name}
                onChange={handleChange}
                required
                style={{
                  padding: '0.75rem',
                  background: 'var(--bg-secondary)',
                  border: `1px solid var(--border)`,
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
              
              <input
                type="email"
                name="from_email"
                placeholder="Your Email *"
                value={formData.from_email}
                onChange={handleChange}
                required
                style={{
                  padding: '0.75rem',
                  background: 'var(--bg-secondary)',
                  border: `1px solid var(--border)`,
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
              
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  padding: '0.75rem',
                  background: 'var(--bg-secondary)',
                  border: `1px solid var(--border)`,
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  resize: 'vertical',
                  fontSize: '1rem',
                  fontFamily: 'inherit'
                }}
              />
              
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  padding: '0.75rem',
                  background: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  opacity: status === 'sending' ? 0.7 : 1
                }}
                onMouseEnter={e => {
                  if (status !== 'sending') e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={e => {
                  if (status !== 'sending') e.currentTarget.style.opacity = '1';
                }}
              >
                {status === 'sending' ? '✈️ Sending...' : '📧 Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;