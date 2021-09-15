import React from "react";
import styled, { css } from "styled-components";

import mq from "../../utils/mq";

const ContainerOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  padding: 10px 60px;
  ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}
  @media(max-width: 800px) {
    padding: 0px 20px;
    max-width: 100%;
  }
  @media (max-width: 500px) {
    padding: 10px 20px;
    max-width: 100%;
    margin: 0;
  }
`;

function Container(props) {
  return (
    <ContainerOuter>
      <StyledContainer {...props} />
    </ContainerOuter>
  );
}

export default Container;
