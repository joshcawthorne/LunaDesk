import React from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";

import TabItem from "./tabItem";

const TabContainer = styled(motion.div)`
  display: flex;
  background-color: ${(props) => props.theme.surface200};
  width: fit-content;
  border-radius: 30px;
  overflow: hidden;
`;

function Tabs({
  tabs,
  activeTab,
  updateTab,
  minWidth = "unset",
  maxWidth = "unset",
}) {
  return (
    <AnimateSharedLayout>
      <TabContainer layout>
        {tabs &&
          tabs.map((tab, i) => (
            <TabItem
              key={i}
              title={tab.title}
              active={activeTab === tab.id}
              id={tab.id}
              updateTab={updateTab}
              minWidth={minWidth}
              maxWidth={maxWidth}
              lastItem={i === tabs.length - 1}
            />
          ))}
      </TabContainer>
    </AnimateSharedLayout>
  );
}

export default Tabs;
