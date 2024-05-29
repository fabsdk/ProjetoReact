import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './suporteBar.css';
import logo from '../imagens/logo.png';

const HomeBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div draggable="false" style={{ fontFamily: 'Roboto', fontWeight: 500 }} className="navbar">
        <img src={logo} draggable="false" alt="logo" />
        <Link draggable="false" className="nav-item" to="/">Home</Link>
        <Link draggable="false" className="nav-item" to="/suporte">Suporte ao Fã</Link>
      </div>
    </>
  );
};

export default HomeBar;
