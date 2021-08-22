import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { supabase } from "../src/utils/supabaseClient";

function Logout() {
  const { setSession, setLoggedIn, setUserDetails } = userActions;
  useEffect(() => {
    setUserDetails({
      id: null,
      fullName: null,
      onboarded: null,
      email: null,
      company: null,
      avatar: null,
    });
    setLoggedIn(false);
    setSession(null);
    supabase.auth.signOut();
  }, []);
  return <div></div>;
}

export default Logout;
