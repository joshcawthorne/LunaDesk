import { useState } from "react";
import Layout from "src/layouts/onboardingLayout";

import Welcome from "./welcome";
import AddProfilePicture from "./addProfilePicture";

function Join() {
  const [onboardingPosition, setonboardingPosition] = useState(0);

  const [userFullName, setUserFullName] = useState("");

  const OnboardingStageRender = () => {
    switch (onboardingPosition) {
      case 0:
        return (
          <Welcome
            nameInput={userFullName}
            setNameInput={setUserFullName}
            setonboardingPosition={setonboardingPosition}
          />
        );
        break;

      case 1:
        return (
          <AddProfilePicture
            firstName={"Josh"}
            setonboardingPosition={setonboardingPosition}
          />
        );
        break;

      case 2:
        return (
          <AddProfilePicture
            firstName={"Josh"}
            setonboardingPosition={setonboardingPosition}
          />
        );
        break;

      default:
        return (
          <Welcome
            nameInput={userFullName}
            setNameInput={setUserFullName}
            setonboardingPosition={setonboardingPosition}
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
