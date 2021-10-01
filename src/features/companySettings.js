import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useStoreActions, useStoreState } from "easy-peasy";
import useOnclickOutside from "react-cool-onclickoutside";
import Tabs from "src/components/shared/tabs";

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
  background-color: #fff;
  cursor: initial;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 32px;
  color: #000000;
  font-weight: 500;
  margin-bottom: 20px;
  span {
    font-weight: bold;
  }
`;

function CompanySettings() {
  const { setDisplayCompanySettings } = useStoreActions(
    (actions) => actions.app
  );
  const { displayCompanySettings } = useStoreState((state) => state.app);
  const [selectedTab, setSelectedTab] = useState(0);

  const ref = useOnclickOutside(() => {
    if (displayCompanySettings) {
      setDisplayCompanySettings(false);
    }
  });

  return (
    <CompanySettingsOuterContainer>
      <CompanySettingsModal ref={ref}>
        <Title>
          Manage <span>Lucky Duck</span>
        </Title>
        <Tabs
          tabs={[
            {
              id: 0,
              title: "Settings",
            },
            {
              id: 1,
              title: "More Settings",
            },
          ]}
          activeTab={selectedTab}
          updateTab={setSelectedTab}
          minWidth={"100px"}
        />
      </CompanySettingsModal>
    </CompanySettingsOuterContainer>
  );
}

export default CompanySettings;
