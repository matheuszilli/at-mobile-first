import React from 'react';
// import './Friend.css';

function Friend({ image, name, mutualFriends }) {
  return (
    <div className="friend">
      <img src={image} alt="Friend" />
      <p>{name}</p>
      <p>{mutualFriends} amigos em comum</p>
    </div>
  );
}

export default Friend;
