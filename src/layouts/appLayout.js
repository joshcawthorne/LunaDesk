import styled from "styled-components";
import { useStoreState } from "easy-peasy";

import Header from "../features/header";
import Sidebar from "../features/sidebar";
import withAuth from "../utils/withAuth";

const LunaDeskContainer = styled.div``;

const ContentContainer = styled.div`
  width: calc(100% - 260px);
  margin-left: 260px;
  margin-top: 65px;
  min-height: calc(100vh - 65px);
  padding: 20px;
  background-color: ${(props) => props.theme.surface0};
`;

const AppLayout = ({ children }) => {
  return (
    <LunaDeskContainer>
      <Header />
      <Sidebar />
      <ContentContainer>{children}</ContentContainer>
    </LunaDeskContainer>
  );
};

export default withAuth(AppLayout);
