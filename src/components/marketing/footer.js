import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";
import Logo from "../../../assets/svg/logo.svg";

const FooterContainerOuter = styled.div`
  background-color: #060606;
  padding: 15px 0;
  position: relative;
  border-width: 0px;
  border-style: solid;
  border-color: #ffffff28;
  border-top-width: 1px;
`;

const FooterContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: #ffffffb0;
  font-size: 12px;
  margin-top: 3px;
`;

const LogoContainer = styled.div``;

function Footer() {
  return (
    <FooterContainerOuter>
      <Container>
        <FooterContainerInner>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Title>© 2021 | Designed in Leeds, UK</Title>
        </FooterContainerInner>
      </Container>
    </FooterContainerOuter>
  );
}

export default Footer;
