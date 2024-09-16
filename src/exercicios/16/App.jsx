import React, { useState } from 'react';
import TouristSpotList from './TouristSpotList';
import SelectedSpots from './SelectedSpots';
import './styles.css';

export default function App() {
  const spots = [
    {
      id: 1,
      nome: 'Cristo Redentor - RJ',
      valor: 50,
      info: 'Um dos maiores símbolos do Brasil, localizado no Rio de Janeiro.',
      transporte: 'Ônibus, Táxi, Uber',
    },
    {
      id: 2,
      nome: 'Praia de Copacabana - RJ',
      valor: 10,
      info: 'Uma das praias mais famosas do mundo.',
      transporte: 'Ônibus, Metrô, Táxi, Uber',
    },
    {
      id: 3,
      nome: 'Ponte Estaiada - SP',
      valor: 0,
      info: 'Referência em arquitetura e engenharia.',
      transporte: 'Ônibus, Metrô, Táxi, Uber',
    },
  ];

  const [selecionados, setSelecionados] = useState([]);
  const [tema, setTema] = useState('light');

  const adicionarSelecionado = (spot, quantidade) => {
    const novoSelecionado = { ...spot, quantidade };
    setSelecionados([...selecionados, novoSelecionado]);
  };

  const alternarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={tema}>
      <button onClick={alternarTema}>
        Alternar para tema {tema === 'light' ? 'dark' : 'light'}
      </button>
      
      <TouristSpotList spots={spots} adicionarSelecionado={adicionarSelecionado} />
      <SelectedSpots selecionados={selecionados} />
    </div>
  );
}
