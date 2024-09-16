import React, { useState } from 'react';
import TaskList from './TaskList';
import CategorySelector from './CategorySelector';
import TaskForm from './TaskForm';
import './styles.css';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Comprar pão', categoria: 'Mercado' },
    { id: 2, titulo: 'Comprar remédio', categoria: 'Farmácia' },
    { id: 3, titulo: 'Estudar React', categoria: 'Estudos' },
  ]);
  
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Mercado');
  const [tema, setTema] = useState('light');

  const categorias = ['Mercado', 'Farmácia', 'Estudos'];

  const addTarefa = (titulo, categoria) => {
    const novaTarefa = {
      id: tarefas.length + 1,
      titulo,
      categoria,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const deleteTask = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const filtrarTarefasPorCategoria = () => {
    return tarefas.filter((tarefa) => tarefa.categoria === categoriaSelecionada);
  };

  const alternarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={tema}>
      <button onClick={alternarTema}>
        Alternar para tema {tema === 'light' ? 'dark' : 'light'}
      </button>
      
      <CategorySelector 
        categorias={categorias} 
        setCategoriaSelecionada={setCategoriaSelecionada}
      />

      <TaskList 
        tarefas={filtrarTarefasPorCategoria()} 
        deleteTask={deleteTask} 
      />

      <TaskForm addTarefa={addTarefa} categorias={categorias} />
    </div>
  );
}
