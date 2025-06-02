import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <section name="home" id="home" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
    <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Bienvenue, je suis <span style={{ color: '#00fff7' }}>Mahoe</span>
    </motion.h1>
    <p>Développeur passionné de jeux vidéo et de technologies</p>
  </section>
);

export default Home;
