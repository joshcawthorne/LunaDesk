import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
function CreateOffice() {
  const [officeName, setOfficeName] = useState();

  const [loading, setLoading] = useState(true);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    getUserCompany();
  }, []);

  async function getUserCompany() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `company (
            id, title, created_by, company_logo
          )`
        )
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCompanyData(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function createOffice() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      console.log(companyData);
      console.log(user);
      let { data, error } = await supabase
        .from("offices")
        .insert([
          {
            title: officeName,
            created_by: user.id,
            owned_by: companyData.company.id,
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Create an Office</h1>
      <input
        placeholder={"Office Name"}
        value={officeName}
        onChange={(e) => setOfficeName(e.target.value)}
      />
      <button onClick={() => createOffice()}>Create Office</button>
    </div>
  );
}

export default CreateOffice;
