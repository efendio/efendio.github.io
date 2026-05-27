import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../data/portfolioData';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            A motivated Information Technology graduate with a strong focus on Cyber Security and hands-on 
            experience in software development and network systems. Passionate about building secure and 
            efficient web solutions aligned with business needs. Eager to contribute to system development 
            and digital solutions, applying Agile methodologies and SDLC best practices.
          </p>
          
          <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Certifications</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {certifications.map((cert, index) => (
              <div key={index} style={{ 
                background: 'var(--bg-secondary)', 
                padding: '0.75rem', 
                borderRadius: '8px',
                border: `1px solid var(--border)`
              }}>
                🎓 {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;