import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const IntroContainer = styled.div`
  width: calc(100% - 140px);
  padding: 30px 70px;
`;

const IntroTopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IntroText = styled.div`
  color: #fff;
  font-size: 44px;
  font-weight: bold;
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

const IntroGreeting = styled.div`
  color: #81818b;
  font-size: 24px;

  margin-top: 0px;

  span {
    font-weight: bold;
    color: #fff;
  }
`;

function Intro({ userProfile, companyData, employeeData, loading }) {
  const [greetingMessage, setGreetingMessage] = useState("Hello, ");
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

  console.log(companyData);

  return (
    <IntroContainer>
      <IntroTopLine>
        <IntroText>{companyData.title}</IntroText>
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
      <IntroGreeting>
        {greetingMessage}
        <span>{userProfile.first_name}!</span> 👋
      </IntroGreeting>
    </IntroContainer>
  );
}

export default Intro;
