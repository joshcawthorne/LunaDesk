import { useState } from "react";
import styled from "styled-components";

import OnboardingCard from "layouts/onboardingCard";
import WorkingDayPicker from "components/settings/workingDayPicker";
import { InnerTitle, InnerDesc } from "components/shared";

function UserDefaultWorkingHours({ setOnboardingPosition }) {
  const [loading, setLoading] = useState(false);

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

  function handleJoin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOnboardingPosition(6);
    }, 1500);
  }

  return (
    <OnboardingCard
      description={""}
      buttonText={"Continue"}
      buttonActive={true}
      buttonAction={handleJoin}
      buttonLoading={loading}
    >
      <InnerTitle>
        During a standard week, when and where do you work?
      </InnerTitle>
      <InnerDesc>
        You can tweak each week as much as you'd like, and can edit these
        settings later.
      </InnerDesc>
      <WorkingDayPicker
        workingDayState={workingDayState}
        setworkingDayState={setworkingDayState}
      />
    </OnboardingCard>
  );
}

export default UserDefaultWorkingHours;
