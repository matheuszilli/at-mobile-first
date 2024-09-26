import React from "react";
import styled from "styled-components";

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Photo = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Name = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Details = styled.p`
  font-size: 14px;
  color: #666;
  margin: 2px 0;
`;

const IconSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 15px;
`;

const Icon = styled.a`
  font-size: 20px;
  color: #333;
`;

const FuncInfo = () => {
  return (
    <InfoSection>
      <Photo />
      <InfoText>
        <Name>Nome Completo</Name>
        <Details>Data de Nascimento</Details>
        <Details>Setor</Details>
        <Details>Cargo</Details>
      </InfoText>
      <IconSection>
        <Icon href="#">📞</Icon>
        <Icon href="#">✉️</Icon>
        <Icon href="#">📍</Icon>
      </IconSection>
    </InfoSection>
  );
};

export default FuncInfo;
