import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material';

const itensCarrinho = [
  { nome: 'Camiseta', valorUnitario: 29.99, quantidade: 2 },
  { nome: 'Calça Jeans', valorUnitario: 89.99, quantidade: 1 },
  { nome: 'Tênis', valorUnitario: 149.99, quantidade: 1 },
  { nome: 'Boné', valorUnitario: 19.99, quantidade: 3 },
];

const CarrinhoDeCompras = () => {
  const calcularTotalItem = (valorUnitario, quantidade) => {
    return (valorUnitario * quantidade).toFixed(2);
  };

  const calcularTotalCompra = () => {
    return itensCarrinho
      .reduce((total, item) => total + item.valorUnitario * item.quantidade, 0)
      .toFixed(2);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Carrinho de Compras
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="tabela do carrinho">
          <TableHead>
            <TableRow>
              <TableCell><strong>Produto</strong></TableCell>
              <TableCell align="right"><strong>Valor Unitário (R$)</strong></TableCell>
              <TableCell align="right"><strong>Quantidade</strong></TableCell>
              <TableCell align="right"><strong>Total (R$)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itensCarrinho.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.nome}
                </TableCell>
                <TableCell align="right">
                  {item.valorUnitario.toFixed(2)}
                </TableCell>
                <TableCell align="right">{item.quantidade}</TableCell>
                <TableCell align="right">
                  {calcularTotalItem(item.valorUnitario, item.quantidade)}
                </TableCell>
              </TableRow>
            ))}
            {/* Linha para o valor total da compra */}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}><strong>Total da Compra</strong></TableCell>
              <TableCell align="right">
                <strong>{calcularTotalCompra()}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CarrinhoDeCompras;
