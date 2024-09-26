import React, { useState } from 'react';
import estilos from './App.module.css';

const App = () => {
  const questoes = [
    {
      enunciado: 'O que significa o conceito Mobile-First em desenvolvimento web?',
      opcoes: [
        'Desenvolver primeiro para desktops e depois adaptar para dispositivos móveis.',
        'Desenvolver simultaneamente para todos os tipos de dispositivos.',
        'Desenvolver primeiro para dispositivos móveis e depois adaptar para desktops.',
        'Desenvolver apenas para dispositivos móveis.'
      ],
      respostaCorreta: 2,
      justificativa: 'Mobile-First significa desenvolver inicialmente para dispositivos móveis e depois adaptar para telas maiores, garantindo uma melhor experiência em dispositivos móveis.'
    },
    {
      enunciado: 'Qual das seguintes práticas contribui para uma melhor usabilidade em um site?',
      opcoes: [
        'Utilizar cores brilhantes sem contraste adequado.',
        'Navegação intuitiva e consistente.',
        'Adicionar o máximo de informações na página inicial.',
        'Usar fontes decorativas difíceis de ler.'
      ],
      respostaCorreta: 1,
      justificativa: 'Uma navegação intuitiva e consistente facilita a experiência do usuário, tornando o site mais usável.'
    },
    {
      enunciado: 'Qual propriedade CSS é essencial para criar layouts responsivos?',
      opcoes: [
        'position',
        'flex',
        'float',
        'display: inline'
      ],
      respostaCorreta: 1,
      justificativa: 'A propriedade `flex` faz parte do Flexbox, que é fundamental para criar layouts flexíveis e responsivos.'
    },
    {
      enunciado: 'O que é "breakpoint" em design responsivo?',
      opcoes: [
        'Um ponto onde o site para de funcionar.',
        'Um ponto de interrupção para aplicar estilos específicos.',
        'Um tipo de imagem utilizada em layouts responsivos.',
        'Uma técnica para otimizar o carregamento de páginas.'
      ],
      respostaCorreta: 1,
      justificativa: 'Breakpoints são pontos definidos na largura da tela onde estilos específicos são aplicados para adaptar o layout.'
    },
    {
      enunciado: 'Qual das seguintes afirmações sobre usabilidade está correta?',
      opcoes: [
        'Usabilidade se refere apenas à aparência visual do site.',
        'Usabilidade envolve quão fácil e agradável é para os usuários interagirem com o site.',
        'Usabilidade significa que o site deve ter o máximo de funcionalidades possíveis.',
        'Usabilidade não é importante se o site for tecnicamente robusto.'
      ],
      respostaCorreta: 1,
      justificativa: 'Usabilidade está relacionada à facilidade e eficiência com que os usuários podem interagir e alcançar seus objetivos no site.'
    },
    {
      enunciado: 'Qual tag HTML é mais adequada para inserir uma imagem que se adapta ao tamanho do contêiner?',
      opcoes: [
        '<img src="imagem.jpg">',
        '<img src="imagem.jpg" width="100">',
        '<img src="imagem.jpg" style="width:100%;">',
        '<picture><source srcset="imagem.jpg"></picture>'
      ],
      respostaCorreta: 2,
      justificativa: 'Usar `style="width:100%;"` faz com que a imagem se ajuste ao tamanho do contêiner pai, tornando-a responsiva.'
    },
    {
      enunciado: 'Qual ferramenta de CSS permite criar layouts bidimensionais e responsivos facilmente?',
      opcoes: [
        'CSS Grid',
        'Flexbox',
        'Bootstrap',
        'Sass'
      ],
      respostaCorreta: 0,
      justificativa: 'CSS Grid permite criar layouts bidimensionais de forma eficiente e responsiva.'
    },
    {
      enunciado: 'O que é "touch target" em design móvel?',
      opcoes: [
        'A área interativa que responde a toques do usuário.',
        'A área que exibe toques na tela.',
        'O ponto onde os toques são ignorados.',
        'Um tipo específico de botão para dispositivos móveis.'
      ],
      respostaCorreta: 0,
      justificativa: '"Touch target" refere-se à área que responde aos toques do usuário, e deve ser suficientemente grande para facilitar a interação.'
    },
    {
      enunciado: 'Por que o carregamento rápido é importante para a usabilidade em dispositivos móveis?',
      opcoes: [
        'Porque dispositivos móveis têm telas menores.',
        'Porque usuários móveis tendem a abandonar sites que demoram para carregar.',
        'Porque dispositivos móveis não suportam imagens grandes.',
        'Porque dispositivos móveis possuem processadores mais rápidos.'
      ],
      respostaCorreta: 1,
      justificativa: 'Usuários móveis esperam carregamentos rápidos e tendem a abandonar sites que demoram, impactando negativamente a usabilidade.'
    },
    {
      enunciado: 'Qual meta tag é essencial para garantir que um site seja responsivo em dispositivos móveis?',
      opcoes: [
        '<meta charset="UTF-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
        '<meta name="description" content="Descrição do site">'
      ],
      respostaCorreta: 1,
      justificativa: 'A meta tag `viewport` configura a área de visualização para dispositivos móveis, garantindo que o layout seja responsivo.'
    }
  ];


  const [indiceQuestao, setIndiceQuestao] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);


  const confirmarResposta = () => {
    if (opcaoSelecionada === null) return;

    const questaoAtual = questoes[indiceQuestao];
    if (opcaoSelecionada === questaoAtual.respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }
    setMostrarResposta(true);
  };

  const proximaQuestao = () => {
    setOpcaoSelecionada(null);
    setMostrarResposta(false);
    if (indiceQuestao + 1 < questoes.length) {
      setIndiceQuestao(indiceQuestao + 1);
    } else {
      setQuizFinalizado(true);
    }
  };

  if (quizFinalizado) {
    return (
      <div className={estilos.container}>
        <h2>Quiz Finalizado!</h2>
        <p>Sua pontuação: {pontuacao} de {questoes.length}</p>
        <button onClick={() => window.location.reload()} className={estilos.botao}>
          Reiniciar Quiz
        </button>
      </div>
    );
  }

  const questao = questoes[indiceQuestao];

  return (
    <div className={estilos.container}>
      <h2>Questão {indiceQuestao + 1} de {questoes.length}</h2>
      <p className={estilos.enunciado}>{questao.enunciado}</p>
      <div className={estilos.opcoes}>
        {questao.opcoes.map((opcao, index) => (
          <label key={index} className={estilos.opcaoLabel}>
            <input
              type="radio"
              name="opcao"
              value={index}
              checked={opcaoSelecionada === index}
              onChange={() => setOpcaoSelecionada(index)}
              disabled={mostrarResposta}
            />
            {opcao}
          </label>
        ))}
      </div>
      {!mostrarResposta ? (
        <button
          onClick={confirmarResposta}
          className={estilos.botao}
          disabled={opcaoSelecionada === null}
        >
          Confirmar
        </button>
      ) : (
        <div className={estilos.resposta}>
          <p>
            {opcaoSelecionada === questao.respostaCorreta ? '✅' : '❌'} Resposta Correta: {questao.opcoes[questao.respostaCorreta]}
          </p>
          <p className={estilos.justificativa}>{questao.justificativa}</p>
          <button onClick={proximaQuestao} className={estilos.botao}>
            Próxima Questão
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
