import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaBars, FaTimes, FaUser, FaShoppingCart, FaPhone
} from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setUserMenuOpen(false);
  };

  const getMenuLink = (section) => {
    return location.pathname === '/menu' ? `#${section}` : `/menu#${section}`;
  };

  return (
    <header className="header">
      {/* Contact Bar */}
      <div className="contact-bar">
        <div className="container">
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Bogotá, Colombia</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+57 (1) 234-5678</span>
            </div>
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <span>L-V: 8:00AM-5:30PM | S-D: 7:00AM-5:30PM</span>
            </div>
          </div>
          <div className="social-links">
            <span className="social-text">Síguenos:</span>
            <div className="social-icons">
              <a href="#" className="social-link"><FaFacebookF /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaLinkedinIn /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            {/* Logo Section */}
            <div className="brand">
              <div className="logo-container">
                <div className="crown-icon">
                  <div className="crown-shape"></div>
                </div>
                <div className="brand-text">
                  <h1 className="brand-name">FRANK FURT</h1>
                  <span className="brand-subtitle">Comidas Rápidas</span>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className={`nav-wrapper ${mobileOpen ? 'nav-open' : ''}`}>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={handleLinkClick}>
                    Inicio
                  </Link>
                </li>
                
                <li 
                  className={`nav-item dropdown ${openDropdown === 'pages' ? 'active' : ''}`}
                  onMouseEnter={() => setOpenDropdown('pages')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span className="nav-link">Páginas</span>
                  <ul className="dropdown-menu">
                    <li><Link to="/about" onClick={handleLinkClick}>Nosotros</Link></li>
                    <li><Link to="/equipo" onClick={handleLinkClick}>Equipo</Link></li>
                    <li><Link to="/servicios" onClick={handleLinkClick}>Servicios</Link></li>
                  </ul>
                </li>

                <li 
                  className={`nav-item dropdown ${openDropdown === 'menu' ? 'active' : ''}`}
                  onMouseEnter={() => setOpenDropdown('menu')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/menu" className="nav-link" onClick={handleLinkClick}>
                    Menú
                  </Link>
                  <ul className="dropdown-menu">
                    <li><a href={getMenuLink('entradas')} onClick={handleLinkClick}>Entradas</a></li>
                    <li><a href={getMenuLink('platosprincipales')} onClick={handleLinkClick}>Platos Principales</a></li>
                    <li><a href={getMenuLink('postres')} onClick={handleLinkClick}>Postres</a></li>
                    <li><a href={getMenuLink('bebidas')} onClick={handleLinkClick}>Bebidas</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/ubicaciones" className="nav-link" onClick={handleLinkClick}>
                    Ubicaciones
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="nav-actions">
              <div 
                className={`user-menu ${userMenuOpen ? 'active' : ''}`}
                onMouseEnter={() => setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <button className="user-btn">
                  <FaUser />
                </button>
                <div className="user-dropdown">
                  <Link to="/login" onClick={handleLinkClick}>Iniciar Sesión</Link>
                  <Link to="/register" onClick={handleLinkClick}>Registrarse</Link>
                </div>
              </div>

              <Link to="/cart" className="cart-btn">
                <FaShoppingCart />
                <span className="cart-count">0</span>
              </Link>

              <Link to="/order" className="cta-btn">
                Pedir Ahora
              </Link>

              <button 
                className="mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-header">
              <h3>Menú</h3>
              <button onClick={() => setMobileOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <ul className="mobile-nav">
              <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>Nosotros</Link></li>
              <li><Link to="/equipo" onClick={handleLinkClick}>Equipo</Link></li>
              <li><Link to="/servicios" onClick={handleLinkClick}>Servicios</Link></li>
              <li><Link to="/menu" onClick={handleLinkClick}>Menú</Link></li>
              <li><Link to="/Ubications" onClick={handleLinkClick}>Ubications</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick}>Contacto</Link></li>
            </ul>
            <div className="mobile-actions">
              <Link to="/login" className="mobile-btn" onClick={handleLinkClick}>
                Iniciar Sesión
              </Link>
              <Link to="/order" className="mobile-btn primary" onClick={handleLinkClick}>
                Pedir Ahora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;