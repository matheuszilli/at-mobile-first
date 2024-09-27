import React from 'react';
import estilos from './ListaRespostas.module.css';

function ListaRespostas({ respostas }) {
  return (
    <section className={estilos.lista}>
      <h3>Respostas</h3>
      <ul>
        {respostas.map(resposta => (
          <li key={resposta.id} className={estilos.item}>
            <p>{resposta.resposta}</p>
            <div className={estilos.informacoes}>
              <span>Autor: {resposta.autor}</span>
              <span>Data: {resposta.data}</span>
              <span>Curtidas: {resposta.curtidas}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListaRespostas;
