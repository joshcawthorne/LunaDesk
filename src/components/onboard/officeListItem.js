import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import FastAverageColor from "fast-average-color";

import Arrow from "../../../assets/svg/arrow.svg";
import { getFile } from "../../services/bucket";

const OfficeItem = styled.div`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-bottom: 10px;
  padding: 10px 10px;
  transition: 200ms;
  border-radius: 10px;
  position: relative;
  :hover {
    background-color: #0000003b;

    transition: 400ms;
  }
`;

const OfficeIconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.background};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const OfficeIconLetter = styled.div`
  color: #000;
  font-size: 24px;
  text-transform: uppercase;
  user-select: none;
`;

const OfficeTitle = styled.div`
  color: #fff;
  font-size: 20px;
`;

const OfficeImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

const OfficeMetadata = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const OfficeLocation = styled.div`
  opacity: 0.8;
  font-size: 14px;
  line-height: 16px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

function OfficeListItem({ office, handleOfficeSelect }) {
  return (
    <OfficeItem onClick={() => handleOfficeSelect(office)}>
      <OfficeMetadata>
        <OfficeTitle>{office.title}</OfficeTitle>
        <OfficeLocation>{office.location}</OfficeLocation>
      </OfficeMetadata>
      <ArrowContainer>
        <Arrow color={"#fff"} />
      </ArrowContainer>
    </OfficeItem>
  );
}

export default OfficeListItem;
