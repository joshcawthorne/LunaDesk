import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as htmlToImage from "html-to-image";
import { useStoreActions } from "store/hooks";
import { useMutation } from 'react-query'
import { supabase } from "services/supabaseClient";
import { createUser } from "services/user";
import OnboardingCard from "layouts/onboardingCard";
import TextField from "components/shared/textField";
import UploadAvatar from "components/onboarding/uploadAvatar";
import CustomiseAvatar from "components/onboarding/customiseAvatar";
import { validateFullName } from "utils/validators";
import { InnerTitle, InnerDesc, Label } from "components/shared";
import GooglePlacesSearch from "components/googlePlacesSearch";

const InputFieldItem = styled.div`
  margin-bottom: 20px;
  z-index: 30;
`;

function Welcome({
  setOnboardingPosition,
  initialAvatarFont,
  initialAvatarBg,
}) {
  const [loading, setLoading] = useState(false);
  const [nameInputView, setNameInputView] = useState("");
  const [bioInputView, setBioInputView] = useState("");
  const [locationInputView, setLocationInputView] = useState(null);
  const [profilePictureInitials, setProfilePictureInitials] = useState("JL");
  const [userHasProfilePicture, setUserHasProfilePicture] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarSrc, setavatarSrc] = useState("");
  const [runAnim, setRunAnim] = useState(false);
  const [displayUserAvatar, setDisplayUserAvatar] = useState(false);
  const [displayCustomiseAvatar, setDisplayCustomiseAvatar] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [avatarBackgroundColor, setAvatarBackgroundColor] =
    useState(initialAvatarBg);
  const [avatarFontColor, setAvatarFontColor] = useState(initialAvatarFont);

  const setUserAvatarUrl = useStoreActions(
    (action) => action.user.setUserAvatarUrl
  );

  const newUser = useMutation(createUser, { retry: 3 })

  useEffect(() => {
    if (avatarUrl) downloadImage(avatarUrl);
  }, [avatarUrl]);

  useEffect(() => {
    if (nameInputView.length !== 0) {
      setProfilePictureInitials(getInitials(nameInputView));
    } else {
      setProfilePictureInitials("JL");
    }
  }, [nameInputView]);

  useEffect(() => {
    if (newUser.isLoading) {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 800);

    }
    if (newUser.isError) {
      setHasError(true);
      console.log("ERROR")
      setErrorMessage("Error creating profile")
    } else {
      setHasError(false);
      setErrorMessage("")
    }
  }, [newUser]);

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
      setUserAvatarUrl(path);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  async function checkInputs() {
    const nameValid = validateFullName(nameInputView);
    setNameError(false);
    setLocationError(false);
    setErrorMessage("");
    setHasError(false);
    if (!nameValid) {
      setNameError(true);
      setErrorMessage("Please ensure you've entered your full name.");
      setHasError(true);
      return false;
    }
    if (locationInputView === null) {
      setLocationError(true);
      setErrorMessage("Please select a valid location.");
      setHasError(true);
      return false;
    } else {
      return true;
    }
  }

  async function handleContinue() {
    setLoading(true);
    const validInputs = await checkInputs();
    if (!validInputs) {
      setLoading(false);
      return null;
    }
    let firstName = nameInputView.split(" ")[0];
    let lastName = nameInputView.substr(nameInputView.indexOf(" ") + 1);
    let avatarDomain = avatarUrl;
    if (!userHasProfilePicture) {
      avatarDomain = await onCapture();
      setUserAvatarUrl(avatarDomain);
    }

    interface UserInterface {
      firstName: string,
      lastName: string,
      profilePictureUri: string,
      hasProfilePicture: boolean,
      bio: string
    }

    newUser.mutate({
      firstName,
      lastName,
      profilePictureUri: avatarDomain,
      hasProfilePicture: true,
      bio: bioInputView,
    })
  }

  function getInitials(string) {
    var names = string.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  const avatarRef = useRef();

  function dataURItoBlob(dataURI) {
    let byteString = atob(dataURI.split(",")[1]);
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    let blob = new Blob([ab], { type: mimeString });
    return blob;
  }

  async function onCapture() {
    let url;
    await htmlToImage.toJpeg(avatarRef.current).then(async function (dataUrl) {
      url = await uploadAvatar(dataURItoBlob(dataUrl));
    });
    return url;
  }

  async function uploadAvatar(blob) {
    try {
      const fileExt = "jpeg";
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      let { error: uploadError } = await supabase.storage
        .from("user-avatars")
        .upload(filePath, blob);
      if (uploadError) {
        throw uploadError;
      }
      return filePath;
    } catch (error) {
      alert(error.message);
    } finally {
      console.log("DONE!");
    }
  }

  function updateAvatarColours(theme) {
    setAvatarBackgroundColor(theme.background);
    setAvatarFontColor(theme.color);
    setDisplayCustomiseAvatar(false);
  }

  return (
    <>
      <CustomiseAvatar
        modalVisible={displayCustomiseAvatar}
        updateAvatarColours={updateAvatarColours}
        setModal={setDisplayCustomiseAvatar}
        profilePictureInitials={profilePictureInitials}
      />

      <OnboardingCard
        description={""}
        buttonText={"Continue"}
        buttonAction={handleContinue}
        buttonLoading={loading}
        buttonActive={true}
        animate={true}
        error={hasError}
        errorMessage={errorMessage}
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
          avatarRef={avatarRef}
          userHasProfilePicture={userHasProfilePicture}
          setUserHasProfilePicture={setUserHasProfilePicture}
          displayCustomiseAvatar={displayCustomiseAvatar}
          setDisplayCustomiseAvatar={setDisplayCustomiseAvatar}
          avatarBackgroundColor={avatarBackgroundColor}
          avatarFontColor={avatarFontColor}
        />
        <InputFieldItem>
          <Label>Your Full Name</Label>
          <TextField
            value={nameInputView}
            setValue={setNameInputView}
            placeholder={"John LunaDesk"}
            type={"text"}
            error={nameError}
          />
        </InputFieldItem>
        <InputFieldItem>
          <Label>Your Location</Label>
          <GooglePlacesSearch setAddressValue={setLocationInputView} error={locationError} />
        </InputFieldItem>
        <InputFieldItem>
          <Label>
            Profile Bio <span> - Optional</span>
          </Label>
          <TextField
            value={bioInputView}
            setValue={setBioInputView}
            placeholder={"Sir John LunaDesk, Creator of LunaDesk in 1866"}
            type={"text"}
          />
        </InputFieldItem>
      </OnboardingCard>
    </>
  );
}

export default Welcome;