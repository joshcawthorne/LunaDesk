import { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import styled, { ThemeContext } from "styled-components";
import { useStoreActions } from "store/hooks";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import Layout from "layouts/onboardingLayout";
import Welcome from "features/onboarding/welcome";
import CreateCompanyName from "features/onboarding/createCompany/createCompanyName";
import CreateCompanyImageLocation from "features/onboarding/createCompany/createCompanyImageLocation";
import SetCompanyDefaultTimes from "features/onboarding/createCompany/setCompanyDefaultTimes";
import JoinCompany from "features/onboarding/joinCompany";
import CompanyUserRoleSelect from "features/onboarding/companyUserRoleSelect";
import UserDefaultWorkingHours from "features/onboarding/userDefaultWorkingHours";
import UserSelectPrimaryOffice from "features/onboarding/userSelectPrimaryOffice";
import UserPreferences from "features/onboarding/userPreferences";
import CompleteOnboarding from "features/onboarding/completeOnboarding";
import CreateCompanyHQ from "features/onboarding/createCompany/createCompanyHQ";
import colorOptions from "data/avatarColourOptions";
import OnboardingBackground from "features/onboarding/backgroundAnimation";

const CompanyOnboard = dynamic(
  () => import("../../features/onboarding/companyOnboard"),
  {
    ssr: false,
  }
);

const DebugController = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDropdown = styled(Dropdown)`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  margin: auto;
  letter-spacing: 0.5px;
  margin-right: 10px;
  color: #232632;
`;

function Join() {
  const [onboardingPosition, setOnboardingPosition] = useState(1);
  const [userFullName, setUserFullName] = useState("");
  const [userAvatarTmp, setUserAvatarTmp] = useState("");
  const [initialAvatarBg, setInitialAvatarBg] = useState("");
  const [initialAvatarFont, setInitialAvatarFont] = useState("");
  const [debugOption, setDebugOption] = useState("1");

  useEffect(() => {
    const randomTheme = Math.floor(
      Math.random() * (colorOptions.length - 0 + 1) + 0
    );
    setInitialAvatarBg(colorOptions[randomTheme].background);
    setInitialAvatarFont(colorOptions[randomTheme].color);
  }, []);

  const OnboardingStageRender = () => {
    switch (onboardingPosition) {
      case 1:
        return (
          <Welcome
            setOnboardingPosition={setOnboardingPosition}
            initialAvatarBg={initialAvatarBg}
            initialAvatarFont={initialAvatarFont}
          />
        );
        break;
      case 2:
        return <CompanyOnboard setOnboardingPosition={setOnboardingPosition} />;
        break;
      case 3:
        return (
          <JoinCompany
            userAvatarTmp={userAvatarTmp}
            setOnboardingPosition={setOnboardingPosition}
          />
        );
        break;
      case 4:
        return (
          <CompanyUserRoleSelect
            setOnboardingPosition={setOnboardingPosition}
          />
        );
      case 5:
        return (
          <UserDefaultWorkingHours
            setOnboardingPosition={setOnboardingPosition}
          />
        );
      case 6:
        return (
          <UserSelectPrimaryOffice
            setOnboardingPosition={setOnboardingPosition}
          />
        );
      case 7:
        return (
          <UserPreferences setOnboardingPosition={setOnboardingPosition} />
        );
      case 8:
        return <CompleteOnboarding />;
      case 9:
        return (
          <CreateCompanyImageLocation
            setOnboardingPosition={setOnboardingPosition}
          />
        );
      case 10:
        return (
          <CreateCompanyName setOnboardingPosition={setOnboardingPosition} />
        );
      case 11:
        return (
          <SetCompanyDefaultTimes
            setOnboardingPosition={setOnboardingPosition}
          />
        );
      case 12:
        return (
          <CreateCompanyHQ setOnboardingPosition={setOnboardingPosition} />
        );
      default:
        return (
          <Welcome
            nameInput={userFullName}
            setNameInput={setUserFullName}
            setOnboardingPosition={setOnboardingPosition}
          />
        );
        break;
    }
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const defaultOption = options[0];

  const setLightMode = useStoreActions(
    (actions) => actions.preferences.setLightMode
  );

  const themeContext = useContext(ThemeContext);

  return (
    <Layout style={{ position: "relative" }}>
      <DebugController>
        <StyledDropdown
          options={options}
          onChange={(e) => {
            setOnboardingPosition(e.value);
            setDebugOption(e.value.toString());
          }}
          value={debugOption}
          placeholder="Debug select stage"
        />
        <button onClick={() => setLightMode(false)}>Dark Theme</button>
        <button onClick={() => setLightMode(true)}>Light Theme</button>
      </DebugController>
      <OnboardingStageRender />
      <OnboardingBackground key={themeContext} theme={themeContext} />
    </Layout>
  );
}

export default Join;
