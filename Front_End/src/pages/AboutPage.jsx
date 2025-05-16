// src/pages/AboutPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';
import { FaUtensils, FaTruck, FaUsers, FaStar } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-hero-section">
          <h1 className="about-hero-title">Acerca de Nosotros</h1>
          <p className="about-hero-subtitle">Amamos la comida rápida y brindar experiencias memorables.</p>
        </section>

        <section className="about-intro-section">
          <div className="about-container">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Somos una empresa apasionada por la comida rápida, que nació con el propósito de ofrecer platos sabrosos,
              atención cercana y momentos inolvidables. Con el paso del tiempo, hemos crecido manteniendo siempre nuestros valores:
              calidad, sabor y compromiso con nuestros clientes.
            </p>
          </div>
        </section>

        <section className="about-timeline-section">
          <div className="about-container">
            <h2>Nuestra Historia</h2>
            <div className="about-timeline">
              <div className="timeline-item">
                <div className="timeline-icon"><FaUtensils /></div>
                <div className="timeline-content">
                  <h3>2002 - Fundación</h3>
                  <p>Todo comenzó con una pequeña cocina familiar y una gran pasión por la comida rápida.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"><FaTruck /></div>
                <div className="timeline-content">
                  <h3>2005 - Primer Restaurante</h3>
                  <p>Abrimos nuestra primera sede con servicio a domicilio y atención personalizada.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"><FaUsers /></div>
                <div className="timeline-content">
                  <h3>2015 - Expansión</h3>
                  <p>Gracias al apoyo de nuestros clientes, nos expandimos a varias ciudades del país.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"><FaStar /></div>
                <div className="timeline-content">
                  <h3>2020 - Reconocimiento</h3>
                  <p>Fuimos reconocidos como una de las mejores cadenas de comida rápida nacional.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
