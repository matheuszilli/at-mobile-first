import React, { useState } from "react";
import "./App.css"; 

const MenuExpansivel = () => {
  const [expandido, setExpandido] = useState(false);

  const alternarMenu = () => {
    setExpandido(!expandido);
  };

  return (
    <div className="menu-container">
      <div className="cabecalho-menu">
        <button className="botao-menu" onClick={alternarMenu}>
          ☰
        </button>
        <h1 className="marca">Brand</h1>
        <div className="icone-perfil">👤</div>
      </div>
      {expandido && (
        <div className="opcoes-container">
          <div className="opcao-menu">Opção 1</div>
          <div className="opcao-menu">Opção 2</div>
          <div className="opcao-menu">Opção 3</div>
          <div className="opcao-menu">Opção 4</div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div>
      <MenuExpansivel />
    </div>
  );
}

export default App;
