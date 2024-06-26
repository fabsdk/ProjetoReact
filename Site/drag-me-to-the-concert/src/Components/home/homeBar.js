import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homeBar.css';
import logo from '../imagens/logo.png';

const HomeBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div draggable="false" style={{ fontFamily: 'Roboto', fontWeight: 500 }} className="navbar">
        <img src={logo} draggable="false" alt="logo" />
        <Link draggable="false" className="nav-item" to="/home">Home</Link>
        <Link draggable="false" className="nav-item" to="/suporte">Suporte ao Fã</Link>
        <div className="nav-item profile-item" onClick={() => setShowDropdown(!showDropdown)}>Meu Perfil</div>
        {showDropdown && (
          <div className="profile-dropdown">
            <Link draggable="false" className="dropdown-item" to="/">Sair</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeBar;
