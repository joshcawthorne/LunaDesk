import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import HomeIcon from "../../../assets/svg/icons/home.svg";
import OfficeIcon from "../../../assets/svg/icons/building.svg";
import RestIcon from "../../../assets/svg/icons/moon.svg";

const DayContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Day = styled.div`
  width: 100%;
  height: 100%;
  background-color: #020320;
  border-width: 3.5px;
  border-color: #131432;
  border-style: solid;
  z-index: 1;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 10px;
  ${(props) =>
    props.startTop &&
    css`
      border-top-left-radius: 10px;
    `}
  ${(props) =>
    props.startEnd &&
    css`
      border-top-right-radius: 10px;
    `}
    
    ${(props) =>
    props.finishStart &&
    css`
      border-bottom-left-radius: 10px;
    `}
  ${(props) =>
    props.finishEnd &&
    css`
      border-bottom-right-radius: 10px;
    `}
`;

const DayItem = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: calc(15%);
  height: 70%;
  left: 0;
  background-color: #6ecd96;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  ${(props) =>
    props.home &&
    css`
      background-color: #514dec;
    `}

  ${(props) =>
    props.rest &&
    css`
      background-color: #26264d;
    `}
  ${(props) =>
    props.start &&
    css`
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      width: 90%;
      padding-left: 10px;
      margin-left: 10%;
    `}
  ${(props) =>
    props.end &&
    css`
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      width: 90%;
      margin-right: 10%;
    `}

    ${(props) =>
    props.end &&
    props.start &&
    css`
      border-radius: 10px;
      width: 80%;
      margin-right: 10%;
      margin-left: 10%;
    `}
`;

const EmployeeCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #020320;
  border-width: 5px;
  color: #fff;
  border-color: #131432;
  border-style: solid;
  z-index: 1;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const EmployeeAvatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #f4526c;
  margin: 0 15px 0 15px;
`;

const EmployeeMeta = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

const Role = styled.div`
  font-size: 13px;
  color: #fff;
  opacity: 0.8;
  font-weight: 200;
`;

const Initials = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
`;

const ItemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const IconContainer = styled.div``;

function ScheduleItem({ data, companyData, firstItem, lastItem, key }) {
  const [initials, setInitials] = useState("");
  const [dates, setDates] = useState();

  const lineDirection = ["49deg", "49deg"];

  const dayCount = 7;

  useEffect(() => {
    getInitals();
  }, []);

  function getInitals() {
    let name = data.full_name.split(" ");
    let firstInitial = name[0].split("")[0];
    let secondInitial = name[1].split("")[0];
    setInitials(firstInitial + secondInitial);
  }

  return (
    <>
      <DayContainer variants={ItemAnim} key={key}>
        <EmployeeCard>
          <EmployeeAvatar>
            <Initials>{initials}</Initials>
          </EmployeeAvatar>
          <EmployeeMeta>
            <Title>{data.full_name}</Title>
            <Role>{data.employee_role}</Role>
          </EmployeeMeta>
        </EmployeeCard>
      </DayContainer>

      {[...Array(dayCount)].map((d, i) => {
        let start = false;
        let active = false;
        let end = false;
        let restDay = false;
        let homeStart = false;
        let homeEnd = false;
        let restStart = false;
        let restEnd = false;

        if (companyData.default_rest_days.includes(i)) {
          restDay = true;
        }
        if (data.default_days.includes(i)) {
          active = true;
        }

        if (active && !data.default_days.includes(i - 1)) {
          start = true;
        }

        if (active && !data.default_days.includes(i + 1)) {
          end = true;
        }

        if ((!active && data.default_days.includes(i - 1)) || i === 0) {
          homeStart = true;
        }

        if (
          (!active && data.default_days.includes(i + 1)) ||
          (!active && !companyData.default_working_days.includes(i + 1))
        ) {
          homeEnd = true;
        }

        if (restDay && !companyData.default_rest_days.includes(i - 1)) {
          restStart = true;
        }

        if (restDay && !companyData.default_rest_days.includes(i + 1)) {
          restEnd = true;
        }

        if (restDay) {
          return (
            <DayContainer key={i} variants={ItemAnim}>
              <Day
                startTop={i === 0 && firstItem}
                startEnd={i === 6 && firstItem}
                finishTop={i === 0 && lastItem}
                finishEnd={i === 6 && lastItem}
              />
              <DayItem rest start={restStart} end={restEnd}>
                {restStart && (
                  <IconContainer>
                    <RestIcon color={"#fff"} />
                  </IconContainer>
                )}
              </DayItem>
            </DayContainer>
          );
        }

        if (active) {
          return (
            <DayContainer key={i} variants={ItemAnim}>
              <Day
                startTop={i === 0 && firstItem}
                startEnd={i === 6 && firstItem}
                finishTop={i === 0 && lastItem}
                finishEnd={i === 6 && lastItem}
              />
              <DayItem office start={start} end={end}>
                {start && (
                  <IconContainer>
                    <OfficeIcon color={"#000"} />
                  </IconContainer>
                )}
              </DayItem>
            </DayContainer>
          );
        }

        return (
          <DayContainer key={i} variants={ItemAnim}>
            <Day
              startTop={i === 0 && firstItem}
              startEnd={i === 6 && firstItem}
              finishStart={i === 0 && lastItem}
              finishEnd={i === 6 && lastItem}
            />
            <DayItem home start={homeStart} end={homeEnd}>
              {homeStart && (
                <IconContainer>
                  <HomeIcon color={"#fff"} />
                </IconContainer>
              )}
            </DayItem>
          </DayContainer>
        );
      })}
    </>
  );
}

export default ScheduleItem;
