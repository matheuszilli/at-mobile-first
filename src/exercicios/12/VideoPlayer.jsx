import React from 'react';
import './VideoPlayer.css';

function VideoPlayer() {
  return (
    <div className="video-player">
      <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/wU80w4xbNxQ" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
      </iframe>
      <h2>Título do Vídeo</h2>
      <p>Autor: Matheus Zilli</p>
    </div>
  );
}

export default VideoPlayer;
