import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaSearch, FaBars, FaTimes
} from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left-info">
          <FaMapMarkerAlt />
          <span>Colombia - Bogotá</span>
          <span className="divider">/</span>
          <FaClock />
          <span> L-V 8:00AM - 5:30PM / S-D 7:00AM - 5:30PM / F 9:30AM - 3:30PM</span>
        </div>
        <div className="social-icons">
          <span>Síguenos:</span>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="icon" />
          <div className="text">
            <h2>Frank Furt</h2>
            <small>Comidas Rápidas</small>
          </div>
        </div>

        <ul className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          <li><Link to="/">Inicio</Link></li>

          <li
            className={`has-dropdown ${openDropdown === 'pages' ? 'active' : ''}`}
            onClick={() => toggleDropdown('pages')}
          >
            Páginas
            <ul className="dropdown">
              <li><Link to="/about">Nosotros</Link></li>
              <li>Equipo</li>
              <li>FAQ</li>
            </ul>
          </li>

          <li
            className={`has-dropdown ${openDropdown === 'food' ? 'active' : ''}`}
            onClick={() => toggleDropdown('food')}
          >
            <Link to="/menu">Menú</Link>
            <ul className="dropdown">
              <li>Desayunos</li>
              <li>Almuerzos</li>
              <li>Cenas</li>
            </ul>
          </li>

          <li>Ubicaciones</li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>

        <div className="nav-icons">
          <FaSearch className="icon-search" />
          <Link to="/cart" className="order-btn">Comprar Ahora →</Link>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
