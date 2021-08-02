import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";
import mq from "../../utils/mq";

const Container = styled(motion.div)`
  z-index: 10;
  ${mq.mobile(css`
    width: 100%;
  `)};
`;

const Title = styled(motion.div)`
  font-size: 32px;
  text-align: center;
  margin-bottom: 5px;
  ${mq.mobile(css`
    font-size: 24px;
  `)};
`;

const Desc = styled(motion.p)`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;
  white-space: normal;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  b {
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
    white-space: normal;
  }
`;

const InputContainer = styled(motion.div)``;

const InputOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleAnim = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      delay: 0,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 1,
    },
  },
};

const DescAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 1.1,
    },
  },
};

const InputAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 1.2,
    },
  },
};

const ButtonAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 1.25,
    },
  },
};

const ContainerAnim = {
  hidden: {
    height: 0,
    transition: { delay: 0.2 },
  },
  show: {
    height: "fit-content",
  },
};

function NameInput({ setFullname, setSelectedStage, setFinishedStageOne }) {
  const [nameValue, setNameValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [mount, setMount] = useState(true);

  useEffect(() => {
    if (nameValue.length > 2 && nameValue.includes(" ")) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nameValue]);

  function progress() {
    setMount(false);
    setTimeout(() => {
      setFullname(nameValue);
      setFinishedStageOne(true);
      setSelectedStage(1);
    }, 700);
  }

  return (
    <Container
      variants={ContainerAnim}
      initial="show"
      animate={mount ? "show" : "hidden"}
    >
      <Title
        variants={TitleAnim}
        initial="hidden"
        animate={mount ? "show" : "hidden"}
      >
        Complete your Profile
      </Title>
      <Desc
        variants={DescAnim}
        initial="hidden"
        animate={mount ? "show" : "hidden"}
      >
        First thing's first, <span>what's your full name?</span>
      </Desc>
      <InputOuterContainer>
        <InputContainer
          variants={InputAnim}
          initial="hidden"
          animate={mount ? "show" : "hidden"}
        >
          <InputField
            placeholder={"John Blogs"}
            type={"text"}
            value={nameValue}
            setValue={setNameValue}
            autofocus={true}
          />
        </InputContainer>
        <InputContainer
          variants={ButtonAnim}
          initial="hidden"
          animate={mount ? "show" : "hidden"}
        >
          <InputButton
            disabled={disabled}
            action={progress}
            text={"Continue"}
          />
        </InputContainer>
      </InputOuterContainer>
    </Container>
  );
}

export default NameInput;
