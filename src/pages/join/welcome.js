import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import OnboardingCard from "src/layouts/onboardingCard";
import TextField from "src/components/shared/textField";

const Label = styled.div`
  font-weight: 500;
  font-size: 13px;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.5;
`;

const InputFieldItem = styled.div`
  margin-bottom: 20px;
`;

const UrlInputContainer = styled.div`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s;
  color: ${(props) => props.theme.text100};
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgb(223, 225, 228);
  border-radius: 4px;
  font-size: 13px;
  color: rgb(40, 42, 48);
  appearance: none;
  transition: border 0.15s ease 0s;
  height: 48px;
  padding: 12px;
  width: 100%;
  display: flex;
  :focus-within {
    border-color: #2362dc;
    outline: none;
  }
`;

const PreText = styled.div`
  opacity: 0.5;
`;

const UrlInput = styled.input`
  background-color: transparent;
  border-width: 0px;
  border-style: solid;
  outline: none;
  width: 100%;
  padding: 0;
  height: 100%;
  margin-top: 2px;
  color: #282a30;
  margin-left: 1px;
`;

function Welcome({ nameInput, setNameInput, setonboardingPosition }) {
  const [loading, setLoading] = useState(false);

  function handleContinue() {
    setLoading(true);
    setTimeout(() => {
      setonboardingPosition(1);
      setLoading(false);
    }, 1500);
  }

  return (
    <OnboardingCard
      title={"Welcome to LunaDesk"}
      description={
        "It's great to have you onboard! We just need a few quick bits of info from you to get started..."
      }
      buttonText={"Continue"}
      buttonAction={handleContinue}
      buttonLoading={loading}
      buttonActive={true}
    >
      <InputFieldItem>
        <Label>Your Full Name</Label>
        <TextField value={nameInput} setValue={setNameInput} type={"text"} />
      </InputFieldItem>
    </OnboardingCard>
  );
}

export default Welcome;
