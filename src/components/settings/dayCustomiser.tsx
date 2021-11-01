import styled from "styled-components";
import { useState } from "react"
import DayTimeSelector from "./dayTimeSelector";
import DayLocationSelector from "./dayLocationSelector";
import update from "immutability-helper";

import Cross from "assets/svg/icons/cross.svg";

const DayItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-color: #25262a;
  z-index: 1;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
  font-weight: 500;
  background: ${props => props.theme.gradientColor1};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  
`;

const DayName = styled.div`
    width: 40px;
  height: 40px;
  user-select: none;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: #626cfd;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  line-height: 0;
  transition: 400ms;
  margin-right: 10px;
`;

const CustomierSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  height: 28px;
  width: 1px;
  background-color: ${props => props.theme.textPrimary};
  opacity: 0.3;
  border-radius: 1px;
  z-index: 5;
  margin-right: 4px;
`;

const RemoveIconContainer = styled.div`
  width: 25px;
  height: 25px;
  max-width: 25px;
  max-height: 25px;
  min-width: 25px;
  min-height: 25px;
  border-radius: 50%;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lunaDust};
  cursor: pointer;
  transition: 400ms;
  
  :hover {
    background-color: #e02f3c;
    transition: 400ms;
  }
  
`;

interface DayCustomiser {
  day: Day;
  setworkingDayState: (updatedDays: object) => void;
  workingDayState: object;
  hideLocation?: boolean;
}

interface Day {
  id: number,
  state: number,
  prettyName: string,
  initial: string,
  startTime: string,
  endTime: string,
  location: number
  arrLocation: number,
}

function DayCustomiser({ day, setworkingDayState, workingDayState, hideLocation }: DayCustomiser) {
  const [hovered, setHovered] = useState(false);
  function dayUpdate(day: Day) {
    const updatedDays = update(workingDayState, {
      $splice: [[day.arrLocation, 1, day]],
    });
    setworkingDayState(updatedDays);
  }

  const removeDay = (day: Day) => {
    const updateData = { ...day, state: 0 };
    const updatedDays = update(workingDayState, {
      $splice: [[day.arrLocation, 1, updateData]],
    });
    setworkingDayState(updatedDays);
  };

  return (
    <DayItem>
      <DayName>{day.initial}</DayName>
      <DayTimeSelector dayUpdate={dayUpdate} day={day} />
      {!hideLocation && (
        <>
          <Divider />
          <DayLocationSelector dayUpdate={dayUpdate} day={day} />
        </>
      )}
      <RemoveIconContainer onClick={() => removeDay(day)} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <Cross transition={"stroke 2000 ease"} stroke={hovered ? "#fff" : "#fff"} width={"9px"} />
      </RemoveIconContainer>
    </DayItem>
  );
}

export default DayCustomiser;
