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
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
function StageThree({ company, setCompany, progress, active }) {
  const [disabled, setDisabled] = useState(false);
  const [animate, setAnimate] = useState(active);
  const [input, setInput] = useState("");

  function handleClick() {
    setAnimate(false);
    setTimeout(() => {
      setCompany(input);
      progress();
    }, 400);
  }

  return (
    <InputContainer
      variants={ContainerAnim}
      initial="hidden"
      animate={animate ? "show" : "hidden"}
    >
      <EmailInput
        placeholder={"Your Company"}
        autoFocus
        value={input}
        onChange={(d) => setInput(d.currentTarget.value)}
        variants={item}
        key={0}
      />
      <motion.div variants={item} key={1}>
        <Button
          text={"Continue"}
          action={handleClick}
          color={"#fff"}
          arrow
          backgroundColor={"#010960"}
          disabled={disabled}
        />
      </motion.div>
    </InputContainer>
  );
}

export default StageThree;
