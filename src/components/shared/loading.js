import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import LoadingIcon from "./loadingAnimation";

const LoadingContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: #040419;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 150000000;
  flex-direction: column;
  color: #fff;
`;

const Text = styled(motion.div)`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

function Loading({ unmount }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 500);
  }, []);

  const ContainerAnim = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <LoadingContainer
      variants={ContainerAnim}
      initial="show"
      animate={!unmount ? "show" : "hidden"}
    >
      {ready && (
        <>
          <LoadingIcon
            scale={0.8}
            width={"230px"}
            animate={true}
            ring={true}
            intro
          />
        </>
      )}
    </LoadingContainer>
  );
}

export default Loading;
