import styled, { css } from "styled-components";
import { TailSpin } from "react-loading-icons";
import { motion } from "framer-motion";

const ButtonItem = styled.button`
  background-color: ${(props) => props.theme.surface200};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition: 400ms;
  max-width: 90vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 4px;
  flex-shrink: 0;
  margin: 0px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.3px;

  -webkit-app-region: no-drag;
  min-width: 32px;
  height: 48px;
  padding: 0px 24px;
  width: 340px;
  border: 1px solid rgb(110, 121, 214);
  box-shadow: rgb(0 0 0 / 7%) 0px 1px 2px;
  background: #0d1afc;
  color: rgb(255, 255, 255);
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  ${(props) =>
    props.disabled ||
    (props.loading &&
      css`
        opacity: 0.6;
        transition: 400ms;
        cursor: not-allowed;
        :hover {
          box-shadow: unset;
        }
      `)}
  ${(props) =>
    props.skipButton &&
    css`
      width: 155px;
      background-color: #636bfd;
    `}
`;

const LoadingContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  position: absolute;
  top: 0;
  right: 0;
`;

function Button({ text, action, style, disabled, loading, skipButton }) {
  return (
    <ButtonItem
      onClick={() => action && !disabled && action()}
      style={{ ...style }}
      loading={loading}
      disabled={disabled}
      skipButton={skipButton}
    >
      {text}
      {loading && (
        <LoadingContainer
          initial={{ opacity: 0 }}
          animate={
            loading
              ? { opacity: 1, transition: { duration: 0.5 } }
              : { opacity: 0 }
          }
        >
          <TailSpin stroke="#fff" width={"18px"} strokeWidth={4} />
        </LoadingContainer>
      )}
    </ButtonItem>
  );
}

export default Button;
