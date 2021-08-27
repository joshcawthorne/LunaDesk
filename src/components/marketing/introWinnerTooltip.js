import React from "react";
import styled, { keyframes } from "styled-components";

import SupabaseLogo from "../../../assets/svg/supabaseLogo.svg";
import Arrow from "../../../assets/svg/buttonArrow.svg";

const Fade = keyframes`
  0% {
    opacity:1;
  }
  50% {
      opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`;

const IntroWinnerTooltipContainer = styled.div`
  margin-top: 90px;
  margin-bottom: 55px;
  width: 470px;
  height: 60px;
  position: relative;
  @media (max-width: 550px) {
    width: 240px;
    height: 120px;
  }
`;

const ContentLayer = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: #0b0b0b;
  mix-blend-mode: normal;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  align-items: center;
  display: flex;
  flex: initial;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const BackgroundLayer = styled.div`
  background: linear-gradient(
    90.9deg,
    rgba(255, 170, 98, 0.55) 0%,
    #373597 100%
  );

  mix-blend-mode: normal;
  filter: blur(21.2793px);
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  animation: ${Fade} 3.5s linear 0s infinite;
`;

const SupabaseLogoContainer = styled.div`
  height: 100%;
  margin-right: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    margin: 0;
    height: 55px;
  }
`;

const WinnerText = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  color: #f7f8f8;
  white-space: nowrap;
  display: flex;
  flex-shrink: initial;
  flex-basis: initial;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-flex: 1;
  flex-grow: 1;

  margin-left: 24px;
  @media (max-width: 550px) {
    font-size: 13px;
    line-height: 13px;
    margin: 0;
    -webkit-box-flex: 0;
    flex-grow: 0;
    margin-bottom: 5px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 37px;
  background: #424b57;
  margin-left: 24px;
  @media (max-width: 550px) {
    display: none;
  }
`;

const LearnMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  @media (max-width: 550px) {
    margin: 0;
  }
`;

const LearnMoreText = styled.div`
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0.01em;
  white-space: nowrap;
  color: #ffffff;
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

const LearnMoreArrowContainer = styled.div`
  margin-left: 10px;
`;

function IntroWinnerTooltip() {
  return (
    <IntroWinnerTooltipContainer>
      <ContentLayer>
        <SupabaseLogoContainer>
          <SupabaseLogo />
        </SupabaseLogoContainer>
        <WinnerText>Winner, “Best Overall Project”</WinnerText>

        <Divider />
        <LearnMoreContainer>
          <LearnMoreText>Learn More</LearnMoreText>
          <LearnMoreArrowContainer>
            <Arrow />
          </LearnMoreArrowContainer>
        </LearnMoreContainer>
      </ContentLayer>
      <BackgroundLayer />
    </IntroWinnerTooltipContainer>
  );
}

export default IntroWinnerTooltip;
