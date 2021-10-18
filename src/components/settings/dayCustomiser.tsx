import styled from "styled-components";

import DayTimeSelector from "./dayTimeSelector";
import DayLocationSelector from "./dayLocationSelector";

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
`;

const DayName = styled.div`
  width: 105px;
`;

interface DayCustomiser {
  day: Day
}

interface Day {
  id: number,
  state: number,
  prettyName: string,
  initial: string,
  startTime: string,
  endTime: string,
  location: number
}

function DayCustomiser({ day }: DayCustomiser) {
  return (
    <DayItem>
      <DayName>{day.prettyName}</DayName>
      <DayTimeSelector />
      <DayLocationSelector />
    </DayItem>
  );
}

export default DayCustomiser;
