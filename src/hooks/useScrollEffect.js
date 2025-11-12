import { useEffect } from 'react';

/**
 * Custom hook to handle scroll events with performance optimization
 * Uses throttling to limit the number of calls
 */
export const useScrollEffect = (callback, dependencies = []) => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          callback();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, dependencies);
};

/**
 * Hook to detect when elements enter viewport
 * Now with dynamic element detection
 */
export const useScrollAnimation = (selector = '.js-scroll', threshold = 1.3) => {
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scrolled');
            } else if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('scrolled');
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -20% 0px'
        }
      );

      // Function to observe all matching elements
      const observeElements = () => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (!el.dataset.observed) {
            el.dataset.observed = 'true';
            observer.observe(el);
          }
        });
      };

      // Initial observation
      observeElements();

      // Re-observe after a short delay to catch dynamically rendered elements
      const timeoutId = setTimeout(observeElements, 100);

      // Watch for DOM mutations to catch new elements
      const mutationObserver = new MutationObserver(() => {
        observeElements();
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
        mutationObserver.disconnect();
      };
    } else {
      // Fallback for browsers without IntersectionObserver
      const handleScroll = () => {
        const elements = document.querySelectorAll(selector);
        const windowHeight = window.innerHeight;
        
        elements.forEach((el) => {
          const elementTop = el.getBoundingClientRect().top;
          const elementVisible = windowHeight / threshold;

          if (elementTop < elementVisible) {
            el.classList.add('scrolled');
          } else if (elementTop > windowHeight) {
            el.classList.remove('scrolled');
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      // Re-check on interval for dynamic elements
      const intervalId = setInterval(handleScroll, 500);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(intervalId);
      };
    }
  }, [selector, threshold]);
};

