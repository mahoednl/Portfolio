import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScrollBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener('scroll', updateScrollBar);
    return () => window.removeEventListener('scroll', updateScrollBar);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollWidth}%` }}
      onClick={handleClick}
      title="Retour en haut"
    />
  );
};

export default ScrollProgress;
