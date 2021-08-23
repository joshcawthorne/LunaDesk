import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";

const TeamsOuterContainer = styled.div`
  background: url("images/teamBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0 0 0;
  position: relative;
`;

const TeamsInnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  width: 60%;
`;

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 44px;
  line-height: 55px;
  color: #1c1d1f;
  margin-bottom: 30px;
  width: 720px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #1c1d1f;
  width: 610px;
  span {
    font-weight: bold;
  }
`;

function TeamsMarketing() {
  return (
    <TeamsOuterContainer>
      <TeamsInnerContainer>
        <TextContainer>
          <Title>Keep up with those who matter.</Title>
          <Text>
            <p>
              With <span>Teams</span>, LunaDesk lets you keep tabs on the people
              who matter to your day-to-day. You can create multiple teams, and
              customise which teams you see on your dashboard.
            </p>
            <p>
              You can still look at anyone in your company if you need, but
              Linda from Marketing's holiday won't be shoved in your face
              needlessly.
            </p>
          </Text>
        </TextContainer>
        <ImageContainer>
          <CardImage src={"images/team.png"} />
        </ImageContainer>
      </TeamsInnerContainer>
    </TeamsOuterContainer>
  );
}

export default TeamsMarketing;
