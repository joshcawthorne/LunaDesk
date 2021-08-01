import { useState, useEffect } from "react";
import styled from "styled-components";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 5px;
  width: 350px;
  margin-bottom: 20px;
`;

const InputFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

function RoleInput({ setRole, setSelectedStage, firstName, company }) {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (inputValue.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);

  function progress() {
    setRole(inputValue);
    setSelectedStage(3);
  }

  return (
    <Container>
      <Title>
        Ok {firstName}, what do you do at <b>{company}</b>?
      </Title>
      <InputFieldContainer>
        <InputField
          placeholder={"Your role, EG Developer"}
          type={"text"}
          value={inputValue}
          setValue={setInputValue}
        />
        <InputButton disabled={disabled} action={progress} text={"Continue"} />
      </InputFieldContainer>
    </Container>
  );
}

export default RoleInput;
