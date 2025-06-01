// src/pages/TeamPage.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/TeamPage.css';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/equipo')
      .then(res => res.json())
      .then(data => setTeamMembers(data))
      .catch(err => console.error('Error cargando el equipo:', err));
  }, []);

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
