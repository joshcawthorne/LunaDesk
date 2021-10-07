import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { supabase } from "src/services/supabaseClient";
import OnboardingCard from "src/layouts/onboardingCard";
import TextField from "src/components/shared/textField";
import ProfilePictureUpload from "src/components/profilePictureUpload";

import StarOne from "src/assets/svg/starOne.svg";
import StarTwo from "src/assets/svg/starTwo.svg";
import StarThree from "src/assets/svg/starThree.svg";
import StarFour from "src/assets/svg/starFour.svg";

const Label = styled.div`
  font-weight: 500;
  font-size: 13px;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.5;
`;

const InputFieldItem = styled.div`
  margin-bottom: 20px;
`;

const UrlInputContainer = styled.div`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s;
  color: ${(props) => props.theme.text100};
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgb(223, 225, 228);
  border-radius: 4px;
  font-size: 13px;
  color: rgb(40, 42, 48);
  appearance: none;
  transition: border 0.15s ease 0s;
  height: 48px;
  padding: 12px;
  width: 100%;
  display: flex;
  :focus-within {
    border-color: #2362dc;
    outline: none;
  }
`;

const PreText = styled.div`
  opacity: 0.5;
`;

const UrlInput = styled.input`
  background-color: transparent;
  border-width: 0px;
  border-style: solid;
  outline: none;
  width: 100%;
  padding: 0;
  height: 100%;
  margin-top: 2px;
  color: #282a30;
  margin-left: 1px;
`;

const InnerTitle = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
`;

const InnerDesc = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  opacity: 0.6;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 4px;
  max-width: 360px;
  letter-spacing: 0.5px;
`;

const InputProfilePictureItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 20px 0;
`;

const ProfilePictureContainer = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border-width: 2.5x;
  border-style: solid;
  background-color: #0d1afc;
  border-color: #0d1afc;
  position: relative;
  z-index: 2;
  user-select: none;
`;

const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 42px;
  font-weight: 600;
  color: #fff;
  z-index: 2;
`;

const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
`;

const UserProfileText = styled.div`
  font-size: 13px;
  text-align: center;
  font-weight: 500;
  opacity: 0.6;
  margin-top: 5px;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const StarsInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
`;

const StarOneContainer = styled(motion.div)`
  position: absolute;
  top: -5px;
  left: -25px;
  z-index: 0;
`;
const StarTwoContainer = styled(motion.div)`
  position: absolute;
  top: -20px;
  right: -5px;
`;
const StarThreeContainer = styled(motion.div)`
  position: absolute;
  bottom: -3px;
  left: -15px;
`;
const StarFourContainer = styled(motion.div)`
  position: absolute;
  bottom: 5px;
  right: -35px;
`;

const StarFiveContainer = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: -30px;
  transform: rotate(10deg);
`;

const StarSixContainer = styled(motion.div)`
  position: absolute;
  top: 24px;
  right: -30px;
