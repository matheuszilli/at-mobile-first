import React from 'react';
// import './Suggestion.css';

function Suggestion({ image, name, mutualFriend }) {
  return (
    <div className="suggestion">
      <img src={image} alt="Suggestion" />
      <p>{name}</p>
      <p>Amigo em comum: {mutualFriend}</p>
    </div>
  );
}

export default Suggestion;
