import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { useStoreState, useStoreActions } from "easy-peasy";
import SidebarItem from "../components/sidebar/sidebarItem";
import SidebarSubItem from "src/components/sidebar/sidebarSubItem";
import UserIndicator from "src/components/sidebar/userIndicator";
import Image from "next/image";
import { motion } from "framer-motion";

import Home from "src/assets/svg/icons/category.svg";
import Chart from "src/assets/svg/icons/chart.svg";
import Calendar from "src/assets/svg/icons/calendar.svg";
import Work from "src/assets/svg/icons/work.svg";
import Team from "src/assets/svg/icons/teams.svg";
import Settings from "src/assets/svg/icons/filter.svg";
import Logo from "src/assets/svg/logo.svg";
import logoBackground from "src/assets/background.png";

let SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 280px;
  border-width: 0px;
  border-right-width: 1px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  border-color: #5c6499;
  color: ${(props) => props.theme.text100};
  background-color: ${(props) => props.theme.surface100};
  overflow-y: auto;
  z-index: 1000;
  overflow-x: hidden;
`;

const SidebarContent = styled.div`
  width: 100%;
  padding-top: 30px;
  flex: 1 0 auto;
`;

const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  padding: 10px;
`;

const SidebarBottomContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  flex-direction: column;
  bottom: 0;
  left: 0;
  padding-bottom: 0px;
  margin: 10px 0 0 0;
  flex-shrink: 0;
  width: 100%;
`;

const SidebarBottomContentContainerInner = styled.div`
  width: calc(100% - 20px);
  padding: 10px;
`;

const Title = styled.div`
  margin: 30px 0 10px 0;
`;

const UpperLayer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 20px);
  padding: 20px 10px 15px 10px;
  border-radius: 10px;
  margin: 20px;
  margin-top: 0;
  z-index: 2;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.surface200};
`;

const CollapseIcon = styled.div`
  cursor: pointer;
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 10px;
  opacity: 0.7;
  background-color: ${(props) => props.theme.surface400};
  margin-bottom: 10px;
`;

const BetaText = styled.div`
  font-size: 12px;
  font-weight: 600;
  opacity: 0.7;
  margin-left: 120px;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
  z-index: 2;
`;

const BackgroundLayer = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

function Sidebar() {
  const themeContext = useContext(ThemeContext);
  const { setLightMode, setSidebarCollapsed } = useStoreActions(
    (actions) => actions.preferences
  );
  const { lightMode, sidebarCollapsed } = useStoreState(
    (state) => state.preferences
  );

  return (
    <SidebarContainer>
      <SidebarContent>
        <UpperLayer>
          <LogoContainer>
            <Logo
              fill={"#fff"}
              style={{ zIndex: "2" }}
              width={"150px"}
              filter={"drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.25))"}
            />
            <BetaText>BETA</BetaText>
          </LogoContainer>
        </UpperLayer>
        <SidebarItems>
          <SidebarItem
            Icon={Home}
            themeContext={themeContext}
            title={"Dashboard"}
            link={"/dashboard"}
          />

          <SidebarItem
            Icon={Calendar}
            themeContext={themeContext}
            title={"Schedule"}
            link={"#"}
          />
          <SidebarItem
            link={"#"}
            title={"Teams"}
            themeContext={themeContext}
            Icon={Team}
            hasSubItems
          />
          <SidebarSubItem
            title={"Create a new Team"}
            link={"/company/manage"}
            themeContext={themeContext}
          />
          <SidebarSubItem
            title={"Manage Teams"}
            link={"/company/manage"}
            themeContext={themeContext}
          />
          <SidebarItem
            Icon={Work}
            themeContext={themeContext}
            title={"Company"}
            link={"/company"}
            hasSubItems
          />
          <SidebarSubItem
            title={"Manage Lucky Duck"}
            link={"/company/manage"}
            themeContext={themeContext}
          />

          <SidebarItem
            Icon={Chart}
            themeContext={themeContext}
            title={"Analytics"}
            link={"/user-settings"}
            pill={"Coming Soon"}
          />
        </SidebarItems>
      </SidebarContent>
      <SidebarBottomContentContainer>
        <SidebarBottomContentContainerInner>
          <Divider />
          <SidebarItem
            Icon={Settings}
            themeContext={themeContext}
            title={"Settings"}
            link={"/create-company"}
          />
        </SidebarBottomContentContainerInner>
        <UserIndicator themeContext={themeContext} />
      </SidebarBottomContentContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
