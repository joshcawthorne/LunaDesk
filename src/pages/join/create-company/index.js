import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import OnboardingCard from "layouts/onboardingCard";
import UploadAvatar from "components/onboarding/uploadAvatar";
import Button from "components/shared/button";

const InnerTitle = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 5px;
`;

const InnerDesc = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  opacity: 0.6;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 4px;
  max-width: 360px;
  letter-spacing: 0.5px;
`;

function CreateCompany() {
  return (
    <OnboardingCard
      description={""}
      buttonText={"Continue"}
      buttonActive={false}
    >
      <InnerTitle>Check out you, you trendsetter</InnerTitle>
      <InnerDesc>
        Just enter a few pieces of info to get your company started with
        LunaDesk.
      </InnerDesc>
      <UploadAvatar />
    </OnboardingCard>
  );
}

export default CreateCompany;