`;

const ProfilePictureAnim = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const profileAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { delay: 0.2 },
  },
};

const starOneAnim = {
  hidden: { opacity: 0, x: 10, y: 5 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "6deg",
    transition: { delay: 0 },
  },
};

const starTwoAnim = {
  hidden: { opacity: 0, x: -15, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "-6deg",
    transition: { delay: 0.02 },
  },
};

const starThreeAnim = {
  hidden: { opacity: 0, x: 20, y: -10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "-20deg",
    transition: { delay: 0.04 },
  },
};

const starFourAnim = {
  hidden: { opacity: 0, x: -15, y: -5 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "8deg",
    transition: { delay: 0.03 },
  },
};

const starFiveAnim = {
  hidden: { opacity: 0, x: 10, y: 10, rotate: "-30deg" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "-10deg",
    transition: { delay: 0.03 },
  },
};

const starSixAnim = {
  hidden: { opacity: 0, x: -25, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "20deg",
    transition: { delay: 0.05 },
  },
};

function Welcome({ nameInput, setNameInput, setonboardingPosition }) {
  const [loading, setLoading] = useState(false);
  const [nameInputView, setNameInputView] = useState(nameInput);
  const [profilePictureInitials, setProfilePictureInitials] = useState("JL");
  const [userHasProfilePicture, setUserHasProfilePicture] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarSrc, setavatarSrc] = useState("");
  const [runAnim, setRunAnim] = useState(false);

  useEffect(() => {
    if (avatarUrl) downloadImage(avatarUrl);
  }, [avatarUrl]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("user-avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setavatarSrc(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  function handleContinue() {
    setLoading(true);
    setNameInput(nameInputView);
    setTimeout(() => {
      setonboardingPosition(1);
      setLoading(false);
    }, 1500);
  }

  function getInitials(string) {
    var names = string.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  useEffect(() => {
    if (nameInputView.length !== 0) {
      setProfilePictureInitials(getInitials(nameInputView));
    } else {
      setProfilePictureInitials("JL");
    }
  }, [nameInputView]);

  return (
    <OnboardingCard
      description={""}
      buttonText={"Continue"}
      buttonAction={handleContinue}
      buttonLoading={loading}
      buttonActive={true}
    >
      <InnerTitle>Let's make it official</InnerTitle>
      <InnerDesc>
        It's great to have you onboard! We just need a few quick bits of info
        from you to get started...
      </InnerDesc>
      <InputProfilePictureItem>
        <ProfilePictureContainer>
          <ProfilePictureUpload
            userHasProfilePicture={userHasProfilePicture}
            setUserHasProfilePicture={setUserHasProfilePicture}
            onUpload={(url) => {
              setAvatarUrl(url);
              console.log(url);
              setUserHasProfilePicture(true);
            }}
          />
          {userHasProfilePicture ? (
            <>
              <ProfilePictureAnim
                initial="hidden"
                animate={runAnim ? "visible" : "hidden"}
                variants={profileAnim}
              >
                <UserProfileImage
                  src={avatarSrc}
                  onLoad={() => setRunAnim(true)}
                />
              </ProfilePictureAnim>

              <StarsContainer>
                <StarsInnerContainer>
                  <StarOneContainer
                    initial="hidden"
                    animate={runAnim ? "visible" : "hidden"}
                    variants={starOneAnim}
                  >
                    <StarOne fill={"#ffaa61"} />
                  </StarOneContainer>
                  <StarTwoContainer
                    initial="hidden"
                    animate={runAnim ? "visible" : "hidden"}
                    variants={starTwoAnim}
                  >
                    <StarTwo fill={"#0d1afc"} />
                  </StarTwoContainer>
                  <StarThreeContainer
                    initial="hidden"
                    animate={runAnim ? "visible" : "hidden"}
                    variants={starThreeAnim}
                  >
                    <StarThree fill={"#0d1afc"} />
                  </StarThreeContainer>
                  <StarFourContainer
                    initial="hidden"
                    animate={runAnim ? "visible" : "hidden"}
                    variants={starFourAnim}
                  >
                    <StarOne fill={"#0d1afc"} />
                  </StarFourContainer>
                  <StarFiveContainer
                    initial="hidden"
                    animate={runAnim ? "visible" : "hidden"}
                    variants={starFiveAnim}
                  >
                    <StarTwo fill={"#ffaa61"} />
                  </StarFiveContainer>

                  <StarSixContainer
                    initial="hidden"
                    animate={runAnim ? "visible" : "hidden"}
                    variants={starSixAnim}
                  >
                    <StarThree fill={"#ffaa61"} />
                  </StarSixContainer>
                </StarsInnerContainer>
              </StarsContainer>
            </>
          ) : (
            <ProfilePicture>{profilePictureInitials}</ProfilePicture>
          )}
        </ProfilePictureContainer>
      </InputProfilePictureItem>
      <InputFieldItem>
        <Label>Your Full Name</Label>
        <TextField
          value={nameInputView}
          setValue={setNameInputView}
          placeholder={"John LunaDesk"}
          type={"text"}
        />
      </InputFieldItem>
      <InputFieldItem>
        <Label>Your Location</Label>
        <TextField
          value={""}
          setValue={""}
          placeholder={"The Moon"}
          type={"text"}
        />
      </InputFieldItem>
      <InputFieldItem>
        <Label>Company Role</Label>
        <TextField
          value={""}
          setValue={""}
          placeholder={"Founder/CEO"}
          type={"text"}
        />
      </InputFieldItem>
      <InputFieldItem>
        <Label>Short Bio</Label>
        <TextField
          value={""}
          setValue={""}
          placeholder={"Sir John LunaDesk, Creator of LunaDesk in 1866"}
          type={"text"}
        />
      </InputFieldItem>
    </OnboardingCard>
  );
}

export default Welcome;
