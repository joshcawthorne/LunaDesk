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
  border: 1px solid rgb(223, 225, 228);
  border-radius: 4px;
  font-size: 13px;
  color: #282a30;
  appearance: none;
  transition: border 0.15s ease 0s;
  height: 48px;
  padding: 12px;
  width: 100%;
  :focus {
    border-color: #2362dc;
    outline: none;
  }
`;

function TextField({ value, setValue, type }) {
  return (
    <TextFieldItem
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      name="new-password"
      id="new-password"
      autocomplete="new-password"
      list="autocompleteOff"
      type={type}
    />
  );
}

export default TextField;
