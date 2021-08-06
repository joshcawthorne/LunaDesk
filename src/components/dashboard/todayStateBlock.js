import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import InputButton from "../shared/inputButton";
import { motion } from "framer-motion";
import { useStoreState, useStoreActions } from "easy-peasy";

import TodayInOfficeBlock from "./todayInOfficeBlock";
import mq from "../../utils/mq";

import WorkFromHomeImage from "./workFromHomeImage";
import WorkFromOfficeImage from "./workFromOfficeImage";

const TodayState = styled.div`
  background-color: #020320;
  color: #fff;

  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

const TodayStateContainer = styled.div`
  height: 350px;
  width: 400px;
  margin-right: 25px;
  border-radius: 10px;
  background-color: #6ecd96;
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.workingFromOffice &&
    css`
      background-color: #6ecd96;
      color: #000;
    `};
  ${(props) =>
    !props.workingFromOffice &&
    css`
      background-color: #514dec;
      color: #fff;
    `};
  @media (max-width: 1100px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

const TodayStateText = styled.div`
  font-size: 48px;
  padding: 20px;
  line-height: 50px;
  letter-spacing: 1px;
  span {
    font-weight: bold;
  }
`;

const TodayStateButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 20px;
  margin-left: 20px;
  z-index: 5;
`;

function TodayStateBlock({
  userProfile,
  companyData,
  employeeData,
  loading,
  isLoading,
  officeData,
}) {
  const [inOffice, setInOffice] = useState(false);
  const appActions = useStoreActions((actions) => actions.app);
  const { setDisplayModifyDayStatus } = appActions;

  function handleClick() {
    setDisplayModifyDayStatus(true);
  }

  var d = new Date();
  var n = d.getDay() - 1;

  useEffect(() => {
    if (userProfile.default_days.includes(n)) {
      setInOffice(true);
    }
  }, [userProfile]);

  return (
    <TodayState>
      <TodayStateContainer workingFromOffice={inOffice}>
        <TodayStateText>
          You're working from <span>{inOffice ? "the Office" : "home"}</span>{" "}
          today
        </TodayStateText>
        <TodayStateButton>
          <InputButton
            text={"Changed plans?"}
            action={handleClick}
            padding={"10px 16px"}
          />
        </TodayStateButton>
        {inOffice ? <WorkFromOfficeImage /> : <WorkFromHomeImage />}
      </TodayStateContainer>
      <TodayInOfficeBlock
        userProfile={userProfile}
        companyData={companyData}
        employeeData={employeeData}
        loading={loading}
        isLoading={isLoading}
        officeData={officeData}
      />
    </TodayState>
  );
}

export default TodayStateBlock;
