import { useState, useEffect } from "react";
import styled from "styled-components";
import { supabase } from "../../utils/supabaseClient";

import EmailSignup from "./emailSignup";
import useOnclickOutside from "react-cool-onclickoutside";

import GoogleLogo from "../../../assets/svg/google.svg";
import AppleLogo from "../../../assets/svg/apple.svg";
import EmailLogo from "../../../assets/svg/email-svgrepo-com.svg";

const RegisterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: #000000bd;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const RegisterModal = styled.div`
  padding: 60px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: linear-gradient(
      240.45deg,
      #ffd771 -133.75%,
      rgba(255, 215, 113, 0) 99.56%
    ),
    linear-gradient(100.47deg, #5c6ae4 -20.78%, #c84c4c 155.66%);
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  opacity: 0.8;
  max-width: 450px;
  margin-bottom: 40px;
`;

const Divider = styled.div`
  margin: 40px 0px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputLabel = styled.div``;

const InputField = styled.input`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  width: 270px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
`;

const InputButton = styled.div`
  padding: 15px 20px;
  background-color: #3898ec;
  color: #fff;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
  margin-top: 10px;
`;

const SignupButton = styled.div`
  background-color: ${(props) => props.color};
  padding: 20px 10px;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 20px;
  margin-bottom: 15px;
  user-select: none;
  cursor: pointer;
`;

const ButtonText = styled.div`
  margin-left: 15px;
  font-size: 18px;
`;

function Register({ setShowRegister, showRegister }) {
  const [loginWithEmail, setLoginWithEmail] = useState(false);

  const handleLoginWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        redirectTo: process.env.BASE_DOMAIN + "welcome",
      }
    );
  };

  const handleLoginWithEmail = async () => {
    setLoginWithEmail(true);
  };

  const ref = useOnclickOutside(() => {
    if (showRegister) {
      setShowRegister(false);
    }
  });

  return (
    <RegisterContainer>
      <RegisterModal ref={ref}>
        <Title>Welcome to LunaDesk</Title>
        <Desc>
          You're moments away from revolutionising your office's hybrid work
          woes.
        </Desc>
        {loginWithEmail ? (
          <EmailSignup />
        ) : (
          <>
            <SignupButton color={"#040708"}>
              <AppleLogo fill={"#fff"} width={"24px"} />
              <ButtonText>Sign up with Apple</ButtonText>
            </SignupButton>
            <SignupButton
              color={"#3d7eed"}
              onClick={() => handleLoginWithGoogle()}
            >
              <GoogleLogo fill={"#fff"} width={"24px"} />
              <ButtonText>Sign up with Google</ButtonText>
            </SignupButton>
            <SignupButton
              color={"#5c3f43"}
              onClick={() => handleLoginWithEmail()}
            >
              <EmailLogo fill={"#fff"} width={"24px"} />
              <ButtonText>Sign up with Email</ButtonText>
            </SignupButton>
          </>
        )}
      </RegisterModal>
    </RegisterContainer>
  );
}

export default Register;
