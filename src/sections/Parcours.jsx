import React from 'react';
import '../styles/Timeline.css';

const Parcours = () => {
  const steps = [
    {
      date: '2022 – 2024',
      title: 'Bac Pro SN',
      desc: 'Spécialité Réseaux et Systèmes. Mention Très Bien, forte base en électronique,audiovisuel, systèmes embarqués et réseaux.'
    },
    {
      date: '2023 – 2024',
      title: 'Création de Blackhost',
      desc: 'Entreprise d’hébergement web, jeux, infogérance de VPS, panneau client en PHP, gestion du support et de la facturation.'
    },
    {
      date: '2024 – Présent',
      title: 'BTS SIO',
      desc: 'Infrastructure réseau, virtualisation, Linux, gestion de projet. 1ère année validée. Objectif : alternance en dev pour 2e année.'
    },
    {
      date: '2024 – Présent',
      title: 'Projet DATALINE',
      desc: 'FPS futuriste 5v5 développé en solo. Netcode, factions, lore, UI, economy system. Projet phare vers le métier de Game Dev.'
    }
  ];

  return (
    <div className="timeline-container " id="parcours">
      <h3>🎓 Mon Parcours</h3>
      <div className="timeline">
        {steps.map((step, i) => (
          <div key={i} className="timeline-item">
            
            <div className="timeline-date">{step.date}</div>
            <div className="timeline-title">{step.title}</div>
            <div className="timeline-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parcours;
