// Home.js
import React from 'react';
import './home.css'; // Importe seu arquivo CSS para estilização
import HomeBar from './homeBar';

const HomePage = () => {
  return (
    <>
        <div className="home-container">
        <h1>Bem-vindo(a) ao Nosso Site!</h1>
        <p>Explore e descubra mais.</p>
        </div>
    </>
  );
};

export default HomePage;
