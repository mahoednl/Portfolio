import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll('section[name]');
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY <= bottom) {
          setActive(section.getAttribute('name'));
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'about', label: 'À propos de Moi' },
    { name: 'parcours', label: 'Parcours' },
    { name: 'skills', label: 'Compétences' },
    { name: 'projects', label: 'Projets' }
    
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={`#${link.name}`}
          className={active === link.name ? 'active' : ''}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
