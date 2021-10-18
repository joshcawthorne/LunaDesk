import { useState } from "react";
import styled, { css } from "styled-components";
import update from "immutability-helper";

import DayCustomiser from "./dayCustomiser";

const WorkingDayPickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DaysContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #25262a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  line-height: 0;
  cursor: pointer;
  transition: 400ms;
  ${(props) =>
    props.active &&
    css`
      transition: 400ms;
      background-color: #636bfd;
    `}
`;

const WorkingDaysCustomiser = styled.div`
  margin-top: 25px;
  width: 100%;
`;

function WorkingDayPicker({ }) {
  const [workingDayState, setworkingDayState] = useState([
    {
      id: 1,
      state: 1,
      prettyName: "Monday",
      initial: "M",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      id: 2,
      state: 1,
      prettyName: "Tuesday",
      initial: "T",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      id: 3,
      state: 1,
      prettyName: "Wednesday",
      initial: "W",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      id: 4,
      state: 1,
      prettyName: "Thursday",
      initial: "T",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      id: 5,
      state: 1,
      prettyName: "Friday",
      initial: "F",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      id: 6,
      state: 0,
      prettyName: "Saturday",
      initial: "S",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      id: 7,
      state: 0,
      prettyName: "Sunday",
      initial: "S",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
  ]);

  const updateDay = (day) => {
    const index = workingDayState.findIndex((d) => d.id === day.id);
    let updateData;
    if (day.state === 0) {
      updateData = { ...day, state: 1 };
    } else {
      updateData = { ...day, state: 0 };
    }
    const updatedDays = update(workingDayState, {
      $splice: [[index, 1, updateData]],
    });
    setworkingDayState(updatedDays);
  };

  return (
    <WorkingDayPickerContainer>
      <DaysContainer>
        {workingDayState.map((day, i) => (
          <DayItem
            active={day.state === 1}
            key={i}
            id={day.id}
            onClick={() => updateDay(day)}
          >
            {day.initial}
          </DayItem>
        ))}
      </DaysContainer>
      <WorkingDaysCustomiser>
        {workingDayState.map((day, i) => {
          if (day.state !== 0) {
            return <DayCustomiser day={day} key={i} />;
          }
        })}
      </WorkingDaysCustomiser>
    </WorkingDayPickerContainer>
  );
}

export default WorkingDayPicker;
