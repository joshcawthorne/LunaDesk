import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "../shared/button";
import Container from "./marketingContainer";
import Logo from "../../../assets/svg/logo.svg";

const HeaderOuterContainer = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(6, 6, 6, 0.4);
  backdrop-filter: blur(25px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div``;

const RightContent = styled.div``;

function Header({ setPreRegisterOpen }) {
  function handleClick() {
    setPreRegisterOpen(true);
  }
  return (
    <HeaderOuterContainer>
      <Container>
        <HeaderContainer>
          <LeftContent>
            <Logo />
          </LeftContent>
          <RightContent>
            <Button
              text={"Request Early Access"}
              arrow
              backgroundColor={"#010960"}
              color={"#fff"}
              action={handleClick}
            />
          </RightContent>
        </HeaderContainer>
      </Container>
    </HeaderOuterContainer>
  );
}

export default Header;
