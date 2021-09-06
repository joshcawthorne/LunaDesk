import React from "react";
import styled from "styled-components";
import { ReactFitty } from "react-fitty";

const SectionTitleContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-family: "Monument Extended";
  font-weight: 900;
  background-color: #fc9238;
  background-image: linear-gradient(90deg, #e623bb 0%, #f8b84f 100%),
    linear-gradient(0deg, #ffffff, #ffffff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  letter-spacing: 2.5px;
`;

const Subtext = styled.div`
  font-family: "Monument Extended";
  font-weight: 900;
  text-transform: uppercase;
  margin-top: -40px;

  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  letter-spacing: 2.5px;
`;

function SectionTitle({ title, subtext }) {
  return (
    <SectionTitleContainer>
      <ReactFitty>
        <Title>{title}</Title>
      </ReactFitty>
      <ReactFitty>
        <Subtext>{subtext}</Subtext>
      </ReactFitty>
    </SectionTitleContainer>
  );
}

export default SectionTitle;
