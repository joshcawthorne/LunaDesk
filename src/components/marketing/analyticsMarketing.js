import React from "react";
import styled, { css } from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Container from "./marketingContainer";
import SectionTitle from "./shared/sectionTitle";

const ContentOuterContainer = styled.div`
  padding: 0px 0 0px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #151718 0%, #152a3d 100%);
  color: #fff;
`;

const AnalyticsOuterContainer = styled.div`
  padding-top: 400px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background: radial-gradient(
      circle at 15% 40%,
      #e524bb3b,
      rgba(255, 255, 255, 0) 25%
    ),
    radial-gradient(circle at 85% 30%, #3340b963, rgba(255, 255, 255, 0) 25%);
`;

const WinnerOuterContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
`;

const AnalyticsInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  margin-top: 30px;
`;

const LeftContent = styled.div`
  margin-right: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContent = styled.div`
  margin-left: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #ffffff;
  z-index: 4;
  max-width: 480px;
  margin-top: 30px;
  text-align: right;
  span {
    background-color: #fc9238;
    background-image: linear-gradient(90deg, #e623bb 0%, #f8b84f 100%),
      linear-gradient(0deg, #ffffff, #ffffff);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 900;
  }
`;

const ImageContainer = styled.div`
  height: 400px;
  width: 600px;
`;

const ImageItem = styled.img`
  width: 100%;
  background-color: transparent;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;

const BottomImage = styled.div`
  width: 100%;
  height: 300px;

  background-color: transparent;
  background-image: url("/images/analyticsBottom.svg");
  background-size: contain;
  opacity: 1;
  background-position: bottom;

  left: 0;
  z-index: 0;
`;

const WinnerInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 200px;
`;

const TextBoxContainer = styled.div`
  background: rgba(21, 37, 50, 0.1);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  z-index: 4;
`;

const WinnerTitle = styled.div`
  font-family: "Monument Extended";
  font-weight: 900;
  max-width: 500px;
  margin: 0;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  letter-spacing: 4px;
  z-index: 4;
  font-size: 76px;
  line-height: 67px;
  padding: 0;
  text-transform: uppercase;

  background-color: #fc9238;
  background-image: linear-gradient(90deg, #e623bb 0%, #f8b84f 100%),
    linear-gradient(0deg, #ffffff, #ffffff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const WinnerSubtext = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #ffffff;
  z-index: 4;
  max-width: 550px;
  margin-top: 30px;
  span {
    background-color: #fc9238;
    background-image: linear-gradient(90deg, #e623bb 0%, #f8b84f 100%),
      linear-gradient(0deg, #ffffff, #ffffff);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 900;
  }
  a {
    font-weight: 900;
    text-decoration: none;
    color: #ffaa62;
  }
`;

const ImageContentContainer = styled.div`
  height: 100%;
  width: 500px;
  padding-left: 50px;
  z-index: 2;
`;

const WinnerImageItem = styled.img`
  width: 100%;
  height: 100%;
`;

const WinnerRowOne = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-5deg);
  top: 70px;
  .parallax-inner {
    display: flex;
  }
`;

const WinnerRowTwo = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-5deg);
  top: -90px;
  z-index: 1;
  .parallax-inner {
    display: flex;
  }
`;

const WinnerText = styled.div`
  font-family: Monument Extended;
  background-color: #fc9238;
  background-image: linear-gradient(90deg, #e623bb 0%, #f8b84f 100%),
    linear-gradient(0deg, #ffffff, #ffffff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-weight: 900;
  font-size: 66px;
  line-height: 57px;
  margin: 0px 5px;
  letter-spacing: 4px;
  opacity: 0.7;
  z-index: 3;
  user-select: none;
  ${(props) =>
    props.background &&
    css`
      opacity: 0.2;
      z-index: 1;
    `}
`;

function Analytics() {
  const n = 22;

  return (
    <ContentOuterContainer>
      <AnalyticsOuterContainer>
        <Container style={{ height: "100%" }}>
          <AnalyticsInnerContainer>
            <SectionTitle text={"START BEING ITK"} title />
            <SectionTitle text={"THANKS TO ANALYTICS"} marginTop={"-3%"} />
            <ContentSection>
              <LeftContent>
                <ImageContainer>
                  <ImageItem
                    src={"/images/itkImage.png"}
                    alt={"Analytics Illustration"}
                  />
                </ImageContainer>
              </LeftContent>
              <RightContent>
                <Paragraph>
                  <span>Understand your team better.</span> LunaDesk comes chock
                  with built-in analytics to help you understand which Office
                  days are the busiest, maximise face-to-face contact without
                  reducing Home days, and discover how your team is adapting to
                  the new normal.
                </Paragraph>
              </RightContent>
            </ContentSection>
          </AnalyticsInnerContainer>
        </Container>
      </AnalyticsOuterContainer>

      <WinnerOuterContainer>
        <Container>
          <WinnerInnerContainer>
            <TextBoxContainer>
              <WinnerTitle>Award Winning</WinnerTitle>
              <WinnerSubtext>
                LunaDesk was crowned Supabase’s 2021 Hackathon{" "}
                <span>Best Overall Project</span>. We are proud to build
                LunaDesk on Supabase.{" "}
                <a
                  href="https://supabase.io/blog/2021/08/09/hackathon-winners"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more here
                </a>
                .
              </WinnerSubtext>
            </TextBoxContainer>

            <WinnerRowOne>
              <Parallax x={[-1, 0]} tagOuter="figure">
                {[...Array(n)].map((d, i) => (
                  <WinnerText key={i}>WINNER</WinnerText>
                ))}
              </Parallax>
            </WinnerRowOne>

            <ImageContentContainer>
              <WinnerImageItem src={"/images/spaceRocket.png"} />
            </ImageContentContainer>

            <WinnerRowTwo>
              <Parallax x={[1, -1]} tagOuter="figure">
                {[...Array(n)].map((d, i) => (
                  <WinnerText background key={i}>
                    WINNER
                  </WinnerText>
                ))}
              </Parallax>
            </WinnerRowTwo>
          </WinnerInnerContainer>
        </Container>
      </WinnerOuterContainer>
    </ContentOuterContainer>
  );
}

export default Analytics;
