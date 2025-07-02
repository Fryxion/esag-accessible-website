import React from 'react';
import { useAccessibility } from '../../hooks/useAccessibility';

const AccessibilityControls = () => {
  const { toggleContrast, toggleTextSize } = useAccessibility();

  const buttonStyle = {
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <button
        onClick={toggleContrast}
        aria-label="Alternar contraste alto"
        style={buttonStyle}
        onMouseOver={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.2)';
        }}
      >
        <span aria-hidden="true">?</span>
        <span className="sr-only">Contraste</span>
      </button>
      
      <button
        onClick={toggleTextSize}
        aria-label="Aumentar tamanho do texto"
        style={buttonStyle}
        onMouseOver={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.2)';
        }}
      >
        <span aria-hidden="true">A+</span>
        <span className="sr-only">Texto grande</span>
      </button>
    </div>
  );
};

export default AccessibilityControls;