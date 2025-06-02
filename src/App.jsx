import './styles/Theme.css';
import './styles/Buttons.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import About from './sections/About';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Parcours from './sections/Parcours';
import Contact from './sections/Contact';

import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Parcours />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
