import React, { useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import Header from "./header";
import Intro from "./introMarketingSection";
import CardsSection from "./cardsSection";
import OrganiseMeetings from "./organiseMeetings";
import Teams from "./teamsMarketing";
import Analytics from "./analyticsMarketing";
import WinnerSection from "./winnerSection";
import EarlyAccess from "./earlyAccess";
import Footer from "./footer";
import PreRegsiterPrompt from "./preRegisterSignup";
import HybridHarmony from "./hybridHarmony";
import GetStarted from "./getStarted";
import Rescheduling from "./rescheduling";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

function Marketing() {
  const [preRegisterOpen, setPreRegisterOpen] = useState(false);

  return (
    <Container>
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        color="230,36,187"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.75}
      />
      <PreRegsiterPrompt
        preRegisterOpen={preRegisterOpen}
        setPreRegisterOpen={setPreRegisterOpen}
      />
      <Header setPreRegisterOpen={setPreRegisterOpen} />
      <Intro setPreRegisterOpen={setPreRegisterOpen} />
      <HybridHarmony />

      <GetStarted />
      <Rescheduling />
      <Analytics />

      <EarlyAccess setPreRegisterOpen={setPreRegisterOpen} />
      <Footer />
    </Container>
  );
}

export default Marketing;
