import React from 'react';
import estilos from './RelacaoTopico.module.css';

function RelacaoTopicos({ recentes, respondidos, curtidos }) {
  return (
    <div className={estilos.relacao}>
      <section>
        <h4>5 Tópicos Recentes</h4>
        <ul>
          {recentes.map((topico, index) => (
            <li key={index}>{topico.titulo}</li>
          ))}
        </ul>
      </section>
      <section>
        <h4>5 Tópicos Mais Respondidos</h4>
        <ul>
          {respondidos.map((topico, index) => (
            <li key={index}>{topico.titulo}</li>
          ))}
        </ul>
      </section>
      <section>
        <h4>5 Tópicos Mais Curtidos</h4>
        <ul>
          {curtidos.map((topico, index) => (
            <li key={index}>{topico.titulo}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default RelacaoTopicos;
