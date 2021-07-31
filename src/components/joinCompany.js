import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

function JoinCompany({ session }) {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("companies").select();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCompanies(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function joinCompany(id) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        company: id,
      };

      let { data, error } = await supabase.from("profiles").upsert(updates, {});

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Join a company</h1>
      {loading ? (
        <div>Loading companies...</div>
      ) : (
        <div>
          {companies.map((company, i) => (
            <div key={i}>
              <div>{company.title}</div>
              <button onClick={() => joinCompany(company.id)}>
                Join Company
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JoinCompany;
