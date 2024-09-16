import React from 'react';

export default function CategorySelector({ categorias, setCategoriaSelecionada }) {
  return (
    <div>
      <h3>Selecione a Categoria:</h3>
      <select onChange={(e) => setCategoriaSelecionada(e.target.value)}>
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
}
