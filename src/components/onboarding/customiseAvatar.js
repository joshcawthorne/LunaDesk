import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Modal from "../shared/modal";
import colorOptions from "src/data/avatarColourOptions";

const CustomiseAvatarOuterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProfileInitials = styled(motion.div)`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  line-height: 42px;
  font-weight: 600;
  z-index: 2;
  box-sizing: border-box;
  padding-bottom: 5px;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: 400ms;
  :hover {
    transform: translate3d(-2px, -2px, 0);
    transition: 400ms;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }
`;

const OptionsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  grid-gap: 1rem;
  margin-top: 20px;
  overflow-y: scroll;
  height: 430px;
  border-style: solid;
  border-color: #232632;
  border-width: 2px;
  border-radius: 10px;
  padding: 20px;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.008,
      delayChildren: 0,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      type: "spring",
      velocity: 20,
      stiffness: 80,
      damping: 2000,
    },
  },
};

function CustomiseAvatar({
  modalVisible,
  setModal,
  updateAvatarColours,
  profilePictureInitials,
}) {
  return (
    <CustomiseAvatarOuterContainer>
      <Modal
        title={"Customise Your Avatar"}
        subtext={"Pick a style that's 'you', whatever that might mean."}
        modalVisible={modalVisible}
        setModal={setModal}
      >
        <OptionsContainer
          variants={container}
          initial="hidden"
          animate={modalVisible ? "show" : "hidden"}
        >
          {colorOptions.map((option, i) => (
            <ProfileInitials
              key={i}
              variants={item}
              backgroundColor={option.background}
              color={option.color}
              onClick={() => updateAvatarColours(option)}
            >
              {profilePictureInitials}
            </ProfileInitials>
          ))}
        </OptionsContainer>
      </Modal>
    </CustomiseAvatarOuterContainer>
  );
}

export default CustomiseAvatar;
