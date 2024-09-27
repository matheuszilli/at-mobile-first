import React from 'react';
import estilos from './ProdutoRelacionado.module.css';

function ProdutoRelacionado({ dados }) {
  return (
    <div className={estilos.produto}>
      <img src={dados.imagem} alt={dados.nome} className={estilos.imagem} />
      <h4>{dados.nome}</h4>
      <p className={estilos.preco}>{dados.preco}</p>
    </div>
  );
}

export default ProdutoRelacionado;
