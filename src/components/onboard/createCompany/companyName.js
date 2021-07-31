import { useState, useEffect } from "react";
import styled from "styled-components";

import InputField from "../../shared/inputField";
import InputButton from "../../shared/inputButton";

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;
  max-width: 450px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  b {
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
  }
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 5px;
`;

function CompanyName({ setFinalValue, setSelectedStage }) {
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
    setFinalValue(inputValue);
    setSelectedStage(1);
  }

  return (
    <div>
      <Title>Create a Company</Title>
      <Desc>What's the company called?</Desc>
      <InputField
        placeholder={"Apple Inc"}
        type={"text"}
        value={inputValue}
        setValue={setInputValue}
      />
      <InputButton disabled={disabled} action={progress} text={"Continue"} />
    </div>
  );
}

export default CompanyName;
