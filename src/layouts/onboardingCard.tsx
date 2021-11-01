import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStoreState } from "store/hooks"

import Button from "components/shared/button";

import BackArrow from "assets/svg/backArrow.svg";
import ErrorIcon from "assets/svg/icons/error.svg";
import EmailIcon from "assets/svg/icons/email.svg";
import Logo from "assets/svg/logo.svg";
import React from "react";

interface OnboardingCard {
  title?: string,
  description?: string,
  buttonText: string,
  buttonAction?: () => void,
  buttonLoading?: boolean,
  buttonActive?: boolean,
  skipButton?: boolean
  skipAction?: () => void,
  subButton?: boolean,
  subButtonText?: string,
  subButtonAction?: () => void,
  subButtonLoading?: boolean,
  subButtonActive?: boolean,
  subButtonDanger?: boolean,
  subText?: string,
  error?: boolean,
  errorMessage?: string,
  checkEmail?: boolean,
  email?: string,
  backButton?: boolean,
  backAction?: () => void,
  hideLogo?: boolean,
  animate?: boolean,
  style?: object,
  belowButtonText?: boolean,
  belowButtonTextContent?: string,
  belowButtonAction?: () => void,
  children?: any,
}

const CreateCompanyOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: transparent;
`;

const TitleContainer = styled.div`
  margin-bottom: 42px;
  text-align: center;
  max-width: 410px;
  z-index: 5;
`;

const Title = styled.div`
  font-weight: 500;
  line-height: 34px;
  font-size: 32px;
  color: #000;
  margin-bottom: 6px;
  z-index: 5;
`;

const Desc = styled.div`
  line-height: 23px;
  font-size: 15px;
  opacity: 0.6;
  z-index: 5;
`;

const CreateBoxContainer = styled(motion.div)`
  padding: 60px;
  width: 460px;
  padding: 35px;
  background: ${props => props.theme.modalBackground};
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 8px;
  border: 1px solid;
  border-color: ${props => props.theme.modalBorder};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  position: relative;
  z-index: 15;
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
  z-index: 5;
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
  color: ${props => props.theme.textPrimary};
  &:before,
  &:after {
    background-color: ${props => props.theme.textPrimary};
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
  padding: 18px 35px;
  border-radius: 10px;
  width: 460px;
  background-color: #e02f3c;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background: #f30313a7;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  top: -110px;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 5;
  color: #fff;
`;

const EmailContainer = styled(motion.div)`
  padding: 18px 35px;
  border-radius: 10px;
  width: 460px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background: #2de999;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 8px;
  color: #25262a;
  position: absolute;
  top: -110px;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 5;
`;

const ModalIconContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const ModalMessageContainer = styled.div`
  font-size: 16px;
  letter-spacing: 0.1px;
  font-weight: 800;
`;

const BackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  width: fit-content;
  user-select: none;
  cursor: pointer;
`;

const BackButtonText = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.textPrimary};
  font-weight: 500;
  line-height: 14px;
  margin-left: 5px;
`;

const UserContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  padding: 10px 10px;
  background: rgb(255 255 255 / 25%);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 5;
`;

const AnimLayer = styled(motion.div)`
  z-index: 10;
`;

const ButtonInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BelowButtonText = styled.div`
  margin-top: 15px;
  cursor: pointer;
  color: ${props => props.theme.textPrimary};
`;

const BelowButtonTextContent = styled.div``;

const ThemeToggleTransitionLayerContainer = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-color:${props => props.theme.gradientColor1};
    z-index: 200;
