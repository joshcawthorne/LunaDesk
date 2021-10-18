import { useContext } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

import BranchEnd from "assets/svg/branchEnd.svg";

const SidebarItemContainer = styled.div`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 10px;
  margin-left: 10px;
  border-radius: 10px;
  font-weight: 500;
  transition: 400ms;
  width: calc(100% - 60px);
  :hover {
    background-color: ${(props) => props.theme.surface200};
    transition: 400ms;
  }
`;

const ItemText = styled.div`
  font-size: 15px;
  margin-left: 10px;
  color: ${(props) => props.theme.text400};
`;

const Branch = styled.div`
  width: 2.5px;
  border-radius: 10px;
  height: 100%;
  background-color: ${(props) => props.theme.surface300};
`;

const LinkContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 0;
  display: flex;
  align-items: center;
  margin-left: 20px;
  ${(props) =>
    props.lastSubItem &&
    css`
      margin-bottom: 20px;
    `}
`;

const ActionItem = styled.div``;

function SidebarSubItem({
  title,
  link,
  action,
  Icon,
  themeContext,
  lastSubItem,
}) {
  if (action) {
    return (
      <ActionItem onClick={() => action()}>
        <LinkContainer lastSubItem={lastSubItem}>
          <Branch />
          <SidebarItemContainer>
            <ItemText>{title}</ItemText>
          </SidebarItemContainer>
        </LinkContainer>
      </ActionItem>
    );
  }
  return (
    <Link href={link} passHref>
      <LinkContainer lastSubItem={lastSubItem}>
        <Branch />
        <SidebarItemContainer>
          <ItemText>{title}</ItemText>
        </SidebarItemContainer>
      </LinkContainer>
    </Link>
  );
}

export default SidebarSubItem;
