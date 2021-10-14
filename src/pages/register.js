import { useState, useEffect } from "react";
import styled from "styled-components";
import { Gradient } from "whatamesh";
import { motion } from "framer-motion";

import { registerUser } from "../services/auth";
import TextField from "src/components/shared/textField";
import OnboardingCard from "src/layouts/onboardingCard";
import Logo from "src/assets/svg/logo.svg";
import Button from "src/components/shared/button";

const RegistrationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 50px;
  line-height: 46px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  color: #25262a;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

const Label = styled.div`
  font-weight: 500;
  font-size: 13px;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
  color: #25262a;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 800;
`;

const InputFieldItem = styled.div`
  margin-bottom: 20px;
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  z-index: 5;
`;

const LogoContainer = styled.div`
  padding-top: 4px;
  cursor: pointer;
`;

const LoginButtonContainer = styled.div``;

const LoginButton = styled.div`
  color: #25262a;
  padding: 10px 40px;
  background: rgb(255 255 255 / 25%);
  cursor: pointer;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 8px;
  border: 2px solid #25262a44;
  font-weight: 800;
  transition: 400ms;
  :hover {
    transition: 400ms;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }
`;

const CanvasContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dfdfee;
  #gradient-canvas {
    width: 100%;
    height: 100%;
    --gradient-color-1: #dfdfee;
    --gradient-color-2: #e7d194;
    --gradient-color-3: #dfdfee;
    --gradient-color-4: #dd9dc2;
  }
`;

const variants = {
  visible: { opacity: 1, transition: { duration: 0.6 } },
  hidden: { opacity: 0 },
};

function Register() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
    setTimeout(() => {
      setCanvasReady(true);
    }, 1000);
  }, []);

  async function handleRegister() {
    setLoading(true);
    setError(false);
    setErrorMessage("");
    const attemptRegister = await registerUser({
      email: emailInput,
      password: passwordInput,
      inviteCode: "",
    });
    if (attemptRegister.error) {
      setError(true);
      setErrorMessage(attemptRegister.errorData.message);
      setLoading(false);
    } else {
      setRegisterSuccess(true);
      setLoading(false);
    }
  }
  return (
    <RegistrationContainer>
      <TopBar>
        <LogoContainer>
          <Logo fill={"#25262a"} width={"130px"} />
        </LogoContainer>
        <LoginButtonContainer>
          <LoginButton>Login</LoginButton>
        </LoginButtonContainer>
      </TopBar>
      <OnboardingCard
        transparent
        buttonText={"Register"}
        buttonAction={handleRegister}
        buttonActive
        error={error}
        buttonLoading={loading}
        errorMessage={errorMessage}
        checkEmail={registerSuccess}
        email={emailInput}
        hideLogo
      >
        <Title>Create your account</Title>

        <InputFieldItem>
          <Label>Your Work Email</Label>
          <TextField
            value={emailInput}
            setValue={setEmailInput}
            placeholder={"john@lunadesk.co"}
            noAutofill
            type={"email"}
          />
        </InputFieldItem>
        <InputFieldItem>
          <Label>Password</Label>
          <TextField
            value={passwordInput}
            setValue={setPasswordInput}
            type={"password"}
          />
        </InputFieldItem>
      </OnboardingCard>
      <CanvasContainer
        initial="hidden"
        animate={canvasReady ? "visible" : "hidden"}
        variants={variants}
      >
        <canvas id="gradient-canvas" data-transition-in />
      </CanvasContainer>
    </RegistrationContainer>
  );
}

export default Register;
