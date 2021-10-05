import { useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { StoreProvider, useStoreState } from "easy-peasy";
import "src/style/uplot.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "../store";
import { theme } from "../style/theme";

const AppContainer = styled.div``;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
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
