import React from "react";
import styled from "styled-components";
import Button from "../shared/button";

import Container from "./marketingContainer";
import EarlyAccessLogo from "../../../assets/svg/earlyAccessLogo.svg";

const EarlyAccessOuterContainer = styled.div`
  background-color: #152a3d;
  padding: 100px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  @media (max-width: 1000px) {
    padding-top: 0px;
  }
`;

const EarlyAccessInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px 0px;
  box-sizing: border-box;
  z-index: 5;
  width: 100%;
  background: linear-gradient(
    247.16deg,
    rgba(0, 0, 0, 0.42) 1.51%,
    rgba(94, 93, 234, 0.47) 102.42%
  );
  box-shadow: inset -2px -2px 100px rgba(255, 255, 255, 0.1),
    inset 2px 2px 100px rgba(66, 66, 66, 0.1);
  backdrop-filter: blur(25px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 39px;

  background-color: #ffdf99;
  background-image: #ffd699;
  background-image: radial-gradient(
      at 85% 17%,
      hsla(357, 95%, 67%, 1) 0,
      transparent 50%
    ),
    radial-gradient(at 1% 90%, hsla(302, 92%, 77%, 1) 0, transparent 55%),
    radial-gradient(at 97% 25%, hsla(203, 69%, 79%, 1) 0, transparent 47%),
    radial-gradient(at 16% 9%, hsla(267, 62%, 59%, 1) 0, transparent 48%),
    radial-gradient(at 89% 0%, hsla(43, 77%, 61%, 1) 0, transparent 45%),
    radial-gradient(at 75% 44%, hsla(343, 75%, 77%, 1) 0, transparent 51%),
    radial-gradient(at 38% 44%, hsla(220, 86%, 72%, 1) 0, transparent 54%);
  @media (max-width: 600px) {
    padding: 48px 20px;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 0px;
`;

const IconImage = styled.img`
  width: 120px;
  height: 120px;
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
  width: 470px;
  @media (max-width: 600px) {
    width: unset;
    font-size: 30px;
    line-height: 36px;
  }
`;

const Desc = styled.div`
  width: 540px;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #ffffff;
  @media (max-width: 600px) {
    width: unset;
    font-size: 20px;
    line-height: 26px;
  }
`;

function EarlyAccess({ setPreRegisterOpen }) {
  function handleClick() {
    setPreRegisterOpen(true);
  }
  return (
    <EarlyAccessOuterContainer>
      <Container>
        <EarlyAccessInnerContainer>
          <IconContainer>
            <EarlyAccessLogo />
          </IconContainer>
          <TextContainer>
            <Title>Request Early Access</Title>
            <Desc>
              We’re not quite ready for launch just yet, but you can apply below
              to be the among the first to use LunaDesk once it’s ready to take
              flight!
            </Desc>
          </TextContainer>
          <Button
            text={"Request Early Access"}
            backgroundColor={"#001cfc"}
            color={"#fff"}
            action={handleClick}
            arrow
          />
        </EarlyAccessInnerContainer>
      </Container>
    </EarlyAccessOuterContainer>
  );
}

export default EarlyAccess;
