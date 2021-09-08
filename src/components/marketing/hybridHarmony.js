import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";
import SectionTitle from "./shared/sectionTitle";

const HybridHarmonyContainer = styled.div`
  background-color: #012031;
  color: #fff;
  width: 100%;
  padding-top: 150px;
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

function HybridHarmony() {
  return (
    <HybridHarmonyContainer>
      <Container>
        <InnerContainer>
          <SectionTitle text={"HYBRID HARMONY"} title />
          <SectionTitle
            text={"YOUR TEAM'S NEVER KNOWN ANYTHING LIKE IT"}
            marginTop={"-2%"}
          />
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
