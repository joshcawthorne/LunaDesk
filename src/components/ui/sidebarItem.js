import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const SidebarItemContainer = styled.div`
  margin: 5px 0;
  font-size: 16px;
  width: ${(props) => props.width};
  color: #646fa7;
  padding: 15px 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  transition: 400ms;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  :hover {
    background-color: #101237;
    transition: 400ms;
  }

  ${(props) =>
    props.active &&
    css`
      color: #f5516c;
    `}
`;

const ActiveIndicator = styled(motion.div)`
  height: 80%;

  width: 7px;
  background-color: #f5516c;
  position: absolute;
  top: 10%;
  right: -25px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const SidebarIconContainer = styled.div`
  margin-right: 5px;
`;

const SidebarTitle = styled.div`
  margin-top: -3.5px;
`;

function SidebarItem({
  title,
  icon,
  active,
  id,
  setActivePage,
  Icon,
  action,
  width,
}) {
  function handleClick(id) {
    if (action) {
      action(id);
    } else {
      setActivePage(id);
    }
  }
  return (
    <SidebarItemContainer
      width={width ? width : "calc(100% - 55px)"}
      active={active}
      onClick={() => handleClick(id)}
    >
      <SidebarIconContainer>
        <Icon width={"25px"} />
      </SidebarIconContainer>
      <SidebarTitle>{title}</SidebarTitle>
      {active && <ActiveIndicator layoutId="outline" />}
    </SidebarItemContainer>
  );
}

export default SidebarItem;
