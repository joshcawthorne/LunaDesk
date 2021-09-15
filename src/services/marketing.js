import { supabase } from "../utils/supabaseClient";

async function preRegister(registrationData) {
  try {
    let { data, error, status } = await supabase
      .from("preview_signups")
      .insert(registrationData);
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

export { preRegister };
