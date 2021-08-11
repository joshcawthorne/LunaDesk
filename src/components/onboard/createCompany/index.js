import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import styled from "styled-components";
import InputButton from "../../shared/inputButton";

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

function CreateCompany({
  companyName,
  basedIn,
  workingDays,
  workingHours,
  logoUrl,
  setSelectedMasterStage,
  setCreatingCompany,
  setCompany,
}) {
  const [loading, setLoading] = useState(true);
  async function handleCreate() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      let { data, error } = await supabase.from("companies").insert([
        {
          title: companyName,
          created_by: user.id,
          based_in: basedIn,
          default_working_days: JSON.parse(JSON.stringify(workingDays)),
          default_working_hours: [9, 18],
          default_rest_days: [5, 6],
          company_logo: logoUrl,
          employees: [user.id],
        },
      ]);
      if (error && status !== 406) {
        console.log(error);
        setLoading(false);
        throw error;
      } else {
        updateUser(data, user);
      }
    } catch (error) {
      alert("other update error:" + error.message);
    }
  }

  async function updateUser(companyData, user) {
    try {
      const updates = {
        id: user.id,
        company: companyData[0].id,
      };

      let { data, error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal",
      });
      if (error) {
        console.log("User update error: ", error.message);
        setLoading(false);
      } else {
        setCompany(companyData[0].title);
        setLoading(false);
        setCreatingCompany(false);
        setSelectedMasterStage(2);
      }
    } catch (error) {
      alert("other update error:" + error.message);
    }
  }

  return (
    <CreationContainer>
      <Title>Ready to create {companyName}?</Title>
      <Desc>You will be able to invite your colleagues shortly!</Desc>
      <InputButton action={handleCreate} text={"Create " + companyName} />
    </CreationContainer>
  );
}

export default CreateCompany;
