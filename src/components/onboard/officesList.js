import { useState, useEffect } from "react";
import styled from "styled-components";
import InputButton from "../shared/inputButton";
import { motion } from "framer-motion";

import OfficeListItem from "./officeListItem";

const OfficesListContainer = styled.div`
  padding: 20px 0px;
  overflow-y: auto;
  max-height: 300px;
  width: 100%;

  padding: 12px 15px;
  border: 2px solid transparent;
  border-radius: 22px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  width: calc(100% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  outline: none;
  overflow: hidden;
  margin-top: 20px;
`;

const OfficeItem = styled.div`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-bottom: 10px;
  padding: 10px 10px;
  transition: 200ms;
  border-radius: 10px;

  :hover {
    background-color: #0000003b;

    transition: 400ms;
  }
`;

const OfficeIconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const OfficeIconLetter = styled.div`
  color: #000;
  font-size: 24px;
  text-transform: uppercase;
  user-select: none;
`;

const OfficeTitle = styled.div`
  color: #fff;
  font-size: 20px;
`;

const CreateOfficePrompt = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CreateOfficeTitle = styled.div`
  margin-bottom: 10px;
`;

const OfficesListContainerInner = styled(motion.div)`
  height: 180px;
  width: 100%;
`;

const AnimLayer = styled(motion.div)``;

const ContainerAnim = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: "afterChildren",
      delayChildren: 0,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: "afterChildren",
      delayChildren: 0,
    },
  },
};

const ItemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function OfficesList({ offices, handleAddOffice, handleOfficeSelect }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 350);
  }, [offices]);
  return (
    <OfficesListContainer>
      <OfficesListContainerInner
        variants={ContainerAnim}
        initial="hidden"
        animate={animate ? "show" : "hidden"}
      >
        {offices.map((office, i) => (
          <AnimLayer key={i} variants={ItemAnim}>
            <OfficeListItem
              key={i}
              office={office}
              handleOfficeSelect={handleOfficeSelect}
            />
          </AnimLayer>
        ))}
      </OfficesListContainerInner>
      <CreateOfficePrompt>
        <CreateOfficeTitle>Can't find your Office?</CreateOfficeTitle>
        <InputButton text={"Add your Office"} action={handleAddOffice} />
      </CreateOfficePrompt>
    </OfficesListContainer>
  );
}

export default OfficesList;
