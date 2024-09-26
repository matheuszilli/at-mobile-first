import React from 'react';
import estilos from './Cabecalho.module.css';

const Cabecalho = () => {
  return (
    <header className={estilos.cabecalho}>
      <h1>Bem-vindo à Minha Aplicação</h1>
    </header>
  );
};

export default Cabecalho;
