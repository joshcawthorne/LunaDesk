import styled from "styled-components";
import { useStoreState } from "store/hooks";

import Header from "../features/header";
import Sidebar from "../features/sidebar";
import withAuth from "../utils/withAuth";
import CompanySettings from "../features/companySettings";
import UserSettings from "../features/userSettings";
import CompanyInvite from "../features/companyInvite";

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

interface AppLayout {
  children: any
}

const AppLayout = ({ children }: AppLayout) => {
  const { displayCompanySettings, displayUserSettings, displayInviteModal } =
    useStoreState((state) => state.app);

  return (
    <LunaDeskContainer>
      <Header />
      <Sidebar />
      {displayCompanySettings && <CompanySettings />}
      {displayUserSettings && <UserSettings />}
      {displayInviteModal && <CompanyInvite />}
      <ContentContainer>{children}</ContentContainer>
    </LunaDeskContainer>
  );
};

export default withAuth(AppLayout);
