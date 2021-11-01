import styled, { css } from "styled-components";
import { useStoreActions, useStoreState } from "store/hooks";


import LightModeScreen from "assets/svg/lightModeScreen.svg";
import DarkModeScreen from "assets/svg/darkModeScreen.svg";
import React from "react";

interface Props {
    active?: boolean;
}

const ThemeToggleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const ThemeOption = styled.div<Props>`
    width: 330px;
    transition: 400ms;
    margin: 0 10px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 3px;
    border-style: solid;
    border-color: transparent; 
    cursor: pointer;
    ${props => props.active && css`
        border-color: #636bfd;
    `}
    :hover {
    transform: translate3d(-2px, -2px, 0);
    transition: 400ms;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }
`;

function ThemeToggle() {
    const lightMode = useStoreState((state) => state.preferences.lightMode);
    const setLightMode = useStoreActions(
        (actions) => actions.preferences.setLightMode
    );
    return (
        <ThemeToggleContainer>
            <ThemeOption active={lightMode} onClick={() => { setLightMode(true) }}>
                <LightModeScreen width={'330px'} />
            </ThemeOption>
            <ThemeOption active={!lightMode} onClick={() => { setLightMode(false) }}>
                <DarkModeScreen width={"330px"} />
            </ThemeOption>
        </ThemeToggleContainer >
    )
}

export default ThemeToggle
