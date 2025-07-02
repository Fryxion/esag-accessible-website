import React from 'react';

const SkipLink = ({ targetId = 'main-content', children = 'Saltar para o conteúdo principal' }) => {
  return (
    <a 
      href={`#${targetId}`}
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: 'var(--primary-blue)',
        color: 'white',
        padding: '8px',
        textDecoration: 'none',
        zIndex: 1000,
        borderRadius: '4px',
        fontWeight: 500,
        transition: 'top 0.2s ease'
      }}
      onFocus={(e) => {
        e.target.style.top = '6px';
      }}
      onBlur={(e) => {
        e.target.style.top = '-40px';
      }}
    >
      {children}
    </a>
  );
};

export default SkipLink;