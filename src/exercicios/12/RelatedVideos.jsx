import React from 'react';
import RelatedVideoItem from './RelatedVideoItem';
import './RelatedVideos.css';

function RelatedVideos() {
  return (
    <div className="related-videos">
      <h3>Vídeos Relacionados</h3>
      <RelatedVideoItem
        image="https://via.placeholder.com/150"
        title="Video 1"
        author="Maria Souza"
      />
      <RelatedVideoItem
        image="https://via.placeholder.com/150"
        title="Video 2"
        author="Pedro Oliveira"
      />
      <RelatedVideoItem
        image="https://via.placeholder.com/150"
        title="Video 3"
        author="Fernanda Lima"
      />
    </div>
  );
}

export default RelatedVideos;
