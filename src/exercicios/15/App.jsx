import React, { useState } from 'react';
import ItemList from './ItemList';
import AffinityList from './AffinityList';
import './styles.css';

export default function App() {
  const items = [
    { id: 1, titulo: 'Matrix', categoria: 'Filme' },
    { id: 2, titulo: 'Interstellar', categoria: 'Filme' },
    { id: 3, titulo: 'The Beatles', categoria: 'Música' },
    { id: 4, titulo: 'Nirvana', categoria: 'Música' },
    { id: 5, titulo: 'FIFA 22', categoria: 'Jogo' },
  ];

  const [gostos, setGostos] = useState({});
  const [showAffinity, setShowAffinity] = useState(false);

  const handleFeedback = (id, gosto) => {
    setGostos((prevGostos) => ({
      ...prevGostos,
      [id]: gosto,
    }));
  };

  const calcularAfinidade = () => {
    setShowAffinity(true);
  };

  return (
    <div>
      {!showAffinity ? (
        <>
          <ItemList items={items} handleFeedback={handleFeedback} gostos={gostos} />
          <button onClick={calcularAfinidade}>Ver Afinidades</button>
        </>
      ) : (
        <AffinityList gostos={gostos} />
      )}
    </div>
  );
}
