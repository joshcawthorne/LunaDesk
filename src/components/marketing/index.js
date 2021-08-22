import React from "react";

import Header from "./header";
import Intro from "./introMarketingSection";
import CardsSection from "./cardsSection";
import OrganiseMeetings from "./organiseMeetings";
import Analytics from "./analyticsMarketing";
import WinnerSection from "./winnerSection";
import EarlyAccess from "./earlyAccess";
import Footer from "./footer";

function Marketing() {
  return (
    <div>
      <Header />
      <Intro />
      <CardsSection />
      <OrganiseMeetings />
      <Analytics />
      <WinnerSection />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default Marketing;
