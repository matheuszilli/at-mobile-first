import React from 'react';
import estilos from './Perguntas.module.css';

function Perguntas({ perguntas }) {
  return (
    <section className={estilos.perguntas}>
      <h3>Perguntas</h3>
      <ul>
        {perguntas.map((pergunta) => (
          <li key={pergunta.id} className={estilos.pergunta}>
            <p><strong>{pergunta.usuario}</strong> - {pergunta.dataPublicacao}</p>
            <p><strong>Dúvida:</strong> {pergunta.duvida}</p>
            <p><strong>Resposta:</strong> {pergunta.resposta}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Perguntas;
