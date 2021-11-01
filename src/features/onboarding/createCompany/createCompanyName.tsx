import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { TailSpin } from "react-loading-icons";
import { useDebounce } from "react-use";

import { InnerTitle, InnerDesc, InputFieldItem, Label } from "components/shared";
import TextField from "components/shared/textField";
import OnboardingCard from "layouts/onboardingCard";


interface Props {
    taken?: boolean,
}

const PreText = styled.div`
  opacity: 0.5;
  color: ${props => props.theme.textPrimary};
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
  color: ${props => props.theme.textPrimary};
  margin-left: 1px;
 position: relative;
`;

const UrlInputContainer = styled.div<Props>`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid ${props => props.theme.modalBorder};
  border-radius: 4px;
  font-size: 13px;
  color: ${props => props.theme.textPrimary};
  appearance: none;
  transition: border 0.15s ease 0s;
  height: 48px;
  padding: 12px;
  width: 100%;
  display: flex;
  background: ${props => props.theme.textFieldBackground};
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
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

function CreateCompanyName({ setOnboardingPosition }) {
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

    const domainInput = useRef<any>();

    useEffect(() => {
        if (!editedDomain) {
            let name = companyNameInput.toLowerCase();
            if (!name.endsWith(" ")) {
                name = name.replaceAll(" ", "-");
            } else {
                name = name.slice(0, name.length - 1).replaceAll(" ", "-");
            }

            setCompanyDomainInput(name);
        }
    }, [companyNameInput]);

    useEffect(() => {
        setCheckingUrl(true);
    }, [companyDomainInput]);


    const [, cancel] = useDebounce(
        () => {
            checkDomain();
        },
        1000,
        [companyDomainInput]
    );


    function checkDomain() {
        console.log(companyDomainInput)
        if (companyDomainInput === 'taken') {
            setDomainTaken(true);
            setError(true);
            setErrorMessage("Uh oh, it looks like that company domain's already been taken. Spooky.")
        } else {
            setDomainTaken(false);
            setError(false);
            setErrorMessage('');
        }
        setCheckingUrl(false);
    }

    function handleContinue() {
        setOnboardingPosition(11);
    }

    return (
        <OnboardingCard
            description={""}
            buttonText={"Continue"}
            buttonActive={!checkingUrl && !domainTaken && !error}
            buttonAction={handleContinue}
            animate={true}
            error={error}
            errorMessage={errorMessage}
        >
            <InnerTitle>Check out you, you trendsetter!</InnerTitle>
            <InnerDesc>
                You can get your company set up on LunaDesk in no time at all. First, what's the company called?
            </InnerDesc>
            <InputFieldItem>
                <Label>Company Name</Label>
                <TextField
                    value={companyNameInput}
                    setValue={setcompanyNameInput}
                    placeholder={"LunaDesk Incorporated"}
                    type={"text"}
                    error={nameError}
                />
            </InputFieldItem>
            <InputFieldItem>
                <Label>Company URL</Label>
                <UrlInputContainer onClick={() => domainInput.current.focus()} taken={domainTaken}>
                    <PreText>lunadesk.co/</PreText>
                    <UrlInput
                        ref={domainInput}
                        value={companyDomainInput}
                        name="new-password"
                        id="new-password"
                        autoComplete="new-password"
                        list="autocompleteOff"
                        onChange={(e) => {
                            setCompanyDomainInput(e.currentTarget.value);
                            setEditedDomain(true);
                        }}
                    />
                    {checkingUrl && <LoaderContainer>
                        <TailSpin
                            stroke="#282a30"
                            width={"18px"}
                            strokeWidth={4}
                            style={{ overflow: "visible" }}
                        />
                    </LoaderContainer>}
                </UrlInputContainer>
            </InputFieldItem>
        </OnboardingCard>
    )
}

export default CreateCompanyName
