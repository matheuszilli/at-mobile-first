import React from 'react';


import Header from './Header';
import Menu from './Menu';
import Feed from './Feed';
import FriendList from './FriendList';
import Suggestions from './Suggestions';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <div className='main-content'>
        <Feed />
        <FriendList />
        <Suggestions />
      </div>
    </div>
  )
}