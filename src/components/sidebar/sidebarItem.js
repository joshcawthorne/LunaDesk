import { useContext } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const SidebarItemContainer = styled.div`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 0 auto;
  font-weight: 500;
`;

const ItemText = styled.div`
  margin-left: 8.5px;
  font-size: 17px;
  color: ${(props) => props.theme.text400};
`;

const SidebarItemContainerOuter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: calc(100% - 20px);
  padding: 17.5px 10px;
  border-radius: 10px;

  margin-top: 5px;
  transition: 400ms;
  :hover {
    background-color: ${(props) => props.theme.surface200};
    transition: 400ms;
  }

  ${(props) =>
    props.hasSubItems &&
    css`
      margin-bottom: 10px;
    `}
`;

const PillContainer = styled.div`
  flex-grow: 0;
`;

const Pill = styled.div`
  padding: 5px 10px;
  background-color: #402f1d;
  color: #f59e0b;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  opacity: 0.8;
`;

function SidebarItem({ title, link, Icon, themeContext, hasSubItems, pill }) {
  console.log(themeContext);
  return (
    <Link href={link} passHref>
      <SidebarItemContainerOuter hasSubItems={hasSubItems}>
        <SidebarItemContainer>
          <Icon stroke={themeContext.text400} strokeWidth={2.25} />
          <ItemText>{title}</ItemText>
        </SidebarItemContainer>
        {pill && (
          <PillContainer>
            <Pill>{pill}</Pill>
          </PillContainer>
        )}
      </SidebarItemContainerOuter>
    </Link>
  );
}

export default SidebarItem;
