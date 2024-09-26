import React, { useState, useEffect } from 'react';
import './MenuResponsivo.css';

const MenuResponsivo = () => {
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
    <nav className="menu-responsivo">
      <div className="menu-superior">
        {larguraTela <= larguraLimite && (
          <button
            className="botao-menu"
            onClick={alternarMenu}
            aria-label="Alternar menu"
          >
            ☰
          </button>
        )}
        <div className="marca-plataforma">MinhaPlataforma</div>
        {larguraTela <= larguraLimite && (
          <button
            className="botao-perfil"
            aria-label="Gerenciar perfil"
          >
            👤
          </button>
        )}
      </div>
      {(menuExpandido || larguraTela > larguraLimite) && (
        <ul className="lista-menu">
          <li className="item-menu">Início</li>
          <li className="item-menu">Sobre</li>
          <li className="item-menu">Serviços</li>
          <li className="item-menu">Contato</li>
        </ul>
      )}
    </nav>
  );
};

export default MenuResponsivo;
