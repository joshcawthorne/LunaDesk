import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../services/supabaseClient";
import { Gradient } from "whatamesh";
import styled from "styled-components";
import { motion } from "framer-motion";

import Layout from "layouts/onboardingLayout";
import LoginComponent from "features/login";
import BackgroundAnimation from "features/onboarding/backgroundAnimation";

const CanvasContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dfdfee;
  #gradient-canvas {
    width: 100%;
    height: 100%;
    --gradient-color-1: #dfdfee;
    --gradient-color-2: #e7d194;
    --gradient-color-3: #dfdfee;
    --gradient-color-4: #dd9dc2;
  }
`;

function Login() {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const user = supabase.auth.user();

  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
    setTimeout(() => {
      setCanvasReady(true);
    }, 400);
  }, []);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0 },
  };

  return (
    <Layout>
      <LoginComponent />
      <BackgroundAnimation />
    </Layout>
  );
}

export default Login;
