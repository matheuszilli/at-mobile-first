// src/App.js
import React from 'react';
import estilos from './App.module.css';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import MenuPrincipal from './componentes/MenuPrincipal/MenuPrincipal';
import DetalhesProduto from './componentes/DetalhesProduto/DetalhesProduto';
import InformacoesVendedor from './componentes/InformacoesVendedor/InformacoesVendedor';
import Comentarios from './componentes/Comentarios/Comentarios';
import Perguntas from './componentes/Perguntas/Perguntas';
import ProdutosRelacionados from './componentes/ProdutosRelacionados/ProdutosRelacionados';

function App() {
  const produto = {
    nome: 'Smartphone Iphone 16',
    imagem: 'https://via.placeholder.com/600x400',
    descricao: 'Um smartphone de última geração com todas as funcionalidades que você precisa.',
    preco: 'R$ 12.499,00',
    nota: 4.5,
  };

  const vendedor = {
    nome: 'Apple',
    email: 'matheus@apple.com',
    telefone: '(11) 99999-9999',
    nota: 4.8,
  };

  const comentarios = [
    {
      id: 1,
      usuario: 'João Silva',
      dataPublicacao: '2024-04-20',
      mensagem: 'Produto excelente, superou minhas expectativas!',
      nota: 5,
    },
    {
      id: 2,
      usuario: 'Maria Souza',
      dataPublicacao: '2024-04-22',
      mensagem: 'Muito bom, mas a bateria poderia durar mais.',
      nota: 4,
    },
    {
      id: 2,
      usuario: 'Apple Fa',
      dataPublicacao: '2024-04-22',
      mensagem: 'Tela Sensivel, mas produto incrível',
      nota: 4,
    },
  ];

  const perguntas = [
    {
      id: 1,
      usuario: 'Carlos Pereira',
      dataPublicacao: '2024-04-21',
      duvida: 'O smartphone possui suporte para 5G?',
      resposta: 'Sim, o Iphone 16 suporta redes 5G.',
    },
    {
      id: 2,
      usuario: 'Fernanda Lima',
      dataPublicacao: '2024-04-23',
      duvida: 'Qual a capacidade de armazenamento?',
      resposta: 'Ele vem com 128GB de armazenamento.',
    },
    {
      id: 2,
      usuario: 'Fernanda Lima',
      dataPublicacao: '2024-04-23',
      duvida: 'Tem desconto no PIX?',
      resposta: 'Não possui desconto no PIX.',
    },
  ];

  const produtosRelacionados = [
    {
      id: 1,
      nome: 'Fone de Ouvido Bluetooth',
      imagem: 'https://via.placeholder.com/300x200',
      preco: 'R$ 299,00',
    },
    {
      id: 2,
      nome: 'Smartwatch ABC',
      imagem: 'https://via.placeholder.com/300x200',
      preco: 'R$ 899,00',
    },
    {
      id: 3,
      nome: 'Carregador Rápido',
      imagem: 'https://via.placeholder.com/300x200',
      preco: 'R$ 99,00',
    },
  ];

  return (
    <div className={estilos.container}>
      <Cabecalho />
      <MenuPrincipal />
      <main className={estilos.conteudo}>
        <DetalhesProduto dados={produto} />
        <InformacoesVendedor dados={vendedor} />
        <Comentarios comentarios={comentarios} />
        <Perguntas perguntas={perguntas} />
        <ProdutosRelacionados produtos={produtosRelacionados} />
      </main>
    </div>
  );
}

export default App;
