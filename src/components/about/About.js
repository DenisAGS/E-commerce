import React, { useState } from 'react';
import fondoImage from '../../images/Logo.jpeg';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <div className='header-container'>
      <header className='App-header'>
        <div className='icon-container'>
          <img className='icon' src={fondoImage} alt='Icono'></img>
          <a href='/' className='icon-text'>Traveleros</a>
        </div>
      </header>
    </div>
  );
};

export default About;
