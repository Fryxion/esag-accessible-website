import React from 'react';
import AccessibilityControls from '../accessibility/AccessibilityControls';

const Header = () => {
  const headerStyle = {
    background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    color: 'white'
  };

  const logoIconStyle = {
    width: '50px',
    height: '50px',
    background: 'var(--accent-gold)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'var(--primary-blue)'
  };

  return (
    <header style={headerStyle} role="banner">
      <div style={containerStyle}>
        <a 
          href="/" 
          style={logoStyle}
          aria-label="ESAG - Escola Secundária Almeida Garrett - Página inicial"
        >
          <div style={logoIconStyle} aria-hidden="true">E</div>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>ESAG</h1>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>
              Escola Secundária Almeida Garrett
            </p>
          </div>
        </a>
        
        <AccessibilityControls />
      </div>
    </header>
  );
};

export default Header;