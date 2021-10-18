import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useStoreActions, useStoreState } from "easy-peasy";

import Modal from "components/shared/modal";
import Tabs from "components/shared/tabs";
import CompanyDetailsSettings from "features/settings/companySettings/companyDetailsSettings";
import CompanyAdminSettings from "features/settings/companySettings/companyAdminSettings";
import CompanyInviteSettings from "features/settings/companySettings/companyInviteSettings";

const CompanySettingsOuterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1005;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #10182922;
  backdrop-filter: blur(30px);
  cursor: pointer;
  @-moz-document url-prefix() {
    background-color: #2d3547;
  }
`;

const CompanySettingsModal = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.surface100};
  color: ${(props) => props.theme.text100};
  cursor: initial;
  border-radius: 10px;
  width: 95%;
  max-width: 800px;
`;

const Title = styled.div`
  font-size: 32px;
  color: ${(props) => props.theme.text100};
  font-weight: 500;
  margin-bottom: 20px;
  span {
    font-weight: bold;
  }
`;

const SettingsContentContainer = styled.div``;

function CompanySettings() {
  const { setDisplayCompanySettings } = useStoreActions(
    (actions) => actions.app
  );
  const { displayCompanySettings } = useStoreState((state) => state.app);
  const [selectedTab, setSelectedTab] = useState(0);

  function RenderSettingsTab() {
    switch (selectedTab) {
      case 0:
        return <CompanyDetailsSettings />;
      case 1:
        return <CompanyAdminSettings />;
      case 2:
        return <CompanyInviteSettings />;
      default:
        return <div>Unexpected tab :(</div>;
    }
  }

  return (
    <Modal
      title={"Manage Lucky Duck"}
      modalVisible={displayCompanySettings}
      setModal={setDisplayCompanySettings}
    >
      <Tabs
        tabs={[
          {
            id: 0,
            title: "Company Details",
          },
          {
            id: 1,
            title: "Company Admins",
          },
          {
            id: 2,
            title: "Company Invites",
          },
        ]}
        activeTab={selectedTab}
        updateTab={setSelectedTab}
        minWidth={"100px"}
        maxWidth={"170px"}
      />
      <SettingsContentContainer>
        <RenderSettingsTab />
      </SettingsContentContainer>
    </Modal>
  );
}

export default CompanySettings;
