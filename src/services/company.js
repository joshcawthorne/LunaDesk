import { supabase } from "./supabaseClient";
import instance from "./config";

async function createCompany({ companyName }) {
  try {
    const session = supabase.auth.session();
    console.log(session);
    const { data, error } = await supabase
      .from("companies")
      .insert([{ name: companyName, created_by: session.user.id }]);
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

async function getAllCompanies() {
  try {
    const { data, error } = await supabase.from("companies").select();

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

async function getUserCompany() {
  try {
    const session = supabase.auth.session();
    const { data, error } = await supabase
      .from("profiles")
      .select("company_id")
      .eq("user_uuid", session.user.id)
      .single();

    console.log(data);
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

async function getCompanyData(id) {
  try {
    const { data, error } = await supabase
      .from("companies")
      .select()
      .eq("id", id)
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

async function getUserCompanyData() {
  try {
    const companyId = await getUserCompany();
    if (!companyId.data.company_id) {
      return { error: false, errorData: null, data: null, noCompany: true };
    }
    const { data, error } = await supabase
      .from("companies")
      .select()
      .eq("id", companyId.data.company_id)
      .single();

    if (error && status !== 406) {
      return { error: true, errorData: error, data: null, noCompany: false };
    }
    if (data === null) {
      return { error: false, errorData: null, data: null, noCompany: true };
    }
    if (data) {
      return { error: false, errorData: null, data, noCompany: false };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function getCompanyEmployees(id) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select(
        "first_name, last_name, avatar, has_avatar, office_id, company_role, user_uuid, company_admin"
      )
      .eq("company_id", id);

    console.log(data);
    if (error && status !== 406) {
      return { error: true, errorData: error, data: null };
    }
    if (data) {
      return { error: false, errorData: null, data };
    }
  } catch (error) {
    alert("EMPLOYEES", error.message);
  }
}

async function getUserOwnedCompanies() {
  try {
    const session = supabase.auth.session();
    const { data, error } = await supabase
      .from("companies")
      .select("id")
      .eq("created_by", session.user.id);

    console.log(data);
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

async function makeUserAdmin(userId, companyId) {
  try {
    const session = supabase.auth.session();
    const { data, error } = await supabase
      .from("companies")
      .select("id, admins")
      .eq("id", companyId);
    if (error && status !== 406) {
      throw error;
    }
    let updates;
    if (data[0].admins !== null) {
      updates = {
        id: companyId,
        admins: [...data[0].admins, userId],
      };
    } else {
      updates = {
        id: companyId,
        admins: [userId],
      };
    }

    const { data: data2, error: error2 } = await supabase
      .from("profiles")
      .update({ company_admin: true })
      .eq("user_uuid", id);

    let { error: error1 } = await supabase.from("companies").upsert(updates, {
      returning: "minimal",
    });
    if (error1 && status !== 406) {
      return { error: true, errorData: error };
    } else {
      return { error: false, errorData: null };
    }
  } catch (error) {
    alert(error.message);
  }
}

async function userIsAdmin(userId, companyid) {
  try {
    const { data, error } = await supabase
      .from("companies")
      .select("admins")
      .eq("id", companyId);

    console.log(data);
    if (data[0].admins.includes(userId)) {
      alert(true);
    } else {
      alert(false);
    }

    console.log(data);
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

async function createUserInvite(email, companyId) {
  try {
    const session = supabase.auth.session();
    const userCompany = await getUserCompany();
    console.log(userCompany);
    const { data, error } = await instance.post("/company/invite", {
      email: email,
      company: userCompany.data.id,
      role: "user",
      invited_by: session.user.id,
      environment: "live",
    });
    return { error: false, errorData: null, data: data };
  } catch (e) {
    return { error: true, errorData: e, data: null };
  }
}

async function getInviteTokenData(token) {
  try {
    const { data, error } = await supabase
      .from("company_invites")
      .select()
      .eq("invite_key", token)
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

export {
  createCompany,
  getAllCompanies,
  getUserCompany,
  getUserCompanyData,
  getCompanyData,
  getCompanyEmployees,
  getUserOwnedCompanies,
  makeUserAdmin,
  createUserInvite,
  getInviteTokenData,
};
