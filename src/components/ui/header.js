import React from "react";
import styled from "styled-components";

import Container from "../shared/container";

const HeaderContainerOuter = styled(Container)`
  width: calc(100% - 260px);
  margin-left: 250px;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 95%;
  height: 65px;

  background-color: #000;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  color: #fff;
`;

const LogoContainer = styled.div`
  height: 50px;
  width: 50px;
  background-color: #eee;
`;

const TeamContainer = styled.div`
  height: 50px;
  width: 50px;
  background-color: #eee;
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.div`
  height: 50px;
  width: 100px;
  background-color: #eee;
  margin: 0px 5px;
`;

function Header() {
  return (
    <HeaderContainerOuter>
      <HeaderContainer>
        <div>Lucky Duck</div>

        <TeamContainer />
      </HeaderContainer>
    </HeaderContainerOuter>
  );
}

export default Header;
