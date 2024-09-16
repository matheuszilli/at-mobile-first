import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h2>Desenvolvimento Front-End com Frameworks</h2>
      <h3>Mobile-First UI com React</h3>
      <h4>Diferença entre responsividade e adaptabilidade</h4>
      <p>
        A responsividade está relacionada à capacidade do layout e dos elementos da página se ajustarem de maneira flexível em diferentes dispositivos e tamanhos de tela. Um design responsivo utiliza media queries para adaptar o layout e garantir uma boa experiência de uso, seja em dispositivos móveis ou em desktops.
      </p>
      <p>
        A adaptabilidade, por outro lado, está mais focada em entregar layouts e interfaces diferentes para diferentes tipos de dispositivos. Um layout adaptativo identifica o dispositivo do usuário e carrega um layout específico para aquele dispositivo.
      </p>
      <p>
        Enquanto o design responsivo é fluido e flexível, o design adaptativo trabalha com várias "quebras" no layout, onde o conteúdo é reformatado de maneira fixa em diferentes tamanhos de tela.
      </p>
    </div>
  );
}

export default App;
