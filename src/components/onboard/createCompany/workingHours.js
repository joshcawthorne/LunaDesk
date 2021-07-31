import { useState, useEffect } from "react";
import styled from "styled-components";
import InputButton from "../../shared/inputButton";

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;
  max-width: 450px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  b {
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
  }
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 5px;
  color: #ebe2ea;
  b {
    font-weight: 500;
    color: #fff;
    margin-left: 5px;
  }
`;

function WorkingHours({ companyName, setSelectedStage }) {
  function progress() {
    setSelectedStage(4);
  }

  return (
    <div>
      {" "}
      <Title>
        Which hours does <b>{companyName}</b> normally work?
      </Title>
      <Desc>
        Each employee can set their own working hours if they work different
        hours to what you set here.
      </Desc>
      <InputButton action={progress} text={"Continue"} />
    </div>
  );
}

export default WorkingHours;
