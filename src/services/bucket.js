import { supabase } from "../utils/supabaseClient";

async function getFile(bucket, url) {
  try {
    const user = supabase.auth.user();

    const { data, error } = await supabase.storage
      .from(bucket)
      .getPublicUrl(url);

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

export { getFile };
