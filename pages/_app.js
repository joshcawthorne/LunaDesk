import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { supabase } from "../src/utils/supabaseClient";
import styled, { createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";

import Head from "next/head";
import Script from "next/script";
import ApplicationLayer from "../src/components/applicationLayer";
import Marketing from "../src/components/marketing";
import { StoreProvider } from "easy-peasy";
import store from "../src/store";
import "../styles/fonts.css";

import { getProfile, createProfile } from "../src/services/user";
import Loading from "../src/components/shared/loading";
import Header from "../src/components/ui/header";
import Sidebar from "../src/components/ui/sidebar";
import PrivacyPolicy from "../src/components/marketing/privacyPolicy";

const AppContainer = styled.div`
  font-family: "Inter", sans-serif;
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
  const [unmountLoading, setUnmountLoading] = useState(false);
  const userState = useStoreState((state) => state.user);
  const userActions = useStoreActions((actions) => actions.user);
  const { session, loggedIn } = userState;
  const { setSession, setLoggedIn, setUserDetails } = userActions;
  const [onboarded, setOnboarded] = useState(false);
  const [checkedOnboard, setCheckedOnboard] = useState(false);
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
      checkOnboarded();
      if (router.pathname === "/welcome") {
        createUserData();
      } else {
        loadUserData();

        if (!onboarded) {
          router.replace("/welcome");
        }
      }
    }
    //Dark pattern loading, evil cackle.
    if (
      process.env.BASE_DOMAIN === "http://localhost:3000/" ||
      router.pathname === ""
    ) {
      setTimeout(() => {
        setUnmountLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, 5000);
    } else {
      setTimeout(() => {
        setUnmountLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, 5000);
    }
  }, [session]);

  async function checkOnboarded() {
    if (router.pathname !== "/logout") {
      const userProfile = await createProfile();
      if (!userProfile || !userProfile.onboarded) {
        setOnboarded(false);
      } else {
        setOnboarded(true);
      }
      setCheckedOnboard(true);
    }
  }

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
      {isLoading && <Loading unmount={unmountLoading} />}
      <AppContainer>
        <>
          {router.pathname === "/privacy-policy" ? (
            <PrivacyPolicy />
          ) : (
            <Marketing isLoading={isLoading} />
          )}
        </>
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
      <ParallaxProvider>
        <AppContainer>
          <Head>
            <meta
              property="twitter:image"
              content="https://lunadesk-preview.netlify.com/images/socialImage.jpg"
            ></meta>

            <title>LunaDesk | Work From Anywhere</title>
            <meta name="title" content="LunaDesk | Work From Anywhere" />
            <meta
              name="description"
              content="With LunaDesk, your team can instantly see who’s where, when. LunaDesk also makes it a breeze to organise meetings with others, or even full teams, using shared days."
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lunadesk.co" />
            <meta property="og:title" content="LunaDesk | Work From Anywhere" />
            <meta
              property="og:description"
              content="With LunaDesk, your team can instantly see who’s where, when. LunaDesk also makes it a breeze to organise meetings with others, or even full teams, using shared days."
            />
            <meta
              property="og:image"
              content="https://lunadesk-preview.netlify.com/images/socialImage.jpg"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://lunadesk.co/" />
            <meta
              property="twitter:description"
              content="With LunaDesk, your team can instantly see who’s where, when. LunaDesk also makes it a breeze to organise meetings with others, or even full teams, using shared days."
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-B5HD0RJ9NL"
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B5HD0RJ9NL');
            `,
              }}
            />
          </Head>
          <GlobalStyle />
          <App component={Component} pageProps={pageProps} />
        </AppContainer>
      </ParallaxProvider>
    </StoreProvider>
  );
};

export default WorkFromApp;
