import { supabase } from "./supabaseClient";

async function registerUser({ email, password, inviteCode }) {
  try {
    const { error, data } = await supabase.auth.signUp(
      { email, password },
      { redirectTo: process.env.BASE_DOMAIN + "welcome/invite/" + inviteCode }
    );
    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
    if (data) {
      return { error: false, errorData: null, data };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createUserProfile({
  firstName,
  lastName,
  id,
  email,
  company_id,
}) {
  try {
    const { data, error } = await supabase.from("profiles").insert([
      {
        first_name: firstName,
        last_name: lastName,
        user_uuid: id,
        email,
        company_id: company_id,
      },
    ]);
    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
    if (data) {
      return { error: false, errorData: null, data };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function getUserProfile() {
  try {
    const session = supabase.auth.session();
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("user_uuid", session.user.id)
      .single();

    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
    if (data) {
      return { error: false, errorData: null, data };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function updateUserEmail({ updatedEmail }) {
  try {
    const session = supabase.auth.session();
    const { user, error } = await supabase.auth.update({
      email: updatedEmail,
    });

    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
    if (user) {
      return { error: false, errorData: null, data: user };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function updateUserPassword({ updatedPassword }) {
  try {
    const { user, error } = await supabase.auth.update({
      password: updatedPassword,
    });

    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
    if (user) {
      return { error: false, errorData: null, data: user };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function loginUser({ email, password }) {
  try {
    const { error, data } = await supabase.auth.signIn({ email, password });
    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
    if (data) {
      return { error: false, errorData: null, data };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function logoutUser() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    } else {
      return { error: false, errorData: null, data: null };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function setUserCompany(id) {
  try {
    const session = supabase.auth.session();
    const { data, error } = await supabase
      .from("profiles")
      .update({ company_id: id })
      .eq("user_uuid", session.user.id);

    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function removeEmployee(id) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .update({ company_id: null })
      .eq("user_uuid", id);

    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
  } catch (error) {
    console.log(error.message);
  }
}

export {
  registerUser,
  loginUser,
  logoutUser,
  createUserProfile,
  getUserProfile,
  updateUserEmail,
  updateUserPassword,
  setUserCompany,
  removeEmployee,
};
