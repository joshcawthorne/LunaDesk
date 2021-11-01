import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { TailSpin } from "react-loading-icons";
import { useDebounce } from "react-use";
import { supabase } from "services/supabaseClient";


import { InnerTitle, InnerDesc, InputFieldItem, Label } from "components/shared";
import AddCompanyImage from "./addCompanyImage";
import TextField from "components/shared/textField";

import OnboardingCard from "layouts/onboardingCard";

interface Props {
    taken?: boolean,
}

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
 position: relative;
`;

const UrlInputContainer = styled.div<Props>`
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
  background: rgb(255 255 255 / 25%);
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  
  :focus-within {
    border-color: #2362dc;
    outline: none;
  }

  ${props => props.taken && css`
    border-color: #e02f3c;
  `}
`;

const LoaderContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  position: absolute;
  top: 0;
  right: 0;
`;



function CreateCompanyImageLocation() {
    const [loading, setLoading] = useState(false);
    const [companyNameInput, setcompanyNameInput] = useState("");
    const [companyDomainInput, setCompanyDomainInput] = useState(
        ""
    );
    const [editedDomain, setEditedDomain] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [domainTaken, setDomainTaken] = useState(false);
    const [checkingUrl, setCheckingUrl] = useState(false);
    const [locationInputView, setLocationInputView] = useState(null);
    const [locationError, setLocationError] = useState(false);
    const [userHasProfilePicture, setUserHasProfilePicture] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("");
    const [avatarSrc, setavatarSrc] = useState("");
    const [avatarError, setAvatarError] = useState(false);


    const domainInput = useRef();
    const avatarRef = useRef();

    useEffect(() => {
        console.log("URL", avatarUrl)
        if (avatarUrl) downloadImage(avatarUrl);
    }, [avatarUrl]);

    async function downloadImage(path) {
        try {
            const { data, error } = await supabase.storage
                .from("company-avatars")
                .download(path);
            if (error) {
                throw error;
            }
            console.log(data)
            const url = URL.createObjectURL(data);

            setavatarSrc(url);

        } catch (error) {
            console.log("Error downloading image: ", error.message);
        }
    }

    return (
        <OnboardingCard
            description={""}
            buttonText={"Continue"}
            buttonActive={userHasProfilePicture && locationInputView !== null && !error}
            animate={true}
            error={error}
            errorMessage={errorMessage}
        >
            <InnerTitle>Now we're cooking with gas</InnerTitle>
            <InnerDesc>
                Add your companies logo and headquarters location now, just so people know that they're joining the right company.
            </InnerDesc>
            <InputFieldItem>
                <AddCompanyImage
                    disableCustomise
                    error={avatarError}
                    setAvatarUrl={setAvatarUrl}
                    targetBucket={"company-avatars"}
                    avatarRef={avatarRef}
                    userHasProfilePicture={userHasProfilePicture}
                    setUserHasProfilePicture={setUserHasProfilePicture}
                    avatarSrc={avatarSrc}
                />
            </InputFieldItem>
            <InputFieldItem>
                <Label>Company Headquarters Location</Label>


            </InputFieldItem>
        </OnboardingCard>
    )
}

export default CreateCompanyImageLocation
