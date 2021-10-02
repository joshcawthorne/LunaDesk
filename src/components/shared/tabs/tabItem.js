import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const TabItemContainer = styled.div`
  cursor: pointer;

  padding: 10px 15px;
  position: relative;
  z-index: 5;
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.lastItem &&
    css`
      margin: 0;
    `}
`;

const TabTitle = styled(motion.div)`
  z-index: 5;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
`;

const ActiveHighlight = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: ${(props) => props.theme.surface400};
  box-shadow: 20px 20px 60px ${(props) => props.theme.surface200},
    -20px -20px 60px ${(props) => props.theme.surface300};
  z-index: 0;
  border-radius: 30px;
`;

function TabItem({
  title,
  active,
  id,
  updateTab,
  minWidth,
  maxWidth,
  lastItem,
}) {
  return (
    <TabItemContainer
      onClick={() => updateTab(id)}
      minWidth={minWidth}
      maxWidth={maxWidth}
      lastItem={lastItem}
    >
      <TabTitle>{title}</TabTitle>
      {active && <ActiveHighlight layoutId="highlight" />}
    </TabItemContainer>
  );
}

export default TabItem;
