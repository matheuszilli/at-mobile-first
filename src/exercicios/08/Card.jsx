import React from "react";
import styled from "styled-components";
import FuncInfo from "./FuncionarioInfo";
import Tarefas from "./Tarefas";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Card = () => {
  return (
    <CardContainer>
      <InfoWrapper>
        <FuncInfo />
        <Tarefas />
      </InfoWrapper>
    </CardContainer>
  );
};

export default Card;
