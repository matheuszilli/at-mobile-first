import React from 'react';
import './App.css';
import { FaBars  } from 'react-icons/fa'; 

function App() {
  return (
    <div className='card-principal'>
        <div className='card-topo'>
            <div>
                <img src='https://via.placeholder.com/50' alt='Logo' />
                <span>Brand</span>
            </div>
            <div>
                <div className='menu-icon'>
                    <FaBars />
                </div>
            </div>
        </div>
        <div className='card-items'>
            <span>Item 1</span>
            <span>Item 2</span>
            <span>Item 3</span>
            <span>Item 4</span>
            <span>Item 5</span>
            <span>Item 7</span>
        </div>
    </div>
  );
}

export default App;
