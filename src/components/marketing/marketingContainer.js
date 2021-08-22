import React from "react";
import styled, { css } from "styled-components";

import mq from "../../utils/mq";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 60px;
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
