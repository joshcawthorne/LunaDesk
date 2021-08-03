import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const SidebarItemContainer = styled.div`
  margin: 0px 0;
  font-size: 16px;
  width: ${(props) => props.width};
  color: #6978c7;
  padding: 15px 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  transition: 400ms;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${(props) =>
    !props.disabled &&
    css`
      :hover {
        background-color: #101237;
        transition: 400ms;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${(props) =>
    props.active &&
    css`
      color: #f5516c;
    `}
    @media (max-width: 1100px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  @media (max-width: 1100px) {
    margin: 0;
  }
`;

const SidebarTitle = styled.div`
  margin-top: -3.5px;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const Label = styled.div`
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  background-color: rgb(244, 82, 108);
  color: #fff;
  padding: 5px 10px;
  margin-left: 10px;
  font-weight: bold;
  margin-top: -3px;
  @media (max-width: 1100px) {
    display: none;
  }
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
  disabled,
  label,
}) {
  function handleClick(id) {
    if (disabled) {
      return;
    }
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
      disabled={disabled}
    >
      <SidebarIconContainer>
        <Icon width={"25px"} />
      </SidebarIconContainer>
      <SidebarTitle>{title}</SidebarTitle>
      {label && <Label>{label}</Label>}
      {active && <ActiveIndicator layoutId="outline" />}
    </SidebarItemContainer>
  );
}

export default SidebarItem;
