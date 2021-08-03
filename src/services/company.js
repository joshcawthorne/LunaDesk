import { supabase } from "../utils/supabaseClient";

async function getCompany(id) {
  console.log(id);
  try {
    let { data, error } = await supabase
      .from("companies")
      .select()
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
      .select()
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
