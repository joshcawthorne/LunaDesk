import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Login from "./auth/login";
import Register from "./auth/register";

const MarketingContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div``;

function Marketing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <MarketingContainer>
      {showLogin && <Login />}
      {showRegister && <Register />}
      <Title>Welcome to Who's In</Title>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowRegister(true)}>Register</button>
    </MarketingContainer>
  );
}

export default Marketing;
