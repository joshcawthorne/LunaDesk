import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";
import SectionTitle from "./shared/sectionTitle";

const HybridHarmonyContainer = styled.div`
  background-color: #012031;
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

const SectionText = styled.div`
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

function HybridHarmony() {
  return (
    <HybridHarmonyContainer>
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
          <SectionText>
            No more spreadsheets, calendar invites or complex calculations.
            Instantly see who’s where and when.
          </SectionText>
        </InnerContainer>
      </Container>
    </HybridHarmonyContainer>
  );
}

export default HybridHarmony;
