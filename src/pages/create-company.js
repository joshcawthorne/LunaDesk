import { useState, useEffect, useRef } from "react";
import { createCompany } from "../services/company";
import Link from "next/link";
import styled from "styled-components";

import TextField from "components/shared/textField";
import Button from "components/shared/button";
import Logo from "assets/svg/logoCollapsedGradient.svg";

const CreateCompanyOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: rgb(211, 235, 243);
  background: radial-gradient(
    circle,
    rgba(211, 235, 243, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
`;

const TitleContainer = styled.div`
  margin-bottom: 42px;
  text-align: center;
  max-width: 410px;
`;

const Title = styled.div`
  font-weight: 500;
  line-height: 34px;
  font-size: 32px;
  color: #000;
  margin-bottom: 6px;
`;

const Desc = styled.div`
  line-height: 23px;
  font-size: 15px;
  opacity: 0.6;
`;

const CreateBoxContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
  width: 460px;
  padding: 24px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

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

const LogoContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
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

function CreateCompany() {
  const [companyNameInput, setcompanyNameInput] = useState("LunaDesk");
  const [companyDomainInput, setCompanyDomainInput] = useState(
    "lunadesk.co/lunadesk"
  );
  const [editedDomain, setEditedDomain] = useState(false);
  const [loading, setLoading] = useState(false);

  const domainInput = useRef();

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

  async function handleCreateCompany() {
    await createCompany({ companyName: companyNameInput });
  }

  function toggleLoading() {
    setLoading(!loading);
  }

  return (
    <CreateCompanyOuterContainer>
      <TitleContainer>
        <Title>Create a new company</Title>
        <Desc>
          Companies are mission control on LunaDesk, where team-members can add
          their weekly working locations, and suggest team days or shared
          meetings.
        </Desc>
      </TitleContainer>
      <CreateBoxContainer>
        <InputFieldItem>
          <Label>Company Name</Label>
          <TextField
            value={companyNameInput}
            setValue={setcompanyNameInput}
            type={"text"}
          />
        </InputFieldItem>
        <InputFieldItem>
          <Label>Company URL</Label>
          <UrlInputContainer onClick={() => domainInput.current.focus()}>
            <PreText>lunadesk.co/</PreText>
            <UrlInput
              ref={domainInput}
              value={companyDomainInput}
              name="new-password"
              id="new-password"
              autocomplete="new-password"
              list="autocompleteOff"
              onChange={(e) => {
                setCompanyDomainInput(e.currentTarget.value);
                setEditedDomain(true);
              }}
              autoComplete={"off"}
            />
          </UrlInputContainer>
        </InputFieldItem>
      </CreateBoxContainer>

      <Button
        text={"Continue"}
        style={{ marginTop: "42px" }}
        action={toggleLoading}
        loading={loading}
      />
    </CreateCompanyOuterContainer>
  );
}

export default CreateCompany;
