import React, { useState } from "react";
import styled from "styled-components";
import { useStoreActions, useStoreState } from "store/hooks";

import Modal from "components/shared/modal";
import Tabs from "components/shared/tabs";

import UserPreferences from "features/settings/userSettings/userPreferences";

const SettingsContentContainer = styled.div`
  margin-top: 40px;
`;

function UserSettings() {
  const { setDisplayUserSettings } = useStoreActions((actions) => actions.app);
  const { displayUserSettings } = useStoreState((state) => state.app);
  const [selectedTab, setSelectedTab] = useState(0);

  function RenderSettingsTab() {
    switch (selectedTab) {
      case 0:
        return <div>User Details</div>;
      case 1:
        return <UserPreferences />;

      default:
        return <div>Unexpected tab :(</div>;
    }
  }

  return (
    <Modal
      title={"User Settings"}
      modalVisible={displayUserSettings}
      setModal={setDisplayUserSettings}
    >
      <Tabs
        tabs={[
          {
            id: 0,
            title: "User Details",
          },
          {
            id: 1,
            title: "LunaDesk Preferences",
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

export default UserSettings;
