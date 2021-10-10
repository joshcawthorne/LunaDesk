import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import OnboardingCard from "src/layouts/onboardingCard";
import ArrowRight from "src/assets/svg/icons/arrowRight.svg";
import LunaDeskLogo from "src/assets/svg/logoCollapsed.svg";

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

const AvatarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 10px;
`;

const CompanyLogo = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d1afc;
`;

const UserAvatarContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d1afc;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  height: 100%;
`;

function JoinCompany({ setOnboardingPosition }) {
  const [loading, setLoading] = useState(false);
  function handleBack() {
    setOnboardingPosition(1);
  }

  function handleJoin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOnboardingPosition(4);
    }, 1500);
  }

  return (
    <OnboardingCard
      description={""}
      buttonText={"Continue"}
      buttonActive={true}
      buttonAction={handleJoin}
      buttonLoading={loading}
      subButton
      subButtonText={"Back"}
      subButtonActive
      subButtonDanger
      subButtonAction={handleBack}
    >
      <AvatarContainer>
        <UserAvatarContainer></UserAvatarContainer>
        <ArrowContainer>
          <ArrowRight stroke={"#130F26"} width={"25px"} />
        </ArrowContainer>
        <CompanyLogo>
          <LunaDeskLogo width={"30px"} fill={"#fff"} />
        </CompanyLogo>
      </AvatarContainer>
      <InnerTitle>
        Join <span>LunaDesk Incoporated</span>?
      </InnerTitle>
      <InnerDesc>
        If this isn't the right company, hit the back button and let your
        company administrator know.
      </InnerDesc>
    </OnboardingCard>
  );
}

export default JoinCompany;
