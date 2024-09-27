import React from 'react';
import estilos from './Comentarios.module.css';

function Comentarios({ comentarios }) {
  return (
    <section className={estilos.comentarios}>
      <h3>Comentários</h3>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id} className={estilos.comentario}>
            <p><strong>{comentario.usuario}</strong> - {comentario.dataPublicacao}</p>
            <p>{comentario.mensagem}</p>
            <p className={estilos.nota}>Nota: {comentario.nota} / 5</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Comentarios;
