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
  margin: ${(props) => props.margin};
  z-index: 10;
  transition: 400ms;
  font-weight: bold;
  letter-spacing: 0.3px;
  ${(props) =>
    !props.disabled &&
    css`
      :hover {
        background-color: rgba(0, 0, 0, 0.45);
        transition: 400ms;

        transform: translate(-2px, -2px);
        box-shadow: rgb(0 0 0 / 25%) 4px 6px 12px 2px;
      }
    `};

  }
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `}
`;

function InputButton({ disabled, action, text, margin }) {
  return (
    <InputButtonItem
      margin={margin ? margin : "0"}
      disabled={disabled}
      onClick={() => action()}
    >
      {text}
    </InputButtonItem>
  );
}

export default InputButton;