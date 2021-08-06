import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ScheduleDates from "./scheduleDates";
import ScheduleItem from "./scheduleItem";

const ScheduleContainer = styled.div`
  width: 100%;
  max-height: 900px;
  background-color: #131432;
  border-radius: 10px;
  overflow: auto;
  margin-bottom: 25px;
`;

const ScheduleBoard = styled(motion.div)`
  display: grid;
  min-width: 1200px;
  width: 100%;
  grid-template-columns: 275px repeat(7, 1fr);
  grid-template-rows: 40px repeat(7, 70px);
  overflow: hidden;
  padding: 30px;
  box-sizing: border-box;
  margin-top: -30px;
  color: #fff;
  position: relative;
  @media (max-width: 1100px) {
    grid-template-columns: 80px repeat(7, 1fr);
  }
`;

const Day = styled.div`
  background-color: red;
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  height: 100px;
`;

const ScheduleTopRow = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  color: #81818b;
  font-size: 32px;

  margin-top: 0px;

  span {
    font-weight: bold;
    color: #fff;
  }
`;

const AnimLayer = styled(motion.div)``;

const DayIndicator = styled.div`
  grid-column: 6 / 8;
  height: 100%;
  width: 5px;
  background-color: yellow;
`;

const DayIndicatorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin-left: 50%;
  z-index: 5;
`;

const ContainerAnim = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: "afterChildren",
      delayChildren: 0,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.005,
      when: "afterChildren",
      delayChildren: 0,
    },
  },
};

function WeeklyScheduleBoard({
  userProfile,
  companyData,
  employeeData,
  loading,
  isLoading,
  officeData,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!loading && !isLoading) {
      setAnimate(true);
    }
  }, [loading, isLoading]);

  return (
    <ScheduleContainer>
      <ScheduleTopRow>
        <Title>
          <span>{officeData.title}'s</span> schedule at a glance
        </Title>
      </ScheduleTopRow>
      <ScheduleBoard
        variants={ContainerAnim}
        initial="hidden"
        animate={animate ? "show" : "hidden"}
      >
        <ScheduleDates />

        {employeeData.map((employee, i) => (
          <ScheduleItem
            firstItem={i === 0}
            lastItem={i === employeeData.length - 1}
            key={i}
            data={employee}
            companyData={companyData}
          />
        ))}
      </ScheduleBoard>
    </ScheduleContainer>
  );
}

export default WeeklyScheduleBoard;
