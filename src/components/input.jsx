
export default function TextInput({ type, placeholder, value, onChange, paddingRight = 14 }) {
  const inputStyle = {
    border: "1px solid rgba(0,0,0,0.15)",
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    width: "100%",
    color: "#111110",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ ...inputStyle, paddingRight }}
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
  );
}