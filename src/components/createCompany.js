import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

function CreateCompany({ session }) {
  const [companyName, setCompanyName] = useState();
  const [loading, setLoading] = useState(true);

  async function createCompany() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      let { data, error } = await supabase
        .from("companies")
        .insert([{ title: companyName, created_by: user.id }]);
      if (error && status !== 406) {
        throw error;
      }

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
      <h1>Create a Company</h1>
      <input
        placeholder={"Company Name"}
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <button onClick={() => createCompany()}>Create company</button>
    </div>
  );
}

export default CreateCompany;
