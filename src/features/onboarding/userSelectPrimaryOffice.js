import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import OnboardingCard from "layouts/onboardingCard";
import { InnerTitle, InnerDesc } from "components/shared";

function UserSelectPrimaryOffice({ setOnboardingPosition }) {
  const [loading, setLoading] = useState(false);
  function handleJoin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOnboardingPosition(8);
    }, 1500);
  }
  return (
    <OnboardingCard
      description={""}
      buttonText={"Continue"}
      buttonActive={true}
      buttonAction={handleJoin}
      buttonLoading={loading}
    >
      <InnerTitle>
        Which office are you <span>normally</span> based in?
      </InnerTitle>
      <InnerDesc>
        This is just to setup an average week for you. You can tweak each week
        as much as you'd like, and can edit these settings later.
      </InnerDesc>
    </OnboardingCard>
  );
}

export default UserSelectPrimaryOffice;
