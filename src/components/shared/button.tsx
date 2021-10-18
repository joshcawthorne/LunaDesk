import styled, { css } from "styled-components";
import { TailSpin } from "react-loading-icons";
import { motion } from "framer-motion";

interface Button {
  text: string,
  action: () => void,
  style: object,
  disabled: boolean,
  loading: boolean,
  skipButton: boolean
}

const ButtonItem = styled.button`
  user-select: none;
  cursor: pointer;
  max-width: 90vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  flex-shrink: 0;
  margin: 0px;
  font-size: 17px;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 0.4px;
  -webkit-app-region: no-drag;
  min-width: 32px;
  height: 48px;
  padding: 30px 30px;
  width: 340px;
  box-shadow: rgb(0 0 0 / 7%) 0px 1px 2px;
  font-weight: 800;
  background: #25262a;
  color: #fff;
  z-index: 50;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  transition: 400ms;
  :hover {
    transform: translate3d(-2px, -2px, 0);
    transition: 400ms;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      transition: 400ms;
      cursor: not-allowed;
      :hover {
        box-shadow: unset;
      }
    `}
  ${(props) =>
    props.loading &&
    css`
      opacity: 0.4;
      transition: 400ms;
      cursor: not-allowed;
      :hover {
        box-shadow: unset;
      }
    `}
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

function Button({ text, action, style, disabled, loading, skipButton }: Button) {
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
          <TailSpin
            stroke="#fff"
            width={"18px"}
            strokeWidth={4}
            style={{ overflow: "visible" }}
          />
        </LoadingContainer>
      )}
    </ButtonItem>
  );
}

export default Button;
