import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #27282b;
  border-radius: 25px;
  padding: 37px 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px 20px;
`;

const Title = styled.div`
  font-family: GT Walsheim;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 15px;
  width: 100%;
`;

const Subtitle = styled.div`
  font-family: GT Walsheim;
  font-size: 20px;
  line-height: 28px;
  color: #8a8f98;
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  margin-bottom: 30px;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
`;

function MarketingCard({ title, subtitle, src }) {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={src} alt={title} />
      </ImageContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CardContainer>
  );
}

export default MarketingCard;
