import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../assets/images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="HappyLogo"/>

        <main>
          <h1>Leve felicidade para o mundo!</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Vitória</strong>
          <span>Espírito Santo</span>
        </div>

        <Link to="/orphanagesMap" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;