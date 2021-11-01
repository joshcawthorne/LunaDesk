import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import WorkingDayPicker from "components/settings/workingDayPicker";

import {
  InnerTitle,
  InnerDesc,
  InputFieldItem,
  Label,
} from "components/shared";

import OnboardingCard from "layouts/onboardingCard";

function SetCompanyDefaultTimes() {
  const [workingDayState, setworkingDayState] = useState([
    {
      arrLocation: 0,
      id: 1,
      state: 1,
      prettyName: "Monday",
      initial: "M",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      arrLocation: 1,
      id: 2,
      state: 1,
      prettyName: "Tuesday",
      initial: "T",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      arrLocation: 2,
      id: 3,
      state: 1,
      prettyName: "Wednesday",
      initial: "W",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      arrLocation: 3,
      id: 4,
      state: 1,
      prettyName: "Thursday",
      initial: "T",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      arrLocation: 4,
      id: 5,
      state: 1,
      prettyName: "Friday",
      initial: "F",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      arrLocation: 5,
      id: 6,
      state: 0,
      prettyName: "Saturday",
      initial: "S",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
    {
      arrLocation: 6,
      id: 7,
      state: 0,
      prettyName: "Sunday",
      initial: "S",
      startTime: "08:00",
      endTime: "17:00",
      location: 0,
    },
  ]);

  return (
    <OnboardingCard description={""} buttonText={"Continue"} animate={true} buttonActive>
      <InnerTitle>When do people normally work?</InnerTitle>
      <InnerDesc>
        To help your team when they join LunaDesk, set some default working days and hours.
      </InnerDesc>
      <WorkingDayPicker workingDayState={workingDayState}
        setworkingDayState={setworkingDayState} hideLocation />
    </OnboardingCard>
  );
}

export default SetCompanyDefaultTimes;
