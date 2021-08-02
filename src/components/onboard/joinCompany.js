import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import styled from "styled-components";
import InputButton from "../shared/inputButton";
import Confetti from "react-confetti";

const JoinContainer = styled.div`
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

function JoinCompany({
  setSelectedMasterStage,
  setSelectedCompany,
  companyData,
  setCompany,
}) {
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  function handleJoin() {
    updateUser();
  }

  /* TODO: Move calls to services */

  async function updateUser() {
    try {
      const user = supabase.auth.user();
      console.log(companyData);
      const updates = {
        id: user.id,
        company: companyData.id,
        company_name: companyData.title,
      };

      let { data, error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal",
      });
      if (error) {
        console.log("User update error: ", error.message);
        setLoading(false);
      } else {
        handleJoinCompany(user);
      }
    } catch (error) {
      alert("other update error:" + error.message);
    }
  }

  async function handleJoinCompany(user) {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("companies")
        .select("id, employees")
        .eq("id", companyData.id);
      if (error && status !== 406) {
        throw error;
      }
      let updates;
      console.log(data);
      if (data[0].employees !== null && data[0].employees.includes(user.id)) {
        setLoading(false);
        setCompany(companyData.title);
        setSelectedMasterStage(2);
        return;
      }
      if (data[0].employees === null) {
        updates = {
          id: companyData.id,
          employees: [user.id],
        };
      } else {
        updates = {
          id: companyData.id,
          employees: [...data[0].employees, user.id],
        };
      }

      let { error1 } = await supabase.from("companies").upsert(updates, {
        returning: "minimal",
      });
      if (error1 && status !== 406) {
        console.log(error1);
        setLoading(false);
        throw error1;
      } else {
        setJoined(true);
        setLoading(false);
        setCompany(companyData.title);
        setSelectedMasterStage(2);
      }
    } catch (error) {
      alert("other update error:" + error.message);
    }
  }

  return (
    <JoinContainer>
      <Title>Join {companyData.title}?</Title>
      <Desc>You can change your company in settings later on.</Desc>
      <InputButton action={handleJoin} text={"Join " + companyData.title} />
    </JoinContainer>
  );
}

export default JoinCompany;
