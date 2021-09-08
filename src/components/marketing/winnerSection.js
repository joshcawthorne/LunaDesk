import React from "react";
import styled, { css } from "styled-components";
import { Parallax } from "react-scroll-parallax";
import Container from "./marketingContainer";

const WinnerOuterContainer = styled.div`
  background-color: #0a2b3e;
  padding: 300px 0;
  position: relative;
  overflow: hidden;
`;

function WinnerSection() {
  const n = 22;
  return (
    <WinnerOuterContainer>
      <Container></Container>
    </WinnerOuterContainer>
  );
}

export default WinnerSection;
