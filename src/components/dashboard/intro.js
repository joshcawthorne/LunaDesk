import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const IntroContainer = styled.div`
  width: 100%;
`;

const IntroTopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  padding-top: 25px;
`;

const IntroText = styled.div`
  color: #fff;
  font-size: 38px;
`;

const CompanyInfo = styled.div`
  color: #fff;
  font-size: 38px;
`;

function Intro() {
  return (
    <IntroContainer>
      <IntroTopLine>
        <IntroText>Good Afternoon, Josh! 👋 </IntroText>
        <CompanyInfo>Lucky Duck</CompanyInfo>
      </IntroTopLine>
    </IntroContainer>
  );
}

export default Intro;
