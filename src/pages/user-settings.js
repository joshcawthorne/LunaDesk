import router from "next/router";
import React, { useEffect, useState } from "react";
import { useStoreActions } from "store/hooks";
import AppLayout from "../layouts/appLayout";

import {
  getUserProfile,
  updateUserEmail,
  updateUserPassword,
  logoutUser,
} from "../services/auth";

function UserSettings() {
  const logOut = useStoreActions((actions) => actions.auth.logOut);
  const [userProfile, setUserProfile] = useState({});
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [activeEmail, setActiveEmail] = useState("");
  const [existingPasswordInput, setExistingPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [newPasswordConfirmInput, setNewPasswordConfirmInput] = useState("");
  const [emailVerificationNeeded, setEmailVerificationNeeded] = useState(false);
  useEffect(() => {
    async function fetchUserProfile() {
      const userProfileData = await getUserProfile();
      console.log(userProfileData);
      if (userProfileData.error) {
        //
      } else {
        setUserProfile(userProfileData.data);
        setFirstNameInput(userProfileData.data.first_name);
        setLastNameInput(userProfileData.data.last_name);
        setEmailInput(userProfileData.data.email);
        setActiveEmail(userProfileData.data.email);
      }
    }
    fetchUserProfile();
  }, []);

  async function handleUpdateEmail() {
    const attemptUpdateEmail = await updateUserEmail({
      updatedEmail: emailInput,
    });
    if (attemptUpdateEmail.error) {
    } else {
      setEmailVerificationNeeded(true);
    }
    console.log(attemptUpdateEmail);
  }

  async function handleUpdatePassword() {
    const attemptUpdatePassword = await updateUserPassword({
      updatedPassword: newPasswordInput,
    });
    if (attemptUpdatePassword.error) {
    } else {
    }
    console.log(attemptUpdatePassword);
  }

  async function handleLogout() {
    const attemptLogout = await logoutUser();
    if (attemptLogout.error) {
    } else {
      logOut();
      router.push("/login");
    }
  }

  return (
    <AppLayout>
      <div>
        <h1>User Settings</h1>
        <button onClick={() => handleLogout()}>Logout</button>
        <div>
          <h3>Name</h3>
          <input
            value={firstNameInput}
            onChange={(e) => setFirstNameInput(e.target.value)}
          />
          <input
            value={lastNameInput}
            onChange={(e) => setLastNameInput(e.target.value)}
          />
        </div>
        <div>
          <h3>Email</h3>
          {emailVerificationNeeded && (
            <div>
              Please confirm this change via the email sent to{" "}
              <b>{activeEmail}</b>. Can't access that email?{" "}
              <a href="mailto: contact@lunadesk.co">
                Contact support for more help
              </a>
            </div>
          )}
          <input
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <button onClick={() => handleUpdateEmail()}>Update Email</button>
        </div>
        <div>
          <h3>Update Password</h3>
          <label>New Password</label>
          <input
            value={newPasswordInput}
            type={"password"}
            onChange={(e) => setNewPasswordInput(e.target.value)}
          />
          <label>Confirm New Password</label>
          <input
            value={newPasswordConfirmInput}
            onChange={(e) => setNewPasswordConfirmInput(e.target.value)}
            type={"password"}
          />

          <button onClick={() => handleUpdatePassword()}>
            Update Password
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

export default UserSettings;
