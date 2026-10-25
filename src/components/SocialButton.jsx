import { useState } from "react";

export default function SocialButton({ icon, label, onClick }) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    border: `1px solid ${hovered ? "#F75D02" : "rgba(0,0,0,0.12)"}`,
    borderRadius: 8,
    padding: "10px 16px",
    fontSize: 14,
    fontWeight: 600,
    color: "#F75D02",
    background: hovered ? "#FFF3EC" : "#fff",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.2s, border-color 0.2s",
    width: "100%",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={icon} alt="" style={{ width: 18, height: 18 }} />
      {label}
    </button>
  );
}
