import React from "react";
import styled, { css } from "styled-components";

interface Props {
  error?: boolean;
}

const TextFieldItem = styled.input<Props>`
  margin: 0 8px 0 0;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  font-size: 13px;
  color: ${props => props.theme.textPrimary};
  appearance: none;
  height: 48px;
  padding: 12px;
  width: 100%;
  background: ${props => props.theme.textFieldBackground};
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 2px solid ${props => props.theme.modalBorder};
  box-sizing: border-box;
  transition: 400ms;
  ::placeholder {
    opacity: 1;
  }
  :focus {
    border-width: 2px;
    border-color: #2362dc;
    outline: none;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    transition: 400ms;
  }
  ${(props) =>
    props.error &&
    css`
      border-color: #e02f3c;
    `}
`;

interface TextField {
  value: string,
  setValue: (value: any) => void,
  type?: string,
  placeholder?: string,
  error?: boolean,
  autofocus?: boolean,
}

function TextField({ value, setValue, type, placeholder, error, autofocus }: TextField) {
  return (
    <TextFieldItem
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      placeholder={placeholder}
      name="new-password"
      id="new-password"
      autoComplete="new-password"
      list="autocompleteOff"
      type={type}
      error={error}
      autoFocus={autofocus}
    />
  );
}

export default TextField;
