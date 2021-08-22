import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";

const AnalyticsOuterContainer = styled.div`
  padding: 100px 0;
  position: relative;
  height: 600px;
  background-color: #04035a;
`;

const AnalyticsInnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TextContainer = styled.div`
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 44px;
  line-height: 55px;
  color: #ffffff;
  margin-bottom: 30px;
  width: 360px;
  text-align: right;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #8a8f98;
  width: 460px;
  span {
    font-weight: bold;
    color: #fff;
  }
`;

const LeftContentBoxContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const LeftContentBox = styled.div`
  min-width: 738px;
  width: 50%;
  height: 600px;

  background: url("images/organiseBackground.jpg");
  background: url("images/organiseBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset -2px -2px 100px rgba(255, 255, 255, 0.1),
    inset 2px 2px 100px rgba(66, 66, 66, 0.1);
  backdrop-filter: blur(50px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 0px 40px 40px 0px;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
`;

function Analytics() {
  return (
    <AnalyticsOuterContainer>
      <Container style={{ height: "100%" }}>
        <AnalyticsInnerContainer>
          <TextContainer>
            <Title>Stay in the know with Analytics</Title>
            <Text>
              <span>Understand your team better.</span> With built-in analytics,
              LunaDesk allows you to better understand how your team is adapting
              to Hybrid work, see which days are the busiest in-office, and
              shape future plans.
            </Text>
          </TextContainer>
        </AnalyticsInnerContainer>
      </Container>
      <LeftContentBoxContainer>
        <LeftContentBox>
          <ImageContainer>
            <CardImage
              src={"images/analysisImage.png"}
              alt={"Group meeting round table"}
            />
          </ImageContainer>
        </LeftContentBox>
      </LeftContentBoxContainer>
    </AnalyticsOuterContainer>
  );
}

export default Analytics;
