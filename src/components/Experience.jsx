import { experiences } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  
  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <h2>Work Experience</h2>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{ position: 'absolute', left: '0.5rem', top: 0, bottom: 0, width: '2px', background: 'var(--accent)' }}></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ marginBottom: '2rem', position: 'relative' }}
            >
              <div style={{
                position: 'absolute',
                left: '-2rem',
                top: '0.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'var(--accent)',
                border: `2px solid var(--bg-primary)`
              }}></div>
              <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: `1px solid var(--border)` }}>
                <h3>{exp.title}</h3>
                <p style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{exp.company} | {exp.period}</p>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{resp}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {exp.tech.map(tech => (
                    <span key={tech} style={{ background: 'var(--bg-primary)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;