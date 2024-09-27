import React, { useState } from 'react';
import estilos from './MenuPrincipal.module.css';

function MenuPrincipal() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className={estilos.menu}>
      <button className={estilos.botaoMenu} onClick={alternarMenu}>
        ☰
      </button>
      <ul className={`${estilos.lista} ${menuAberto ? estilos.aberto : ''}`}>
        <li>Início</li>
        <li>Produtos</li>
        <li>Sobre</li>
        <li>Contato</li>
        <li>Ajuda</li>
      </ul>
    </nav>
  );
}

export default MenuPrincipal;
