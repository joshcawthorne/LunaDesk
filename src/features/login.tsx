import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHotkeys } from "react-hotkeys-hook";
import OnboardingCard from "layouts/onboardingCard";
import { loginUser, getUserProfile } from "services/auth";
import { InputFieldItem, Label } from "components/shared";
import { supabase } from "../services/supabaseClient";
import { useStoreState, useStoreActions } from "store/hooks";

import TextField from "components/shared/textField";

const Title = styled.div`
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${props => props.theme.textPrimary};
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Desc = styled.div`
      font-size: 24px;
  text-align: center;
  font-weight: 600;
  opacity: 0.6;
  margin: auto;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 4px;
  max-width: 360px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textPrimary};
`;

function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const user = supabase.auth.user();

    const logIn = useStoreActions((actions) => actions.auth.logIn);

    useHotkeys("enter", () => handleEnter());

    function handleEnter() {
        handleLogin();
    }

    async function handleLogin() {
        setLoading(true);
        setError(false);
        setErrorMessage("");
        const attemptLogin = await loginUser({
            email: emailInput,
            password: passwordInput,
        });
        console.log(attemptLogin)
        if (attemptLogin.error) {
            setError(true);
            if (attemptLogin.errorData.message === "You must provide either an email, phone number or a third-party provider.") {
                setErrorMessage("Whoops - you need to provide both an email and a password.");
            } else if (attemptLogin.errorData.message === "Email not confirmed") {
                setErrorMessage("Please activate your account via the email sent to your account.");
            } else {
                setErrorMessage(attemptLogin.errorData.message);
            }

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
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }

    return (
        <OnboardingCard
            buttonText={"Login"}
            buttonActive
            buttonAction={handleLogin}
            buttonLoading={loading}
            subButtonActive
            subButton
            subButtonText={"Register"}
            subText={"Haven't we met before?"}
            belowButtonText
            belowButtonTextContent={"Forgotten Password"}
            error={error}
            errorMessage={errorMessage}
        >
            <Desc>Welcome back</Desc>
            <Title>Sign In to LunaDesk</Title>
            <InputFieldItem>
                <Label>
                    Email
                </Label>
                <TextField
                    value={emailInput}
                    setValue={setEmailInput}
                    autofocus
                    type={"text"}
                />
            </InputFieldItem>
            <InputFieldItem>
                <Label>
                    Password
                </Label>
                <TextField
                    value={passwordInput}
                    setValue={setPasswordInput}
                    type={"password"}
                />
            </InputFieldItem>
        </OnboardingCard>
    )
}

export default Login
