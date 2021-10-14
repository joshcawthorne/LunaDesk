import { supabase } from "./supabaseClient";
import instance from "./config";

async function validateInviteCode(inviteCode) {
  try {
    const { data, error } = await instance.post(
      "/company/invite-code/validate",
      {
        invite_code: inviteCode,
      }
    );
    return { error: false, errorData: null, data: data };
  } catch (e) {
    return { error: true, errorData: e, data: null };
  }
}

export { validateInviteCode };
