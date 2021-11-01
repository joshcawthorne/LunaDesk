import { supabase } from "./supabaseClient";
import instance from "./config";
import { v4 as uuidv4 } from "uuid";

interface CreateUser {
  firstName: string,
  lastName: string,
  profilePictureUri?: string,
  hasProfilePicture?: boolean,
  bio?: string,
  primaryOffice?: number,
  defaultWorkingDays?: any,
  defaultWorkingStart?: any,
  defaultWorkingEnd?: any,
  permissions?: any,
  preferences?: any,
}

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
}: CreateUser) {
  console.log("TRYING");
  const now = new Date();
  const secondsSinceEpoch = Math.round(now.getTime() / 1000);
  console.log(firstName)
  console.log(lastName)
  console.log(profilePictureUri)
  console.log(bio)
  try {
    const session = supabase.auth.session();
    console.log("Creating User");
    const { data } = await instance.post("/user/create", {
      user_uuid: uuidv4(),
      email: session.user.email,
      first_name: firstName,
      last_name: lastName,
      profile_picture_uri: profilePictureUri,
      bio: bio,
    });
    console.log("No error");
    return { error: false, errorData: null, data: data };
  } catch (e) {
    console.log("Error ", e);
    return { error: true, errorData: e, data: null };
  }
}

export { createUser };
