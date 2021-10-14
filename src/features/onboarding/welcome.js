import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import * as htmlToImage from "html-to-image";
import { useStoreState, useStoreActions } from "easy-peasy";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import { supabase } from "src/services/supabaseClient";
import colorOptions from "src/data/avatarColourOptions";
import { createUser } from "src/services/user";
import OnboardingCard from "src/layouts/onboardingCard";
import TextField from "src/components/shared/textField";
import UploadAvatar from "src/components/onboarding/uploadAvatar";
import CustomiseAvatar from "src/components/onboarding/customiseAvatar";
import { validateFullName } from "src/utils/validators";

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

const StyledGooglePlacesAutocomplete = styled(GooglePlacesAutocomplete)`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s;
  color: ${(props) => props.theme.text100};
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #dfe1e4;
  border-radius: 4px;
  font-size: 13px;
  color: #282a30;
  appearance: none;
  transition: border 0.15s ease 0s;
  height: 48px;
  padding: 12px;
  width: 100%;
  background-color: #f4f5fc;
  border-color: #2362dc;
  background: rgb(255 255 255 / 25%);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
  transition: 400ms;
  ::placeholder {
    opacity: 1;
  }
  :focus {
    border-width: 2px;
    border-color: #2362dc;
    outline: none;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    transition: 400ms;
  }
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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [avatarBackgroundColor, setAvatarBackgroundColor] =
    useState(initialAvatarBg);
  const [avatarFontColor, setAvatarFontColor] = useState(initialAvatarFont);

  const setUserAvatarUrl = useStoreActions(
    (action) => action.user.setUserAvatarUrl
  );

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
    setError(false);
    if (!nameValid) {
      setNameError(true);
      setErrorMessage("Please ensure you've entered your full name.");
      setError(true);
      return false;
    }
    if (locationInputView === null) {
      setLocationError(true);
      setErrorMessage("Please select your location.");
      setError(true);
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
    console.log(userHasProfilePicture);
    if (!userHasProfilePicture) {
      console.log("DOES NOT");
      avatarDomain = await onCapture();
      console.log("DOMAIN", avatarDomain);
      console.log("CREATING");
      console.log("DOMAIN", avatarDomain);
      setUserAvatarUrl(avatarDomain);
    }

    const createUserData = await createUser({
      firstName,
      lastName,
      profilePictureUri: avatarDomain,
      hasProfilePicture: true,
      bio: bioInputView,
    });
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
      console.log("DATAUR", dataUrl);
      url = await uploadAvatar(dataURItoBlob(dataUrl));
      console.log("URL", url);
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

      console.log("FILEPATH", filePath);
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
        error={error}
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

          <StyledGooglePlacesAutocomplete
            apiKey={process.env.GOOGLE_MAPS_API_KEY}
            autocompletionRequest={{
              types: ["(cities)"],
            }}
            on
            selectProps={{
              value: locationInputView,
              onChange: setLocationInputView,
              styles: {
                menu: (provided) => ({ ...provided, zIndex: 99999999 }),
                container: (provided) => ({
                  ...provided,
                  backgroundColor: " rgb(255 255 255 / 25%);",
                  borderRadius: "10px",
                  backdropFilter: "blur(20px)",
                  padding: "0px",
                  zIndex: 99999999,
                  fontSize: "13px",
                  lineHeight: "24px",
                }),
                control: (provided) => ({
                  ...provided,
                  backgroundColor: " trasnsparent;",
                  borderRadius: "10px",
                  backdropFilter: "blur(20px)",
                  padding: "6px",
                  borderWidth: "0px",
                  fontSize: "13px",
                  lineHeight: "24px",
                  borderWidth: "3px",
                  borderColor: locationError ? "#e02f3c" : "transparent",
                  transition: "400ms",
                }),
                input: (provided) => ({
                  ...provided,
                  backgroundColor: "transparent",
                  fontSize: "13px",
                  lineHeight: "24px",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  padding: "12px",
                  fontSize: "13px",
                  lineHeight: "24px",
                }),
                menu: (provided) => ({
                  ...provided,
                  fontSize: "13px",
                  lineHeight: "24px",
                  borderRadius: "10px",
                  zIndex: "100",
                  backgroundColor: " #f2f2f7",
                }),
                menuList: (provided) => ({
                  ...provided,
                  zIndex: 100000,
                  transform: "translateY(0)",
                  position: "relative",
                  fontSize: "13px",
                  lineHeight: "24px",
                }),
                menuPortal: (provided) => ({
                  ...provided,
                  overflow: hidden,
                  fontSize: "13px",
                  lineHeight: "24px",
                  zIndex: "100",
                }),
                option: (provided, isSelected) => ({
                  ...provided,
                  color: "#25262a",
                  fontSize: "13px",
                  lineHeight: "24px",
                }),
              },
            }}
          />
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
