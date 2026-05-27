import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      padding: '2rem 0',
      marginTop: '3rem',
      borderTop: `1px solid var(--border)`
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--text-secondary)' }}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            Built with React.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;