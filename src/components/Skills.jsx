import { skills } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    { title: '💻 Programming Languages', items: skills.languages },
    { title: '🎨 Frontend', items: skills.frontend },
    { title: '⚙️ Backend', items: skills.backend },
    { title: '🔒 Cybersecurity', items: skills.cybersecurity },
    { title: '🛠️ Tools', items: skills.tools }
  ];

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <h2>Technical Skills</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.items.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    style={{
                      background: 'var(--bg-secondary)',
                      padding: '0.5rem 1.25rem',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: `1px solid var(--border)`,
                      transition: 'transform 0.3s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;