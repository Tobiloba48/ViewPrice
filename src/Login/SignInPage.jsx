import React, { useState } from "react";
import Google from "../assets/google_symbol.svg.png";
import Facebook from "../assets/facebook_symbol.svg.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Login/AuthContext";
import TextInput from "../components/input";
import Button from "../components/Button";
import AuthCard from "../components/AuthCard";
import SocialButton from "../components/SocialButton";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const correctEmail = email.includes("@") && email.includes(".");
  const correctPassword = password.length >= 8;
  const canSignIn = correctEmail && correctPassword && !loading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!canSignIn) return;
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Sign In"
      subtitle={
        <>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#F75D02",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Create one
          </Link>
        </>
      }
    >
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        {/* Email */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 13, fontWeight: 500, color: "#3a3a38" }}>
            Email
          </label>
          <TextInput
            type="email"
            placeholder="abc@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label style={{ fontSize: 13, fontWeight: 500, color: "#3a3a38" }}>
              Password
            </label>
            <Link
              to="/reset-password"
              style={{
                fontSize: 12,
                color: "#F75D02",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </Link>
          </div>
          <TextInput
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 12,
              bottom: 11,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              color: "#888780",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <Button
          type="submit"
          label={loading ? "Signing in ..." : "Sign In"}
          disabled={!canSignIn}
        />
      </form>

      {error && (
        <p
          style={{
            fontSize: 13,
            color: "#c62828",
            textAlign: "center",
            margin: 0,
          }}
        >
          {error}
        </p>
      )}

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 16 }}>
        <p
          style={{
            fontSize: 13,
            color: "#888780",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Or sign in using
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <SocialButton icon={Google} label="Continue with Google" />
          <SocialButton icon={Facebook} label="Continue with Facebook" />
        </div>
      </div>
    </AuthCard>
  );
}

export default SignInPage;
