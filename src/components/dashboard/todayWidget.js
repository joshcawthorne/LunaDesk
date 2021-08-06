import { useState, useEffect } from "react";
import styled from "styled-components";
import InputButton from "../shared/inputButton";
import TodayStateBlock from "./todayStateBlock";

const TodayWidgetContainer = styled.div`
  width: 100%;
  background-color: #131432;
  border-radius: 10px;
  overflow: auto;
  margin-bottom: 25px;
  padding: 20px;
  box-sizing: border-box;
`;

function TodayWidget({
  userProfile,
  companyData,
  employeeData,
  loading,
  isLoading,
  officeData,
}) {
  return (
    <TodayWidgetContainer>
      <TodayStateBlock
        userProfile={userProfile}
        companyData={companyData}
        employeeData={employeeData}
        loading={loading}
        isLoading={isLoading}
        officeData={officeData}
      />
    </TodayWidgetContainer>
  );
}

export default TodayWidget;
