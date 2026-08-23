import { useState, useRef, useEffect } from "react";
import Viewprice from "../assets/VIEWPRICE.png";
import DownArrow from "../assets/keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";
import Cart from "../assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import UserIcon from "../assets/user.png";
import { useAuth } from "../Login/AuthContext.jsx";
import LogoutIcon from "../assets/logout.svg";
import SettingsIcon from "../assets/settings.png";
import LoginIcon from "../assets/login.png";
import AccountIcon from "../assets/view-profile.png";

function DropdownItem({ icon, label, sublabel, danger = false, onClick }) {
  return (
    <div
      className="flex justify-start gap-4 py-2 cursor-pointer"
      style={{ color: danger ? "#dc2626" : "#111110" }}
      onClick={onClick}
    >
      <img className="h-6 w-6" src={icon} alt="" />
      <div>
        <label className="cursor-pointer block">{label}</label>
        {sublabel && <span className="text-xs text-gray-500">{sublabel}</span>}
      </div>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const headerRef = useRef(null);


  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleCartOpen = () => {
   navigate("/cart");
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      setIsOpen(false);
      setIsProfileOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

 useEffect(() => {
   function handleClickOutside(e) {
     if (headerRef.current && !headerRef.current.contains(e.target)) {
       setIsProfileOpen(false);
       setIsOpen(false);
     }
   }
   document.addEventListener("mousedown", handleClickOutside);
   return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

  return (
    <section
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-center justify-between py-4 px-6 lg:px-14 relative">
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
              style={{ 
                color: "#111110",
                display: user ? "block" : "none" 
                }}
              onMouseEnter={(e) => (e.target.style.color = "#F75D02")}
              onMouseLeave={(e) => (e.target.style.color = "#111110")}
            >
              Account
            </li>
          </ul>
        </nav>

        {/* Desktop Right */}
        <div
          className="hidden lg:flex items-center gap-4 relative"
        >
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
            className="h-10 w-10 border-2 border-white rounded-full"
            style={{ display: user ? "block" : "none" }}
          >
            <img
              src={UserIcon}
              alt="User"
              className="h-full w-full object-cover rounded-full cursor-pointer"
              onClick={() => setIsProfileOpen((prev) => !prev)}
            />
          </div>

          {/* Desktop Profile Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 top-14 bg-white shadow-lg rounded-lg w-64 border border-black/10 z-50">
              <div className="p-4 border-b border-black/10">
                <DropdownItem
                  icon={UserIcon}
                  label={user?.name}
                  sublabel={user?.email}
                />
              </div>
              <div className="p-2">
                <DropdownItem
                  icon={AccountIcon}
                  label="View profile"
                  onClick={() => {
                    navigate("/");
                    setIsProfileOpen(false);
                  }}
                />
                <DropdownItem
                  icon={SettingsIcon}
                  label="Account settings"
                  onClick={() => {
                    navigate("/");
                    setIsProfileOpen(false);
                  }}
                />
              </div>
              <div className="p-2 border-t border-black/10">
                <DropdownItem
                  icon={LogoutIcon}
                  label="Log Out"
                  danger
                  onClick={handleLogout}
                />
              </div>
            </div>
          )}
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
          maxHeight: isOpen ? 500 : 0,
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
            className="flex justify-between items-center gap-2 cursor-pointer py-1"
            style={{ color: "#111110" }}
          >
            <span>Categories</span>
            <img src={DownArrow} alt="" className="h-5 w-4" />
          </div>

          <div className="cursor-pointer py-1" style={{ color: "#111110" }}>
            Saved
          </div>
          <div className="cursor-pointer py-1" 
            style={{ 
              color: "#111110", 
              display : user ? "block" : "none",
              }}>
            Account
          </div>

          <div>
            <div className="pt-4 border-t border-black/15">
              <DropdownItem icon={Cart} label="Cart" onClick={handleCartOpen} />
            </div>
            {user && (
              <div className="pt-2">
                <DropdownItem
                  icon={UserIcon}
                  label={user?.name}
                  sublabel={user?.email}
                />
              </div>
            )}
          </div>

          <div className="border-t border-black/15 pt-4"
          style={{
            display : user ? "block" : "none"
          }}>
            <DropdownItem
              icon={AccountIcon}
              label="View profile"
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            />
            
            <DropdownItem
              icon={SettingsIcon}
              label="Account settings"
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            />
          </div>

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
                icon={LoginIcon}
                label="Log In"
                danger
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