`;


const ContainerAnim = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const ButtonAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const SubButtonTextAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const SubButtonAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const ThemeTransitionAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,


  },
};

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
  checkEmail,
  email,
  backButton,
  backAction,
  hideLogo,
  animate = true,
  style,
  belowButtonText,
  belowButtonTextContent,
  belowButtonAction,
  children,
}: OnboardingCard) {

  const lightMode = useStoreState((state) => state.preferences.lightMode);
  const [themeTransition, setThemeTransition] = useState(false);
  const [themeTransitioning, setThemeTransitioning] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    } else {
      setThemeTransition(true);
      setThemeTransitioning(false);
      setTimeout(() => {
        setThemeTransitioning(true);
      }, 500);
      setTimeout(() => {
        setThemeTransition(false);
      }, 700);
    }

  }, [lightMode]);

  return (
    <CreateCompanyOuterContainer>
      {themeTransition && (
        <ThemeToggleTransitionLayerContainer initial="show"
          animate={themeTransitioning ? "hidden" : "show"}
          variants={ThemeTransitionAnim} />
      )}
      {!hideLogo && (
        <LogoContainer>
          <Logo width={"130px"} fill={lightMode ? "#25262a" : "#fff"} />
        </LogoContainer>
      )}
      <TitleContainer>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </TitleContainer>

      <CreateBoxContainer
        initial="hidden"
        animate={animate ? "show" : "hidden"}
        variants={ContainerAnim}
        style={{ ...style }}
      >
        {backButton && (
          <BackButtonContainer onClick={() => backAction()}>
            <BackArrow width={"20px"} stroke={lightMode ? "#25262a" : "#fff"} />
            <BackButtonText>Back</BackButtonText>
          </BackButtonContainer>
        )}
        {error && (
          <ErrorContainer
            initial={{ opacity: 0 }}
            animate={error ? { opacity: 1 } : { opacity: 0 }}
          >
            <ModalIconContainer>
              <ErrorIcon stroke={"#fff"} width={"45px"} />
            </ModalIconContainer>
            <ModalMessageContainer>{errorMessage}</ModalMessageContainer>
          </ErrorContainer>
        )}
        {checkEmail && (
          <EmailContainer
            initial={{ opacity: 0 }}
            animate={checkEmail ? { opacity: 1 } : { opacity: 0 }}
          >
            <ModalIconContainer>
              <EmailIcon stroke={"#25262a"} width={"45px"} />
            </ModalIconContainer>
            <ModalMessageContainer>
              An email has been sent to {email}
            </ModalMessageContainer>
          </EmailContainer>
        )}
        {children}
      </CreateBoxContainer>
      <AnimLayer
        initial="hidden"
        animate={animate ? "show" : "hidden"}
        variants={ButtonAnim}
      >
        <ButtonContainer>
          {skipButton && (
            <Button
              text={"Skip Step"}
              skipButton={false}
              style={{ marginTop: "42px", marginRight: "10px" }}
              action={skipAction}
              loading={false}
              disabled={false}
            />
          )}
          <ButtonInnerContainer>
            <Button
              text={buttonText}
              style={{ marginTop: "42px" }}
              action={buttonAction}
              loading={buttonLoading}
              disabled={!buttonActive}
              skipButton={false}
            />
            {belowButtonText && (
              <BelowButtonText onClick={() => belowButtonAction()}>
                <BelowButtonTextContent>{belowButtonTextContent}</BelowButtonTextContent>
              </BelowButtonText>
            )}
          </ButtonInnerContainer>
        </ButtonContainer>
        {subButton && (
          <SubButtonContainer>
            {subText && <SubtextContainer>{subText}</SubtextContainer>}

            <Button
              text={subButtonText}
              action={subButtonAction}
              loading={subButtonLoading}
              disabled={!subButtonActive}
              skipButton={false}
              style={{
                marginTop: subText ? "0px" : "17px",

                backgroundColor: subButtonDanger ? "#ff6b98" : "#25262a",
                border: subButtonDanger
                  ? "1px solid #ff6b98"
                  : "1px solid #25262a",
              }}
            />
          </SubButtonContainer>
        )}
      </AnimLayer>
    </CreateCompanyOuterContainer>
  );
}

export default OnboardingCard;
