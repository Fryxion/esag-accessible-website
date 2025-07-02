import { useEffect, useCallback } from 'react';

export const useKeyboardNavigation = (onEscape) => {
  const handleKeyDown = useCallback((event) => {
    switch (event.key) {
      case 'Escape':
        if (onEscape) {
          onEscape();
        }
        break;
      case 'Tab':
        // Ensure focused elements are visible
        setTimeout(() => {
          const focusedElement = document.activeElement;
          if (focusedElement) {
            const rect = focusedElement.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            
            if (!isVisible) {
              focusedElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }
        }, 0);
        break;
    }
  }, [onEscape]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};