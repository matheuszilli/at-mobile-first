import React from 'react';
import CommentItem from './CommentItem';
// import './Comments.css';

function Comments() {
  return (
    <div className="comments">
      <h3>Comentários</h3>
      <CommentItem
        name="Ana Clara"
        date="15/09/2024"
        comment="Adorei o vídeo, muito bem explicado!"
      />
      <CommentItem
        name="Carlos Pereira"
        date="14/09/2024"
        comment="Achei muito interessante. Parabéns!"
      />
    </div>
  );
}

export default Comments;
