import React from "react";
import styled, { css } from "styled-components";
import FullWidthText from "../../../utils/fullWidthText";
import useInView from "react-cool-inview";
import { motion } from "framer-motion";

const SectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "Monument Extended";
  font-weight: 900;
  color: #fff;
  margin: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  letter-spacing: 4px;
  width: 100%;
  padding: 0;
  text-transform: uppercase;
  margin-top: ${(props) => props.marginTop};
  ${(props) =>
    props.title &&
    css`
      background-color: #fc9238;
      background-image: linear-gradient(90deg, #e623bb 0%, #f8b84f 100%),
        linear-gradient(0deg, #ffffff, #ffffff);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    `}
`;

const Subtext = styled.div`
  font-family: "Monument Extended";
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  margin-top: ${(props) => props.subtitleMarginTop};
`;

function SectionTitle({ title, text, marginTop }) {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.4,
  });

  let delay = 0.1;

  if (!title) {
    delay = 0.3;
  }

  const ItemAnim = {
    hidden: {
      opacity: 0,
      y: "20px",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
      },
    },
  };
  return (
    <motion.div
      style={{ marginTop: marginTop, width: "100%" }}
      variants={ItemAnim}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      ref={observe}
    >
      <FullWidthText
        font="Monument Extended"
        title={title}
        style={{ marginTop: marginTop }}
        textStyle={{
          fontWeight: 900,
          letterSpacing: "1px",
          fill: "#fff",
        }}
      >
        {text}
      </FullWidthText>
    </motion.div>
  );
}

export default SectionTitle;
