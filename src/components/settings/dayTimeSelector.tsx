import styled from "styled-components";
import { useState, useEffect } from "react";
import TimeInput from 'react-advanced-time-input';

const DayTimeSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartTime = styled.input`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  font-size: 13px;
  color: ${props => props.theme.textPrimary};
`;

const EndTime = styled.input`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimeInput = styled(TimeInput)`
  margin: 0 2px 0 2px;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  font-size: 13px;
  color: ${props => props.theme.textPrimary};
  appearance: none;
  padding: 6px;
  width: 70px!important;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${props => props.theme.gradientColor1};
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
  transition: 400ms;
  ::placeholder {
    opacity: 1;
  }
  :focus {
    border-width: 2px;
    border-color: #2362dc;
    outline: none;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    transition: 400ms;
  }
`;

interface DayTimeSelector {
  dayUpdate: (day: Day) => void;
  day: Day
}

interface Day {
  id: number;
  state: number;
  prettyName: string;
  initial: string;
  startTime: string;
  endTime: string;
  location: number;
  arrLocation: number,
}

function DayTimeSelector({ dayUpdate, day }: DayTimeSelector) {
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');

  useEffect(() => {
    const updatedDay = { ...day, startTime: startTime, endTime: endTime };
    dayUpdate(updatedDay);
  }, [startTime, endTime])

  return (
    <DayTimeSelectorContainer>
      <StyledTimeInput
        onChange={(event, value) => { setStartTime(value) }}
        colon=":"
        value={startTime}
      />
      <Divider>to</Divider>
      <StyledTimeInput
        onChange={(event, value) => { setEndTime(value) }}
        colon=":"
        value={endTime}
      />
    </DayTimeSelectorContainer>
  );
}

export default DayTimeSelector;
