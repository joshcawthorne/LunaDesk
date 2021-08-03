import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import WeeklyScheduleBoard from "../src/components/dashboard/weeklyScheduleBoard";
import Intro from "../src/components/dashboard/intro";
import TodayWidget from "../src/components/dashboard/todayWidget";
import LoadingAnimation from "../src/components/shared/loadingAnimation";
import WeeklyOfficeLevels from "../src/components/dashboard/weeklyOfficeLevels";
import mq from "../src/utils/mq";

import { getProfile } from "../src/services/user";
import { getCompany, getEmployees } from "../src/services/company";
import { getSpecificOffice } from "../src/services/offices";

const DashboardContainer = styled.div`
  background-color: #040419;
  height: 100%;
  width: calc(100vw - 260px);
  overflow: hidden;
  overflow-y: auto;
  margin-left: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    width: calc(100vw - 80px);
    margin-left: 80px;
  }
`;

const LoadingContainer = styled.div`
  width: calc(100% - 260px);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #040419;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 260px;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: calc(100vw - 80px);
    margin-left: 80px;
  }
`;

const LoadingText = styled.div`
  margin-top: -40px;
  font-size: 24px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DashboardContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 140px);
  padding: 30px 70px;
  position: relative;
  max-width: 2000px;
  @media (max-width: 1500px) {
    padding: 30px 30px !important;
    width: calc(100% - 60px);
  }
`;

function Dashboard({ isLoading }) {
  const [userProfile, setUserProfile] = useState();
  const [companyData, setCompanyData] = useState();
  const [employeeData, setEmployeeData] = useState();
  const [officeData, setOfficeData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      getUserData();
    }
  }, [isLoading]);

  async function getUserData() {
    const data = await getProfile();
    setUserProfile(data);
    console.log(userProfile);
    if (data.company !== undefined) {
      getCompanyData(data);
    }
  }

  async function getCompanyData(data) {
    const companyDataObj = await getCompany(data.company);
    console.log("companyDataObj", companyDataObj);
    setCompanyData(companyDataObj);
    getEmployeeData(data);
  }

  async function getEmployeeData(data) {
    const employeeDataObj = await getEmployees(data.company);
    console.log("employeeDataObj", employeeDataObj);
    setEmployeeData(employeeDataObj);
    getEmployeeOffice(data);
  }

  async function getEmployeeOffice(data) {
    const employeeOfficeObj = await getSpecificOffice(data.default_office);
    console.log("here", employeeOfficeObj);
    setOfficeData(employeeOfficeObj);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <DashboardContainer>
      {loading || isLoading ? (
        <LoadingContainer>
          <LoadingAnimation animate ring intro />
          <LoadingText>Fuelling up</LoadingText>
        </LoadingContainer>
      ) : (
        <DashboardContentContainer>
          <Intro
            userProfile={userProfile}
            companyData={companyData[0]}
            employeeData={employeeData}
            loading={loading}
          />
          <TodayWidget
            userProfile={userProfile}
            companyData={companyData[0]}
            employeeData={employeeData}
            loading={loading}
            isLoading={isLoading}
            officeData={officeData[0]}
          />
          <WeeklyScheduleBoard
            userProfile={userProfile}
            companyData={companyData[0]}
            employeeData={employeeData}
            loading={loading}
            isLoading={isLoading}
            officeData={officeData[0]}
          />
          <WeeklyOfficeLevels
            userProfile={userProfile}
            companyData={companyData[0]}
            employeeData={employeeData}
            loading={loading}
            isLoading={isLoading}
            officeData={officeData[0]}
          />
        </DashboardContentContainer>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
