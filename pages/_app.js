import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { supabase } from "../src/utils/supabaseClient";
import styled from "styled-components";

import Head from "next/head";
import ApplicationLayer from "../src/components/applicationLayer";
import Marketing from "../src/components/marketing";
import { StoreProvider } from "easy-peasy";
import store from "../src/store";
import "../styles/fonts.css";

import { getProfile } from "../src/services/user";

const AppContainer = styled.div`
  font-family: "GT Walsheim";
`;

const App = ({ component: Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const userState = useStoreState((state) => state.user);
  const userActions = useStoreActions((actions) => actions.user);
  const { session, loggedIn } = userState;
  const { setSession, setLoggedIn, setUserDetails } = userActions;

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  useEffect(() => {
    if (session) {
      setLoggedIn(true);
      loadUserData();
    }
  }, [session]);

  async function loadUserData() {
    const profile = await getProfile();
    setUserDetails({
      id: profile.id,
      fullName: profile.fullName,
      onboarded: profile.onboarded,
      email: profile.email,
      company: profile.company,
      avatar: profile.avatar_url,
    });
  }

  return (
    <AppContainer>
      {loggedIn ? (
        <ApplicationLayer Component={Component} pageProps={pageProps} />
      ) : (
        <Marketing />
      )}
    </AppContainer>
  );
};

const WhosInApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider store={store}>
      <AppContainer>
        <Head>
          <title>Who's In</title>
        </Head>
        <App component={Component} pageProps={pageProps} />
      </AppContainer>
    </StoreProvider>
  );
};

export default WhosInApp;
