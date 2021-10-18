import React from "react";
import styled, { css } from "styled-components";

const TextFieldItem = styled.input`
  margin: 0 8px 0 0;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  font-size: 13px;
  color: #282a30;
  appearance: none;
  height: 48px;
  padding: 12px;
  width: 100%;
  background: rgb(255 255 255 / 25%);
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.18);
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
  setValue: (value) => void,
  type?: string,
  placeholder?: string,
  error?: boolean,
}

function TextField({ value, setValue, type, placeholder, error }: TextField) {
  return (
    <TextFieldItem
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      placeholder={placeholder}
      name="new-password"
      id="new-password"
      autocomplete="new-password"
      list="autocompleteOff"
      type={type}
      error={error}
    />
  );
}

export default TextField;
