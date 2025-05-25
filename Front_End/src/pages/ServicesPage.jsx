// src/pages/ServicesPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ServicesPage.css';
import { FaHamburger, FaRegClock, FaRegHandshake, FaRegStar, FaRegSmile, FaRegLightbulb, FaRegHeart, FaRegThumbsUp } from 'react-icons/fa';

const services = [
  {
    icon: <FaHamburger className="service-icon" />,
    title: 'Menú Variado y Sabroso',
    description: 'Desde hamburguesas clásicas hasta opciones gourmet, cada bocado está diseñado para satisfacer todos los gustos.',
  },
  {
    icon: <FaRegClock className="service-icon" />,
    title: 'Servicio Rápido y Eficiente',
    description: 'Entendemos la importancia del tiempo; por eso, garantizamos un servicio ágil sin comprometer la calidad.',
  },
  {
    icon: <FaRegHandshake className="service-icon" />,
    title: 'Compromiso con la Calidad',
    description: 'Seleccionamos ingredientes frescos y de alta calidad para ofrecerte una experiencia culinaria excepcional.',
  },
  {
    icon: <FaRegStar className="service-icon" />,
    title: 'Atención Personalizada',
    description: 'Nuestro equipo está siempre listo para atender tus necesidades y asegurarse de que disfrutes cada visita.',
  },
  {
    icon: <FaRegSmile className="service-icon" />,
    title: 'Ambiente Agradable',
    description: 'Creamos un espacio cómodo y acogedor donde puedes disfrutar de tu comida con amigos y familia.',
  },
  {
    icon: <FaRegLightbulb className="service-icon" />,
    title: 'Innovación Constante',
    description: 'Siempre estamos buscando nuevas formas de sorprenderte con sabores únicos y promociones especiales.',
  },
  {
    icon: <FaRegHeart className="service-icon" />,
    title: 'Compromiso Social',
    description: 'Apoyamos iniciativas locales y trabajamos para contribuir positivamente a nuestra comunidad.',
  },
  {
    icon: <FaRegThumbsUp className="service-icon" />,
    title: 'Valor por tu Dinero',
    description: 'Ofrecemos precios competitivos sin sacrificar la calidad, para que disfrutes más por menos.',
  },
];

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main className="services-page">
        <section className="services-hero">
          <h1>Servicios Destacados</h1>
          <p>En nuestra cadena de comida rápida, combinamos sabor, rapidez y calidad para brindarte lo mejor.</p>
        </section>

        <section className="services-section">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
