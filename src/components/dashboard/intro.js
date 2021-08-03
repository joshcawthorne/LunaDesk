import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { getFile } from "../../services/bucket";

const IntroContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
  padding-top: 60px;
  z-index: 20;
`;

const IntroTopLineOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const IntroTopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  margin-left: 260px;
  padding: 70px;
  padding-bottom: 20px;
  padding-top: 20px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  background-color: rgb(0 0 0 / 25%);
  z-index: 50;
  max-width: 2000px;
  @media (max-width: 1100px) {
    margin-left: 80px;
    padding: 20px;
  }
`;

const CompanyIndicator = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CompanyText = styled.div`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  @media (max-width: 850px) {
    display: none;
  }
`;

const CompanyInfo = styled.div`
  color: #fff;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmployeeAvatarContainer = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f4526c;
  margin-right: -15px;
  border-width: 5px;
  border-style: solid;
  user-select: none;
  border-color: #040419;
  :last-of-type {
    margin-left: 0;
  }
`;

const EmployeeAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const Initials = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
`;

const EmployeeAvatars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmployeeOtherText = styled.div`
  font-size: 14px;
  opacity: 0.7;
  margin-left: 20px;
  user-select: none;
`;

const GreetingText = styled.div`
  color: #81818b;
  font-size: 36px;
  margin-top: 30px;

  span {
    font-weight: bold;
    color: #fff;
  }
`;

const CompanyAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #101036;
  border-width: 2px;
  box-sizing: border-box;
  border-color: #d94961;
  border-style: solid;
`;

const Avatar = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  background-color: #101036;
`;

function Intro({ userProfile, companyData, employeeData, loading }) {
  const [greetingMessage, setGreetingMessage] = useState("Hello, ");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (companyData.company_logo !== null) {
      getAvatar(companyData.company_logo);
    }
  }, [companyData]);

  useEffect(() => {
    const d = new Date();
    const n = d.getHours();
    if (n > 4 && n < 12) {
      setGreetingMessage("Good Morning, ");
    } else if (n > 12 && n < 18) {
      setGreetingMessage("Good Afternoon, ");
    } else {
      setGreetingMessage("Good Evening, ");
    }
  }, []);

  async function getAvatar(url) {
    const data = await getFile("avatars", url);
    setImage(data.publicURL);
  }

  return (
    <IntroContainer>
      <IntroTopLineOuter>
        <IntroTopLine>
          <CompanyIndicator>
            <CompanyAvatar>
              <Avatar src={image} alt={companyData.name} />
            </CompanyAvatar>
            <CompanyText>{companyData.title}</CompanyText>
          </CompanyIndicator>
          <CompanyInfo>
            <EmployeeAvatars>
              {employeeData.slice(0, 3).map((employee, i) => {
                let name = employee.full_name.split(" ");
                let firstInitial = name[0].split("")[0];
                let secondInitial = name[1].split("")[0];
                let initials = firstInitial + secondInitial;
                return (
                  <EmployeeAvatarContainer key={i}>
                    <Initials>{initials}</Initials>
                  </EmployeeAvatarContainer>
                );
              })}
            </EmployeeAvatars>
            <EmployeeOtherText>
              + {employeeData.length - 3} others
            </EmployeeOtherText>
          </CompanyInfo>
        </IntroTopLine>
      </IntroTopLineOuter>
      <GreetingText>
        {greetingMessage}
        <span>{userProfile.first_name}!</span> 👋
      </GreetingText>
    </IntroContainer>
  );
}

export default Intro;
