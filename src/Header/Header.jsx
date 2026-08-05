import { useState } from "react";
import Viewprice from '../assets/VIEWPRICE.png'
import DownArrow from '../assets/keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import Cart from '../assets/cart.png'
import { Link, useNavigate  } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartOpen = () => {
    navigate("/Cart");
  }

  return (
    <section
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-center justify-between py-4 px-6 lg:px-14">
        {/* Logo */}
        <img
          src={Viewprice}
          alt="Viewprice logo"
          className="h-8 object-contain"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul
            className="flex items-center gap-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            <li
              className="cursor-pointer transition-colors duration-200"
              style={{ color: "#111110" }}
              onMouseEnter={(e) => (e.target.style.color = "#F75D02")}
              onMouseLeave={(e) => (e.target.style.color = "#111110")}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className="flex items-center gap-1 cursor-pointer transition-colors duration-200"
              style={{ color: "#111110" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F75D02")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#111110")}
            >
              <span>Categories</span>
              <img src={DownArrow} alt="" className="h-5 w-4 pt-0.5" />
            </li>

            <li
              className="cursor-pointer transition-colors duration-200"
              style={{ color: "#111110" }}
              onMouseEnter={(e) => (e.target.style.color = "#F75D02")}
              onMouseLeave={(e) => (e.target.style.color = "#111110")}
            >
              Saved
            </li>

            <li
              className="cursor-pointer transition-colors duration-200"
              style={{ color: "#111110" }}
              onMouseEnter={(e) => (e.target.style.color = "#F75D02")}
              onMouseLeave={(e) => (e.target.style.color = "#111110")}
            >
              Account
            </li>
          </ul>
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "1px solid rgba(0,0,0,0.09)",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#F75D02")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)")
            }
          >
            <img
              src={Cart}
              alt="Cart"
              className="h-5"
              onClick={handleCartOpen}
            />
          </button>

          <Link
            to="/signup"
            style={{
              background: "#F75D02",
              color: "#fff",
              borderRadius: 8,
              padding: "9px 22px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d94f00";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#F75D02";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#111110",
              transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{ background: "#111110", opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#111110",
              transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? 400 : 0, background: "#fff" }}
      >
        <div
          className="px-6 pb-6 pt-2 space-y-4 border-t border-black/5"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          <div className="cursor-pointer py-1" style={{ color: "#111110" }}>
            Home
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer py-1"
            style={{ color: "#111110" }}
          >
            <span>Categories</span>
            <img src={DownArrow} alt="" className="h-5 w-4" />
          </div>

          <div className="cursor-pointer py-1" style={{ color: "#111110" }}>
            Saved
          </div>
          <div className="cursor-pointer py-1" style={{ color: "#111110" }}>
            Account
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-black/10">
            <img src={Cart} alt="Cart" className="h-6 cursor-pointer" />
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              style={{
                background: "#F75D02",
                color: "#fff",
                borderRadius: 8,
                padding: "9px 22px",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;