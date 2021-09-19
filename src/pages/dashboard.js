import React from "react";
import withAuth from "../utils/withAuth";
import { useStoreActions } from "easy-peasy";
import AppLayout from "../layouts/appLayout";

function Dashboard() {
  const logOut = useStoreActions((actions) => actions.auth.logOut);
  return (
    <AppLayout>
      <div>
        Hello, it's the dashboard :){" "}
        <button onClick={() => logOut()}>Logout</button>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
