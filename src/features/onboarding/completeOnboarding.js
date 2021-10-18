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

function UserDefaultWorkingHours({ setOnboardingPosition }) {
  const [loading, setLoading] = useState(false);
  function handleJoin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOnboardingPosition(6);
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
      <InnerTitle>We're all done!</InnerTitle>
      <InnerDesc>Hit the button below to get started</InnerDesc>
    </OnboardingCard>
  );
}

export default UserDefaultWorkingHours;
