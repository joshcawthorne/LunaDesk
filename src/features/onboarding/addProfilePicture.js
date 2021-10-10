import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import OnboardingCard from "src/layouts/onboardingCard";
import UploadIcon from "src/assets/svg/icons/upload.svg";
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

const InnerTitle = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 22px;
`;

const UploadBox = styled.div`
  width: 70%;
  margin: auto;
  height: 300px;
  border-style: dashed;
  border-width: 2px;
  border-color: #a6b9c2;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UploadIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const UploadText = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 245px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const UploadSubtext = styled.div`
  font-size: 12px;
  text-align: center;
  max-width: 245px;
  color: #bdccdc;
  font-weight: 500;
`;

function Welcome({ firstName, setOnboardingPosition }) {
  const [loading, setLoading] = useState(false);

  function handleContinue() {
    setLoading(true);
    setTimeout(() => {
      setOnboardingPosition(0);
      setLoading(false);
    }, 1500);
  }

  function handleSkip() {
    setOnboardingPosition(2);
  }

  return (
    <OnboardingCard
      title={"Nice to meet you, " + firstName + "!"}
      description={
        "Would you like to add a profile picture to your account to make it easier for your Team Members to find you?"
      }
      buttonText={"Continue"}
      buttonAction={handleContinue}
      buttonLoading={loading}
      buttonActive={true}
      skipAction={handleSkip}
      skipButton
    >
      <UploadBox>
        <UploadIconContainer>
          <UploadIcon width={"70px"} />
        </UploadIconContainer>
        <UploadText>
          Drop your photo in the box, or click here to browse
        </UploadText>
        <UploadSubtext>
          Image must be in either PNG, JPG or JPEG format, and no larger than
          400kb in size.
        </UploadSubtext>
      </UploadBox>
    </OnboardingCard>
  );
}

export default Welcome;
