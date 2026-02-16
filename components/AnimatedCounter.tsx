
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          if (start === end) return;

          const incrementTime = (duration / end);
          timer = setInterval(() => {
            start += Math.ceil(end / (duration / 10)); // Adjust step for smoother animation
            if (start > end) {
              start = end;
            }
            setCount(start);
            if (start === end) clearInterval(timer);
          }, incrementTime);

          // Disconnect observer after animation starts
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      clearInterval(timer); // Cleanup: clear interval on unmount
    };
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
};

export default AnimatedCounter;