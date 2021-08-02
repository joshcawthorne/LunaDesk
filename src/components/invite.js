import { useState, useEffect } from "react";
import styled from "styled-components";
import InputField from "./shared/inputField";
import InputButton from "./shared/inputButton";

import { inviteNewUser } from "../services/user";

function Invite() {
  const [emailValue, setEmailValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (emailValue.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailValue]);

  async function handleInvite() {
    const inviteState = await inviteNewUser(emailValue);
  }

  return (
    <div>
      <h1>Invite a colleague to your company</h1>
      <InputField
        placeholder={"Their Email"}
        type={"email"}
        value={emailValue}
        setValue={setEmailValue}
        autofocus={true}
      />
      <InputButton
        disabled={disabled}
        action={handleInvite}
        text={"Continue"}
      />
    </div>
  );
}

export default Invite;
