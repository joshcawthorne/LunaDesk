import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function index() {
  return <PageContainer>You are not logged in.</PageContainer>;
}

export default index;
