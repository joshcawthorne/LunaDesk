import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import Container from "../shared/container";
import TopHills from "../../../assets/svg/topHills.svg";

const GetStartedContainer = styled.div`
  background: #012031;
  position: relative;
  padding-bottom: 900px;
  overflow: hidden;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 36px;
  line-height: 55px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.5px;
  z-index: 1;
  span {
    background-color: #fc9238;
    background-image: linear-gradient(90deg, #e623bb 0%, #f8b84f 100%),
      linear-gradient(0deg, #ffffff, #ffffff);
    margin-left: 10px;

    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

const StartedCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  .parallax-outer {
    z-index: 3;
  }
`;

const StartedCard = styled.div`
  width: 340px;
  height: 150px;
  background: rgba(24, 41, 57, 0.3);
  border: 2px solid ${(props) => props.borderColor};
  box-sizing: border-box;
  backdrop-filter: blur(5px);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 20px;
  flex-direction: column;
  text-align: left;
  margin: ${(props) => props.margin};
  z-index: 1;
`;

const CardTitle = styled.div`
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 10px;
`;

const CardText = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #8a8f98;
  text-align: left;
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  .parallax-inner {
    width: 100%;
    z-index: 2;
  }
`;

const Mountains = styled.div`
  background-image: url("images/mountains.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 0;
  background-color: transparent;
  height: 500px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const BaseLayer = styled.div`
  background-color: transparent;
  background-image: url("images/stars.svg");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  position: absolute;
  top: -200px;
`;

const HillContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background: linear-gradient(360deg, #0011fc 0%, rgba(0, 17, 252, 0) 67.71%);
`;

function GetStarted() {
  return (
    <GetStartedContainer>
      <Container>
        <Title>
          Get Started In <span>Minutes</span>
        </Title>
        <StartedCards>
          <Parallax y={[-20, 20]} tagOuter="one">
            <StartedCard borderColor={"#FFAA62"} margin={"100px 0 0 0"}>
              <CardTitle>Register your Company</CardTitle>
              <CardText>
                You can register your company with LunaDesk in under two minutes
                - we’ve timed it.
              </CardText>
            </StartedCard>
          </Parallax>
          <Parallax y={[-40, 40]} tagOuter="two">
            <StartedCard borderColor={"#F14DC6"} margin={"50px 25px 0px 25px"}>
              <CardTitle>Invite your Team</CardTitle>
              <CardText>
                You can invite your entire team to join you on LunaDesk with
                just a few short clicks.
              </CardText>
            </StartedCard>
          </Parallax>
          <Parallax y={[-60, 60]} tagOuter="three">
            <StartedCard borderColor={"#C43BFE"} margin={"0"}>
              <CardTitle>Enjoy Hybrid Harmony</CardTitle>
              <CardText>
                That’s it! Your team can now enjoy something we like to call
                “Hybrid Harmony” - pretty nifty, huh?
              </CardText>
            </StartedCard>
          </Parallax>
        </StartedCards>
      </Container>
      <HillContainer>
        <TopHills />
      </HillContainer>

      <Background>
        <BaseLayer />
      </Background>
    </GetStartedContainer>
  );
}

export default GetStarted;
