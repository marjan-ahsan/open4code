
import { useEffect, useRef } from 'react';

// Fix: Made the hook generic to support different HTML elements.
// This allows components like CourseDetail to use it on buttons.
export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(delay = 0) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.remove('opacity-0', 'translate-y-5');
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    
    return () => {
        if (element) {
            observer.unobserve(element);
        }
    };
  }, [delay]);

  return ref;
};
