import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const DateItemContainer = styled.div`
  padding: 12px 24px;
  background-color: green;
  border-radius: 30px;
  width: fit-content;
  margin-bottom: 10px;
  margin-right: 10px;
`;

function DateItem({ title, state, id }) {
  return <DateItemContainer>{title}</DateItemContainer>;
}

export default DateItem;
