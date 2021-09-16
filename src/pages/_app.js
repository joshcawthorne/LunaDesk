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
