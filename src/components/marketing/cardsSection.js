import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";
import Card from "./marketingCard";

const CardsOuterContainer = styled.div`
  background-color: #1c1d1f;
  padding: 100px 0;
`;

const CardsInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: GT Walsheim;
  font-size: 48px;
  line-height: 100%;
  color: #ffffff;
  width: 455px;
  text-align: center;
`;

const Subtitle = styled.div`
  font-family: GT Walsheim;
  font-size: 24px;
  line-height: 36px;
  color: #95a2b3;
  margin-top: 20px;
  margin-bottom: 60px;
  width: 340px;
  text-align: center;
`;

const CardContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function CardsSection() {
  return (
    <CardsOuterContainer>
      <Container>
        <CardsInnerContainer>
          <Title>Improve your team’s harmony in minutes</Title>
          <Subtitle>Getting started with LunaDesk is a piece of cake.</Subtitle>
          <CardContentContainer>
            <Card
              title={"Register your Company"}
              subtitle={
                "You can register your company with LunaDesk in under two minutes - we’ve timed it!"
              }
              src={"/images/cardOne.png"}
            />
            <Card
              title={"Invite your Team"}
              subtitle={
                "You can invite your entire team to join you on LunaDesk with just a few short clicks."
              }
              src={"/images/cardTwo.png"}
            />
            <Card
              title={"Enjoy Hybrid Harmony"}
              subtitle={`That’s it! Your team can now enjoy “Hybrid Harmony” - pretty nifty, huh?`}
              src={"/images/cardThree.png"}
            />
          </CardContentContainer>
        </CardsInnerContainer>
      </Container>
    </CardsOuterContainer>
  );
}

export default CardsSection;
