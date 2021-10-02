import React from "react";
import styled from "styled-components";

const TextFieldItem = styled.input`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 8px 16px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  color: ${(props) => props.theme.text100};
  font-size: 16px;
  line-height: 24px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  width: 100%;
  box-sizing: border-box;
`;

function TextField({ value, setValue }) {
  return (
    <TextFieldItem
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      autoComplete={"off"}
    />
  );
}

export default TextField;
