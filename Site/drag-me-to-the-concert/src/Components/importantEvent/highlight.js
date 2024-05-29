import React from 'react';
import oneDirection from '../imagens/oneDirection.png'; // Substitua 'highlight.png' pelo nome do seu arquivo de imagem
import './highlight.css';

const Highlight = () => {
  return (
    <>
      <img src={oneDirection} draggable="false" alt="Destaque" className="oneDirection" />
    </>
  );
};



export default Highlight;
