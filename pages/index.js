import { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { supabase } from "../src/utils/supabaseClient";

export default function Dashboard() {
  const userActions = useStoreActions((actions) => actions.user);
  const { setSession, setLoggedIn, setUserDetails } = userActions;

  function handleLogout() {
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
  }

  return (
    <>
      <div>You made it!</div>
      <button className="button block" onClick={() => handleLogout()}>
        Sign Out
      </button>
    </>
  );
}
