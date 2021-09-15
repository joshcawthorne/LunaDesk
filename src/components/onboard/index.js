import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Image from "next/image";

import NameInput from "./nameInput";
import RoleInput from "./roleInput";
import WorkingWeekInput from "./workingWeekInput";
import CompanyInput from "./companyInput";
import OfficeSelect from "./officeSelect";
import FinishOnboarding from "./finishOnboarding";
import mq from "../../utils/mq";

import Logo from "../../../assets/svg/logoOld.svg";
import profilePic from "../../../public/images/backgroundFallback.jpg";
import backgroundImage from "../../../assets/images/backgroundFallback.jpg";

const OnboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("/images/backgroundFallback.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  ${mq.mobile(css``)};
`;

const ContentContainer = styled(motion.div)`
  ${mq.mobile(css`
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 20px);
    flex-direction: column;
  `)};
`;

const OnboardModalContainer = styled(motion.div)`
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  color: #fff;
  background: #1c2783c7;
  box-shadow: rgb(31 38 135 / 37%) 0px 8px 32px 0px;
  backdrop-filter: blur(9px);
  border-radius: 10px;
  z-index: 5;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  width: 500px;
  ${mq.mobile(css`
    width: 95%;
    padding: 60px 10px;
  `)};
`;

const Title = styled(motion.div)`
  font-size: 68px;
  text-align: center;
  color: #fff;
  z-index: 5;
  ${mq.mobile(css`
    font-size: 38px;
    padding: 0px 20px;
  `)};
`;

const Desc = styled(motion.div)`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
  opacity: 0.8;
  z-index: 5;
  ${mq.mobile(css`
    font-size: 18px;
    padding: 0px 20px;
  `)};
`;

const LogoContainerOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
`;

const LogoContainer = styled.div`
  z-index: 5;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoBackgroundContainer = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  width: 100%;
  height: 100%;

  video {
    object-fit: cover;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #000;
  opacity: 0.15;
`;

const FallbackImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  .gatsby-image-wrapper {
    max-width: 100% !important;
    object-fit: cover !important;
    height: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RocketContainer = styled.div`
  position: absolute;
  z-index: 7;
  bottom: -390px;
  right: -245px;
  width: 600px;
  height: 600px;
  pointer-events: none;
  user-select: none;
  ${mq.mobile(css`
    display: none;
  `)};
`;

const RocketContainerInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const RocketImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const RocketImageContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const LoadingContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const LoadingText = styled.div`
  color: #fff;
  font-size: 40px;
`;

const IntroContainer = styled(motion.div)``;

const IntroContainerAnim = {
  show: {
    height: "fit-content",
  },
  unmount: {
    height: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};

const LoadingContainerAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};

const ContainerAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};

const TitleAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
  unmount: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const DescAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 0.8,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.55,
    },
  },
  unmount: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      delay: 0.25,
    },
  },
};

const ModalAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.6,
    },
  },
};

