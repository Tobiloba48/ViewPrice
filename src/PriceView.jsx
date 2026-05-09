function PriceView() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #FFF3EC 0%, #FFE8D6 100%)',
        padding: 'clamp(32px, 5vw, 64px) clamp(20px, 5vw, 80px)',
        display: 'flex',
        alignItems: 'center',
        gap: 48,
        marginBottom: 8,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Visual placeholder — lg only */}
      <div
        className="hidden lg:flex items-center justify-center"
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
          background: 'rgba(247,93,2,0.1)',
          border: '2px dashed rgba(247,93,2,0.25)',
          flexShrink: 0,
          fontSize: 64,
        }}
      >
        🔍
      </div>

      {/* Text + form */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(22px, 3.5vw, 36px)',
            letterSpacing: '-0.5px',
            color: '#111110',
            marginBottom: 10,
            textAlign: 'center',
          }}
        >
          Compare Product Prices
        </h2>

        <p
          style={{
            color: '#888780',
            fontSize: 14,
            lineHeight: 1.7,
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Provident dignissimos illo ab delectus dolorem, quasi libero
        </p>

        <div style={{ display: 'flex', gap: 8, maxWidth: 520, margin: '0 auto' }}>
          <input
            type="search"
            placeholder="Product Name"
            style={{
              flex: 1,
              border: '1px solid rgba(247,93,2,0.2)',
              borderRadius: 8,
              padding: '11px 16px',
              fontSize: 14,
              fontFamily: "'DM Sans', sans-serif",
              outline: 'none',
              background: '#fff',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = '#F75D02'}
            onBlur={e => e.target.style.borderColor = 'rgba(247,93,2,0.2)'}
          />
          <button
            style={{
              background: '#111110',
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
            onMouseEnter={e => e.currentTarget.style.background = '#F75D02'}
            onMouseLeave={e => e.currentTarget.style.background = '#111110'}
          >
            View Prices
          </button>
        </div>
      </div>
    </section>
  );
}

export default PriceView;