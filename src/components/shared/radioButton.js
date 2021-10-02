import React from "react";
import styled from "styled-components";

import Tickbox from "./tickBox";

const RadioButtonContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.surface300};
  margin: 15px 0;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 400ms;
  :hover {
    background-color: ${(props) => props.theme.surface400};
    transition: 400ms;
  }
`;

const Label = styled.div`
  color: ${(props) => props.theme.text300};
  margin-left: 15px;
`;

const Input = styled.input``;

function RadioButton({ label, active, action, value }) {
  return (
    <RadioButtonContainer onClick={() => action(value)}>
      <Tickbox active={active} />
      <Label>{label}</Label>
    </RadioButtonContainer>
  );
}

export default RadioButton;
