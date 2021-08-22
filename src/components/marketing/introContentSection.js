import React from "react";
import styled from "styled-components";

import Button from "../shared/button";

const IntroContentSectionContainer = styled.div`
  background: linear-gradient(
    247.16deg,
    rgba(4, 3, 90, 0.15) 1.51%,
    rgba(255, 255, 255, 0) 102.42%
  );
  box-shadow: inset -2px -2px 100px rgba(255, 255, 255, 0.1),
    inset 2px 2px 100px rgba(66, 66, 66, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 39px;
  padding: 64px 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 135px;
  z-index: 2;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 66px;
  line-height: 79px;
  margin: 0;
  color: #ffffff;
  text-align: center;
  width: 825px;
`;

const Subtitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  color: #95a2b3;
  margin-top: 23px;
  margin-bottom: 35px;
  text-align: center;
  width: 630px;
`;

function IntroContentSection() {
  return (
    <IntroContentSectionContainer>
      <Title>The scheduling tool that pulls teams into orbit</Title>
      <Subtitle>
        LunaDesk helps create harmony among Hybrid teams to free-up more time
        for the things that matter.
      </Subtitle>
      <Button
        text={"Request Early Access"}
        arrow
        backgroundColor={"#010960"}
        color={"#fff"}
      />
    </IntroContentSectionContainer>
  );
}

export default IntroContentSection;
