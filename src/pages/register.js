import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { registerUser } from "../services/auth";

function Register() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  async function handleRegister() {
    setError(false);
    setErrorMessage("");
    const attemptRegister = await registerUser({
      email: emailInput,
      password: passwordInput,
    });
    if (attemptRegister.error) {
      setError(true);
      setErrorMessage(attemptRegister.errorData.message);
    } else {
      setRegisterSuccess(true);
    }
  }
  return (
    <div>
      <h1>Register for LunaDesk</h1>

      {error && <div style={{ color: "red" }}>{errorMessage}</div>}
      {registerSuccess ? (
        <div>Check your email!</div>
      ) : (
        <div>
          <div>
            <label>Email</label>
            <input
              type="email"
              autofill="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <button onClick={() => handleRegister()}>Go</button>
        </div>
      )}
    </div>
  );
}

export default Register;
