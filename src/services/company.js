import { supabase } from "../utils/supabaseClient";

async function getCompany(id) {
  console.log(id);
  try {
    let { data, error } = await supabase
      .from("companies")
      .select(
        "title, company_logo, created_by, based_in, default_working_days, default_working_hours"
      )
      .eq("id", id);

    if (error && status !== 406) {
      throw error;
    }
    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.message);
  }
}

async function getEmployees(id) {
  console.log(id);
  try {
    let { data, error } = await supabase
      .from("profiles")
      .select(`id, full_name, email, avatar_url, employee_role, default_office`)
      .filter("company", "eq", id);

    if (error && status !== 406) {
      throw error;
    }
    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.message);
  }
}

export { getCompany, getEmployees };
