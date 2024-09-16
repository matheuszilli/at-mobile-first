import React from 'react';

export default function SelectedSpots({ selecionados }) {
  const calcularTotal = () => {
    return selecionados.reduce((total, spot) => total + spot.valor * spot.quantidade, 0);
  };

  return (
    <div>
      <h2>Pontos Selecionados para Visitar</h2>
      <ul>
        {selecionados.map((spot, index) => (
          <li key={index}>
            {spot.nome} - {spot.quantidade} pessoa(s) - R$ {spot.valor * spot.quantidade}
          </li>
        ))}
      </ul>
      <h3>Total: R$ {calcularTotal()}</h3>
    </div>
  );
}
