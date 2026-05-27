import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 50));
    return () => window.removeEventListener('scroll', () => {});
  }, []);
  
  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: scrolled ? 'var(--bg-primary)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      zIndex: 1000,
      transition: 'all 0.3s',
      borderBottom: scrolled ? `1px solid var(--border)` : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>EFENDIO</a>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }} className="desktop-menu">
            {navItems.map(item => (
              <a key={item} href={`#${item}`} style={{ textDecoration: 'none', color: 'var(--text-primary)', transition: 'color 0.3s' }}
                 onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                 onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
            {darkMode ? <FaSun color="var(--accent)" /> : <FaMoon color="var(--accent)" />}
          </button>
          
          <button onClick={() => setMobileMenu(!mobileMenu)} className="mobile-toggle" style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.5rem' }}>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenu && (
        <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)', padding: '1rem', gap: '1rem' }}>
          {navItems.map(item => (
            <a key={item} href={`#${item}`} onClick={() => setMobileMenu(false)}>{item.toUpperCase()}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;