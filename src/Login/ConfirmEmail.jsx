import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ConfirmEmail() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
  };

  return (
    <section
      style={{
        background: '#111110',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          maxWidth: 440,
          width: '100%',
          padding: 'clamp(28px, 5vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: '#FFF3EC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            margin: '0 auto',
          }}
        >
          🔑
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(22px, 4vw, 28px)',
              letterSpacing: '-0.5px',
              color: '#111110',
              marginBottom: 8,
            }}
          >
            Confirm Email
          </h1>
          <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.6 }}>
Check your Email and Enter Confirmation Code           </p>
        </div>

        {/* Form */}
        <form onSubmit={handleReset} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 13, fontWeight: 500, color: '#3a3a38' }}>
              Confirmation Code
            </label>
            <input
              type="email"
              placeholder="Enter Code"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: '1px solid rgba(0,0,0,0.15)',
                borderRadius: 8,
                padding: '11px 14px',
                fontSize: 14,
                fontFamily: "'DM Sans', sans-serif",
                outline: 'none',
                color: '#111110',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => { e.target.style.borderColor = '#F75D02'; e.target.style.boxShadow = '0 0 0 3px rgba(247,93,2,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.15)'; e.target.style.boxShadow = 'none'; }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              background: '#F75D02',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '12px 0',
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer',
              width: '100%',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#d94f00'}
            onMouseLeave={e => e.currentTarget.style.background = '#F75D02'}
          >
            Confirm Email
          </button>
        </form>

        {/* Back to login */}
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 16 }}>
          <p style={{ fontSize: 14, color: '#888780' }}>
            Haven't received your code?
          </p>
        </div>
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 16 }}>
          <p style={{ fontSize: 14, color: '#888780' }}>
            Resend Code
          </p>
        </div>
      </div>
    </section>
  );
}

export default ConfirmEmail;