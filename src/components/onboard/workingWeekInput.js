import { useState, useEffect } from "react";
import styled from "styled-components";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 5px;
  color: #fff;
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;
  max-width: 450px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  b {
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function WorkingWeekInput({ setSelectedStage }) {
  function handleContinue() {
    setSelectedStage(4);
  }

  return (
    <Container>
      <Title>When do you normally work?</Title>
      <Desc>
        Due to lack of time, you can't change this from the company's default at
        the moment... soz.
      </Desc>
      <InputButton action={handleContinue} text={"Continue"} />
    </Container>
  );
}

export default WorkingWeekInput;
