import React from "react";
import styled from "styled-components";

const Day = styled.div`
  width: 100%;
  background-color: #fff;
  border-color: #fff;
  color: #000;
  border-style: solid;
  border-width: 1px;
  height: 100px;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  ${(props) =>
    props.active &&
    css`
      background-color: green;
    `}
`;

const EmployeeCard = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  color: #000;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
`;

function ScheduleDates() {
  return (
    <>
      <EmployeeCard>Employees</EmployeeCard>
      <Day>Monday</Day>
      <Day>Tuesday</Day>
      <Day>Wednesday</Day>
      <Day>Thursday</Day>
      <Day>Friday</Day>
      <Day>Saturday</Day>
      <Day>Sunday</Day>
    </>
  );
}

export default ScheduleDates;
