import { useState, useEffect } from "react";
import styled from "styled-components";

import Container from "../src/components/shared/container";
import Intro from "../src/components/dashboard/intro";

const DashboardContainer = styled(Container)`
  background-color: #040419;
  height: 100vh;
  width: calc(100% - 260px);
  margin-left: 20px !important;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <Intro />
    </DashboardContainer>
  );
}

export default Dashboard;
