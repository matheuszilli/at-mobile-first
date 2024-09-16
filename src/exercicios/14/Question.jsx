import React, { useState } from 'react';

export default function Question({ question, handleSubmit }) {
  const [respostaEscolhida, setRespostaEscolhida] = useState('');

  const handleAnswerChange = (e) => {
    setRespostaEscolhida(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(respostaEscolhida);
    setRespostaEscolhida(''); 
  };

  return (
    <div>
      <h3>{question.enunciado}</h3>
      <form onSubmit={handleFormSubmit}>
        {question.opcoes.map((opcao, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={opcao}
                checked={respostaEscolhida === opcao}
                onChange={handleAnswerChange}
              />
              {opcao}
            </label>
          </div>
        ))}
        <button type="submit" disabled={!respostaEscolhida}>
          Enviar Resposta
        </button>
      </form>
    </div>
  );
}
