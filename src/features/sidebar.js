import styled from "styled-components";

import SidebarItem from "../components/sidebar/sidebarItem";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  border-width: 0px;
  border-right-width: 1px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  border-color: #5c6499;
  background-color: #040419;
  overflow-y: auto;
  z-index: 1000;
  overflow-x: hidden;
  @media (max-width: 1100px) {
    width: 80px;
  }
`;

const SidebarContent = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-top: 30px;
  flex: 1 0 auto;
  @media (max-width: 1100px) {
    padding-left: 0;
  }
`;

const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarBottomContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex-direction: column;
  bottom: 0;
  left: 0%;
  padding-bottom: 33px;
  margin: 10px 0 0px 0;
  flex-shrink: 0;
  @media (max-width: 1100px) {
    margin: 0;
  }
`;

const Title = styled.div`
  color: grey;
  margin: 40px 0 10px 0;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarContent>
        <SidebarItems>
          <SidebarItem title={"Dashboard"} link={"/dashboard"} />
          <SidebarItem title={"Company"} link={"/company"} />
          <SidebarItem title={"User Settings"} link={"/user-settings"} />
          <Title>Temporary Debug Options</Title>
          <SidebarItem title={"Create Company"} link={"/create-company"} />
        </SidebarItems>
      </SidebarContent>
      <SidebarBottomContentContainer>
        <button>Logout</button>
      </SidebarBottomContentContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
