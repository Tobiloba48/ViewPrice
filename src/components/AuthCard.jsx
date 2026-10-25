export default function AuthCard({ title, subtitle, icon, children }) {
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
        {icon && (
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
            {icon}
          </div>
        )}

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
            {title}
          </h1>
          {subtitle && (
            <p style={{ fontSize: 14, color: "#888780", lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
