import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { useAuth } from "./AuthContext";

function ConfirmEmail() {
  const { user } = useAuth();
  const [resent, setResent] = useState(false);
  const [error, setError] = useState("");

  const handleResend = async () => {
    setError("");
    try {
      await sendEmailVerification(user);
      setResent(true);
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
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
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "#FFF3EC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            margin: "0 auto",
          }}
        >
          📧
        </div>

        <div>
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
            Confirm Your Email
          </h1>
          <p style={{ fontSize: 14, color: "#888780", lineHeight: 1.6 }}>
            We've sent a confirmation link to <strong>{user?.email}</strong>.
            Click the link to verify your account.
          </p>
        </div>

        {resent && (
          <p style={{ fontSize: 13, color: "#2e7d32", margin: 0 }}>
            Verification email resent.
          </p>
        )}
        {error && (
          <p style={{ fontSize: 13, color: "#c62828", margin: 0 }}>{error}</p>
        )}

        <button
          onClick={handleResend}
          style={{
            background: "#F75D02",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 0",
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            width: "100%",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#d94f00")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#F75D02")}
        >
          Resend Email
        </button>

        <p style={{ fontSize: 14, color: "#888780" }}>
          Wrong email?{" "}
          <Link
            to="/signup"
            style={{
              color: "#F75D02",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Sign up again
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ConfirmEmail;
