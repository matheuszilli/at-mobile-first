import React, { useState } from 'react';
import estilos from './MenuContextualizado.module.css';

const MenuContextualizado = () => {
  const [opcoesVisiveis, setOpcoesVisiveis] = useState(false);

  const alternarOpcoes = () => {
    setOpcoesVisiveis(!opcoesVisiveis);
  };

  return (
    <div className={estilos.menuContextualizado}>
      <button
        className={estilos.botaoContextualizado}
        onClick={alternarOpcoes}
        aria-label="Alternar opções"
      >
        Opções ▼
      </button>
      {opcoesVisiveis && (
        <ul className={estilos.listaOpcoes}>
          <li className={estilos.opcao}>Perfil</li>
          <li className={estilos.opcao}>Configurações</li>
          <li className={estilos.opcao}>Ajuda</li>
        </ul>
      )}
    </div>
  );
};

export default MenuContextualizado;
