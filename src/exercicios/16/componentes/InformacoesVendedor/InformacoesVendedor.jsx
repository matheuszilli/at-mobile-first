import React from 'react';
import estilos from './InformacoesVendedor.module.css';

function InformacoesVendedor({ dados }) {
  return (
    <section className={estilos.vendedor}>
      <h3>Informações do Vendedor</h3>
      <p><strong>Nome:</strong> {dados.nome}</p>
      <p><strong>Email:</strong> {dados.email}</p>
      <p><strong>Telefone:</strong> {dados.telefone}</p>
      <p className={estilos.nota}>Nota: {dados.nota} / 5</p>
    </section>
  );
}

export default InformacoesVendedor;
