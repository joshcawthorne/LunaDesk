import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import InputButton from "../shared/inputButton";
import { motion } from "framer-motion";

import InOfficeCard from "./inOfficeCard";

const TodayInOfficeBlockContainer = styled.div`
  width: calc(100% - 425px);
  height: 350px;
  background-color: #514dec;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
  }
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  height: 100%;
  max-width: 350px;
  width: 350px;
`;

const Title = styled.div`
  font-size: 32px;
  padding: 20px;
  color: #fff;
  line-height: 50px;
  letter-spacing: 1px;
  span {
    font-weight: bold;
  }
`;

const LargeNumberContainer = styled.div`
  position: absolute;
  font-size: 530px;
  opacity: 0.08;
  font-weight: bold;
  top: 0;
  left: -60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`;

const InOfficeInfo = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  margin: 20px;
  background-color: #26264e;
  border-radius: 10px;
  overflow: auto;
`;

const InOfficeTitle = styled.div`
  font-size: 32px;
  padding: 20px 30px;
  color: #fff;
  line-height: 50px;
  letter-spacing: 1px;
`;

const InOfficeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  padding: 0 20px;
  padding-bottom: 20px;
`;

const NoOne = styled.div`
  font-size: 22px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
`;

function TodayInOfficeBlock({
  userProfile,
  companyData,
  employeeData,
  loading,
  isLoading,
  officeData,
}) {
  var d = new Date();
  var n = d.getDay() - 1;

  const [activeEmployees, setActiveEmployees] = useState([]);

  useEffect(() => {
    setActiveEmployees([]);
    employeeData.forEach((employee) => {
      if (employee.default_days.includes(n)) {
        setActiveEmployees((activeEmployees) => [...activeEmployees, employee]);
      }
    });
  }, [employeeData]);

  return (
    <TodayInOfficeBlockContainer>
      {/*}
      <LeftContent>
        <Title>
          There are <span>4</span> people in the Scranton Office today
        </Title>
        <LargeNumberContainer>4</LargeNumberContainer>
  </LeftContent>*/}
      <InOfficeInfo>
        <InOfficeTitle>In today</InOfficeTitle>
        <InOfficeContainer>
          {activeEmployees.map((employee, i) => (
            <InOfficeCard key={i} employee={employee} />
          ))}
          {activeEmployees.length === 0 && <NoOne>No one's in today!</NoOne>}
        </InOfficeContainer>
      </InOfficeInfo>
    </TodayInOfficeBlockContainer>
  );
}

export default TodayInOfficeBlock;
