import React from 'react';
import { motion } from 'framer-motion';

const contacts = [
  {
    id: 1,
    title: '📧 Email',
    desc: 'mahoe.pllx@icloud.com',
    link: 'mailto:mahoe.pllx@icloud.com',
  },
  {
    id: 2,
    title: '📞 Téléphone',
    desc: '06 70 98 10 05',
    link: 'tel:0600000000',
  },
  {
    id: 3,
    title: '💼 LinkedIn',
    desc: 'linkedin.com/in/mahoe-denelle',
    link: 'https://www.linkedin.com/in/maho%C3%A9-denelle-901032256/',
  },
];

const Contact = () => (
  <section id="contact" style={{ padding: '4rem 2rem', backgroundColor: '#1A1C1F' }}>
    <h2 style={{ textAlign: 'center', color: '#00FFF7', marginBottom: '2rem' }}>📫 Contact</h2>

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
      }}
    >
      {contacts.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            width: 280,
            background: '#1a1c1f',
            padding: '1.5rem',
            borderRadius: '10px',
            color: '#EAFBFF',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: '#FF2768', marginBottom: '1rem' }}>{item.title}</h3>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00FFF7', textDecoration: 'none', fontWeight: 'bold' }}
          >
            {item.desc}
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Contact;
