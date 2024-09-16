import React from 'react';
import Suggestion from './Suggestion';
import './Suggestions.css';

function Suggestions() {
  return (
    <div className="suggestions">
      <h3>Sugestões de Amizade</h3>
      <Suggestion
        image="https://via.placeholder.com/50"
        name="Fernanda"
        mutualFriend="João"
      />
      <Suggestion
        image="https://via.placeholder.com/50"
        name="Paulo"
        mutualFriend="Maria"
      />
    </div>
  );
}

export default Suggestions;
