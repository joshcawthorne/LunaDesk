import React from "react";
import styled, { css } from "styled-components";

import Arrow from "../../../assets/svg/buttonArrow.svg";

const ButtonContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  transition: 400ms;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
      transition: 400ms;
    `}
`;

const ButtonText = styled.div``;

const ArrowContainer = styled.div`
  margin-left: 10px;
`;

function Button({
  text,
  action,
  backgroundColor,
  color,
  style,
  arrow,
  disabled,
}) {
  return (
    <ButtonContainer
      style={{ ...style }}
      backgroundColor={backgroundColor}
      color={color}
      onClick={() => action && action()}
      disabled={disabled}
      className="link"
      role="button"
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
