
import React from 'react';
import Carousel from '../components/Carousel';

const GamePreview = () => (
  <div className="game-preview">
    <h2>🎮 DATALINE – FPS Futuriste 5v5</h2>

    <section className="game-section">
      <h3>🧠 LORE</h3>
      <p>
        <strong>Année 2146.</strong><br />
        Après le Crash des Systèmes Neuronets, le monde s’est effondré sous la perte du contrôle des IA.
        Ce qu’il reste, ce sont les Datalines  anciennes lignes de code souterraines, fragments d’intelligence
        dispersés et cachés dans les ruines technologiques du vieux monde.
      </p>
      <p>
        Deux factions s’affrontent pour le contrôle ou la destruction de ces lignes neuronales…
        car chaque fragment pourrait réveiller ce que l’humanité a juré de ne plus jamais réactiver.
      </p>
    </section>

    <section className="game-section">
      <h3>🛡 FACTIONS</h3>
      <p><strong>🔥 NEMEXA (Attaquants)</strong><br />
        Mots-clés : Disruption • Autonomie • Effacement<br />
        Mouvement clandestin techno-guerrier. Leur but : effacer chaque fragment IA pour libérer l’humanité.
      </p>
      <p><strong>🧊 LUXVAULT (Défenseurs)</strong><br />
        Mots-clés : Confinement • Surveillance • Contrôle<br />
        Un consortium militaro-technique chargé de conserver et verrouiller les Datalines dans des bunkers souterrains.
      </p>
    </section>

    <section className="game-section">
      <h3>🗺 MAP PRINCIPALE : SYNAPSE-FRONT</h3>
      <ul>
        <li>Thème : Terminal IA effondré au cœur d'une ville détruite</li>
        <li>Sites A/B : Anciennes baies mémoire et relai de réplication</li>
        <li>Mid : Artère de transport sécurisée, partiellement effondrée</li>
        <li>Style de jeu : Deux sites chez les défenseurs, mid vital pour le contrôle</li>
      </ul>
    </section>

    <section className="game-section">
      <h3>🎨 STYLE VISUEL</h3>
      <ul>
        <li>Clean futuriste, brutaliste & tech industriel</li>
        <li>UI minimaliste, lisible, néon / métal</li>
        <li>Couleurs UI :<br />
          Principal : #00FFF7<br />
          Secondaire : #1A1C1F<br />
          Action : #FF2768<br />
          Texte : #EAFBFF
        </li>
      </ul>
    </section>

    <section className="game-section">
      <h3>💵 ÉCONOMIE</h3>
      <p>Monnaie : NEX – utilisée pour acheter l’équipement en match.</p>
    </section>

    <section className="game-section">
      <h3>🧪 SYSTÈME DE RANGS</h3>
      <ul>
        <li><strong>INITIATE</strong> – I to III – Gris froid</li>
        <li><strong>TRACE</strong> – I to III – Cyan clair</li>
        <li><strong>NODE</strong> – I to III – Bleu électrique</li>
        <li><strong>CORTEX</strong> – I to III – Violet métallique</li>
        <li><strong>GHOSTLINE</strong> – I to III – Rouge digital</li>
        <li><strong>BLACKVAULT</strong> – I to III – Or mat</li>
        <li><strong>DATACORE</strong> – Unique – Blanc néon</li>
      </ul>
    </section>

    <Carousel />
  </div>
);

export default GamePreview;
