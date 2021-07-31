import { useState } from "react";
import NameInput from "./createCompany/companyName";
import BasedInInput from "./createCompany/basedInInput";
import WorkingDaysInput from "./createCompany/workingDays";
import WorkingHours from "./createCompany/workingHours";
import CompanyLogo from "./createCompany/companyLogo";
import CreateCompany from "./createCompany/index";

function CompanyCreation() {
  const [selectedStage, setSelectedStage] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [basedIn, setBasedIn] = useState("");
  const [workingDays, setWorkingDays] = useState([]);
  const [workingHours, setWorkingHours] = useState({ start: 9, end: 18 });
  const [logoUrl, setLogoUrl] = useState(null);

  const OnboardState = () => {
    switch (selectedStage) {
      case 0:
        return (
          <NameInput
            setFinalValue={setCompanyName}
            setSelectedStage={setSelectedStage}
          />
        );
      case 1:
        return (
          <BasedInInput
            setSelectedStage={setSelectedStage}
            setFinalValue={setBasedIn}
            companyName={companyName}
          />
        );
      case 2:
        return (
          <WorkingDaysInput
            companyName={companyName}
            setSelectedStage={setSelectedStage}
            setFinalValue={setWorkingDays}
          />
        );
      case 3:
        return (
          <WorkingHours
            companyName={companyName}
            setSelectedStage={setSelectedStage}
            setFinalValue={setWorkingDays}
          />
        );

      case 4:
        return (
          <CompanyLogo
            companyName={companyName}
            setSelectedStage={setSelectedStage}
            setFinalValue={setLogoUrl}
          />
        );
      case 5:
        return (
          <CreateCompany
            companyName={companyName}
            basedIn={basedIn}
            workingDays={workingDays}
            workingHours={workingHours}
            logoUrl={logoUrl}
          />
        );
    }
  };

  return <OnboardState />;
}

export default CompanyCreation;
