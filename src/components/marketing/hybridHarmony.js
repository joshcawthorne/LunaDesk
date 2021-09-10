import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInView from "react-cool-inview";
import { motion } from "framer-motion";

import Container from "./marketingContainer";
import SectionTitle from "./shared/sectionTitle";

const HybridHarmonyContainer = styled(motion.div)`
  background-color: #0a1e2f;
  color: #fff;
  width: 100%;
  padding-top: 150px;
  @media (max-width: 1000px) {
    padding-top: 50px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionText = styled(motion.div)`
  margin-top: 50px;
  max-width: 749px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 75px;
`;

const Desktop = styled.div`
  width: 100%;
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Mobile = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const TextAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const ContainerAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

function HybridHarmony({ introAnim }) {
  const { observe, inView } = useInView({
    threshold: 0.2,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  return (
    <HybridHarmonyContainer
      variants={ContainerAnim}
      initial="hidden"
      animate={introAnim ? "show" : "hidden"}
    >
      <Container>
        <InnerContainer>
          <SectionTitle text={"HYBRID HARMONY"} title />
          <Desktop>
            <SectionTitle
              text={"YOUR TEAM'S NEVER KNOWN ANYTHING LIKE IT"}
              marginTop={"-2%"}
            />
          </Desktop>
          <Mobile>
            <SectionTitle text={"YOUR TEAM'S NEVER"} />
            <SectionTitle text={"KNOWN ANYTHING LIKE IT"} />
          </Mobile>
          <SectionText
            ref={observe}
            variants={TextAnim}
            initial="hidden"
            animate={animate ? "show" : "hidden"}
          >
            No more spreadsheets, calendar invites or complex calculations.
            Instantly see who’s where and when.
          </SectionText>
        </InnerContainer>
      </Container>
    </HybridHarmonyContainer>
  );
}

export default HybridHarmony;
