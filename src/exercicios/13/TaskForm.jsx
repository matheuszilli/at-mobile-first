import React, { useState } from 'react';

export default function TaskForm({ addTarefa, categorias }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState(categorias[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim() === '') return;

    addTarefa(titulo, categoria);
    setTitulo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder='Nova Tarefa'
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      <button type='submit'>Adicionar</button>
    </form>
  );
}
