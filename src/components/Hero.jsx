import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Cyber Security Graduate & Web Developer";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Hi, I'm <span style={{ color: 'var(--accent)' }}>{personalInfo.name}</span>
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem', minHeight: '3rem' }}>
            {text}<span className="cursor">|</span>
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            {personalInfo.title}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" 
               style={{ background: 'var(--accent)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaGithub /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               style={{ border: '2px solid var(--accent)', color: 'var(--accent)', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaLinkedin /> LinkedIn
            </a>
            <a href="/CV-Efendio.pdf" download
               style={{ border: '2px solid var(--accent)', color: 'var(--accent)', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
              📄 Download CV
            </a>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
            <span><FaEnvelope /> {personalInfo.email}</span>
            <span><FaMapMarkerAlt /> {personalInfo.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;