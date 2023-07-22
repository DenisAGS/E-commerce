import './Homepage.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Header from '../../components/header/Header';

import imagen1 from './../../images/paisajes/imagen4A.jpeg';
import imagen2 from './../../images/paisajes/imagen5A.jpeg';
import imagen3 from './../../images/paisajes/imagen6A.jpeg';
import imagen4 from './../../images/paisajes/imagen8A.jpeg';
import imagen5 from './../../images/paisajes/imagen11A.jpeg';
import imagen6 from './../../images/paisajes/imagen13A.jpeg';

import React, { useState, useEffect } from 'react';

import icon1 from './../../images/senderismo.png';
import icon2 from './../../images/guia.png';
import icon3 from './../../images/asesorar.png';
import icon4 from './../../images/ruta.jpeg';

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div >
      <Header />
      <body>
        <div className='first-content'>
          <h2 className='leyenda'>LAS MEJORES EXPERIENCIAS EMPIEZAN CON UN BUEN CAFE</h2>
          <a className='sub-leyenda'>Travesías mágicas para almas viajeras</a>
        </div>

        <div className='style-sub-texto'>
          <div className='style-fecha-texto'>
            <h2>EL CORAZON DEL CAFE, TESORO NATURAL</h2>
            <h4>SABADO 20 DE MAYO 2022</h4>
            <span>Pase de un dia saliendo desde CDMX con <strong>Tour sin Limites</strong></span>
            <p>Viaje en transporte ejecutivo + Acceso a Los Manantiales Balneario Natural</p>
          </div>
          <div className='style-precio-texto'>
            <span> Costo por Adulto <strong>$850</strong></span>
            <span> NIÑO MENOR DE 10 AÑOS <strong>$750</strong></span>
          </div>
        </div>

        <div class="container">
          <div className="image-container">
            {images.map((image, index) => (
              <img key={index}
                src={image}
                alt={`Imagen ${index + 1}`}
                style={{ opacity: index === currentImageIndex ? 1 : 0 }}
              />
            ))}
          </div>
          <div class="text-container">
            <div>
              <h2>DETALLES DEL TOUR</h2>
              <h4> VISITA A LOS MANANTIALES BALNEARIO NATURAL</h4>
              <ul>
                <li>
                  Acceso a Los Manantiales Balneario Natural
                </li>
                <li>
                  Visita al nacimiento de agua hipotermal
                </li>
                <li>
                  Nado en las albercas y chapoteaderos
                </li>
                <li>
                  Visita a las Cascadas Naturales
                </li>
                <li>
                  Avistamiento de aves y fauna natural
                </li>
              </ul>
              <h4>SALIDA 6:00AM / REGRESO 10:00PM</h4>
              <ul>
                <li>
                  Metro Mixcoac
                </li>
                <li>
                  Metro Chabacano
                </li>
              </ul>
              <h4>GARANTIA TOUR SIN LIMITES</h4>
              <ul>
                <li>
                  Transporte turistico
                </li>
                <li>
                  Chofer con licencia federal
                </li>
                <li>
                  Seguro de viajero a bordo de la unidad
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='info-turismo'>
          <div className='general'>
            <h4>INFORMACION GENERAL</h4>
            <h5>ALTAS MONTAÑAS</h5>
            <p>El municipio de Córdoba, Veracruz participa fuertemente en el Producto Bruto Nacional (PBI). Gran parte de esta participación, es aportada por las industrias automotriz, tecnológica y metal-mecánica localizadas en su mayoría en el departamento Capital.
              Asimismo, actividades económicas como el turismo, la producción agrícola y ganadera y sus industrias derivadas, como así también las artesanías, se constituyen en importantes pilares de la economía cordobesa.</p>
          </div>
          <div className='servicios'>
            <h4>SERVICIOS</h4>
            <h5>EMPRESA NUEVA EN FORMACION DENTRO DE LA ACTIVIDAD TURISTICA </h5>
            <ul>
              <li>Guia capacitado
              </li>
              <li>Atencion médica
              </li>
              <li>Servicio de transporte
              </li>
              <li>Box lonch
              </li>
              <li>Taller de torito
              </li>
              <li>Atencion directa
              </li>
              <li>Áreas verdes
              </li>
            </ul>
          </div>
        </div>

        <div className='atencion'>
          <h1>SACA EL MAXIMO PROVECHO DE NUESTROS TOURS</h1>
          <div class="circles-container">
            <div class="circle">
              <div class="circle-image">
                <img src={icon1} alt="Excursiones" />
              </div>
              <span>Excursiones locales</span>
              <p className='texto-circulo'>
                Con diferentes opciones de destinos a visitar dentro de la región de las altas montañas.
              </p>
            </div>
            <div class="circle">
              <div class="circle-image">
                <img src={icon2} alt="Guia" />
              </div>
              <span>Guías turístico profesional</span>
              <p className='texto-circulo'>
                Acompañamiento durante el recorrido con guías locales y profesionales capacitados.
              </p>
            </div>
            <div class="circle">
              <div class="circle-image">
                <img src={icon3} alt="Asesoramiento" />
              </div>
              <span>Asesoramiento profesional</span>
              <p className='texto-circulo'>
                Antes, durante y después de la contratación de cualquier servicio
              </p>
            </div>
          </div>
        </div>

        <div className='socios'>
          <h1>SOCIOS COMERCIALES</h1>
          <div>
            <a>
              <img src={icon4} alt="Socio" className="socios-img" />
            </a>
          </div>
        </div>
      </body>
      <footer className="footer-container">
        <div className='footer-content-left'>
        <a className='icon-img' href="https://www.facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a className='icon-img' href="https://www.twitter.com/tu-pagina" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a className='icon-img' href="https://www.instagram.com/tu-pagina" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <div className="contact-info">
          <a>Contacto</a>
        </div>
        </div>
        <div className="rights-reserved">© 2023 Todos los derechos reservados</div>
      </footer>
    </div>
  );
}
export default Homepage;
