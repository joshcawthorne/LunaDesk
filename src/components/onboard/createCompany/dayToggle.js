import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const DayToggleContainer = styled.div`
  padding: 8px 15px;
  background-color: ${(props) => props.disabledColor};
  color: ${(props) => props.disabledColorText};
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  margin: 5px 5px;
  transition: 400ms;
  :hover {
    transition: 400ms;
    transform: translate(-2px, -2px);
    box-shadow: rgb(0 0 0 / 35%) 12px 14px 32px 0px;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: #229484;
      box-shadow: rgb(31 38 135 / 37%) 0px 8px 32px 0px;
      transition: 400ms;
    `}
`;

function DayToggle({
  day,
  enabled,
  id,
  updateArr,
  disabledColor,
  disabledColorText,
}) {
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
    <DayToggleContainer
      onClick={() => handleClick()}
      active={active}
      disabledColor={disabledColor ? disabledColor : "#000"}
      disabledColorText={disabledColorText ? disabledColorText : "#fff"}
    >
      {day.title}
    </DayToggleContainer>
  );
}

export default DayToggle;
