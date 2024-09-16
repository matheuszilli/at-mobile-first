import React from 'react';
import './Post.css';

function Post({ image, title, text, date, author, likes, shares, comments }) {
  return (
    <div className="post">
      <img src={image} alt="Post" />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <p className="post-info">Por {author} em {date}</p>
        <div className="post-interaction">
          <span>{likes} curtidas</span>
          <span>{shares} compartilhamentos</span>
        </div>
        <div className="post-comments">
          <h3>Comentários:</h3>
          {comments.map((comment, index) => (
            <p key={index}><strong>{comment.user}:</strong> {comment.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
