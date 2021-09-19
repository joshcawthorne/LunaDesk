import { supabase } from "../../services/supabaseClient";

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res);
  console.log(res);
}
