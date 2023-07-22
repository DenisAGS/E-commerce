import React, { useState } from 'react';
import fondoImage from '../../images/Logo.jpeg';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header-container'>
      <header className='App-header'>
        <div className='icon-container'>
          <img className='icon' src={fondoImage} alt='Icono'></img>
          <a href='/' className='icon-text'>Traveleros</a>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="../about/About">Quienes somos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>

        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='menu-line' />
          <div className='menu-line' />
          <div className='menu-line' />
        </div>

      </header>
    </div>
  );
};

export default Header;
