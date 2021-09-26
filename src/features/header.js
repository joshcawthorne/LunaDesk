import styled from "styled-components";

const HeaderContainer = styled.div`
  width: calc(100% - 260px);
  height: 65px;
  background-color: ${(props) => props.theme.surface0};
  border-width: 0;
  border-bottom: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.text400};
  position: fixed;
  top: 0;
  left: 0;
  margin-left: 260px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function Header() {
  return <HeaderContainer>LunaDesk Header</HeaderContainer>;
}

export default Header;
