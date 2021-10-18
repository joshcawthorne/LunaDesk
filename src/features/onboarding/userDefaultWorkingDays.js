import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import OnboardingCard from "layouts/onboardingCard";

const InnerTitle = styled.div`
  font-size: 28px;
  text-align: center;
  span {
    font-weight: 600;
  }
`;

const InnerDesc = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  opacity: 0.6;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 8px;
  max-width: 360px;
  letter-spacing: 0.5px;
`;

function UserDefaultWorkingDays({ setOnboardingPosition }) {
  const [loading, setLoading] = useState(false);
  function handleJoin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOnboardingPosition(7);
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
        Which hours do you <span>normally</span> work?
      </InnerTitle>
      <InnerDesc>
        This is just to setup an average week for you. You can tweak each week
        as much as you'd like, and can edit these settings later.
      </InnerDesc>
    </OnboardingCard>
  );
}

export default UserDefaultWorkingDays;
