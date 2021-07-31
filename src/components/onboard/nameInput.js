import { useState, useEffect } from "react";
import styled from "styled-components";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;

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

function NameInput({ setFullname, setSelectedStage }) {
  const [nameValue, setNameValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (nameValue.length > 2 && nameValue.includes(" ")) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nameValue]);

  function progress() {
    setFullname(nameValue);
    setSelectedStage(1);
  }

  return (
    <div>
      <Title>Complete your Profile</Title>
      <Desc>
        First thing's first, <b>what's your full name?</b>
      </Desc>
      <InputField
        placeholder={"John Blogs"}
        type={"email"}
        value={nameValue}
        setValue={setNameValue}
        autofocus={true}
      />
      <InputButton disabled={disabled} action={progress} text={"Continue"} />
    </div>
  );
}

export default NameInput;
