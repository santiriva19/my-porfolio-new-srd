import { useState, useEffect } from 'react';

/**
 * Custom hook to handle media queries
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    const handleChange = (e) => setMatches(e.matches);
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Use the modern addEventListener API
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

