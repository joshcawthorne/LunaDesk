import React from "react";
import styled from "styled-components";

import Container from "./marketingContainer";

const OrganiseOuterContainer = styled.div`
  background: url("images/organiseBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  position: relative;
  height: 600px;
`;

const OrganiseInnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TextContainer = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 44px;
  line-height: 55px;
  color: #1c1d1f;
  margin-bottom: 30px;
  width: 420px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #1c1d1f;
  width: 380px;
  span {
    font-weight: bold;
  }
`;

const RightContentBoxContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const RightContentBox = styled.div`
  min-width: 738px;
  width: 50%;
  height: 600px;

  background: linear-gradient(
    247.97deg,
    rgba(4, 3, 90, 0.49) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -2px -2px 100px rgba(255, 255, 255, 0.1),
    inset 2px 2px 100px rgba(66, 66, 66, 0.1);
  backdrop-filter: blur(50px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 40px 0px 0px 40px;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const CardImage = styled.img`
  width: 70%;
`;

function OrganiseMeetings() {
  return (
    <OrganiseOuterContainer>
      <Container style={{ height: "100%" }}>
        <OrganiseInnerContainer>
          <TextContainer>
            <Title>Organise meetings like a pro.</Title>
            <Text>
              <p>
                With <span>Shared Days</span>, LunaDesk will automatically
                suggest when to meet with people based on the days you have
                together in the office.
              </p>
              <p>
                With <span>TeamMeet</span>, LunaDesk will suggest when is best
                for your team to meet.
              </p>
            </Text>
          </TextContainer>
        </OrganiseInnerContainer>
      </Container>
      <RightContentBoxContainer>
        <RightContentBox>
          <ImageContainer>
            <CardImage
              src={"images/groupMeeting.png"}
              alt={"Group meeting round table"}
            />
          </ImageContainer>
        </RightContentBox>
      </RightContentBoxContainer>
    </OrganiseOuterContainer>
  );
}

export default OrganiseMeetings;
