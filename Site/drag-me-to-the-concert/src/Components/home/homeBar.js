import React from 'react';
import { Link } from 'react-router-dom';
import './homeBar.css';
import logo from '../imagens/logo.png';


const HomeBar = () => {
  return (
    <>
      <div draggable="false" style={{ fontFamily: 'Roboto', fontWeight: 500 }} className="navbar">
        <img src={logo} draggable="false" alt="logo" />
        <Link draggable="false" className="nav-item" to="/home">Home</Link>
        <Link draggable="false" className="nav-item" to="/suporte">Suporte ao Fã</Link>
        <Link draggable="false" className="nav-item" to="/carrinho">Carrinho</Link>
        <Link draggable="false" className="nav-item" to="/meu-perfil">Meu Perfil</Link>
      </div>
    </>
  );
};



export default HomeBar;
