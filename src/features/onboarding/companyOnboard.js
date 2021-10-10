import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import OnboardingCard from "src/layouts/onboardingCard";
import Button from "src/components/shared/button";
import InviteCodeInput from "./inviteCodeInput";

const InnerTitle = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
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

const ErrorMessage = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  margin-top: 21px;
`;

function CompanyOnboard({ setOnboardingPosition }) {
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingCodeCheck, setLoadingCodeCheck] = useState(false);
  const [codeInputComplete, setCodeInputComplete] = useState(false);
  const [codeInputValue, setCodeInputValue] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (codeInputComplete) {
      console.log(codeInputValue);
    }
  }, [codeInputComplete]);

  function handleCreateCompany() {
    setLoadingCreate(true);
    setTimeout(() => {
      setOnboardingPosition(2);
    }, 1100);
  }

  function handleCodeSubmit() {
    //TEMP DEBUG WHILE API UNDER CONSTRUCTION
    setLoadingCodeCheck(true);
    setTimeout(() => {
      if (codeInputValue === "111111") {
        setLoadingCodeCheck(false);
        setInvalidCode(true);
        setErrorMessage(
          "Uh oh, that doesn't look like a code we recognise. Want to try again?"
        );
        setError(true);
      } else {
        setOnboardingPosition(3);
      }
    }, 1500);
  }

  return (
    <>
      <OnboardingCard
        description={""}
        buttonText={"Continue"}
        buttonActive={codeInputComplete}
        buttonAction={handleCodeSubmit}
        buttonLoading={loadingCodeCheck}
        subButton
        subText={"Alternatively"}
        subButtonText={"Create a new Company"}
        subButtonAction={handleCreateCompany}
        subButtonLoading={loadingCreate}
        subButtonActive={true}
        error={error}
        errorMessage={errorMessage}
      >
        <InnerTitle>Enter your invite code</InnerTitle>
        <InnerDesc>
          Company administrators can provide you with a code to join your
          company.
        </InnerDesc>
        <InviteCodeInput
          setCodeInputComplete={setCodeInputComplete}
          setCodeInputValue={setCodeInputValue}
        />
      </OnboardingCard>
    </>
  );
}

export default CompanyOnboard;
