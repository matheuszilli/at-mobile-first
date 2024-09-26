import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
  margin-top: 5px;
`;

const Name = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Details = styled.p`
  font-size: 14px;
  margin: 2px 0;
`;

const IconSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 15px;
`;

const Icon = styled.a`
  font-size: 12px;
  color: #333;
  cursor: pointer;
`;

const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const TableRow = styled.tr`
  background-color: ${(props) => (props.completed ? "#d3ffd3" : "white")};
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const TaskCheckbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
`;

const Card = () => {
  return (
    <CardContainer>
      <InfoSection>
        <Photo />
        <Name>Matheus Zilli</Name>
        <Details>13/10/1984</Details>
        <Details>Setor: Qualidade</Details>
        <Details>Cargo: Analista</Details>
      </InfoSection>

      <IconSection>
        <Icon>Tel: </Icon>
        <Icon>E-mail:</Icon>
        <Icon>Filial:</Icon>
      </IconSection>

      <TaskTable>
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
            <TableCell>Fazer o Crachá</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TaskCheckbox />
            </TableCell>
            <TableCell>Desenvolver o exercício</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TaskCheckbox />
            </TableCell>
            <TableCell>Entregar o AT</TableCell>
          </TableRow>
        </tbody>
      </TaskTable>
    </CardContainer>
  );
};

export default Card;
