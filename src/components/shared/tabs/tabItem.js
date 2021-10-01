import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TabItemContainer = styled.div`
  cursor: pointer;
  margin-right: 10px;
  padding: 10px 15px;
  position: relative;
  z-index: 5;
  min-width: ${(props) => props.minWidth};
`;

const TabTitle = styled(motion.div)`
  z-index: 5;
  position: relative;
`;

const ActiveHighlight = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eee;
  z-index: 0;
  border-radius: 15px;
`;

function TabItem({ title, active, id, updateTab, minWidth }) {
  return (
    <TabItemContainer onClick={() => updateTab(id)} minWidth={minWidth}>
      <TabTitle>{title}</TabTitle>
      {active && <ActiveHighlight layoutId="highlight" />}
    </TabItemContainer>
  );
}

export default TabItem;
