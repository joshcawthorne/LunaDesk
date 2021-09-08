import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Div100vh from "react-div-100vh";
import { scrollLocker } from "../../../utils/scrollLocker";
import useOnclickOutside from "react-cool-onclickoutside";
import Loader from "react-loader-spinner";

import Button from "../../shared/button";
import Arrow from "../../../../assets/svg/arrow.svg";
import StageOne from "./stageOne";
import StageTwo from "./stageTwo";
import StageThree from "./stageThree";
import StageFour from "./stageFour";
import { preRegister } from "../../../services/marketing";

const PreRegsiterPromptOuter = styled(motion.div)`
  width: 100vw;
  height: 100%;
  z-index: 998;
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

const PreRegsiterPromptInner = styled(motion.div)`
  padding: 40px;
  background-color: #121212;
  z-index: 5002;
  position: relative;
  border-radius: 10px;
`;

const BackgroundLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  cursor: pointer;
  left: 0;
  background-color: #121212;
  z-index: 5000;
  height: 100%;
  width: 100%;
`;

const BackArrow = styled(motion.div)`
  color: #d0d0d0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Title = styled(motion.div)`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  max-width: 450px;
`;

const Subtext = styled(motion.div)`
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
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  max-width: 450px;
  margin-left: 10px;
`;

const ContainerAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 0.7,
  },
  unmount: {
    opacity: 0,

    transition: {
      delay: 0.35,
    },
  },
};

const ModalAnim = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: [0, 1],
    y: 0,
    transition: {
      delay: 0.35,
    },
  },
  unmount: {
    opacity: [1, 0],
    y: -30,
    transition: {
      ease: "easeOut",
    },
  },
};

const BackAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const TitleAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
    },
  },
};

const SubtextAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
    },
  },
};

function PreRegsiterPrompt({ preRegisterOpen, setPreRegisterOpen }) {
  const [unmount, setUnmount] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [companyRoleInput, setCompanyRoleInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(0);
  const [registered, setRegistered] = useState(false);

  const ref = useOnclickOutside(() => {
    if (preRegisterOpen && !loading) {
      handleClose();
    }
  });

  function handleClose() {
    setUnmount(true);

    setTimeout(() => {
      setStage(0);
      setEmail("");
      setName("");
      setCompany("");
      setCompanyRoleInput("");
      setPreRegisterOpen(false);
      setUnmount(false);
      setEmail("");
      setDisabled(true);
    }, 500);
  }

  function handleButtonClick() {
    setLoading(true);
  }

  useEffect(() => {
    if (preRegisterOpen) {
      scrollLocker.lock();
    } else {
      scrollLocker.unlock();
    }
  }, [preRegisterOpen]);

  function emailProgress() {
    setStage(1);
  }

  function nameProgress() {
    setStage(2);
  }

  function companyProgress() {
    setStage(3);
  }

  function companyRoleProgress() {
    setLoading(true);
    handlePreRegister();
  }

  async function handlePreRegister(input) {
    setLoading(true);
    let registrationData = {
      email: email,
      fullName: name,
      companyName: company,
      companyRole: input,
    };
    console.log(registrationData);
    const register = await preRegister(registrationData);
    if (register) {
      setTimeout(() => {
        setRegistered(true);
        setLoading(false);
      }, 1000);
    }
  }

  const MarketingInputState = () => {
    switch (stage) {
      case 0:
        return (
          <StageOne
            email={email}
            setEmail={setEmail}
            progress={emailProgress}
            active={stage === 0}
          />
        );
      case 1:
        return (
          <StageTwo
            name={name}
            setName={setName}
            progress={nameProgress}
            active={stage === 1}
          />
        );
      case 2:
        return (
          <StageThree
            company={company}
            setCompany={setCompany}
            progress={companyProgress}
            active={stage === 2}
          />
        );
      case 3:
        return (
          <StageFour
            companyRole={companyRoleInput}
            setCompanyRole={setCompanyRoleInput}
            progress={handlePreRegister}
            active={stage === 3}
          />
        );
    }
  };

  if (!preRegisterOpen) {
    return null;
  }

  return (
    <PreRegsiterPromptOuter>
      <PreRegsiterPromptInner
        ref={ref}
        variants={ModalAnim}
        initial="hidden"
        animate={!unmount ? "show" : "unmount"}
      >
        {registered ? (
          <>
            <BackArrow onClick={() => handleClose()}>
              <ArrowContainer>
                <Arrow />
              </ArrowContainer>{" "}
              Back
            </BackArrow>
            <Title>Ready for lift-off!</Title>
            <Subtext>
              You're on the list! We'll email you with updates about LunaDesk,
              and with the all important early access information once we're
              ready. Thank you for registering!
            </Subtext>
          </>
        ) : (
          <>
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
              <>
                <BackArrow
                  variants={BackAnim}
                  initial="hidden"
                  animate={preRegisterOpen ? "show" : "hidden"}
                  onClick={() => handleClose()}
                >
                  <ArrowContainer>
                    <Arrow />
                  </ArrowContainer>{" "}
                  Back
                </BackArrow>
                <Title
                  variants={TitleAnim}
                  initial="hidden"
                  animate={preRegisterOpen ? "show" : "hidden"}
                >
                  Register for LunaDesk Early Access
                </Title>
                <Subtext
                  variants={SubtextAnim}
                  initial="hidden"
                  animate={preRegisterOpen ? "show" : "hidden"}
                >
                  We’re gradually opening LunaDesk. Register here to recieve
                  updates and be amongst the first to blast off with LunaDesk
                  once it's ready!
                </Subtext>

                <MarketingInputState />
              </>
            )}
          </>
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
