import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { getInviteTokenData } from "../services/company";
import { registerUser } from "../services/auth";

function Invite() {
  const router = useRouter();
  const [hasToken, setHasToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [tokenData, setTokenData] = useState({});
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  useEffect(() => {
    if (router.query.token) {
      setToken(router.query.token);
      setHasToken(true);
      fetchTokenData(router.query.token);
    } else {
      setHasToken(false);
      setLoading(false);
    }
  }, []);

  async function handleRegister() {
    setError(false);
    setErrorMessage("");
    const attemptRegister = await registerUser({
      email: emailInput,
      password: passwordInput,
      inviteCode: token,
    });
    if (attemptRegister.error) {
      setError(true);
      setErrorMessage(attemptRegister.errorData.message);
    } else {
      setRegisterSuccess(true);
    }
  }

  async function fetchTokenData(token) {
    const userTokenData = await getInviteTokenData(token);
    setTokenData(userTokenData.data);
    setLoading(false);
  }

  if (!loading && !hasToken) {
    <div>Oi, 'av you got a license to be 'ere?</div>;
  }

  if (loading) {
    <div>Loading</div>;
  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>
        {tokenData.sender_first_name} has invited you to join{" "}
        {tokenData.company_name}!
      </h1>
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

export default Invite;
