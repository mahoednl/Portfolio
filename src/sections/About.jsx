
import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="about-section">
    <motion.h2
      className="about-title"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      À propos de Moi
    </motion.h2>

    <motion.p
      className="about-text"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Je m'appelle <strong>Mahoe</strong>, passionné d'informatique depuis mon plus jeune âge. J’ai exploré de nombreux domaines : création de sites web, gestion de serveurs, systèmes et réseaux...
      C’est d’ailleurs dans l’infrastructure et l’hébergement que j’ai lancé <strong>Blackhost</strong>, une plateforme proposant des VPS, de l’hébergement mutualisé et des services email professionnels.
      <br/><br/>
      Mais avec le temps, une autre passion s’est imposée à moi : le <strong>développement de jeux vidéo</strong>. J’ai alors choisi de me spécialiser dans ce domaine en combinant mes compétences techniques à ma créativité.
      Aujourd’hui, je travaille sur <strong>DATALINE</strong>, un jeu <em>FPS 5v5 futuriste</em> avec factions, économie, netcode personnalisé et interface immersive.
      <br/><br/>
      Curieux, déterminé et autonome, je poursuis ma formation en <strong>BTS SIO</strong> et je suis actuellement à la recherche d'une <strong>alternance pour ma deuxième année</strong>, afin de continuer à apprendre en contribuant à des projets concrets.
    </motion.p>

    <motion.div
      className="about-button-container"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <a href="/cv-mahoe.pdf" download className="cv-button">
        📄 Télécharger mon CV
      </a>
    </motion.div>
  </section>
);

export default About;
