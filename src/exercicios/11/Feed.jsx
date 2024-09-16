import React from 'react';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      <Post
        image="https://via.placeholder.com/150"
        title="Dia estudando"
        text="Hoje foi um ótimo dia estudando Mobile First!"
        date="15/09/2024"
        author="João"
        likes={10}
        shares={2}
        comments={[
          { user: 'Ana', text: 'Parece incrível!' },
          { user: 'Carlos', text: 'Ainda bem que finalizei ano passado!' },
        ]}
      />
      <Post
        image="https://via.placeholder.com/150"
        title="Novo projeto de código"
        text="Iniciei um novo projeto usando React e está ficando incrível!"
        date="10/09/2024"
        author="Maria"
        likes={25}
        shares={8}
        comments={[
          { user: 'Paulo', text: 'Adoro React, facilita mutio a vida do Front!' },
          { user: 'Fernanda', text: 'Quero ver o projeto depois, sem cabalachos!' },
        ]}
      />
    </div>
  );
}

export default Feed;
