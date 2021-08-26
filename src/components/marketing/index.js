import React, { useState } from "react";

import Header from "./header";
import Intro from "./introMarketingSection";
import CardsSection from "./cardsSection";
import OrganiseMeetings from "./organiseMeetings";
import Teams from "./teamsMarketing";
import Analytics from "./analyticsMarketing";
import WinnerSection from "./winnerSection";
import EarlyAccess from "./earlyAccess";
import Footer from "./footer";
import PreRegsiterPrompt from "./preRegsiterPrompt";

function Marketing() {
  const [preRegisterOpen, setPreRegisterOpen] = useState(false);
  return (
    <div>
      <PreRegsiterPrompt
        preRegisterOpen={preRegisterOpen}
        setPreRegisterOpen={setPreRegisterOpen}
      />
      <Header setPreRegisterOpen={setPreRegisterOpen} />
      <Intro setPreRegisterOpen={setPreRegisterOpen} />
      <CardsSection />
      <OrganiseMeetings />
      <Analytics />
      <Teams />
      <WinnerSection />
      <EarlyAccess setPreRegisterOpen={setPreRegisterOpen} />
      <Footer />
    </div>
  );
}

export default Marketing;
