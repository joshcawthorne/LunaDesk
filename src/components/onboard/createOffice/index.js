import { useState } from "react";
import NameInput from "./officeName";
import LocationInput from "./officeLocation";
import AddOffice from "./addOffice";

function CompanyCreation({
  setCreatingOffice,
  setCreatingCompany,
  setCompany,
}) {
  const [selectedStage, setSelectedStage] = useState(0);
  const [officeName, setOfficeName] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");

  const OnboardState = () => {
    switch (selectedStage) {
      case 0:
        return (
          <NameInput
            setFinalValue={setOfficeName}
            setSelectedStage={setSelectedStage}
          />
        );
      case 1:
        return (
          <LocationInput
            setSelectedStage={setSelectedStage}
            setFinalValue={setOfficeLocation}
            officeName={officeName}
          />
        );

      case 3:
        return (
          <AddOffice
            officeName={officeName}
            officeLocation={officeLocation}
            setCreatingOffice={setCreatingOffice}
          />
        );
    }
  };

  return <OnboardState />;
}

export default CompanyCreation;
