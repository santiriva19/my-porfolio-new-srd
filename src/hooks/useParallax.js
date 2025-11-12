import { useEffect } from 'react';

/**
 * Custom hook for parallax effect
 * Respects user's motion preferences
 */
export const useParallax = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let ticking = false;

    const parallax = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const layers = document.querySelectorAll('.layer');
          
          layers.forEach((layer) => {
            const speed = Number(layer.getAttribute('data-speed')) || 1;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', parallax, { passive: true });

    return () => {
      window.removeEventListener('mousemove', parallax);
    };
  }, []);
};

