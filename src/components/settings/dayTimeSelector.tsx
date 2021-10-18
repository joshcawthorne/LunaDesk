
import styled from "styled-components";

const DayTimeSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartTime = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EndTime = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function DayTimeSelector({ }) {
  return (
    <DayTimeSelectorContainer>
      <StartTime>08:00</StartTime>
      <Divider>to</Divider>
      <EndTime>17:00</EndTime>
    </DayTimeSelectorContainer>
  );
}

export default DayTimeSelector;
