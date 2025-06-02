import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import GamePreview from './GamePreview';
import Parcours from './Parcours';

const projects = [
  {
    id: 'dataline',
    title: '🎮 DATALINE',
    desc: 'FPS 5v5 futuriste avec factions, économie et netcode custom.',
    full: <GamePreview />
  },
{
  id: 'blackhost',
  title: '💻 Blackhost',
  desc: 'Plateforme d’hébergement web, jeux, infogérance de VPS, email pro…',
  full: (
    <div className="details-content">
      <h4>💻 Blackhost Hébergement</h4>
      <p>
        Fondée le <strong>12 juillet 2022</strong> et enregistrée sous le numéro SIREN <strong>918 572 272</strong>, 
        Blackhost est une association spécialisée dans le traitement de données et l’hébergement (code NAF 63.11Z).
      </p>
      <p><strong>Activités principales :</strong></p>
      <ul>
        <li>Hébergement web pour sites internet</li>
        <li>Serveurs dédiés pour jeux multijoueurs</li>
        <li>Infogérance de VPS (serveurs privés virtuels)</li>
        <li>Mise à disposition de serveurs dédiés</li>
        <li>Gestion d’emails professionnels</li>
        <li>Solutions de monitoring & support technique</li>
      </ul>
      <p>
        En résumé, Blackhost propose une offre technique complète à destination de 
        <strong> particuliers, développeurs et petites entreprises</strong> recherchant fiabilité, flexibilité 
        et accompagnement dans leurs projets numériques.
      </p>
    </div>
  )
}

];

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">🚀 Projets</h2>

      <div
        className="projects-grid"
        style={{
          filter: active ? 'blur(5px)' : 'none',
          transition: 'filter 0.3s ease'
        }}
      >
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <button
              className="project-button"
              onClick={() => setActive(active === proj.id ? null : proj.id)}
            >
              {active === proj.id ? 'Fermer' : 'Voir plus'}
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="details-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="details-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
            >
              <button
                className="project-close-button"
                onClick={() => setActive(null)}
              >
                ✖
              </button>

              <div className="details-inner">
                <h3 className="details-title">
                  {projects.find((p) => p.id === active)?.title}
                </h3>
                <div className="details-body">
                  {projects.find((p) => p.id === active)?.full}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
