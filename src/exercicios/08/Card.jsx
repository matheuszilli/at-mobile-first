import React from 'react';
import './Card.css';

function Card({ image, title, description, footer }) {
  return (
    <div className="card-container">
      <img src={image} alt="Imagem" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-footer">{footer}</p>
      </div>
    </div>
  );
}

export default Card;
