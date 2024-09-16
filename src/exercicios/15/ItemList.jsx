import React from 'react';

export default function ItemList({ items, handleFeedback, gostos }) {
  return (
    <div>
      <h2>Selecione se você gosta ou não dos itens:</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.titulo} ({item.categoria})
          </p>
          <button onClick={() => handleFeedback(item.id, 'gosto')}>Gosto</button>
          <button onClick={() => handleFeedback(item.id, 'naoGosto')}>Não Gosto</button>
        </div>
      ))}
    </div>
  );
}
