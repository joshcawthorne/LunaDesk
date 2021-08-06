import { useState } from "react";
import { supabase } from "../src/utils/supabaseClient";

function Register() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Welcome To Work From!</h1>
        <p className="description">Sign Up with a magic email link</p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send magic link"}</span>
          </button>
        </div>
        <div>Or, alternatively</div>
        <button onClick={() => handleLoginWithGoogle()}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
}

export default Register;
