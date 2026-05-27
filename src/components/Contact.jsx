import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Note: For real email sending, you'll need EmailJS or a backend
    // This is a placeholder that logs to console
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
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
          {/* Contact Info */}
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
              <a href={personalInfo.github} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
                <FaGithub style={{ color: 'var(--accent)' }} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
                <FaLinkedin style={{ color: 'var(--accent)' }} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Send Me a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '0.75rem',
                  background: 'var(--bg-secondary)',
                  border: `1px solid var(--border)`,
                  borderRadius: '8px',
                  color: 'var(--text-primary)'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '0.75rem',
                  background: 'var(--bg-secondary)',
                  border: `1px solid var(--border)`,
                  borderRadius: '8px',
                  color: 'var(--text-primary)'
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
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
                  resize: 'vertical'
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
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'opacity 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;