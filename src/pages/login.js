import { useState, useEffect } from "react";
import { loginUser, getUserProfile } from "../services/auth";
import { useRouter } from "next/router";
import { supabase } from "../services/supabaseClient";
import { useStoreState, useStoreActions } from "easy-peasy";

function Login() {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const user = supabase.auth.user();

  const isLoggedIn = useStoreState((state) => state.auth.isLoggedIn);
  const logIn = useStoreActions((actions) => actions.auth.logIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/user-settings");
    }
  }, [isLoggedIn]);

  async function handleLogin() {
    setError(false);
    setErrorMessage("");
    const attemptLogin = await loginUser({
      email: emailInput,
      password: passwordInput,
    });
    if (attemptLogin.error) {
      setError(true);
      setErrorMessage(attemptLogin.errorData.message);
    } else {
      const userProfile = await getUserProfile();
      console.log(userProfile);
      if (userProfile.error) {
      } else {
        logIn({
          firstName: userProfile.data.first_name,
          lastName: userProfile.data.last_name,
          email: userProfile.data.email,
          avatar: userProfile.data.avatar,
          hasAvatar: userProfile.data.has_avatar,
        });
      }
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <label>Email</label>
      <input
        type="email"
        autofill="email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleForgotPassword()}>
        Forgotten your password?
      </button>
    </div>
  );
}

export default Login;
