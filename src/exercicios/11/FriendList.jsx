import React from 'react';
import Friend from './Friend';
import './FriendsList.css';

function FriendsList() {
  return (
    <div className="friends-list">
      <h3>Amigos</h3>
      <Friend
        image="https://via.placeholder.com/50"
        name="Ana "
        mutualFriends={5}
      />
      <Friend
        image="https://via.placeholder.com/50"
        name="Carlos "
        mutualFriends={8}
      />
    </div>
  );
}

export default FriendsList;
