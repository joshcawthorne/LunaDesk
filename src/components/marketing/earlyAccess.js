import React from "react";
import styled from "styled-components";
import Button from "../shared/button";

import Container from "./marketingContainer";
import Icon from "../../../assets/svg/appIcon.svg";

const EarlyAccessOuterContainer = styled.div`
  background-color: #060606;
  padding: 100px 0;
  position: relative;
`;

const EarlyAccessInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  margin-bottom: 45px;
`;

const IconImage = styled.img`
  width: 120px;
  height: 120px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 44px;
  line-height: 55px;
  color: #ffffff;
  width: 650px;
  text-align: center;
  margin-bottom: 20px;
  width: 470px;
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #8a8f98;
  width: 540px;
  text-align: center;
  margin-bottom: 30px;
`;

function EarlyAccess({ setPreRegisterOpen }) {
  function handleClick() {
    setPreRegisterOpen(true);
  }
  return (
    <EarlyAccessOuterContainer>
      <Container>
        <EarlyAccessInnerContainer>
          <IconContainer>
            <IconImage src={"images/appIcon.png"} alt={"LunaDesk Icon"} />
          </IconContainer>
          <TextContainer>
            <Title>Request Early Access</Title>
            <Desc>
              We’re not quite ready for launch just yet, but you can apply below
              to be the among the first to use LunaDesk once it’s ready to take
              flight!
            </Desc>
          </TextContainer>
          <Button
            text={"Request Early Access"}
            backgroundColor={"#010960"}
            color={"#fff"}
            action={handleClick}
            arrow
          />
        </EarlyAccessInnerContainer>
      </Container>
    </EarlyAccessOuterContainer>
  );
}

export default EarlyAccess;
