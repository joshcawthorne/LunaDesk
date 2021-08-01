import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import styled from "styled-components";
import InputButton from "../../shared/inputButton";

import { getProfile } from "../../../services/user";
import { createOffice } from "../../../services/offices";

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
  max-width: 350px;
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

function AddOffice({ officeName, officeLocation, setCreatingOffice }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    console.log(profile);
    if (!isEmpty(profile)) {
      addOffice();
    }
  }, [profile]);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  async function loadUserData() {
    const data = await getProfile();
    setProfile(data);
  }

  async function addOffice() {
    const newOffice = {
      title: officeName,
      address: officeLocation,
      created_by: profile.id,
      owned_by: profile.company,
    };
    const office = await createOffice(newOffice);
    setCreatingOffice(false);

    setLoading(false);
  }

  return (
    <CreationContainer>
      <Title>Ready to create {officeName}?</Title>
      <Desc>You will be able to switch offices whenever you need.</Desc>
      <InputButton action={loadUserData} text={"Create " + officeName} />
    </CreationContainer>
  );
}

export default AddOffice;
