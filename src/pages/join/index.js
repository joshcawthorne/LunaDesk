import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { Gradient } from "whatamesh";
import { motion } from "framer-motion";

import Layout from "layouts/onboardingLayout";
import Welcome from "features/onboarding/welcome";
import CreateCompany from "./create-company";
import JoinCompany from "features/onboarding/joinCompany";
import CompanyUserRoleSelect from "features/onboarding/companyUserRoleSelect";
import UserDefaultWorkingHours from "features/onboarding/userDefaultWorkingHours";
import UserDefaultWorkingDays from "features/onboarding/userDefaultWorkingDays";
import UserSelectPrimaryOffice from "features/onboarding/userSelectPrimaryOffice";
import CompleteOnboarding from "features/onboarding/completeOnboarding";
import colorOptions from "data/avatarColourOptions";

const CompanyOnboard = dynamic(
  () => import("../../features/onboarding/companyOnboard"),
  {
    ssr: false,
  }
);

const CanvasContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dfdfee;
  #gradient-canvas {
    width: 100%;
    height: 100%;
    --gradient-color-1: #dfdfee;
    --gradient-color-2: #e7d194;
    --gradient-color-3: #dfdfee;
    --gradient-color-4: #dd9dc2;
  }
`;

const variants = {
  visible: { opacity: 1, transition: { duration: 0.6 } },
  hidden: { opacity: 0 },
};

function Join() {
  const [onboardingPosition, setOnboardingPosition] = useState(0);
  const [canvasReady, setCanvasReady] = useState(false);
  const [userFullName, setUserFullName] = useState("");
  const [userAvatarTmp, setUserAvatarTmp] = useState("");
  const [initialAvatarBg, setInitialAvatarBg] = useState("");
  const [initialAvatarFont, setInitialAvatarFont] = useState("");

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
    setTimeout(() => {
      setCanvasReady(true);
    }, 400);
  }, []);

  useEffect(() => {
    const randomTheme = Math.floor(
      Math.random() * (colorOptions.length - 0 + 1) + 0
    );
    setInitialAvatarBg(colorOptions[randomTheme].background);
    setInitialAvatarFont(colorOptions[randomTheme].color);
  }, []);

  const OnboardingStageRender = () => {
    switch (onboardingPosition) {
      case -1:
        return (
          <Welcome
            setOnboardingPosition={setOnboardingPosition}
            initialAvatarBg={initialAvatarBg}
            initialAvatarFont={initialAvatarFont}
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
      case 0:
        return (
          <UserDefaultWorkingHours
            setOnboardingPosition={setOnboardingPosition}
          />
        );
      case 6:
        return (
          <UserDefaultWorkingDays
            setOnboardingPosition={setOnboardingPosition}
          />
        );
      case 7:
        return (
          <UserSelectPrimaryOffice
            setOnboardingPosition={setOnboardingPosition}
          />
        );
      case 8:
        return <CompleteOnboarding />;
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
      <CanvasContainer
        initial="hidden"
        animate={canvasReady ? "visible" : "hidden"}
        variants={variants}
      >
        <canvas id="gradient-canvas" data-transition-in />
      </CanvasContainer>
    </Layout>
  );
}

export default Join;
