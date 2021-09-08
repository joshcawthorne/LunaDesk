import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Container from "./marketingContainer";
import WinnerTooltip from "./introWinnerTooltip";
import Button from "../shared/button";
import IntroContentSection from "./introContentSection";
import Orbit from "./orbit";

const OuterContainer = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #060606 27.6%, #0b1f30 100%);
  position: relative;
  overflow: hidden;
  padding-top: 160px;
  @media (max-width: 550px) {
    padding-top: 215px;
  }
  @media (max-width: 480px) {
    padding-top: 120px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  width: 95%;
  height: 780px;
  position: relative;
  background-image: #ffd699;

  border-radius: 40px;
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
  background-color: #f5a87c;
  @media (max-width: 900px) {
    height: unset;
    width: 92.5%;
    padding-bottom: 400px;
  }
  @media (max-width: 550px) {
    height: unset;
    width: 92.5%;
    padding-bottom: 275px;
  }
`;

const InnerContentContainer = styled.div`
  padding: 0px 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 2;
  @media (max-width: 1350px) {
    padding: 0px 60px;
  }
  @media (max-width: 1270px) {
    padding: 0px 30px;
  }
  @media (max-width: 900px) {
    padding: 0;
    padding-top: 50px;
  }
  @media (max-width: 650px) {
    padding: 0;
    padding-top: 30px;
  }

  @media (max-width: 550px) {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 66px;
  line-height: 79px;
  margin-bottom: 30px;
  background-color: #fc9238;
  background-image: linear-gradient(90deg, #031a8d 0%, #12043b 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  max-width: 646px;
  z-index: 2;
  @media (max-width: 900px) {
    text-align: left;
    max-width: 650px;
    padding: 0px 60px;
    margin-bottom: 10px;
    background-image: linear-gradient(90deg, #031a8d 0%, #12043b 100%);
  }
  @media (max-width: 750px) {
    font-size: 50px;
    padding: 0px 30px;
    line-height: 55px;
    text-align: center;
    margin-top: 30px;
  }
  @media (max-width: 650px) {
    font-size: 32px;
    line-height: 37px;
  }
`;

const Subtext = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  color: #000860;
  margin-bottom: 30px;
  max-width: 432px;
  z-index: 2;
  @media (max-width: 900px) {
    text-align: left;
    max-width: 500px;

    padding: 0px 60px;
  }
  @media (max-width: 750px) {
    font-size: 20px;
    padding: 0px 30px;
    line-height: 26px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    max-width: unset;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 22px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const BackgroundImage = styled.div`
  background-image: url("images/headerBackgroundImage.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  @media (max-width: 1250px) {
    background-position-x: 300px;
    background-position-y: bottom;
  }
  @media (max-width: 900px) {
    background-image: url("images/headerBackgroundMobileImage.png");
    background-size: cover;
    background-position: center bottom;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 35px;
    border-bottom-left-radius: 35px;
    height: 100%;
  }
`;

const TooltipContainer = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    top: -100px;
  }
`;

const ButtonContainer = styled.div`
  z-index: 5;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function IntroMarketingSection({ setPreRegisterOpen }) {
  function handleClick() {
    setPreRegisterOpen(true);
  }
  return (
    <OuterContainer>
      <ContentContainer>
        <TooltipContainer>
          <WinnerTooltip />
        </TooltipContainer>
        <InnerContentContainer>
          <Title>The scheduling tool that pulls teams into orbit.</Title>
          <Subtext>
            Understand when your team members are going to be in the office or
            working remotely.
          </Subtext>
          <ButtonContainer>
            <Button
              text={"Request Early Access"}
              arrow
              backgroundColor={"#010960"}
              color={"#fff"}
              action={handleClick}
              style={{ zIndex: 100 }}
            />
          </ButtonContainer>
        </InnerContentContainer>
        <BackgroundImage />
      </ContentContainer>
    </OuterContainer>
  );
}

export default IntroMarketingSection;
