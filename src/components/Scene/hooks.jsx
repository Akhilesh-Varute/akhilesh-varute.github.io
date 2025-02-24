// components/Scene/hooks.js
import { useEffect, useRef } from 'react';

export const useScrollPosition = () => {
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollRef;
};

export const useParallax = (sensitivity = 1) => {
  const ref = useRef();
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * sensitivity;
        const y = (e.clientY / window.innerHeight - 0.5) * sensitivity;
        ref.current.rotation.y = x * Math.PI * 0.2;
        ref.current.rotation.x = y * Math.PI * 0.2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sensitivity]);

  return ref;
};