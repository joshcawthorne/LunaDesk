import styled, { css } from "styled-components";

const InputButtonItem = styled.button`
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `}
`;

function InputButton({ disabled, action, text }) {
  return (
    <InputButtonItem disabled={disabled} onClick={() => action()}>
      {text}
    </InputButtonItem>
  );
}

export default InputButton;
