import { useState } from "react";
import styled from "styled-components";
import Button from "./shared/inputButton";

import Login from "./auth/login";
import Register from "./auth/register";

const MarketingContainer = styled.div`
  background-color: #040419;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: #fff;
  font-size: 58px;
`;

const Desc = styled.div`
  color: #fff;
  font-size: 28px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div``;

function Marketing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  function handleLoginButton() {
    setShowLogin(true);
  }

  function handleRegisterButton() {
    setShowRegister(true);
  }

  return (
    <MarketingContainer>
      {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} />}
      {showRegister && (
        <Register
          setShowRegister={setShowRegister}
          showRegister={showRegister}
        />
      )}
      <Title>Welcome to Work From</Title>
      <Desc>Marketing pages are for those blessed with time.</Desc>
      <ButtonContainer>
        <Button action={handleLoginButton} text={"Login"} />
        <Button action={handleRegisterButton} text={"Register"} />
      </ButtonContainer>
    </MarketingContainer>
  );
}

export default Marketing;
