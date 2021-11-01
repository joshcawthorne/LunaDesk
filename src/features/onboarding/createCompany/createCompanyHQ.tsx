import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { InnerTitle, InnerDesc, InputFieldItem, Label } from "components/shared";
import GooglePlacesSearch from "components/googlePlacesSearch";
import TextField from "components/shared/textField";
import OnboardingCard from "layouts/onboardingCard";


function CreateCompanyHQ() {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [officeNameInput, setOfficeNameInput] = useState('');
    const [locationInputView, setLocationInputView] = useState('');
    const [locationError, setLocationError] = useState(false);
    return (
        <OnboardingCard
            buttonText={"Continue"}
            subButton
            subButtonActive
            subButtonText={"Skip"}
            subText={"Don't have a head office?"}
            animate={true}
            error={error}
            errorMessage={errorMessage}
            buttonActive={officeNameInput !== '' && locationInputView !== ''}
        >
            <InnerTitle>Where is your head office?</InnerTitle>
            <InnerDesc>
                We're just setting up your main office for the time being, you'll be able to add further offices later on
            </InnerDesc>
            <InputFieldItem>
                <Label>Office Name</Label>
                <TextField
                    value={officeNameInput}
                    setValue={setOfficeNameInput}
                    placeholder={"LunaDesk Misson Control"}
                    type={"text"}
                />
            </InputFieldItem>
            <InputFieldItem>
                <Label>Company Headquarters Address</Label>
                <GooglePlacesSearch setAddressValue={setLocationInputView} error={locationError} />
            </InputFieldItem>
        </OnboardingCard>
    )
}

export default CreateCompanyHQ
