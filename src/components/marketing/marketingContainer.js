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
  @media (max-width: 500px) {
    padding: 10px 20px;
    max-width: 100%;
    margin: 0;
  }
`;

function Container(props) {
  return <StyledContainer {...props} />;
}

export default Container;
