import React from "react";
import styled from "styled-components";

import Container from "../../components/shared/container";
import SectionTitle from "./shared/sectionTitle";

const AnalyticsOuterContainer = styled.div`
  padding: 100px 0;
  position: relative;

  background: radial-gradient(
      circle at 15% 50%,
      #2c2250,
      rgba(255, 255, 255, 0) 25%
    ),
    radial-gradient(circle at 85% 30%, #3340b963, rgba(255, 255, 255, 0) 25%);
  background-color: #141718;
  color: #fff;
`;

const AnalyticsInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentSection = styled.div``;
const LeftContent = styled.div``;
const RightContent = styled.div``;
const Paragraph = styled.div``;

function Analytics() {
  return (
    <AnalyticsOuterContainer>
      <Container style={{ height: "100%" }}>
        <AnalyticsInnerContainer>
          <SectionTitle text={"START BEING ITK"} title />
          <SectionTitle text={"THANKS TO ANALYTICS"} marginTop={"-3%"} />
          <ContentSection>
            <LeftContent></LeftContent>
            <RightContent>
              <Paragraph>
                Understand your team better. LunaDesk comes chock with built-in
                analytics to help you understand which Office days are the
                busiest, maximise face-to-face contact without reducing Home
                days, and discover how your team is adapting to the new normal.
              </Paragraph>
            </RightContent>
          </ContentSection>
        </AnalyticsInnerContainer>
      </Container>
    </AnalyticsOuterContainer>
  );
}

export default Analytics;
