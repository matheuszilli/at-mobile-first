import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      <div className="menu-header">
        <img
          src="https://via.placeholder.com/100x50"
          alt="Logo"
          className="menu-logo"
        />
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Contatos</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
