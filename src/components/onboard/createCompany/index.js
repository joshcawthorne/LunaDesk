import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import styled from "styled-components";
import InputButton from "../../shared/inputButton";

function CreateCompany({
  companyName,
  basedIn,
  workingDays,
  workingHours,
  logoUrl,
}) {
  const [loading, setLoading] = useState(true);
  async function handleCreate() {
    console.log(typeof workingDays);
    try {
      setLoading(true);
      const user = supabase.auth.user();
      let { data, error } = await supabase.from("companies").insert([
        {
          title: companyName,
          created_by: user.id,
          based_in: basedIn,
          default_working_days: JSON.parse(JSON.stringify(workingDays)),
          default_working_hours: JSON.parse(JSON.stringify(workingHours)),
          company_logo: logoUrl,
        },
      ]);
      if (error && status !== 406) {
        throw error;
      }

      console.log(data);
      if (data) {
        const updates = {
          id: user.id,
          company: data[0].id,
        };

        let { userError } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal",
        });
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      Create {companyName}?
      <InputButton action={handleCreate} text={"Create"} />
    </div>
  );
}

export default CreateCompany;
