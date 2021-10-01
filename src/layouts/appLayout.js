import styled from "styled-components";
import { useStoreState } from "easy-peasy";

import Header from "../features/header";
import Sidebar from "../features/sidebar";
import withAuth from "../utils/withAuth";
import CompanySettings from "../features/companySettings";

const LunaDeskContainer = styled.div``;

const ContentContainer = styled.div`
  width: calc(100% - 280px);
  margin-left: 280px;
  margin-top: 65px;
  min-height: calc(100vh - 65px);
  padding: 20px;
  background-color: ${(props) => props.theme.surface0};
  color: ${(props) => props.theme.text100};
`;

const AppLayout = ({ children }) => {
  const { displayCompanySettings } = useStoreState((state) => state.app);

  return (
    <LunaDeskContainer>
      <Header />
      <Sidebar />
      {displayCompanySettings && <CompanySettings />}
      <ContentContainer>{children}</ContentContainer>
    </LunaDeskContainer>
  );
};

export default withAuth(AppLayout);
