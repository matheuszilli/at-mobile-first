import React from 'react';
import './CommentItem.css';

function CommentItem({ name, date, comment }) {
  return (
    <div className="comment-item">
      <p><strong>{name}</strong> - {date}</p>
      <p>{comment}</p>
    </div>
  );
}

export default CommentItem;
