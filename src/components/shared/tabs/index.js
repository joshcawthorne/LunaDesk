import React from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";

import TabItem from "./tabItem";

const TabContainer = styled(motion.div)`
  display: flex;
`;

function Tabs({ tabs, activeTab, updateTab, minWidth = "unset" }) {
  return (
    <AnimateSharedLayout>
      <TabContainer layout>
        {tabs.map((tab, i) => (
          <TabItem
            key={i}
            title={tab.title}
            active={activeTab === tab.id}
            id={tab.id}
            updateTab={updateTab}
            minWidth={minWidth}
          />
        ))}
      </TabContainer>
    </AnimateSharedLayout>
  );
}

export default Tabs;
