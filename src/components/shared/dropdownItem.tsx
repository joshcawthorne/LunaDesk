import { useState } from "react"
import styled, { css } from "styled-components";

import Tick from "assets/svg/tick.svg";

export interface IDropdownItemProps {
    Icon?: any,
    title: string,
    value: any,
    id: number,
    selected: boolean
    onSelect: (id, value) => void,
}

const DropdownItemContainer = styled.div`
  color: #68676c;
  z-index: 2;
  width: 150px;
  padding: 12.5px 15px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 400ms;
  display: flex;
  line-height: 0;
  align-items: center;
  justify-content: space-between;
    
  ${(props) =>
        props.selected &&
        css`
      color: #25262a;
      transition: 400ms;
    `}

  :hover {
    background-color: #25262a;
    color: #fff;
    transition: 400ms;
  }
`;

const DropdownIcon = styled.div`
  margin-right: 5px;
`;

const DropdownText = styled.div``;

const TickContainer = styled.div``;

const LeftContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RightContent = styled.div``;

export function DropdownItem({ title, Icon, value, selected, id, onSelect, ...other }: IDropdownItemProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <DropdownItemContainer {...other} onClick={() => onSelect(id, value)} selected={selected} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <LeftContent>
                <DropdownIcon>
                    <Icon
                        stroke={hovered ? "#fff" : selected ? "#000" : "#25262a"}
                        width={"17.5px"}
                        strokeWidth={"1.5px"}
                    />
                </DropdownIcon>
                <DropdownText>{title}</DropdownText>
            </LeftContent>
            <RightContent>
                {selected && (<TickContainer>
                    <Tick width={"20px"} />
                </TickContainer>)}
            </RightContent>
        </DropdownItemContainer>
    );
}

export default DropdownItem;