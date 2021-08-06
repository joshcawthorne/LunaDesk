import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

function OfficeList({ session }) {
  const [loading, setLoading] = useState(true);
  const [userCompany, setUserCompany] = useState(null);
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    getUserData();
    //getOffices();
  }, []);

  useEffect(() => {
    if (userCompany) {
      getOffices();
    }
  }, [userCompany]);

  async function getUserData() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const { data, error } = await supabase
        .from("profiles")
        .select("company")
        .eq("id", user.id);

      if (error && status !== 406) {
        throw error;
      }

      setUserCompany(data[0].company);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function getOffices() {
    try {
      setLoading(true);
      if (userCompany === null) {
        return;
      }
      const { data, error } = await supabase
        .from("offices")
        .select()
        .eq("owned_by", userCompany);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setOffices(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>Your Offices</h1>
      {offices.map((office, i) => (
        <div key={i}>{office.title}</div>
      ))}
    </div>
  );
}

export default OfficeList;
