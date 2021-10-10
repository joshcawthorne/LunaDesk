import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { supabase } from "src/services/supabaseClient";
import OnboardingCard from "src/layouts/onboardingCard";
import TextField from "src/components/shared/textField";
import UploadAvatar from "src/components/onboarding/uploadAvatar";

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

function Welcome({ nameInput, setNameInput, setOnboardingPosition }) {
  const [loading, setLoading] = useState(false);
  const [nameInputView, setNameInputView] = useState(nameInput);
  const [profilePictureInitials, setProfilePictureInitials] = useState("JL");
  const [userHasProfilePicture, setUserHasProfilePicture] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarSrc, setavatarSrc] = useState("");
  const [runAnim, setRunAnim] = useState(false);
  const [displayUserAvatar, setDisplayUserAvatar] = useState(false);

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
      setDisplayUserAvatar(true);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  function handleContinue() {
    setLoading(true);
    setNameInput(nameInputView);
    setTimeout(() => {
      setOnboardingPosition(1);
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
      <InnerTitle>Let's make this official</InnerTitle>
      <InnerDesc>
        It's great to have you onboard! We just need a few quick bits of info
        from you to get started
      </InnerDesc>
      <UploadAvatar
        hasInitials
        initials={profilePictureInitials}
        setAvatarUrl={setAvatarUrl}
        avatarSrc={avatarSrc}
        displayAvatar={displayUserAvatar}
        targetBucket={"user-avatars"}
      />
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
        <Label>Profile Bio</Label>
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
