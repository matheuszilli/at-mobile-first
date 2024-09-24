import React from 'react';
import './App.css';
import { FaUserCircle } from 'react-icons/fa'; 

function App() {
  return (
    <div className="menu-container">
      <div className="logo">
        <img src="https://via.placeholder.com/50" alt="Logo" />
        <span>Brand</span>
      </div>
      <div className="menu-items">
        <span>Item1</span>
        <span>Item2</span>
        <span>Item3</span>
      </div>
      <div className="user-icon">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
}

export default App;
