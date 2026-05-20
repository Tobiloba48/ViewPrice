function Newsletter() {
  return (
    <div
      style={{
        background: '#111110',
        borderRadius: 16,
        padding: 'clamp(36px, 5vw, 64px) clamp(24px, 5vw, 80px)',
        textAlign: 'center',
        margin: '0 0 8px',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(22px, 3.5vw, 36px)',
          color: '#fff',
          letterSpacing: '-0.5px',
          marginBottom: 10,
        }}
      >
        Subscribe to Newsletter
      </h2>

      <p
        style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: 14,
          lineHeight: 1.7,
          maxWidth: 500,
          margin: '0 auto 28px',
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident dignissimos illo ab delectus dolorem, quasi libero
      </p>

      <div
        style={{
          display: 'flex',
          gap: 8,
          maxWidth: 480,
          margin: '0 auto',
        }}
      >
        <input
          type="email"
          placeholder="Email Address"
          style={{
            flex: 1,
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8,
            padding: '11px 16px',
            fontSize: 14,
            fontFamily: "'DM Sans', sans-serif",
            background: 'rgba(255,255,255,0.07)',
            color: '#fff',
            outline: 'none',
            transition: 'border-color 0.2s',
            minWidth: 0,
          }}
          onFocus={e => e.target.style.borderColor = '#F75D02'}
          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
        />
        <button
          style={{
            background: '#F75D02',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '11px 22px',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#d94f00'}
          onMouseLeave={e => e.currentTarget.style.background = '#F75D02'}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;