import { useState } from "react";
import styled, { css } from "styled-components";
import { supabase } from "../../utils/supabaseClient";
import { validateEmail } from "../../utils";

import InputField from "../shared/inputField";
import InputButton from "../shared/inputButton";

const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailInput = styled.input`
  margin-right: 8px;
  width: 300px;
  margin-bottom: 0;
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  outline: none;
`;

const EmailButton = styled.div`
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

const ErrorMessage = styled.div`
  color: #f3bcbc;
  text-align: center;
  margin-bottom: 10px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 18px;
`;

function EmailSignup() {
  const [emailInput, setEmailInput] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (validateEmail(emailInput)) {
      setLoading(true);
      const { error } = await supabase.auth.signIn(
        {
          email: emailInput,
        },
        {
          redirectTo: process.env.BASE_DOMAIN + "welcome",
        }
      );
      console.log(error);
      if (error) {
        setHasError(true);
      } else {
        setEmailSubmitted(true);
      }
    }
  };

  if (emailSubmitted) {
    return <Title>Check your inbox!</Title>;
  }

  return (
    <div>
      {loading ? (
        <Title>Two seconds...</Title>
      ) : (
        <>
          {hasError && (
            <ErrorMessage>
              Uh oh, that doesn't look like an email address to us 😅
            </ErrorMessage>
          )}
          <EmailContainer>
            <InputField
              placeholder={"you@email.com"}
              type={"email"}
              value={emailInput}
              setValue={setEmailInput}
            />
            <InputButton
              disabled={!validateEmail(emailInput)}
              action={handleRegister}
              text={"Email Magic Link"}
            />
          </EmailContainer>
        </>
      )}
    </div>
  );
}

export default EmailSignup;
