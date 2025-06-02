import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skills = [
  { name: 'Système & Réseaux', level: 90 },
  { name: 'MySQL/MongoDB', level: 70 }, 
  { name: 'Unreal Engine/C#', level: 70 },
  { name: 'HTML/CSS', level: 50 },
  { name: 'React', level: 40 },
  
];

const Skills = () => (
  <section id="skills" className="skills section-glass">
    <h2>🧠 Compétences</h2>
    <div className="skills-container">
      {skills.map((s, i) => (
        <div className="skill-wrapper" key={i}>
          {/* On affiche le label à côté */}
          <span className="skill-label">{s.name} — {s.level}%</span>
          <div className="skill-bar">
            {/* .bar-fill s’anime en largeur, mais ne contient pas le texte */}
            <motion.div
              className="bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${s.level}%` }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
