import { useState } from "react";
import dynamic from "next/dynamic";

import Layout from "src/layouts/onboardingLayout";
import Welcome from "../../features/onboarding/welcome";
import CreateCompany from "./create-company";
import JoinCompany from "../../features/onboarding/joinCompany";
import CompanyUserOnboard from "../../features/onboarding/companyUserOnboard.js";

const CompanyOnboard = dynamic(
  () => import("../../features/onboarding/companyOnboard"),
  {
    ssr: false,
  }
);

function Join() {
  const [onboardingPosition, setOnboardingPosition] = useState(0);

  const [userFullName, setUserFullName] = useState("");

  const OnboardingStageRender = () => {
    switch (onboardingPosition) {
      case 0:
        return (
          <Welcome
            nameInput={userFullName}
            setNameInput={setUserFullName}
            setOnboardingPosition={setOnboardingPosition}
          />
        );
        break;

      case 1:
        return <CompanyOnboard setOnboardingPosition={setOnboardingPosition} />;
        break;

      case 2:
        return <CreateCompany setOnboardingPosition={setOnboardingPosition} />;
        break;
      case 3:
        return <JoinCompany setOnboardingPosition={setOnboardingPosition} />;
        break;
      case 4:
        return (
          <CompanyUserOnboard setOnboardingPosition={setOnboardingPosition} />
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

  return (
    <Layout>
      <OnboardingStageRender />
    </Layout>
  );
}

export default Join;
