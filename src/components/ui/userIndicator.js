import { useState, useEffect } from "react";
import styled from "styled-components";

import { getProfile } from "../../services/user";

const UserIndicatorContainer = styled.div`
  width: calc(100% - 40px);
  background-color: #101237;
  padding: 20px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const UserProfilePicture = styled.div`
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 15px;
  margin-left: 10px;
  user-select: none;
  overflow: hidden;
  box-shadow: rgba(17, 12, 46, 0.45) 0px 28px 100px 0px;
`;

const UserInfoContainer = styled.div`
  user-select: none;
`;

const UserName = styled.div`
  color: #fff;
  font-size: 16px;
`;

const UserCompany = styled.div`
  color: #c0c4de;
  font-size: 13px;
`;

const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Initials = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const UserRole = styled.div`
  color: #c0c4de;
  font-size: 12px;
`;

const UserMeta = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Divider = styled.div`
  height: 4px;
  width: 4px;
  margin: 0 5px;
  background-color: #6671a8;
  border-radius: 50%;
  opacity: 0.7;
`;

function UserIndicator() {
  const [userData, setUserData] = useState(null);
  const [avatarPreset, setAvatarPreset] = useState(false);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const data = await getProfile();
    setUserData(data);
    console.log(userData);
  }

  useEffect(() => {
    if (userData !== null) {
      let name = userData.full_name.split(" ");
      let firstInitial = name[0].split("")[0];
      let secondInitial = name[1].split("")[0];
      setInitials(firstInitial + secondInitial);
      if (userData.avatar_url !== null) {
        setAvatarPreset(true);
      }
    }
  }, [userData]);

  if (userData === null) {
    return null;
  }

  return (
    <UserIndicatorContainer>
      <UserProfilePicture>
        {avatarPreset ? (
          <AvatarImage src={userData.avatar_url} alt={userData.full_name} />
        ) : (
          <Initials>{initials}</Initials>
        )}
      </UserProfilePicture>
      <UserInfoContainer>
        <UserName>{userData.full_name}</UserName>
        <UserMeta>
          <UserRole>
            {userData.employee_role} at {userData.company_name}
          </UserRole>
        </UserMeta>
      </UserInfoContainer>
    </UserIndicatorContainer>
  );
}

export default UserIndicator;
