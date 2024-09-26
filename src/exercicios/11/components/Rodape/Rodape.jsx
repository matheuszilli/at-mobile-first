import React from 'react';
import estilos from './Rodape.module.css';

const Rodape = () => {
  return (
    <footer className={estilos.rodape}>
      <p>&copy; 2024 Minha Aplicação. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Rodape;
