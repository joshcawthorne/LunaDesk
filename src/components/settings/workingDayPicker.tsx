import styled, { css } from "styled-components";
import update from "immutability-helper";
import { motion, AnimatePresence } from "framer-motion";

import DayCustomiser from "./dayCustomiser";

interface Props {
  active?: boolean;
  id?: any
}

interface WorkingDayPicker {
  workingDayState: any,
  setworkingDayState: any,
  hideLocation?: boolean,
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

const WorkingDayPickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: max-height 0.25s ease-in;
`;

const DaysContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayItem = styled.div<Props>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.gradientColor1};
  color: ${props => props.theme.textPrimary};
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
      color: #fff;
      background-color: #636bfd;
    `}
`;

const WorkingDaysCustomiser = styled.div`
  margin-top: 25px;
  width: 100%;
`;

function WorkingDayPicker({ workingDayState, setworkingDayState, hideLocation }: WorkingDayPicker) {


  const updateDay = (day: Day) => {
    const index = workingDayState.findIndex((d: any) => d.id === day.id);
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
        {workingDayState.map((day: Day, i: number) => (
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
      <AnimatePresence>
        <WorkingDaysCustomiser>
          {workingDayState.map((day: Day, i: number) => {
            if (day.state !== 0) {
              return (<motion.div
                initial={{ opacity: 0, x: -60, }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
                exit={{ opacity: 0 }}><DayCustomiser day={day} workingDayState={workingDayState} setworkingDayState={setworkingDayState} key={i} /></motion.div>);
            }
          })}
        </WorkingDaysCustomiser>
      </AnimatePresence>
    </WorkingDayPickerContainer >
  );
}

export default WorkingDayPicker;
