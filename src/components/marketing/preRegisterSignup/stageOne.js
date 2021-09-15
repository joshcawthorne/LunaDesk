import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "../../shared/button";

const InputContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailInput = styled(motion.input)`
  width: 100%;
  height: 52px;
  outline: none;
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

const ContainerAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function StageOne({ email, setEmail, progress, active }) {
  const [disabled, setDisabled] = useState(true);
  const [animate, setAnimate] = useState(active);
  const [input, setInput] = useState("");

  function handleClick() {
    setAnimate(false);
    setTimeout(() => {
      setEmail(input);
      progress();
    }, 400);
  }

  function validEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  useEffect(() => {
    if (validEmail(input)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [input]);

  return (
    <InputContainer
      variants={ContainerAnim}
      initial="hidden"
      animate={animate ? "show" : "hidden"}
    >
      <EmailInput
        placeholder={"Email"}
        autoFocus
        value={input}
        onChange={(d) => setInput(d.currentTarget.value)}
        variants={item}
        key={0}
      />
      <motion.div variants={item} key={1}>
        <Button
          text={"Continue"}
          color={"#fff"}
          arrow
          backgroundColor={"#010960"}
          disabled={disabled}
          action={handleClick}
        />
      </motion.div>
    </InputContainer>
  );
}

export default StageOne;
