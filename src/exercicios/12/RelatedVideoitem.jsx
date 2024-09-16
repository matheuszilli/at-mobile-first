import React from 'react';
// import './RelatedVideoItem.css';

function RelatedVideoItem({ image, title, author }) {
  return (
    <div className="related-video-item">
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default RelatedVideoItem;
