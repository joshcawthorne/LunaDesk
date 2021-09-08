import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";
import SectionTitle from "./shared/sectionTitle";
import BottomHill from "../../../assets/svg/bottomHill.svg";

const ReschedulingContainer = styled.div`
  background-color: #0011fc;
  color: #fff;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 200px;
  position: relative;
  @media (max-width: 1150px) {
    padding-bottom: 100px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LowerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  @media (max-width: 1150px) {
    width: 100%;
  }
`;

const Paragraph = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  max-width: 440px;
  display: inline-block;
  span {
    font-weight: 900;
    background-color: #fc9238;
    background-image: linear-gradient(90deg, #e623bb 0%, #f8b84f 100%),
      linear-gradient(0deg, #ffffff, #ffffff);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    letter-spacing: 0.3px;
  }
  @media (max-width: 1150px) {
    max-width: unset;
  }
`;

const RightContent = styled.div`
  width: 50%;
  @media (max-width: 1150px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
  }
`;

const BottomHillContainer = styled.div`
  position: absolute;
  margin-top: 180px;
  left: 0;
  width: 100%;
  z-index: 1;
  @media (max-width: 1150px) {
    margin-top: 100px;
  }
`;

const ImageContainer = styled.div`
  width: 555px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
const ImageItem = styled.img`
  width: 100%;
`;

function Rescheduling() {
  return (
    <ReschedulingContainer>
      <Container>
        <InnerContainer>
          <SectionTitle text={"RESCHEDULING"} title />
          <SectionTitle text={"HAS MET ITS MATCH"} marginTop={"-3.5%"} />

          <LowerContent>
            <LeftContent>
              <Paragraph>
                Let your team know whether you’ll be working from Home or the
                Office using LunaDesk’s <span>award-winning </span>
                Location Scheduler.
              </Paragraph>
              <Paragraph>
                Organising face-to-face contact couldn’t be easier with
                LunaDesk, which suggests the best candidates for{" "}
                <span>Shared Days </span>
                and <span>Team Days </span> based on office days you have in
                common with your colleagues.
              </Paragraph>
            </LeftContent>
            <RightContent>
              <ImageContainer>
                <ImageItem
                  src={"/images/uiPreview.png"}
                  alt={"Lunadesk UI Components"}
                />
              </ImageContainer>
            </RightContent>
          </LowerContent>
        </InnerContainer>
      </Container>
      <BottomHillContainer>
        <BottomHill width={"100%"} />
      </BottomHillContainer>
    </ReschedulingContainer>
  );
}

export default Rescheduling;
