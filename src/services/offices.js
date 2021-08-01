import { supabase } from "../utils/supabaseClient";

async function getOffices(id) {
  try {
    let { data, error, status } = await supabase
      .from("offices")
      .select()
      .eq("owned_by", id);

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

async function createOffice(office) {
  try {
    let { data, error, status } = await supabase.from("offices").insert(office);
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

export { getOffices, createOffice };
