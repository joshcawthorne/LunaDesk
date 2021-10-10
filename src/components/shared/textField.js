import React from "react";
import styled from "styled-components";

const TextFieldItem = styled.input`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s;
  color: ${(props) => props.theme.text100};
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

  ::placeholder {
    opacity: 0.4;
  }
  :focus {
    border-width: 3px;
    outline: none;
  }
`;

function TextField({ value, setValue, type, placeholder }) {
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
    />
  );
}

export default TextField;
