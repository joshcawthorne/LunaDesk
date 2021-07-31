import { useState, useEffect } from "react";
import styled from "styled-components";

import NameInput from "./nameInput";
import RoleInput from "./roleInput";
import WorkingWeekInput from "./workingWeekInput";
import CompanyInput from "./companyInput";
import OfficeSelect from "./officeSelect";

const OnboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: #fff;
`;

const OnboardModalContainer = styled.div`
  padding: 60px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: linear-gradient(
      240.45deg,
      #ffd771 -133.75%,
      rgba(255, 215, 113, 0) 99.56%
    ),
    linear-gradient(100.47deg, #5c6ae4 -20.78%, #c84c4c 155.66%);
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  opacity: 0.8;
  max-width: 450px;
  margin-bottom: 40px;
`;

function Onboard() {
  const [selectedStage, setSelectedStage] = useState(0);
  const [fullName, setFullname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (fullName !== null && fullName.length > 1) {
      setFirstName(fullName.split(" ")[0]);
    }
  }, [fullName]);

  const OnboardState = () => {
    switch (selectedStage) {
      case 0:
        return (
          <NameInput
            setFullname={setFullname}
            setSelectedStage={setSelectedStage}
          />
        );
      case 1:
        return (
          <CompanyInput
            setSelectedStage={setSelectedStage}
            firstName={firstName}
            setCompany={setCompany}
          />
        );
      case 2:
        return (
          <RoleInput
            setRole={setRole}
            setSelectedStage={setSelectedStage}
            firstName={firstName}
          />
        );
      case 3:
        return <WorkingWeekInput />;

      case 4:
        return <OfficeSelect />;
    }
  };

  return (
    <OnboardContainer>
      <OnboardModalContainer>
        <OnboardState />
      </OnboardModalContainer>
    </OnboardContainer>
  );
}

export default Onboard;
