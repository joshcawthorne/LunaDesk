import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { supabase } from "../services/supabaseClient";
import styled, { createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";

import { StoreProvider } from "easy-peasy";
import store from "../store";

const LunaDesk = ({ component: Component, pageProps }) => {
  return <Component {...pageProps} />;
};

const LunaDeskWithStore = ({ Component, pageProps }) => {
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`;

  const AppContainer = styled.div`
    font-family: "Inter", sans-serif;
    padding: 0;
    margin: 0;
  `;

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Detected change");
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <StoreProvider store={store}>
      <AppContainer>
        <GlobalStyle />
        <LunaDesk component={Component} pageProps={pageProps} />
      </AppContainer>
    </StoreProvider>
  );
};

export default LunaDeskWithStore;
