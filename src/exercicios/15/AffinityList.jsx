import React from 'react';

export default function AffinityList({ gostos }) {
  const usuarios = [
    { nome: 'João', gostos: { 1: 'gosto', 2: 'naoGosto', 3: 'gosto', 4: 'gosto', 5: 'naoGosto' } },
    { nome: 'Maria', gostos: { 1: 'gosto', 2: 'gosto', 3: 'naoGosto', 4: 'gosto', 5: 'gosto' } },
  ];

  const calcularAfinidade = (gostosUsuario) => {
    let afinidade = 0;
    Object.keys(gostos).forEach((id) => {
      if (gostos[id] === gostosUsuario[id]) {
        afinidade++;
      }
    });
    return (afinidade / Object.keys(gostos).length) * 100;
  };

  return (
    <div>
      <h2>Usuários com gostos parecidos:</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nome}: {calcularAfinidade(usuario.gostos)}% de afinidade
          </li>
        ))}
      </ul>
    </div>
  );
}
