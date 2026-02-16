import { useState, useEffect, useRef } from 'react';

export const useTyped = (strings: string[], typeSpeed = 100, backSpeed = 50, backDelay = 2000) => {
  const [text, setText] = useState('');
  const stringIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const currentString = strings[stringIndex.current];

      if (isDeleting.current) {
        setText(currentString.substring(0, charIndex.current - 1));
        charIndex.current--;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          stringIndex.current = (stringIndex.current + 1) % strings.length;
        }
      } else {
        setText(currentString.substring(0, charIndex.current + 1));
        charIndex.current++;

        if (charIndex.current === currentString.length) {
          setTimeout(() => { isDeleting.current = true; }, backDelay);
        }
      }
    };

    const typingSpeed = isDeleting.current ? backSpeed : typeSpeed;
    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, strings, typeSpeed, backSpeed, backDelay]);

  return text;
};