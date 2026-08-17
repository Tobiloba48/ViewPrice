import { useState } from "react";
import Viewprice from '../assets/VIEWPRICE.png'
import DownArrow from '../assets/keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import Cart from '../assets/cart.png'
import { Link, useNavigate  } from "react-router-dom";
import UserIcon from '../assets/user.png'
import { useAuth } from "../Login/AuthContext.jsx";
import LogoutIcon from '../assets/logout.svg'


function DropdownItem ({icon, label, danger= false, onClick}) {
  return (
    <div
      className="flex justify-start gap-4 py-2 "
      style={{ color: danger ? "#dc2626" : "#111110" }}
      onClick={onClick}
    >
      <img className="cursor-pointer" src={icon} />
      <label className="cursor-pointer">{label}</label>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);``
  const navigate = useNavigate();
  const { logout,user }
 = useAuth();

  const handleCartOpen = () => {
    if (user) {
      navigate("/Cart");
    }
    else {
      navigate("/login");
    }
  }

  const handleLogout = async () => {
    try{
      await logout();
      navigate("/");
      setIsOpen(false);
    }
    catch (err) {console.error(err)}
  };

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
              {/* <img src={DownArrow} alt="" className="h-5 w-4 pt-0.5" /> */}
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
              display: user ? "none" : "inline-block",
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

          <div
            className="h-10 w-10 border-2 border-white rounded-full hidden"
            style={{ display: user ? "block" : "none" }}
          >
            <img
              src={UserIcon}
              alt="User"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.25 p-2"
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
        className="lg:hidden overflow-hidden transition-all duration-300 font-semibold"
        style={{
          maxHeight: isOpen ? 400 : 0,
          background: "#fff",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
        }}
      >
        <div className="px-6 pb-6 pt-2 space-y-4 border-t border-black/5">
          <div
            className="cursor-pointer py-1"
            style={{ color: "#111110" }}
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
          >
            Home
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer py-1"
            style={{ color: "#111110" }}
          >
            <span>Categories</span>
            {/* <img src={DownArrow} alt="" className="h-5 w-4" /> */}
          </div>

          <div className="cursor-pointer py-1" style={{ color: "#111110" }}>
            Saved
          </div>
          <div className="cursor-pointer py-1" style={{ color: "#111110" }}>
            Account
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-black/10">
            <DropdownItem
              icon={Cart}
              label="Cart"
              onClick={handleCartOpen}
            />
            {/* <Link
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
                display: user ? "none" : "inline-block",
              }}
            >
              Sign Up
            </Link> */}
          </div>
          <div
            className="h-10 w-10 border-2 border-white rounded-full gap-3"
            style={{ display: user ? "flex" : "none" }}
          >
            <img
              src={UserIcon}
              alt="User"
              className="h-full w-full object-cover rounded-full"
            />
            <div>
              <p>{user?.name}</p>
              <p>{user?.email}</p>
            </div>
          </div>
          {/* <div
            className="flex justify-start gap-2 pt-4 border-t border-black/10 "
            style={{ display: user ? "flex" : "none" }}
          >
            <img
              className="stroke-red-500 cursor-pointer"
              src={LogoutIcon}
              alt="Log Out"
            />
            <label className="text-[#EA3323] cursor-pointer">Log Out</label>
          </div> */}
          <div>
            {user ? (
              <DropdownItem
                icon={LogoutIcon}
                label="Log Out"
                danger
                onClick={handleLogout}
              />
            ) : (
              <DropdownItem
                icon={LogoutIcon}
                label="Log In"
                onClick={() => navigate("/login")}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;