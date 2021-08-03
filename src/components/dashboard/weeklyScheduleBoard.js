import { useState, useEffect } from "react";
import styled from "styled-components";

import ScheduleDates from "./scheduleDates";
import ScheduleItem from "./scheduleItem";

const ScheduleContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #101136;
  border-radius: 10px;
`;

const ScheduleBoard = styled.div`
  display: grid;
  min-width: 1000px;
  width: 100%;
  overflow: auto;
  grid-template-columns: 200px repeat(7, 1fr);
`;

const Day = styled.div`
  background-color: red;
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  height: 100px;
`;

function WeeklyScheduleBoard({
  userProfile,
  companyData,
  employeeData,
  loading,
}) {
  console.log(employeeData);
  return (
    <ScheduleContainer>
      <ScheduleBoard>
        <ScheduleDates />
        {employeeData.map((employee, i) => (
          <ScheduleItem key={i} data={employee} />
        ))}
      </ScheduleBoard>
    </ScheduleContainer>
  );
}

export default WeeklyScheduleBoard;
