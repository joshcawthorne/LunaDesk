import { supabase } from "./supabaseClient";
import instance from "./config";
import { v4 as uuidv4 } from "uuid";

async function createUser({
  firstName,
  lastName,
  profilePictureUri,
  hasProfilePicture,
  bio,
  primaryOffice,
  defaultWorkingDays,
  defaultWorkingStart,
  defaultWorkingEnd,
  permissions,
  preferences,
}) {
  console.log("TRYING");
  const now = new Date();
  const secondsSinceEpoch = Math.round(now.getTime() / 1000);
  try {
    const session = supabase.auth.session();
    console.log(profilePictureUri);
    const { data, error } = await instance.post("/user/create", {
      user_uuid: uuidv4(),
      email: session.user.email,
      first_name: firstName,
      last_name: lastName,
      profile_picture_uri: profilePictureUri,
      has_profile_picture: true,
      bio: bio,
      primary_office: 4,
      default_working_days: [0, 1],
      default_working_start: "09:00",
      default_working_end: "18:00",
      permissions: {
        isOwner: "false",
        isAdmin: "false",
        permissionType: 0,
      },
      preferences: {
        dark_mode: "true",
        collapse_sidebar: "false",
        sidebar_order: [
          { id: "dashboard" },
          { id: "company" },
          { id: "teams" },
        ],
      },
    });
    return { error: false, errorData: null, data: data };
  } catch (e) {
    return { error: true, errorData: e, data: null };
  }
}

export { createUser };
