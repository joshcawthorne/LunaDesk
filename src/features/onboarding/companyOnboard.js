import { useState, useEffect } from "react";
import styled from "styled-components";

import OnboardingCard from "layouts/onboardingCard";
import InviteCodeInput from "./inviteCodeInput";
import { validateInviteCode } from "services/onboarding";
import { InnerTitle, InnerDesc } from "components/shared";

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
      setOnboardingPosition(10);
    }, 1100);
  }

  function handleBackButton() {
    setOnboardingPosition(0);
  }

  async function handleCodeSubmit() {
    const inviteCodeData = await validateInviteCode();
    console.log(inviteCodeData);
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
        backButton
        backAction={handleBackButton}
        errorMessage={errorMessage}
        userDisplay
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
