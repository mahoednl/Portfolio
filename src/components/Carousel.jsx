import React, { useState } from 'react';
import './Carousel.css';

const slides = [
  { src: '/game1.png', caption: 'Gameplay – Escouade en action sur Synapse-Front' },
  { src: '/ui1.png', caption: 'Interface utilisateur – Menu d\'achat d\'équipement' },
  { src: '/ui2.png', caption: 'UI – Affichage du HUD et de la mini-map' },
  { src: '/map1.png', caption: 'Map Design – Zone Mid effondrée' },
  { src: '/code1.png', caption: 'Code – Système de rangs dynamique (GHOSTLINE, DATACORE)' }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? slides.length - 1 : index - 1);
  const next = () => setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <div className="carousel">
      <button onClick={prev}>&lt;</button>
      <div className="carousel-content">
        <img src={slides[index].src} alt="carousel" />
        <p className="caption">{slides[index].caption}</p>
      </div>
      <button onClick={next}>&gt;</button>
    </div>
  );
};

export default Carousel;
