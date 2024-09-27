import React, { useState } from 'react';
import estilos from './MenuPrincipal.module.css';

function MenuPrincipal() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const opcoes = ['Início', 'Categorias', 'Tópicos', 'Usuários', 'Sobre'];

  return (
    <nav className={estilos.menu}>
      <div className={estilos.logo}>Fórum</div>
      <ul className={`${estilos.opcoes} ${menuAberto ? estilos.aberto : ''}`}>
        {opcoes.map((opcao, index) => (
          <li key={index}>{opcao}</li>
        ))}
      </ul>
      <div className={estilos.hamburguer} onClick={alternarMenu}>
        ☰
      </div>
    </nav>
  );
}

export default MenuPrincipal;
