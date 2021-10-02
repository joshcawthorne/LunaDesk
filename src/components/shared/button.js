import styled, { css } from "styled-components";

const ButtonItem = styled.button`
  background-color: ${(props) => props.theme.surface200};
  border-style: solid;
  border-width: 0px;
  padding: 24px 12px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-bottom: 15px;
  user-select: none;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  transition: 400ms;

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  ${(props) =>
    props.success &&
    css`
      background-color: ${props.theme.accentSuccess};
    `}

  ${(props) =>
    props.warning &&
    css`
      background-color: ${props.theme.accentWarning};
      color: ${(props) => props.theme.text200};
    `}

  ${(props) =>
    props.gradient &&
    css`
      background-color: rgb(252, 146, 56);
      background-image: linear-gradient(
          90deg,
          rgb(230, 35, 187) 0%,
          rgb(248, 184, 79) 100%
        ),
        linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255));
    `}

    ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      transition: 400ms;
      cursor: not-allowed;
      :hover {
        box-shadow: unset;
      }
    `}
`;

function Button({ text, action, style, warning, success, disabled, gradient }) {
  return (
    <ButtonItem
      onClick={() => action && !disabled && action()}
      warning={warning}
      success={success}
      gradient={gradient}
      style={{ ...style }}
      disabled={disabled}
    >
      {text}
    </ButtonItem>
  );
}

export default Button;
