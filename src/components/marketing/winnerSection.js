import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";

const WinnerOuterContainer = styled.div`
  background-color: #18191d;
  padding: 100px 0;
  position: relative;
`;

const WinnerInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 44px;
  line-height: 55px;
  color: #ffffff;
  width: 650px;
  text-align: center;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #8a8f98;
  width: 530px;
  text-align: center;
`;

const ImageContainer = styled.div`
  max-width: 620px;
  max-height: 620px;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function WinnerSection() {
  return (
    <WinnerOuterContainer>
      <Container>
        <WinnerInnerContainer>
          <TextContainer>
            <Title>Winner - "Best Overall Project"</Title>
            <Desc>
              LunaDesk’s concept launch won the “Best Overall Project” award
              during Supabase’s 2021 Hackathon.
            </Desc>
          </TextContainer>
          <ImageContainer>
            <Image
              src={"images/winnerImage.png"}
              alt={"Winner - Best Overall Project"}
            />
          </ImageContainer>
        </WinnerInnerContainer>
      </Container>
    </WinnerOuterContainer>
  );
}

export default WinnerSection;
