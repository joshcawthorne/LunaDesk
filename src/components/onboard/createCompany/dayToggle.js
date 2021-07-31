import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const DayToggleContainer = styled.div`
  padding: 8px 15px;
  background-color: #000;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  margin: 5px 5px;
  ${(props) =>
    props.active &&
    css`
      background-color: green;
    `}
`;

function DayToggle({ day, enabled, id, updateArr }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (enabled) {
      setActive(true);
    }
  }, []);

  function handleClick() {
    let updatedObj = { ...day, enabled: !active };
    setActive(!active);
    let added = !active;
    updateArr(id, updatedObj, added);
  }

  return (
    <DayToggleContainer onClick={() => handleClick()} active={active}>
      {day.title}
    </DayToggleContainer>
  );
}

export default DayToggle;
