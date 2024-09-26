import React from 'react';
import estilos from './ConteudoPrincipal.module.css';

const ConteudoPrincipal = () => {
  return (
    <main className={estilos.conteudoPrincipal}>
      <h2>Conteúdo Principal</h2>
      <p>
        Este é o conteúdo principal da aplicação. Aqui você pode adicionar textos, imagens, vídeos e outros elementos que compõem a informação central da página.
      </p>
    </main>
  );
};

export default ConteudoPrincipal;
