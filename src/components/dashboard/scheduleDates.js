import React from "react";
import styled, { css } from "styled-components";

const LabelContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Label = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 20px;
  padding-left: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
  border-width: 5px;
  border-color: #131432;
  border-style: solid;
  color: #fff;
  z-index: 1;
  ${(props) =>
    props.small &&
    css`
      @media (max-width: 1100px) {
        display: none;
      }
    `}
`;

const EmployeeCard = styled.div`
  width: 100%;
  max-height: 100px;
  height: 100%;
  background-color: #fff;
  color: #000;
  border-color: #131432;
  border-style: solid;
  border-width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

function ScheduleDates() {
  return (
    <>
      <LabelContainer>
        <Label small>Employees</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>Monday</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>Tuesday</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>Wednesday</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>Thursday</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>Friday</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>Saturday</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>Sunday</Label>
      </LabelContainer>
    </>
  );
}

export default ScheduleDates;
