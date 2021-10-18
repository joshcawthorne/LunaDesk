import { useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { StoreProvider, useStoreState } from "easy-peasy";
import * as uplot from "../style/uplot.css"; // eslint-disable-line

import { ToastContainer } from "react-toastify";
import * as toastify from "react-toastify/dist/ReactToastify.css"; // eslint-disable-line
import * as searchStyle from "../style/selectSearchStyle.css"; // eslint-disable-line
import * as fonts from "../assets/fonts/fonts.css"; // eslint-disable-line

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

const LunaDesk = ({ component: Component, pageProps }) => {
  const lightMode = useStoreState((state) => state.preferences.lightMode);
  return (
    <ThemeProvider theme={theme[lightMode ? "light" : "dark"]}>
      <Component {...pageProps} />
      <StyledToastContainer />
    </ThemeProvider>
  );
};

const LunaDeskWithStore = ({ Component, pageProps }) => {
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
        <GlobalStyle whiteColor />
        <LunaDesk component={Component} pageProps={pageProps} />
      </AppContainer>
    </StoreProvider>
  );
};

export default LunaDeskWithStore;
