import { useState, useEffect, useCallback } from 'react';

export const useAccessibility = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Load saved preferences
    const savedContrast = localStorage.getItem('high-contrast') === 'true';
    const savedTextSize = localStorage.getItem('large-text') === 'true';
    
    setIsHighContrast(savedContrast);
    setIsLargeText(savedTextSize);
    
    // Apply to body
    document.body.classList.toggle('high-contrast', savedContrast);
    document.body.classList.toggle('large-text', savedTextSize);
  }, []);

  const toggleContrast = useCallback(() => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    document.body.classList.toggle('high-contrast', newValue);
    localStorage.setItem('high-contrast', newValue.toString());
    
    setStatusMessage(newValue ? 
      'Modo de alto contraste ativado' : 
      'Modo de alto contraste desativado'
    );
  }, [isHighContrast]);

  const toggleTextSize = useCallback(() => {
    const newValue = !isLargeText;
    setIsLargeText(newValue);
    document.body.classList.toggle('large-text', newValue);
    localStorage.setItem('large-text', newValue.toString());
    
    setStatusMessage(newValue ? 
      'Texto grande ativado' : 
      'Texto normal restaurado'
    );
  }, [isLargeText]);

  const announceMessage = useCallback((message) => {
    setStatusMessage(message);
  }, []);

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return {
    isHighContrast,
    isLargeText,
    statusMessage,
    toggleContrast,
    toggleTextSize,
    announceMessage
  };
};