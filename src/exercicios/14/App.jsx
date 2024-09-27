import React, { useState } from 'react';
import MenuPrincipal from './componentes/MenuPrincipal/MenuPrincipal';
import TopicoPrincipal from './componentes/TopicoPrincipal/TopicoPrincipal';
import ListaRespostas from './componentes/ListaRespostas/ListaRespostas';
import FormularioResposta from './componentes/FormularioResposta/FormularioResposta';
import RelacaoTopicos from './componentes/RelacaoTopico/RelacaoTopico';
import estilos from './App.module.css';

function App() {
  const [respostas, setRespostas] = useState([
    {
      id: 1,
      resposta: 'Concordo com o professor Tiago',
      autor: 'Maria',
      data: '2024-04-20',
      curtidas: 10
    },
    {
      id: 2,
      resposta: 'Gostaria de saber mais sobre react',
      autor: 'João',
      data: '2024-04-21',
      curtidas: 5
    },
    {
      id: 3,
      resposta: 'QUE AT DIFICIL',
      autor: 'Ana',
      data: '2024-04-22',
      curtidas: 8
    },
    {
      id: 4,
      resposta: 'Gooool do São Paulo',
      autor: 'Carlos',
      data: '2024-04-23',
      curtidas: 3
    },
    {
      id: 5,
      resposta: 'Falta tempo para estudar',
      autor: 'Fernanda',
      data: '2024-04-24',
      curtidas: 7
    },
  ]);

  const topico = {
    titulo: 'Discussão sobre React',
    subtitulo: 'Melhores práticas e padrões',
    descricao: 'Aqui fica livre para que qualquer um traga pontos sobre React',
    autor: 'Professor Tiago',
    dataPublicacao: '2024-04-18',
    curtidas: 25,
    respostas: respostas.length
  };

  const topicosRecentes = [
  ];

  const topicosRespondidos = [
  ];

  const topicosCurtidos = [
  ];

  const adicionarResposta = (novaResposta) => {
    setRespostas([...respostas, { id: respostas.length + 1, ...novaResposta, curtidas: 0 }]);
  };

  return (
    <div className={estilos.container}>
      <MenuPrincipal />
      <main className={estilos.principal}>
        <TopicoPrincipal dados={topico} />
        <ListaRespostas respostas={respostas} />
        <FormularioResposta adicionarResposta={adicionarResposta} usuarioAutenticado="Você" />
      </main>
      <aside className={estilos.lateral}>
        <RelacaoTopicos
          recentes={topicosRecentes}
          respondidos={topicosRespondidos}
          curtidos={topicosCurtidos}
        />
      </aside>
    </div>
  );
}

export default App;
