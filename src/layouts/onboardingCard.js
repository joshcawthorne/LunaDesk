import styled from "styled-components";

import Button from "src/components/shared/button";

const CreateCompanyOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: rgb(211, 235, 243);
  background: radial-gradient(
    circle,
    rgba(211, 235, 243, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
`;

const TitleContainer = styled.div`
  margin-bottom: 42px;
  text-align: center;
  max-width: 410px;
`;

const Title = styled.div`
  font-weight: 500;
  line-height: 34px;
  font-size: 32px;
  color: #000;
  margin-bottom: 6px;
`;

const Desc = styled.div`
  line-height: 23px;
  font-size: 15px;
  opacity: 0.6;
`;

const CreateBoxContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
  width: 460px;
  padding: 24px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function OnboardingCard({
  title,
  description,
  buttonText,
  buttonAction,
  buttonLoading,
  buttonActive,
  skipButton,
  skipAction,
  children,
}) {
  return (
    <CreateCompanyOuterContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </TitleContainer>
      <CreateBoxContainer>{children}</CreateBoxContainer>
      <ButtonContainer>
        {skipButton && (
          <Button
            text={"Skip Step"}
            skipButton
            style={{ marginTop: "42px", marginRight: "10px" }}
            action={skipAction}
          />
        )}
        <Button
          text={buttonText}
          style={{ marginTop: "42px" }}
          action={buttonAction}
          loading={buttonLoading}
          disabled={!buttonActive}
        />
      </ButtonContainer>
    </CreateCompanyOuterContainer>
  );
}

export default OnboardingCard;
