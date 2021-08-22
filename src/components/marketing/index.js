import React from "react";

import Header from "./header";
import Intro from "./introMarketingSection";
import CardsSection from "./cardsSection";
import OrganiseMeetings from "./organiseMeetings";

function Marketing() {
  return (
    <div>
      <Header />
      <Intro />
      <CardsSection />
      <OrganiseMeetings />
    </div>
  );
}

export default Marketing;
