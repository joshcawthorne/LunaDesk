import React from "react";
import withAuth from "../utils/withAuth";
import { useStoreState, useStoreActions } from "easy-peasy";
import { logoutUser } from "../services/auth";

function Dashboard() {
  const logOut = useStoreActions((actions) => actions.auth.logOut);
  async function handleLogout() {
    const attemptLogout = await logoutUser();
    if (attemptLogout.error) {
    } else {
      logOut();
    }
  }
  return (
    <div>
      Hello, it's the dashboard :){" "}
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}

export default withAuth(Dashboard);
