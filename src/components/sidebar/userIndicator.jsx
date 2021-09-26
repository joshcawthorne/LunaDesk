import styled from "styled-components";
import LogOut from "src/assets/svg/icons/logout.svg";

const UserIndicatorContainer = styled.div`
  width: calc(100% - 40px);
  padding: 25px 20px;
  background-color: ${(props) => props.theme.surface200};
  display: flex;
  align-items: center;
`;

const MainContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
`;

const ProfilePictureContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
`;

const UserInfoContainer = styled.div`
  margin-left: 10px;
`;

const UserName = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.text100};
  font-size: 14px;
`;
const UserPosition = styled.div`
  color: ${(props) => props.theme.text300};
  font-size: 11px;
  letter-spacing: 0.5px;
  font-weight: 500;
`;
const LogoutIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  transition: 400ms;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.accent};
    transition: 400ms;
  }
`;

function UserIndicator({ themeContext }) {
  return (
    <UserIndicatorContainer>
      <MainContent>
        <ProfilePictureContainer></ProfilePictureContainer>
        <UserInfoContainer>
          <UserName>Josh Cawthorne</UserName>
          <UserPosition>Lucky Duck</UserPosition>
        </UserInfoContainer>
      </MainContent>
      <LogoutIconContainer>
        <LogOut stroke={themeContext.text100} strokeWidth={"2.5px"} />
      </LogoutIconContainer>
    </UserIndicatorContainer>
  );
}

export default UserIndicator;
