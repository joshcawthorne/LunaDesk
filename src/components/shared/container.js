import React from "react";
import styled, { css } from "styled-components";

import mq from "../../utils/mq";

const StyledContainerOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1070px;
  padding: 10px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}
`;

function Container(props) {
  return (
    <StyledContainerOuter>
      <StyledContainer {...props} />
    </StyledContainerOuter>
  );
}

export default Container;
