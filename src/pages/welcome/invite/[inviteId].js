import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getInviteTokenData } from "../../../services/company";
import { createUserProfile } from "../../../services/auth";
import { supabase } from "../../../services/supabaseClient";

function InviteOnboarding() {
  const router = useRouter();
  const session = supabase.auth.session();
  const { inviteId } = router.query;
  const [token, setToken] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [hasToken, setHasToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [error, setError] = useState(false);
  const urlParams = new URLSearchParams(router.asPath);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  useEffect(() => {
    if (inviteId !== undefined) {
      setToken(inviteId);
      setHasToken(true);
      fetchTokenData(inviteId);
    } else {
      setHasToken(false);
    }
  }, [inviteId]);

  async function fetchTokenData(token) {
    const userTokenData = await getInviteTokenData(token);
    setTokenData(userTokenData.data);
    setLoading(false);
  }

  async function handleCreateUserProfile() {
    setError(false);
    setErrorMessage("");
    const attemptCreateProfile = await createUserProfile({
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: session.user.email,
      id: session.user.id,
      company_id: tokenData.company_id,
    });
    if (attemptCreateProfile.error) {
      setError(true);
      setErrorMessage(attemptCreateProfile.errorData.message);
    } else {
      router.push("/company-directory/");
    }
  }

  if (urlParams.get("error_description")) {
    alert(urlParams.get("error_description"));
    return null;
  }

  if (!hasToken) {
    return <div>DO U NOT HAS TOKEN?</div>;
  }

  return (
    <div>
      <h1>Welcome, please complete your profile</h1>
      {error && <div>{errorMessage}</div>}
      <label>First Name</label>
      <input
        type="text"
        autoComplete={"given-name"}
        value={firstNameInput}
        onChange={(e) => setFirstNameInput(e.target.value)}
      />
      <label>Last Name</label>
      <input
        type="text"
        autoComplete={"family-name"}
        value={lastNameInput}
        onChange={(e) => setLastNameInput(e.target.value)}
      />
      <button onClick={() => handleCreateUserProfile()}>Submit</button>
    </div>
  );
}

export default InviteOnboarding;
