import React from 'react';

export default function TaskList({ tarefas, deleteTask }) {
  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.titulo} - {tarefa.categoria}
            <button onClick={() => deleteTask(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
