import React from "react";
import styled, { keyframes } from "styled-components";

import SupabaseLogo from "../../../assets/svg/supabaseLogo.svg";
import Arrow from "../../../assets/svg/buttonArrow.svg";

const IntroWinnerTooltipContainer = styled.div`
  margin-top: 90px;
  margin-bottom: 55px;
  width: 470px;
  height: 60px;
  position: relative;
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
  justify-content: center;
  align-items: center;
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
`;

const SupabaseLogoContainer = styled.div`
  height: 100%;
  margin-right: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WinnerText = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  color: #f7f8f8;
`;

const Divider = styled.div`
  width: 1px;
  height: 37px;
  background: #424b57;
  margin: 0px 30px;
`;

const LearnMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LearnMoreText = styled.div`
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0.01em;
  color: #ffffff;
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
