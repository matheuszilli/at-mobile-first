import React, { useState, useEffect } from 'react';
import estilos from './MenuGlobal.module.css';

const MenuGlobal = () => {
  const [menuExpandido, setMenuExpandido] = useState(false);
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);
  const larguraLimite = 768;

  const lidarComRedimensionamento = () => {
    setLarguraTela(window.innerWidth);
    if (window.innerWidth > larguraLimite) {
      setMenuExpandido(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', lidarComRedimensionamento);
    return () => window.removeEventListener('resize', lidarComRedimensionamento);
  }, []);

  const alternarMenu = () => {
    setMenuExpandido(!menuExpandido);
  };

  return (
    <nav className={estilos.menuGlobal}>
      <div className={estilos.menuSuperior}>
        {larguraTela <= larguraLimite && (
          <button
            className={estilos.botaoMenu}
            onClick={alternarMenu}
            aria-label="Alternar menu"
          >
            ☰
          </button>
        )}
        <div className={estilos.marcaPlataforma}>MinhaPlataforma</div>
        {larguraTela <= larguraLimite && (
          <button
            className={estilos.botaoPerfil}
            aria-label="Gerenciar perfil"
          >
            👤
          </button>
        )}
      </div>
      {(menuExpandido || larguraTela > larguraLimite) && (
        <ul className={estilos.listaMenu}>
          <li className={estilos.itemMenu}>Início</li>
          <li className={estilos.itemMenu}>Sobre</li>
          <li className={estilos.itemMenu}>Serviços</li>
          <li className={estilos.itemMenu}>Contato</li>
        </ul>
      )}
    </nav>
  );
};

export default MenuGlobal;
