import React from 'react';
import estilos from './ProdutosRelacionados.module.css';
import ProdutoRelacionado from '../ProdutoRelacionado/ProdutoRelacionado';

function ProdutosRelacionados({ produtos }) {
  return (
    <section className={estilos.relacionados}>
      <h3>Produtos Relacionados</h3>
      <div className={estilos.lista}>
        {produtos.map((produto) => (
          <ProdutoRelacionado key={produto.id} dados={produto} />
        ))}
      </div>
    </section>
  );
}

export default ProdutosRelacionados;
