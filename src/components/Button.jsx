import { useState } from "react";

export default function Button({
  label,
  onClick,
  type = "button",
  disabled = false,
}) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    background: disabled ? "rgba(0,0,0,0.12)" : hovered ? "#d94f00" : "#F75D02",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "12px 0",
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif",
    cursor: disabled ? "not-allowed" : "pointer",
    width: "100%",
    transition: "background 0.2s",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={buttonStyle}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
}
