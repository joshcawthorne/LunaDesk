import { useState } from "react";
import { loginUser } from "../services/auth";
import { useRouter } from "next/router";
import { supabase } from "../services/supabaseClient";

function Login() {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const user = supabase.auth.user();

  console.log(user);

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
      router.push("/user-settings");
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
    </div>
  );
}

export default Login;
