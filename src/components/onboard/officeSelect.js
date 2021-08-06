import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import styled from "styled-components";

import { getProfile, updateProfile } from "../../services/user";
import { getOffices } from "../../services/offices";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";
import CreateOffice from "./createOffice";
import OfficesList from "./officesList";

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
  width: 350px;
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

function OfficeSelect({ setSelectedStage }) {
  const [companyOffices, setCompanyOffices] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [firstRun, setFirstRun] = useState(true);
  const [noOffices, setNoOffices] = useState(false);
  const [creatingOffice, setCreatingOffice] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    if (!isEmpty(profile)) {
      loadOffices();
    }
  }, [profile]);

  useEffect(() => {
    if (!creatingOffice) {
      loadUserData();
    }
  }, [creatingOffice]);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  async function loadUserData() {
    const data = await getProfile();
    setProfile(data);
  }

  async function loadOffices() {
    const offices = await getOffices(profile.company);
    setCompanyOffices(offices);

    if (offices.length === 0) {
      setNoOffices(true);
    } else {
      setNoOffices(false);
    }
    setLoading(false);
  }

  function handleAddOffice() {
    setCreatingOffice(true);
  }

  async function handleOfficeSelect(office) {
    let updateData = {
      default_office: office.id,
    };
    const update = await updateProfile(updateData);
    if (update) {
      setSelectedStage(5);
    }
  }

  if (creatingOffice) {
    return <CreateOffice setCreatingOffice={setCreatingOffice} />;
  }

  if (noOffices) {
    return (
      <Container>
        <Title>
          It looks like your company doesn't have any offices yet...
        </Title>
        <Desc>Don't worry though, you can add your office!</Desc>
        <InputButton action={handleAddOffice} text={"Add your Office"} />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Which office do you normally work at?</Title>
      {loading ? (
        <div>Loading</div>
      ) : (
        <OfficesList
          offices={companyOffices}
          handleAddOffice={handleAddOffice}
          handleOfficeSelect={handleOfficeSelect}
        />
      )}
    </Container>
  );
}

export default OfficeSelect;
