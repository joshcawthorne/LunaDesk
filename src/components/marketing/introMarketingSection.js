import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const StarfieldAnimation = dynamic(() => import("react-starfield-animation"), {
  ssr: false,
});

import Container from "./marketingContainer";
import WinnerTooltip from "./introWinnerTooltip";
import IntroContentSection from "./introContentSection";
import Orbit from "./orbit";

const OuterContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(180deg, #060606 27.6%, #00055d 100%);
  position: relative;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const OrbitContainer = styled.div`
  position: absolute;
  bottom: -170px;
  right: -120px;
  width: 800px;
  height: 800px;
  z-index: 0;
`;

function IntroMarketingSection({ setPreRegisterOpen }) {
  return (
    <OuterContainer>
      <Container>
        <InnerContainer>
          <WinnerTooltip />
          <IntroContentSection setPreRegisterOpen={setPreRegisterOpen} />
          <OrbitContainer>
            <Orbit />
          </OrbitContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  );
}

export default IntroMarketingSection;
