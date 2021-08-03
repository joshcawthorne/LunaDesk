import React from "react";
import styled, { css } from "styled-components";

const Day = styled.div`
  width: 100%;
  background-color: red;
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  height: 100px;
  ${(props) =>
    props.active &&
    css`
      background-color: green;
    `}
`;

const EmployeeCard = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function scheduleItem({ data }) {
  return (
    <>
      <EmployeeCard>{data.full_name}</EmployeeCard>
      <Day active={data.default_days.includes(0)} />
      <Day active={data.default_days.includes(1)} />
      <Day active={data.default_days.includes(2)} />
      <Day active={data.default_days.includes(3)} />
      <Day active={data.default_days.includes(4)} />
      <Day active={data.default_days.includes(5)} />
      <Day active={data.default_days.includes(6)} />
    </>
  );
}

export default scheduleItem;
