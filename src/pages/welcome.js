import { useEffect, useState, useCallback } from "react";
import { supabase } from "../services/supabaseClient";
import { createUserProfile } from "../services/auth";
import { useRouter } from "next/router";

function Welcome() {
  const session = supabase.auth.session();
  const router = useRouter();
  const urlParams = new URLSearchParams(router.asPath);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  console.log(session);

  async function handleCreateUserProfile() {
    setError(false);
    setErrorMessage("");
    const attemptCreateProfile = await createUserProfile({
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: session.user.email,
      id: session.user.id,
    });
    if (attemptCreateProfile.error) {
      setError(true);
      setErrorMessage(attemptCreateProfile.errorData.message);
    } else {
      router.push("/user-settings");
    }
  }

  if (urlParams.get("error_description")) {
    alert(urlParams.get("error_description"));
    return null;
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

export default Welcome;
