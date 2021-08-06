import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useInView from "react-cool-inview";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OfficeLevelsContainer = styled.div`
  width: 100%;
  max-height: 900px;
  background-color: #131432;
  border-radius: 10px;
  overflow: auto;
  height: 600px;
  display: flex;
  justify-content: flex-start;
  padding: 30px;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

const Title = styled.div`
  color: #81818b;
  font-size: 32px;
  margin-bottom: 30px;
  margin-top: 0px;

  span {
    font-weight: bold;
    color: #fff;
  }
`;

const data = [
  {
    name: "Monday",
    inOffice: 3,
    remote: 5,
  },
  {
    name: "Tuesday",
    inOffice: 2,
    remote: 6,
  },
  {
    name: "Wednesday",
    inOffice: 4,
    remote: 4,
  },
  {
    name: "Thursday",
    inOffice: 1,
    remote: 7,
  },
  {
    name: "Friday",
    inOffice: 2,
    remote: 6,
  },
];

function WeeklyOfficeLevels({
  userProfile,
  companyData,
  employeeData,
  loading,
  isLoading,
  officeData,
}) {
  const [displayInOffice, setDisplayInOffice] = useState(false);
  const [displayRemote, setDisplayRemote] = useState(false);

  const { inView, observe } = useInView({
    threshold: 0.55, // Default is 0

    onEnter: () => {
      setDisplayInOffice(true);
      setTimeout(() => {
        setDisplayRemote(true);
      }, [500]);
    },
  });

  return (
    <OfficeLevelsContainer>
      <Title>
        <span>{officeData.title}'s</span> in person levels this week
      </Title>
      <ChartContainer ref={observe}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <XAxis dataKey="name" />
            <YAxis type="number" />
            <Tooltip
              formatter={(value, name, props) => ["In Office: " + value]}
              animationDuration={400}
            />
            <Legend
              formatter={(value, name, props) => {
                if (value === "inOffice") {
                  return "In Office";
                } else {
                  return "Remote";
                }
              }}
            />
            <Bar
              dataKey="inOffice"
              fill="#6ecd96"
              isAnimationActive={displayInOffice}
              animationDuration={2000}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              stackId="remote"
              dataKey="remote"
              fill="#514dec"
              isAnimationActive={displayRemote}
              animationDuration={2000}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </OfficeLevelsContainer>
  );
}

export default WeeklyOfficeLevels;
