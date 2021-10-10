import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "src/components/shared/button";
import ErrorIcon from "src/assets/svg/icons/error.svg";

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
  position: relative;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubButtonContainer = styled.div``;

const SubtextContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 32px 0;
  font-size: 18px;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  opacity: 0.6;
  max-width: 360px;
  letter-spacing: 0.5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  overflow: hidden;
  &:before,
  &:after {
    background-color: #000;
    opacity: 0.6;
    content: "";
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 40px;
    margin: 0 10px;
  }
`;

const ErrorContainer = styled(motion.div)`
  padding: 30px;
  border-radius: 10px;
  width: 460px;
  height: 40px;
  padding: 24px;
  background-color: #e02f3c;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  position: absolute;
  top: -100px;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ErrorIconContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const ErrorMessageContainer = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
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
  subButton,
  subButtonText,
  subButtonAction,
  subButtonLoading,
  subButtonActive,
  subButtonDanger,
  subText,
  error,
  errorMessage,
  children,
}) {
  return (
    <CreateCompanyOuterContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </TitleContainer>

      <CreateBoxContainer>
        {error && (
          <ErrorContainer
            initial={{ opacity: 0 }}
            animate={error ? { opacity: 1 } : { opacity: 0 }}
          >
            <ErrorIconContainer>
              <ErrorIcon stroke={"#fff"} width={"45px"} />
            </ErrorIconContainer>
            <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
          </ErrorContainer>
        )}
        {children}
      </CreateBoxContainer>

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
      {subButton && (
        <SubButtonContainer>
          {subText && <SubtextContainer>{subText}</SubtextContainer>}
          <Button
            text={subButtonText}
            action={subButtonAction}
            loading={subButtonLoading}
            disabled={!subButtonActive}
            style={{
              marginTop: subText ? "0px" : "17px",
              backgroundColor: subButtonDanger ? "#e02f3c" : "#0d1afc",
              border: subButtonDanger
                ? "1px solid #e02f3c"
                : "1px solid rgb(110, 121, 214)",
            }}
          />
        </SubButtonContainer>
      )}
    </CreateCompanyOuterContainer>
  );
}

export default OnboardingCard;
