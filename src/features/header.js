import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: #eee;
  position: fixed;
  top: 0;
  left: 0;
`;

function Header() {
  return <HeaderContainer>LunaDesk</HeaderContainer>;
}

export default Header;
