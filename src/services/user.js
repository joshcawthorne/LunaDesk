import { supabase } from "../utils/supabaseClient";

async function getProfile() {
  try {
    const user = supabase.auth.user();

    let { data, error, status } = await supabase
      .from("profiles")
      .select()
      .eq("id", user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }
    if (data) {
      console.log("USER RESPONSE", data);
      return data;
    }
  } catch (error) {
    alert(error.message);
  }
}

async function getProfileByEmail(email) {
  try {
    let { data, error, status } = await supabase
      .from("profiles")
      .select()
      .eq("email", user.email)
      .single();

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

async function updateProfile(updates) {
  try {
    const user = supabase.auth.user();
    let updateDate = { id: user.id, ...updates };
    let { data, error, status } = await supabase
      .from("profiles")
      .upsert(updateDate);

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

async function createProfile() {
  try {
    const user = supabase.auth.user();
    console.log(user);
    const userProfileExists = await getProfile();
    if (userProfileExists) {
      return userProfileExists;
    }
    let updateDate = {
      id: user.id,
      email: user.email,
      avatar_url: user.user_metadata.avatar_url,
      full_name: user.user_metadata.full_name,
      onboarded: false,
    };
    let { data, error, status } = await supabase
      .from("profiles")
      .insert(updateDate);

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

async function inviteNewUser(email) {
  try {
    const userProfile = await getProfile();
    if (!userProfile) {
      return "No profile found";
    }
    //const userExists = await getProfileByEmail(email);
    //if (userExists) {
    //  return "User Exists";
    //}
    const { error, data } = await supabase.auth.api.inviteUserByEmail(
      "midgetman7782@gmail.com"
    );
    if (error && status !== 406) {
      throw error;
    }
    if (data) {
      return data;
    }
  } catch (error) {
    console.log("Invite error", error);
    alert(error.message);
  }
}

export {
  getProfile,
  updateProfile,
  createProfile,
  inviteNewUser,
  getProfileByEmail,
};
