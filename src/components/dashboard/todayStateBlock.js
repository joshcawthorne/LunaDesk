import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import InputButton from "../shared/inputButton";
import { motion } from "framer-motion";

import TodayInOfficeBlock from "./todayInOfficeBlock";
import mq from "../../utils/mq";

import WorkFromHomeImage from "./workFromHomeImage";
import WorkFromOfficeImage from "./workFromOfficeImage";

const TodayState = styled.div`
  background-color: #020320;
  color: #fff;

  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

const TodayStateContainer = styled.div`
  height: 350px;
  width: 400px;
  margin-right: 25px;
  border-radius: 10px;
  background-color: #6ecd96;
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.workingFrom === "home" &&
    css`
      background-color: #6ecd96;
      color: #000;
    `};
  ${(props) =>
    props.workingFrom === "office" &&
    css`
      background-color: #514dec;
    `};
  @media (max-width: 1100px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

const TodayStateText = styled.div`
  font-size: 48px;
  padding: 20px;
  line-height: 50px;
  letter-spacing: 1px;
  span {
    font-weight: bold;
  }
`;

const TodayStateButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 20px;
  margin-left: 20px;
`;

function TodayStateBlock() {
  const workFrom = "home";
  return (
    <TodayState>
      <TodayStateContainer workingFrom={"home"}>
        <TodayStateText>
          You're working from <span>home</span> today
        </TodayStateText>
        <TodayStateButton>
          <InputButton text={"Changed plans?"} padding={"10px 16px"} />
        </TodayStateButton>
        {workFrom === "office" ? (
          <WorkFromOfficeImage />
        ) : (
          <WorkFromHomeImage />
        )}
      </TodayStateContainer>
      <TodayInOfficeBlock />
    </TodayState>
  );
}

export default TodayStateBlock;
