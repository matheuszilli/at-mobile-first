// src/App.jsx
import React from 'react';
import estilos from './App.module.css';
import Cabecalho from './components/Cabecalho/Cabecalho';
import MenuGlobal from './components/MenuGlobal/MenuGlobal';
import MenuContextualizado from './components/MenuContextualizado/MenuContextualizado';
import ConteudoPrincipal from './components/ConteudoPrincipal/ConteudoPrincipal';
import AreaAnuncio from './components/AreaAnuncio/AreaAnuncio';
import Rodape from './components/Rodape/Rodape';

function App() {
  return (
    <div className={estilos.app}>
      <Cabecalho />
      <MenuGlobal />
      <div className={estilos.container}>
        <MenuContextualizado />
        <ConteudoPrincipal />
        <AreaAnuncio />
      </div>
      <Rodape />
    </div>
  );
}

export default App;
