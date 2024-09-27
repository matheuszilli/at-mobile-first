import React from 'react';
import estilos from './TopicoPrincipal.module.css';

function TopicoPrincipal({ dados }) {
  return (
    <section className={estilos.topico}>
      <h1 className={estilos.titulo}>{dados.titulo}</h1>
      <h2 className={estilos.subtitulo}>{dados.subtitulo}</h2>
      <p className={estilos.descricao}>{dados.descricao}</p>
      <div className={estilos.informacoes}>
        <span>Autor: {dados.autor}</span>
        <span>Data: {dados.dataPublicacao}</span>
        <span>Curtidas: {dados.curtidas}</span>
        <span>Respostas: {dados.respostas}</span>
      </div>
    </section>
  );
}

export default TopicoPrincipal;
