import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import logo from '../imagens/logo.png';


const MenuBar = () => {
  return (
    <>
      <div draggable="false" style={{ fontFamily: 'Roboto', fontWeight: 500 }} className="navbar">
        <img src={logo} draggable="false" alt="logo" />
        <Link draggable="false" className="nav-item" to="/">Home</Link>
        <Link draggable="false" className="nav-item" to="/suporte">Suporte ao Fã</Link>
        <Link draggable="false" className="nav-item" to="/login">Login / Cadastre-se</Link>
      </div>
    </>
  );
};



export default MenuBar;
