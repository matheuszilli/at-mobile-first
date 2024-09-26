import React from "react";
import styled from "styled-components";

const TaskTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const TableHeader = styled.th`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const TableRow = styled.tr`
  background-color:"#d3ffd3")};
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const TaskCheckbox = styled.input.attrs({ type: "checkbox" })`
//   cursor: pointer;
`;

const Tarefas = () => {
  return (
    <TaskTableContainer>
      <thead>
        <tr>
          <TableHeader>Estado</TableHeader>
          <TableHeader>Tarefas</TableHeader>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>
            <TaskCheckbox />
          </TableCell>
          <TableCell>Tarefa 1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TaskCheckbox />
          </TableCell>
          <TableCell>Tarefa 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TaskCheckbox />
          </TableCell>
          <TableCell>Tarefa 3</TableCell>
        </TableRow>
      </tbody>
    </TaskTableContainer>
  );
};

export default Tarefas;
