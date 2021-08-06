import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { supabase } from "../src/utils/supabaseClient";
import styled, { createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";

import Head from "next/head";
import ApplicationLayer from "../src/components/applicationLayer";
import Marketing from "../src/components/marketing";
import { StoreProvider } from "easy-peasy";
import store from "../src/store";
import "../styles/fonts.css";

import { getProfile, createProfile } from "../src/services/user";
import Loading from "../src/components/shared/loading";
import Header from "../src/components/ui/header";
import Sidebar from "../src/components/ui/sidebar";

const AppContainer = styled.div`
  font-family: "GT Walsheim", Sans-Serif;
  padding: 0;
  margin: 0;
`;

const AppInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const App = ({ component: Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const userState = useStoreState((state) => state.user);
  const userActions = useStoreActions((actions) => actions.user);
  const { session, loggedIn } = userState;
  const { setSession, setLoggedIn, setUserDetails } = userActions;
  const router = useRouter();

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  useEffect(() => {
    if (session) {
      setLoggedIn(true);
      if (router.pathname === "/welcome") {
        createUserData();
      } else {
        loadUserData();
      }
    }
    //Dark pattern loading, evil cackle.
    if (process.env.BASE_DOMAIN === "http://localhost:3000/") {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, [session]);

  async function createUserData() {
    const userProfile = await createProfile();
    if (userProfile) {
      loadUserData();
    }
  }

  async function loadUserData() {
    const profile = await getProfile();
    if (profile.onboarded) {
      setUserDetails({
        id: profile.id,
        fullName: profile.fullName,
        onboarded: profile.onboarded,
        email: profile.email,
        company: profile.company,
        avatar: profile.avatar_url,
      });
    } else {
      setUserDetails({
        id: profile.id,
        fullName: profile.fullName,
        email: profile.email,
      });
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <AppContainer>
        {loggedIn ? (
          <>
            {router.pathname !== "/welcome" ? (
              <AppInnerContainer>
                <Sidebar />
                <ApplicationLayer
                  isLoading={isLoading}
                  Component={Component}
                  pageProps={pageProps}
                />
              </AppInnerContainer>
            ) : (
              <ApplicationLayer Component={Component} pageProps={pageProps} />
            )}
          </>
        ) : (
          <Marketing />
        )}
      </AppContainer>
    </>
  );
};

const WorkFromApp = ({ Component, pageProps }) => {
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`;
  return (
    <StoreProvider store={store}>
      <AppContainer>
        <Head>
          <title>Work From</title>
        </Head>
        <GlobalStyle />
        <App component={Component} pageProps={pageProps} />
      </AppContainer>
    </StoreProvider>
  );
};

export default WorkFromApp;
