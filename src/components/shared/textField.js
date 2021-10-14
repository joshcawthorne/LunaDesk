import React from "react";
import styled, { css } from "styled-components";

const TextFieldItem = styled.input`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s;
  color: ${(props) => props.theme.text100};
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #dfe1e4;
  border-radius: 4px;
  font-size: 13px;
  color: #282a30;
  appearance: none;
  transition: border 0.15s ease 0s;
  height: 48px;
  padding: 12px;
  width: 100%;
  background-color: #f4f5fc;
  border-color: #2362dc;
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

function TextField({ value, setValue, type, placeholder, error }) {
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
