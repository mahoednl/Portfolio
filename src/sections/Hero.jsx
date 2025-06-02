import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const controls = useAnimation();
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    // 1. Lance l'animation d'entrée (fade + slide) du container
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    });

    const timeout = setTimeout(() => setTyped(true), 3000);
    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <motion.section
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
    >
      <h1 className={`typing-text ${typed ? 'scale-up' : ''}`}>
        Bienvenue, je suis <span className="highlight">Mahoe</span>
      </h1>
    </motion.section>
  );
};

export default Hero;
