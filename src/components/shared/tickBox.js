import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Tick from "src/assets/svg/icons/tick.svg";

const TickboxContainer = styled.div`
  background-color: ${(props) => props.theme.surface400};
  width: 25px;
  height: 25px;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.surface500};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TickBox({ active, disabled }) {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <TickboxContainer>
      {active && (
        <Tick width={"100%"} height={"100%"} stroke={themeContext.text100} />
      )}
    </TickboxContainer>
  );
}

export default TickBox;
