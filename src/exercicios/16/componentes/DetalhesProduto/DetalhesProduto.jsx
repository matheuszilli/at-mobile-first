import React from 'react';
import estilos from './DetalhesProduto.module.css';

function DetalhesProduto({ dados }) {
  return (
    <section className={estilos.detalhes}>
      <h2>{dados.nome}</h2>
      <img src={dados.imagem} alt={dados.nome} className={estilos.imagem} />
      <p>{dados.descricao}</p>
      <p className={estilos.preco}>{dados.preco}</p>
      <p className={estilos.nota}>Nota: {dados.nota} / 5</p>
    </section>
  );
}

export default DetalhesProduto;
