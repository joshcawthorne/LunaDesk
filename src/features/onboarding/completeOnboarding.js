import { useState } from "react";
import styled from "styled-components";

import OnboardingCard from "layouts/onboardingCard";
import { InnerTitle, InnerDesc } from "components/shared";

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
