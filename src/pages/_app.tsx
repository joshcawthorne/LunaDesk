import { useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { StoreProvider } from "easy-peasy";
import { useStoreState } from "store/hooks"
import { useRouter } from 'next/router'
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { useScript } from 'use-script'

//CSS Imports
const t = require('react-toastify/dist/ReactToastify.css');
const s = require('../style/selectSearchStyle.css')
const f = require("../assets/fonts/fonts.css");
const u = require("../style/uplot.css")


import store from "../store";
import { theme } from "../style/theme";

const AppContainer = styled.div``;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 0;
    margin: 0;
  }
`;

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__close-button--light {
    color: ${(props) => props.theme.text100};
  }
  .Toastify__toast {
    background-color: ${(props) => props.theme.surface100};
  }
`;

interface LunaDeskInterface {
  component?: any;
  Component?: any;
  pageProps?: any;
}

const queryClient = new QueryClient();

const LunaDesk = ({ component: Component, pageProps }: LunaDeskInterface) => {
  const lightMode = useStoreState((state) => state.preferences.lightMode);
  const router = useRouter()
  return (

    <ThemeProvider theme={theme[lightMode ? "light" : "dark"]}>
      <Component {...pageProps} />
      <StyledToastContainer />
    </ThemeProvider>

  );
};

const LunaDeskWithStore = ({ Component, pageProps }: LunaDeskInterface) => {
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
      authListener!.unsubscribe();
    };
  }, []);

  const { loading } = useScript({
    src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`,
  })

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <AppContainer>
          <GlobalStyle />
          <LunaDesk component={Component} pageProps={pageProps} />
        </AppContainer>
      </StoreProvider >
    </QueryClientProvider>
  );
};

export default LunaDeskWithStore;
