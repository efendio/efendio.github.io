import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const allTech = ['All', ...new Set(projects.flatMap(p => p.tech))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));
  
  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <h2>Featured Projects</h2>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {allTech.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              style={{
                padding: '0.5rem 1rem',
                background: filter === tech ? 'var(--accent)' : 'transparent',
                color: filter === tech ? 'white' : 'var(--text-primary)',
                border: `1px solid var(--accent)`,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: `1px solid var(--border)`,
                transition: 'transform 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.tech.map(tech => (
                  <span key={tech} style={{ background: 'var(--accent)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} target="_blank" style={{ color: 'var(--accent)' }}>🐙 GitHub</a>
                {project.live && <a href={project.live} target="_blank" style={{ color: 'var(--accent)' }}>🔗 Live Demo</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;