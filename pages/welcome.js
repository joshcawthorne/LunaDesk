import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";

import Onboard from "../src/components/onboard";

function Welcome() {
  const userState = useStoreState((state) => state.user);
  const { onboarded, loggedIn } = userState;
  const router = useRouter();

  if (!onboarded && loggedIn) {
    return <Onboard />;
  } else {
    router.replace("/");
    return null;
  }
}

export default Welcome;
