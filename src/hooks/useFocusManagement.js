import { useEffect, useRef } from 'react';

export const useFocusManagement = () => {
  const focusRef = useRef(null);

  const setFocus = (element) => {
    if (element) {
      element.focus();
    }
  };

  const manageFocus = (targetSelector) => {
    const target = document.querySelector(targetSelector);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus();
    }
  };

  useEffect(() => {
    const handleFocusIn = (event) => {
      const focusedElement = event.target;
      const rect = focusedElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      if (!isVisible) {
        focusedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, []);

  return {
    focusRef,
    setFocus,
    manageFocus
  };
};