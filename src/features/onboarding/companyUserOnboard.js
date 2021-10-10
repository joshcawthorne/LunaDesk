import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";

import occupations from "src/utils/occupations";
import OnboardingCard from "src/layouts/onboardingCard";

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

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CompanyUserOnboard({ setOnboardingPosition }) {
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
    >
      <InnerTitle>
        What is your role at <span>LunaDesk Incoporated</span>?
      </InnerTitle>
      <InnerDesc>
        If this isn't the right company, hit the back button and let your
        company administrator know.
      </InnerDesc>
      <SearchContainer>
        <SelectSearch
          options={occupations}
          search
          filterOptions={fuzzySearch}
          placeholder={"Search for and Select Role"}
          debounce={1000}
        />
      </SearchContainer>
    </OnboardingCard>
  );
}

export default CompanyUserOnboard;