const RocketAnim = {
  hidden: {
    opacity: 0,
    x: -70,
    y: 70,
  },
  show: {
    opacity: [0, 1, 1, 1],
    y: 0,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 1.7,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
  unmount: {
    opacity: [1, 0, 0, 0],
    y: -170,
    x: 170,
    transition: {
      duration: 1.5,
      delay: 0.3,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
};

const CloudAnimOne = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: [0, 1, 1, 1],
    y: 0,
    x: 0,
    transition: {
      duration: 2,
      delay: 2.4,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
  unmount: {
    opacity: [1, 1, 0, 0],
    y: 20,
    x: -10,
    transition: {
      duration: 0.3,
      delay: 0.4,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
};

const CloudAnimTwo = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: [0, 1, 1, 1],
    y: 0,
    x: 0,
    transition: {
      duration: 2,
      delay: 2.5,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
  unmount: {
    opacity: [1, 1, 0, 0],
    y: 20,
    x: -10,
    transition: {
      duration: 0.3,
      delay: 0.5,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
};

const CloudAnimThree = {
  hidden: {
    opacity: 0,

    y: 20,
  },
  show: {
    opacity: [0, 1, 1, 1],
    y: 0,
    x: 0,
    transition: {
      duration: 2,
      delay: 2.55,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
  unmount: {
    opacity: [1, 1, 0, 0],
    y: 20,
    x: -10,
    transition: {
      duration: 0.3,
      delay: 0.55,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
};

const CloudAnimFour = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: [0, 1, 1, 1],
    y: 0,

    transition: {
      duration: 2,
      delay: 2.65,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
  unmount: {
    opacity: [1, 1, 0, 0],
    y: 20,
    x: -10,
    transition: {
      duration: 0.6,
      delay: 0.4,
      type: "spring",
      velocity: 100,
      stiffness: 700,
      damping: 100,
    },
  },
};

function Onboard() {
  const [selectedStage, setSelectedStage] = useState(0);
  const [fullName, setFullname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoIsLoaded, setVideoIsLoaded] = useState(true);
  const [finishedStageOne, setFinishedStageOne] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  function videoLoaded() {
    setVideoIsLoaded(true);
  }

  useEffect(() => {
    //setLoading(true);
  }, []);

  useEffect(() => {
    if (finishedStageOne) {
      setTimeout(() => {
        setHideIntro(true);
      }, 500);
    }
  }, [finishedStageOne]);

  useEffect(() => {
    if (videoIsLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    }
  }, [videoIsLoaded]);

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
            setFinishedStageOne={setFinishedStageOne}
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
            company={company}
          />
        );
      case 3:
        return <WorkingWeekInput setSelectedStage={setSelectedStage} />;

      case 4:
        return <OfficeSelect setSelectedStage={setSelectedStage} />;
      case 5:
        return (
          <FinishOnboarding
            fullName={fullName}
            firstName={firstName}
            role={role}
          />
        );
    }
  };

  return (
    <OnboardContainer>
      <LoadingContainer
        variants={LoadingContainerAnim}
        initial="hidden"
        animate={loading ? "show" : "hidden"}
      >
        <LoadingText>Firing up the engines...</LoadingText>
      </LoadingContainer>
      <ContentContainer
        variants={ContainerAnim}
        initial="hidden"
        animate={!loading ? "show" : "hidden"}
      >
        <LogoContainerOuter>
          <LogoContainer></LogoContainer>
        </LogoContainerOuter>

        <IntroContainer
          variants={IntroContainerAnim}
          initial="show"
          animate={hideIntro ? "unmount" : "show"}
        >
          <Title
            variants={TitleAnim}
            initial="hidden"
            animate={
              !loading ? (finishedStageOne ? "unmount" : "show") : "hidden"
            }
          >
            We have lift off!
          </Title>
          <Desc
            variants={DescAnim}
            initial="hidden"
            animate={
              !loading ? (finishedStageOne ? "unmount" : "show") : "hidden"
            }
          >
            We just need to ask you a couple of quick questions...
          </Desc>
        </IntroContainer>

        <OnboardModalContainer
          variants={ModalAnim}
          initial="hidden"
          animate={!loading ? "show" : "hidden"}
        >
          <OnboardState />
          <RocketContainer>
            <RocketContainerInner>
              <RocketImageContainer
                variants={RocketAnim}
                initial="hidden"
                animate={
                  !loading ? (finishedStageOne ? "unmount" : "show") : "hidden"
                }
              >
                <RocketImage
                  loading={"eager"}
                  src={"/images/rocketShip.png"}
                  alt="Background"
                  style={{ zIndex: 8 }}
                />
              </RocketImageContainer>
              <RocketImageContainer
                variants={CloudAnimOne}
                initial="hidden"
                animate={
                  !loading ? (finishedStageOne ? "unmount" : "show") : "hidden"
                }
              >
                <RocketImage
                  loading={"eager"}
                  src={"/images/cloud1.png"}
                  alt="Background"
                  style={{ zIndex: 6 }}
                />
              </RocketImageContainer>
              <RocketImageContainer
                variants={CloudAnimTwo}
                initial="hidden"
                animate={
                  !loading ? (finishedStageOne ? "unmount" : "show") : "hidden"
                }
              >
                <RocketImage
                  loading={"eager"}
                  src={"/images/cloud2.png"}
                  alt="Background"
                  style={{ zIndex: 6 }}
                />
              </RocketImageContainer>
              <RocketImageContainer
                variants={CloudAnimThree}
                initial="hidden"
                animate={
                  !loading ? (finishedStageOne ? "unmount" : "show") : "hidden"
                }
              >
                <RocketImage
                  loading={"eager"}
                  src={"/images/cloud3.png"}
                  alt="Background"
                  style={{ zIndex: 6 }}
                />
              </RocketImageContainer>
              <RocketImageContainer
                variants={CloudAnimFour}
                initial="hidden"
                animate={
                  !loading ? (finishedStageOne ? "unmount" : "show") : "hidden"
                }
              >
                <RocketImage
                  loading={"eager"}
                  src={"/images/cloud4.png"}
                  alt="Background"
                  style={{ zIndex: 6 }}
                />
              </RocketImageContainer>
            </RocketContainerInner>
          </RocketContainer>
        </OnboardModalContainer>
      </ContentContainer>
    </OnboardContainer>
  );
}

export default Onboard;
