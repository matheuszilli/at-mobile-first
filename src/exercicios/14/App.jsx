import React, { useState } from 'react';
import Question from './Question';
import './styles.css'

export default function App() {
  const questions = [
    {
      id: 1,
      enunciado: 'Qual é a capital da França?',
      opcoes: ['Berlim', 'Madri', 'Paris', 'Lisboa'],
      respostaCorreta: 'Paris',
    },
    {
      id: 2,
      enunciado: 'Qual é o maior planeta do sistema solar?',
      opcoes: ['Terra', 'Júpiter', 'Marte', 'Saturno'],
      respostaCorreta: 'Júpiter',
    },
    {
      id: 3,
      enunciado: 'Qual materia não esta sendo estudada nesse semestra?',
      opcoes: ['Mobile', 'React', 'Projeto', 'Python'],
      respostaCorreta: 'Python',
    },
    {
      id: 4,
      enunciado: 'Qual maior campeão de copas do mundo?',
      opcoes: ['Argentina', 'Brasil', 'Alemanha', 'Argélia'],
      respostaCorreta: 'Brasil',
    },
    {
      id: 5,
      enunciado: 'Por que as pessoas escolhem IFNET?',
      opcoes: ['EAD ao Vivo', 'Modalidade de Projetos', 'Professores', 'Todas as Anteriores'],
      respostaCorreta: 'Todas as Anteriores',
    },
    {
      id: 6,
      enunciado: 'Quem é o vilão mais famoso de Batman?',
      opcoes: ['Lula', 'Bolsonaro', 'Zé Vaqueiro', 'Coringa'],
      respostaCorreta: 'Coringa',
    },
    {
      id: 7,
      enunciado: 'Qual maior animal do planeta?',
      opcoes: ['Baleia Azul', 'Elefante', 'Jubarte'],
      respostaCorreta: 'Baleia Azul',
    },
    {
      id: 8,
      enunciado: 'Em qual ano Coritiba foi campeão Brasileiro?',
      opcoes: ['1985', '2001', '1987', '1995'],
      respostaCorreta: '1985',
    },
    {
      id: 9,
      enunciado: 'Uma reposição de estoque entra diretamente no DRE como Despesa?',
      opcoes: ['Sim', 'Não, pois estoque é um ativo e ativo não vai para o DRE',],
      respostaCorreta: 'Não, pois estoque é um ativo e ativo não vai para o DRE',
    },
    {
      id: 9,
      enunciado: 'Contra quem foi a última vitoria do Brasil nas eliminatórioas?',
      opcoes: ['Equador', 'Paraguai,', 'Peru', 'Uruguai'],
      respostaCorreta: 'Equador',
    },
  ];

  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [tema, setTema] = useState('light');

  const handleSubmit = (respostaEscolhida) => {
    if (respostaEscolhida === questions[questaoAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaQuestao = questaoAtual + 1;
    if (proximaQuestao < questions.length) {
      setQuestaoAtual(proximaQuestao);
    } else {
      setQuizFinalizado(true);
    }
  };

  const alternarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={tema}>
      <button onClick={alternarTema}>
        Alternar para tema {tema === 'light' ? 'dark' : 'light'}
      </button>
      {!quizFinalizado ? (
        <Question
          question={questions[questaoAtual]}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h2>Quiz Finalizado!</h2>
          <p>Sua pontuação: {pontuacao} de {questions.length}</p>
        </div>
      )}
    </div>
  );
}
