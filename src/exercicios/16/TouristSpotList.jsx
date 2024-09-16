import React, { useState } from 'react';

export default function TouristSpotList({ spots, adicionarSelecionado }) {
  const [spotSelecionado, setSpotSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(1);

  return (
    <div>
      <h2>Lista de Pontos Turísticos</h2>
      {spots.map((spot) => (
        <div key={spot.id}>
          <h3>{spot.nome}</h3>
          <button onClick={() => setSpotSelecionado(spot)}>Ver Detalhes</button>
          {spotSelecionado && spotSelecionado.id === spot.id && (
            <div>
              <p><strong>Valor:</strong> R$ {spot.valor}</p>
              <p><strong>Informações:</strong> {spot.info}</p>
              <p><strong>Meios de Transporte:</strong> {spot.transporte}</p>
              <label>
                Quantidade de pessoas:
                <input 
                  type="number" 
                  min="1" 
                  value={quantidade} 
                  onChange={(e) => setQuantidade(Number(e.target.value))}
                />
              </label>
              <button onClick={() => adicionarSelecionado(spot, quantidade)}>
                Adicionar à lista de visitas
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
