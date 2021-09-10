import React, { useState, useEffect } from "react";
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

import { scrollLocker } from "../../utils/scrollLocker";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #000;
`;

function Marketing({ isLoading }) {
  const [preRegisterOpen, setPreRegisterOpen] = useState(false);
  const [introAnim, setIntroAnim] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    scrollLocker.lock();
    if (!isLoading) {
      setIntroAnim(true);
      setTimeout(() => {
        scrollLocker.unlock();
      }, 2300);
    }
  }, [isLoading]);

  return (
    <Container>
      <PreRegsiterPrompt
        preRegisterOpen={preRegisterOpen}
        setPreRegisterOpen={setPreRegisterOpen}
      />
      <Header setPreRegisterOpen={setPreRegisterOpen} />
      <Intro introAnim={introAnim} setPreRegisterOpen={setPreRegisterOpen} />
      <HybridHarmony introAnim={introAnim} />

      <GetStarted />
      <Rescheduling />
      <Analytics />

      <EarlyAccess setPreRegisterOpen={setPreRegisterOpen} />
      <Footer />
    </Container>
  );
}

export default Marketing;
