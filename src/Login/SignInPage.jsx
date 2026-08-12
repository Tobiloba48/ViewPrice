import React, { useState } from 'react';
import Google from '../assets/google_symbol.svg.png';
import Facebook from '../assets/facebook_symbol.svg.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Login/AuthContext"

const inputStyle = {
  border: '1px solid rgba(0,0,0,0.15)',
  borderRadius: 8,
  padding: '11px 14px',
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  width: '100%',
  color: '#111110',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const socialBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  border: '1px solid rgba(0,0,0,0.12)',
  borderRadius: 8,
  padding: '10px 16px',
  fontSize: 14,
  fontWeight: 600,
  color: '#F75D02',
  background: '#fff',
  cursor: 'pointer',
  fontFamily: "'DM Sans', sans-serif",
  textDecoration: 'none',
  transition: 'background 0.2s, border-color 0.2s',
  width: '100%',
};

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate

  const correctEmail = email.includes('@') && email.includes('.');
  const correctPassword = password.length >= 8;

  const canSignIn = correctEmail && correctPassword && !loading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!canSignIn) return;
    setLoading(true);
    try{
      await login(email, password);
      navigate("/");
    }
    catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    }
    finally{
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
            Sign In
          </h1>
          <p style={{ fontSize: 14, color: "#888780" }}>
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
          </p>
        </div>

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
              style={inputStyle}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{ fontSize: 13, fontWeight: 500, color: "#3a3a38" }}
              >
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
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...inputStyle, paddingRight: 56 }}
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

          {/* Submit */}
          <button
            type="submit"
            style={{
              background: canSignIn ? "#F75D02" : "rgba(0,0,0,0.12)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 0",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              cursor: canSignIn ? "pointer" : "not-allowed" ,
              width: "100%",
              transition: "background 0.2s",
            }}
            disabled={!canSignIn}
            onMouseEnter={(e) => {
              if (canSignIn)
              e.currentTarget.style.background = "#d94f00"}}
            onMouseLeave={(e) => {
              if (canSignIn)
             e.currentTarget.style.background = "#F75D02"}}
          >
            {loading ? "Signing in ..." : "Sign In"}{" "}
          </button>
        </form>

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
            Or sign in using
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

export default SignInPage;