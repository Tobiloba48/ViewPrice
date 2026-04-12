import { useState } from "react";
import Viewprice from '../assets/VIEWPRICE.png'
import DownArrow from '../assets/keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import Cart from '../assets/cart.png'
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/10 shadow-xl">
      
      <div className="flex items-center justify-between py-5 px-6 lg:px-15">
        
        {/* Logo */}
        <img src={Viewprice} alt="Viewprice logo" />

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12 font-bold">
            <li className='cursor-pointer'>Home</li>

            <li className="flex items-center gap-2 cursor-pointer">
              <span>Categories</span>
              <img
                src={DownArrow}
                alt=""
                className="pt-1 h-6 w-4"
              />
            </li>

            <li className='cursor-pointer'>Saved</li>
            <li className='cursor-pointer'>Account</li>
          </ul>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex justify-center gap-10 place-items-center">
          <a href="#">
            <img src={Cart} alt="" className="h-8 cursor-pointer" />
          </a>
          <Link to="/signup" className="bg-black cursor-pointer py-3 px-6 text-white font-bold">
            Sign Up
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-6 space-y-4 font-bold bg-white">
          <div className="cursor-pointer">Home</div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span>Categories</span>
            <img src={DownArrow} alt="" className="h-6 w-4" />
          </div>

          <div className="cursor-pointer">Saved</div>
          <div className="cursor-pointer">Account</div>

          <div className="flex items-center gap-6 pt-4 border-t border-black/10">
            <a href="#">
              <img src={Cart} alt="" className="h-8 cursor-pointer" />
            </a>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-black py-3 px-6 text-white font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default Header
