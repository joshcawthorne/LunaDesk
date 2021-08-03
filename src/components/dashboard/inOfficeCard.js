import React from "react";
import styled from "styled-components";

const InOfficeCardContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #101138;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
`;

const CardAvatar = styled.div`
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f4526c;
  margin-right: 5px;
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

const CardMetadata = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  align-items: flex-start;
  flex-direction: column;
`;

const CardTitle = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

const CardRole = styled.div`
  font-size: 13px;
  color: #fff;
  opacity: 0.8;
  font-weight: 200;
`;

function InOfficeCard() {
  return (
    <InOfficeCardContainer>
      <CardAvatar>
        <Initials>JH</Initials>
      </CardAvatar>
      <CardMetadata>
        <CardTitle>Michael Scottingham</CardTitle>
        <CardRole>Salesman</CardRole>
      </CardMetadata>
    </InOfficeCardContainer>
  );
}

export default InOfficeCard;
