import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import styled from "styled-components";
import { useRouter } from "next/router";

import InputButton from "../shared/inputButton";
import { updateProfile } from "../../services/user";

const CreationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 5px;
  color: #fff;
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;
  max-width: 450px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  b {
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
  }
`;

function finishOnboarding({ fullName, firstName, role }) {
  const router = useRouter();
  async function handleCreate() {
    let updateData = {
      first_name: firstName,
      full_name: fullName,
      employee_role: role,
      onboarded: true,
    };
    const update = await updateProfile(updateData);
    if (update) {
      router.push("/dashboard");
    }
  }

  return (
    <CreationContainer>
      <Title>You're all set, {firstName}!</Title>
      <Desc>We're so glad you're here 😄</Desc>
      <InputButton action={handleCreate} text={"Complete Profile"} />
    </CreationContainer>
  );
}

export default finishOnboarding;
