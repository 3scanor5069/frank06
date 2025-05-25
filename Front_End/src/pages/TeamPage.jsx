// src/pages/TeamPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/TeamPage.css';

const teamMembers = [
  {
    name: 'Carlos Gómez',
    role: 'Chef Ejecutivo',
    image: 'https://i.imgur.com/3GvwNBf.jpg',
    description: 'Experto en cocina internacional con más de 15 años de experiencia.'
  },
  {
    name: 'Lucía Martínez',
    role: 'Chef Pastelera',
    image: 'https://i.imgur.com/9V5MshC.jpg',
    description: 'Apasionada por los postres creativos y sabores únicos.'
  },
  {
    name: 'Santiago Pérez',
    role: 'Gerente General',
    image: 'https://i.imgur.com/dM7Thhn.jpg',
    description: 'Liderando al equipo hacia el éxito con visión y compromiso.'
  }
];

const TeamPage = () => {
  return (
    <>
      <Header />
      <main className="team-page">
        <section className="team-hero">
          <h1>Conoce a Nuestro Equipo</h1>
          <p>Detrás de cada gran plato hay un equipo aún más grande.</p>
        </section>

        <section className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.description}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TeamPage;
