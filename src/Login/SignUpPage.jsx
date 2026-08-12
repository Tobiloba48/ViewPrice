import React, { useState } from "react";
import Google from "../assets/google_symbol.svg.png";
import Facebook from "../assets/facebook_symbol.svg.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Login/AuthContext";

const inputStyle = (hasError = false) => ({
  border: `1px solid ${hasError ? "#c62828" : "rgba(0,0,0,0.15)"}`,
  borderRadius: 8,
  padding: "11px 14px",
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s, box-shadow 0.2s",
  color: "#111110",
});

const socialBtnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: 8,
  padding: "10px 16px",
  fontSize: 14,
  fontWeight: 600,
  color: "#F75D02",
  background: "#fff",
  cursor: "pointer",
  fontFamily: "'DM Sans', sans-serif",
  textDecoration: "none",
  transition: "background 0.2s, border-color 0.2s",
  width: "100%",
};

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const passwordTooShort = password.length > 0 && password.length < 8;
  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;
  const showMismatch = confirmPassword.length > 0 && !passwordsMatch;
  const canSubmit = password.length >= 8 && passwordsMatch && !loading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!canSubmit) return;
    setLoading(true);
    try {
      await signup(email, password);
      navigate("/confirm-email");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        background: "#111110",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
          maxWidth: 440,
          width: "100%",
          padding: "clamp(28px, 5vw, 40px)",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(22px, 4vw, 28px)",
              letterSpacing: "-0.5px",
              color: "#111110",
              marginBottom: 8,
            }}
          >
            Create an Account
          </h1>
          <p style={{ fontSize: 14, color: "#888780" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#F75D02",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign in
            </Link>
          </p>
        </div>

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
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle()}
              onFocus={(e) => {
                e.target.style.borderColor = "#F75D02";
                e.target.style.boxShadow = "0 0 0 3px rgba(247,93,2,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(0,0,0,0.15)";
                e.target.style.boxShadow = "none";
              }}
              required
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
            <label style={{ fontSize: 13, fontWeight: 500, color: "#3a3a38" }}>
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...inputStyle(passwordTooShort), paddingRight: 56 }}
              onFocus={(e) => {
                e.target.style.borderColor = "#F75D02";
                e.target.style.boxShadow = "0 0 0 3px rgba(247,93,2,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(0,0,0,0.15)";
                e.target.style.boxShadow = "none";
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: 12,
                bottom: passwordTooShort ? 31 : 11,
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
            {passwordTooShort && (
              <span style={{ fontSize: 12, color: "#c62828", marginTop: 2 }}>
                Password must be at least 8 characters
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              position: "relative",
            }}
          >
            <label style={{ fontSize: 13, fontWeight: 500, color: "#3a3a38" }}>
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              disabled={password.length < 8}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ ...inputStyle(showMismatch), paddingRight: 56 }}
              onFocus={(e) => {
                e.target.style.boxShadow = `0 0 0 3px ${showMismatch ? "rgba(198,40,40,0.1)" : "rgba(247,93,2,0.1)"}`;
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "none";
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              disabled={password.length < 8}
              style={{
                position: "absolute",
                right: 12,
                bottom: showMismatch ? 31 : 11,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
                color: "#888780",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
            {showMismatch && (
              <span style={{ fontSize: 12, color: "#c62828", marginTop: 2 }}>
                Passwords do not match
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            className="text-center"
            type="submit"
            disabled={!canSubmit}
            style={{
              background: canSubmit ? "#F75D02" : "#e0dbd7",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 0",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              cursor: canSubmit ? "pointer" : "not-allowed",
              transition: "background 0.2s",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              if (canSubmit) e.currentTarget.style.background = "#d94f00";
            }}
            onMouseLeave={(e) => {
              if (canSubmit) e.currentTarget.style.background = "#F75D02";
            }}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Terms */}
        <p
          style={{
            fontSize: 13,
            color: "#888780",
            textAlign: "center",
            marginTop: -4,
          }}
        >
          By creating an account, you agree to our{" "}
          <a
            href="#"
            style={{
              color: "#F75D02",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Terms of Service
          </a>
        </p>

        {/* Divider */}
        <div
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 16 }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#888780",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Or create an account using
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="#"
              style={socialBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFF3EC";
                e.currentTarget.style.borderColor = "#F75D02";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
              }}
            >
              <img
                src={Google}
                alt="Google"
                style={{ width: 18, height: 18 }}
              />
              Continue with Google
            </a>
            <a
              href="#"
              style={socialBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFF3EC";
                e.currentTarget.style.borderColor = "#F75D02";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
              }}
            >
              <img
                src={Facebook}
                alt="Facebook"
                style={{ width: 18, height: 18 }}
              />
              Continue with Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
