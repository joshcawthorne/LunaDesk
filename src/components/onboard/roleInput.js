import { useState, useEffect } from "react";
import styled from "styled-components";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;
  max-width: 450px;
  margin-bottom: 40px;
  b {
    color: #fff;
    font-weight: 500;
  }
`;

function RoleInput({ setRole, setSelectedStage, firstName }) {
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
    setSelectedStage(1);
  }

  return (
    <div>
      <Desc>
        Great to meet you, <b>{firstName}!</b>
      </Desc>
      <InputField
        placeholder={"John Blogs"}
        type={"email"}
        value={inputValue}
        setValue={setInputValue}
      />
      <InputButton disabled={disabled} action={progress} text={"Continue"} />
    </div>
  );
}

export default RoleInput;
