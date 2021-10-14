import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import useOnclickOutside from "react-cool-onclickoutside";
import { motion } from "framer-motion";

import BackArrow from "src/assets/svg/backArrow.svg";

const ModalOuterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1005;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  @-moz-document url-prefix() {
    background-color: #2d3547;
  }
`;

const ModalContainer = styled(motion.div)`
  padding: ${(props) => props.padding};
  background: rgb(255 255 255 / 25%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: initial;
  border-radius: 10px;
  width: 95%;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  overflow-y: auto;
`;

const Title = styled.div`
  font-weight: 500;
  line-height: 34px;
  font-size: 38px;
  color: #252631;
  margin-bottom: 6px;
  z-index: 5;
`;

const Subtext = styled.div`
  font-weight: 500;
  max-width: 600px;
  font-size: 21px;
  opacity: 0.7;
  color: #252631;
  margin-bottom: 6px;
  z-index: 5;
`;

const BackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const BackButtonText = styled.div`
  font-size: 18px;
  color: #25262a;
  font-weight: 500;
  line-height: 14px;
  margin-left: 5px;
`;

const ContentContainer = styled.div``;

const ContainerAnim = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

function Modal({
  children,
  title,
  modalVisible,
  setModal,
  subtext,
  height = "600px",
  maxWidth = "800px",
  padding = "40px",
}) {
  const [visible, setVisible] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const ref = useOnclickOutside(() => {
    if (modalVisible) {
      setTransitioning(false);
      transitionClose();
    }
  });

  useEffect(() => {
    if (visible) {
      transitionClose();
    } else {
      setVisible(modalVisible);
      setTransitioning(!modalVisible);
    }
  }, [modalVisible]);

  function transitionClose() {
    setTransitioning(true);
    setTimeout(() => {
      setVisible(false);
      setTransitioning(false);
      setModal(false);
    }, 500);
  }
  if (!visible) {
    return null;
  }
  return (
    <ModalOuterContainer>
      <ModalContainer
        ref={ref}
        height={height}
        maxWidth={maxWidth}
        padding={padding}
        initial="hidden"
        animate={transitioning ? "out" : "show"}
        variants={ContainerAnim}
      >
        <BackButtonContainer onClick={() => transitionClose()}>
          <BackArrow stroke={"#25262a"} width={"20px"} />
          <BackButtonText>Back</BackButtonText>
        </BackButtonContainer>
        <Title>{title}</Title>
        <Subtext>{subtext}</Subtext>
        <ContentContainer>{children}</ContentContainer>
      </ModalContainer>
    </ModalOuterContainer>
  );
}

export default Modal;
