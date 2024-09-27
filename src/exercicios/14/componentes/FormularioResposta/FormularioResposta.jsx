import React, { useState } from 'react';
import estilos from './FormularioResposta.module.css';

function FormularioResposta({ adicionarResposta, usuarioAutenticado }) {
  const [texto, setTexto] = useState('');

  const enviarResposta = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;
    adicionarResposta({ resposta: texto, autor: usuarioAutenticado, data: new Date().toISOString().split('T')[0] });
    setTexto('');
  };

  return (
    <section className={estilos.formulario}>
      <h3>Enviar Resposta</h3>
      <form onSubmit={enviarResposta}>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite sua resposta aqui..."
          className={estilos.textarea}
        ></textarea>
        <div className={estilos.rodape}>
          <span>Usuário: {usuarioAutenticado}</span>
          <button type="submit" className={estilos.botao}>Enviar</button>
        </div>
      </form>
    </section>
  );
}

export default FormularioResposta;
