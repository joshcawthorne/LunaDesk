import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Div100vh from "react-div-100vh";
import { scrollLocker } from "../../utils/scrollLocker";
import useOnclickOutside from "react-cool-onclickoutside";
import Loader from "react-loader-spinner";

import Button from "../shared/button";
import Arrow from "../../../assets/svg/arrow.svg";

const PreRegsiterPromptOuter = styled(motion.div)`
  width: 100vw;
  height: 100%;
  z-index: 5001;
  position: fixed;
  top: 0;
  overflow-x: hidden;
  max-width: 100%;
  left: 0;
  min-height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const PreRegsiterPromptInner = styled.div`
  padding: 40px;
  background: linear-gradient(311deg, #151819 0%, #0a2b3e 100%);
  z-index: 5001;
  position: relative;
  border-radius: 10px;
`;

const BackgroundLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  cursor: pointer;
  left: 0;
  background-color: #101829ad;
  z-index: 5000;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(30px);
  @-moz-document url-prefix() {
    background-color: #2d3547;
  }
`;

const BackArrow = styled.div`
  color: #d0d0d0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  max-width: 450px;
`;

const Subtext = styled.div`
  font-size: 18px;
  color: #fff;
  max-width: 500px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const EmailInput = styled.input`
  width: 100%;

  height: 52px;

  outline: none;
  backdrop-filter: blur(12px) saturate(100%);

  margin-right: 8px;

  padding: 0px 24px;
  border: 2px solid #2a2a2a;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
`;

const ArrowContainer = styled.div`
  transform: rotate(180deg);
  height: 25px;
  margin-right: 2.5px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin-left: 10px;
`;

const ContainerAnim = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    backdropFilter: "blur(30px)",
    transition: {
      duration: 0.8,
    },
  },
  unmount: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.4,
      delay: 0,
      ease: "easeIn",
    },
  },
};

function PreRegsiterPrompt({ preRegisterOpen, setPreRegisterOpen }) {
  const [unmount, setUnmount] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const ref = useOnclickOutside(() => {
    if (preRegisterOpen) {
      handleClose();
    }
  });

  function handleClose() {
    setUnmount(true);
    setTimeout(() => {
      setPreRegisterOpen(false);
      setUnmount(false);
      setEmail("");
      setDisabled(true);
    }, 1200);
  }

  function handleButtonClick() {
    setLoading(true);
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (validateEmail(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email]);

  useEffect(() => {
    if (preRegisterOpen) {
      scrollLocker.lock();
    } else {
      scrollLocker.unlock();
    }
  }, [preRegisterOpen]);

  if (!preRegisterOpen) {
    return null;
  }

  return (
    <PreRegsiterPromptOuter>
      <PreRegsiterPromptInner ref={ref}>
        <BackArrow onClick={() => handleClose()}>
          <ArrowContainer>
            <Arrow />
          </ArrowContainer>{" "}
          Back
        </BackArrow>
        <Title>Register for LunaDesk Early Access</Title>
        <Subtext>
          We’re gradually opening LunaDesk. Register here to recieve updates and
          be amongst the first to blast off with LunaDesk once it's ready!
        </Subtext>
        {loading ? (
          <LoadingContainer>
            <Loader
              type="TailSpin"
              color="#fff"
              height={20}
              width={20}
              style={{ marginTop: "5px;" }}
            />
            <LoadingText>Hold on a sec...</LoadingText>
          </LoadingContainer>
        ) : (
          <InputContainer>
            <EmailInput
              placeholder={"Email"}
              autoFocus
              value={email}
              onChange={(d) => setEmail(d.currentTarget.value)}
            />
            <Button
              text={"Continue"}
              color={"#fff"}
              arrow
              backgroundColor={"#010960"}
              disabled={disabled}
            />
          </InputContainer>
        )}
      </PreRegsiterPromptInner>
      <BackgroundLayer
        variants={ContainerAnim}
        initial="hidden"
        animate={!unmount ? "show" : "unmount"}
      />
    </PreRegsiterPromptOuter>
  );
}

export default PreRegsiterPrompt;
