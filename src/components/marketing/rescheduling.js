import React from "react";
import styled from "styled-components";

import Container from "../../components/shared/container";
import SectionTitle from "./shared/sectionTitle";

const ReschedulingContainer = styled.div`
  background-color: #0011fc;
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

const LowerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
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
`;

const RightContent = styled.div`
  width: 50%;
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
            <RightContent></RightContent>
          </LowerContent>
        </InnerContainer>
      </Container>
    </ReschedulingContainer>
  );
}

export default Rescheduling;
