import React from "react";
import "./App.css";

function ListaCompras() {
  const items = [
    { id: 1, nome: "Arroz", preco: 7.99, quantidade: 2 },
    { id: 2, nome: "Feijao", preco: 8.50, quantidade: 2 },
    { id: 3, nome: "Batata Palha", preco: 7.99, quantidade: 1 },
    { id: 4, nome: "Pudim", preco: 15.90, quantidade: 1 },
    { id: 5, nome: "Biscoito", preco: 2.85, quantidade: 5 },
    { id: 6, nome: "Refrigerante", preco: 7.99, quantidade: 1 },
  ];
  
  const calcularItemTotal = (preco, quantidade) => {
    return preco * quantidade;
  };

  const calcularTotal = () => {
    return items.reduce(
      (total, item) => total + calcularItemTotal(item.preco, item.quantidade),
      0
    );
  };

  return (
    <div className="compras-container">
      <h1>Lista de Compras</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="compra-item">
            <span>{item.nome}</span>
            <span>R$ {item.preco.toFixed(2)}</span>
            <span>Quantidade: {item.quantidade}</span>
            <span>
              Total: R$ {calcularItemTotal(item.preco, item.quantidade).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="total-compra">
        <h2>Total da Compra: R$ {calcularTotal().toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default ListaCompras;
