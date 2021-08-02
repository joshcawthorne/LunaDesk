import { useState, useEffect } from "react";
import styled from "styled-components";

import Container from "../src/components/shared/container";
import Intro from "../src/components/dashboard/intro";
import LoadingAnimation from "../src/components/shared/loadingAnimation";

import { getProfile } from "../src/services/user";
import { getCompany, getEmployees } from "../src/services/company";

const DashboardContainer = styled.div`
  background-color: #040419;
  height: 100vh;
  width: calc(100vw - 260px);
  overflow: hidden;
  margin-left: 260px;
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

function Dashboard() {
  const [userProfile, setUserProfile] = useState();
  const [companyData, setCompanyData] = useState();
  const [employeeData, setEmployeeData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(userProfile);
    console.log(companyData);
    console.log(employeeData);
  }

  return (
    <DashboardContainer>
      {loading ? (
        <LoadingContainer>
          <LoadingAnimation animate ring intro />
          <LoadingText>Fuelling up</LoadingText>
        </LoadingContainer>
      ) : (
        <>
          {console.log("dd", companyData)}
          <Intro
            userProfile={userProfile}
            companyData={companyData[0]}
            employeeData={employeeData}
            loading={loading}
          />
        </>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
