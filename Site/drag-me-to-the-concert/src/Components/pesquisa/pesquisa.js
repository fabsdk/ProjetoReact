import React, { useState, useEffect } from 'react';
import Resultado from './resultado';
import './pesquisa.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const buscarEventosPadrao = async () => {
      try {
        const response = await fetch('http://localhost:8080/eventos');
        const data = await response.json();
        setEventos(data);
      } catch (error) {
        console.error('Erro ao buscar eventos padrão:', error);
      }
    };

    buscarEventosPadrao();
  }, []); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      try {
        const response = await fetch(`http://localhost:8080/buscarEventosPorArtista/${searchTerm}`);
        const data = await response.json();
        setEventos(data);
      } catch (error) {
        console.error('Erro ao buscar eventos por artista:', error);
      }
    }
    else {
      const response = await fetch('http://localhost:8080/eventos');
      const data = await response.json();
      setEventos(data);
    }
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit} style={{ fontFamily: 'Roboto', fontWeight: 500 }}>
        <input
          type="text"
          placeholder="Digite o nome do artista para pesquisar..."
          style={{ fontSize : "20px"}}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" style={{ fontFamily: 'Roboto', fontWeight: 500 }} className="search-button">
          <i className="fas fa-search"></i> {/* Ícone de lupa */}
          Pesquisar
        </button>
      </form>
      <Resultado eventos={eventos} />
    </div>
  );
};

export default SearchBar;
