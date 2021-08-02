import React from "react";
import styled, { css } from "styled-components";

import mq from "../../utils/mq";

const StyledContainer = styled.div`
  width: calc(100% - 240px);
  //max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 240px;
  z-index: 3;

  ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}
`;

function Container(props) {
  return <StyledContainer {...props} />;
}

export default Container;
