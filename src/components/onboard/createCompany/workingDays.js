import { useState, useEffect } from "react";
import styled from "styled-components";
import InputButton from "../../shared/inputButton";

import { countries } from "../../../utils/countries";
import DayToggle from "./dayToggle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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

const Dropdown = styled.select`
  margin-right: 8px;
  width: 300px;
  margin-bottom: 0;
  padding: 14px 24px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  outline: none;
`;

const DayToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  max-width: 400px;
  flex-wrap: wrap;
`;

const DEFAULT_DAYS = [
  { id: 0, title: "Monday", enabled: true },
  { id: 1, title: "Tuesday", enabled: true },
  { id: 2, title: "Wednesday", enabled: true },
  { id: 3, title: "Thursday", enabled: true },
  { id: 4, title: "Friday", enabled: true },
  { id: 5, title: "Saturday", enabled: false },
  { id: 6, title: "Sunday", enabled: false },
];

function WorkingDays({ setSelectedStage, setFinalValue, companyName }) {
  const [selectedValue, setSelectedValue] = useState("Select");
  const [changed, setChanged] = useState(false);
  const [activeDays, setActiveDays] = useState(5);
  const [isMinimumDays, setIsMinimumDays] = useState(true);

  const [days, setDays] = useState(DEFAULT_DAYS);

  function handleChange(value) {
    setSelectedValue(value);
    setChanged(true);
  }

  function progress() {
    const selectedDays = days
      .filter((d) => d.enabled)
      .map(function (d) {
        return d.id;
      });

    setFinalValue(selectedDays);
    setSelectedStage(3);
  }

  function updateArr(id, updatedObj, added) {
    let updDays = days.map((d) => (d.id !== id ? d : updatedObj));
    setDays(updDays);
    if (!added) {
      setActiveDays(activeDays - 1);
    } else {
      setActiveDays(activeDays + 1);
    }
  }

  useEffect(() => {
    if (activeDays > 0) {
      setIsMinimumDays(false);
    } else {
      setIsMinimumDays(true);
    }
  }, [activeDays]);

  return (
    <Container>
      <Title>
        Which days does <b>{companyName}</b> normally work?
      </Title>
      {activeDays}
      <Desc>
        Each employee can set their own working days if they work different days
        to what you set here.
      </Desc>
      <DayToggleContainer>
        {days.map((day, i) => (
          <DayToggle
            key={i}
            id={i}
            day={day}
            enabled={day.enabled}
            updateArr={updateArr}
          />
        ))}
      </DayToggleContainer>
      <InputButton
        action={progress}
        text={"Continue"}
        disabled={isMinimumDays}
      />
    </Container>
  );
}

export default WorkingDays;
