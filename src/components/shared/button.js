import React from "react";
import styled from "styled-components";

import Arrow from "../../../assets/svg/buttonArrow.svg";

const ButtonContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.div``;

const ArrowContainer = styled.div`
  margin-left: 10px;
`;

function Button({ text, action, backgroundColor, color, style, arrow }) {
  return (
    <ButtonContainer
      style={{ ...style }}
      backgroundColor={backgroundColor}
      color={color}
    >
      <ButtonText>{text}</ButtonText>
      {arrow && (
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      )}
    </ButtonContainer>
  );
}

export default Button;
