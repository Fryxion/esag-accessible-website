import React from 'react';
import { useAccessibility } from '../../hooks/useAccessibility';

const StatusMessage = () => {
  const { statusMessage } = useAccessibility();

  if (!statusMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'var(--success-green)',
        color: 'white',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 1000,
        maxWidth: '300px'
      }}
    >
      {statusMessage}
    </div>
  );
};

export default StatusMessage;