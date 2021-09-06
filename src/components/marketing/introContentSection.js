import React from "react";
import styled from "styled-components";

import Button from "../shared/button";
import dynamic from "next/dynamic";

const StarfieldAnimation = dynamic(() => import("react-starfield-animation"), {
  ssr: false,
});

const IntroContentSectionContainer = styled.div`
  overflow: hidden;
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
  @media (max-width: 500px) {
    padding: 64px 30px;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 66px;
  line-height: 79px;
  margin: 0;
  color: #ffffff;
  text-align: center;
  width: 825px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 44px;
    line-height: 50px;
  }
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
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

function IntroContentSection({ setPreRegisterOpen }) {
  function handleClick() {
    setPreRegisterOpen(true);
  }
  return (
    <IntroContentSectionContainer>
      {/*}
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />*/}
      <Title>The scheduling tool that pulls teams into orbit</Title>
      <Subtitle>
        Understand when your team members are going to be in the office or
        working remotely.
      </Subtitle>
      <Button
        text={"Request Early Access"}
        arrow
        backgroundColor={"#010960"}
        color={"#fff"}
        action={handleClick}
        style={{ zIndex: 100 }}
      />
    </IntroContentSectionContainer>
  );
}

export default IntroContentSection;
