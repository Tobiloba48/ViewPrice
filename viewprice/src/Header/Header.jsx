import Viewprice from '../assets/VIEWPRICE.png'
import DownArrow from '../assets/keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import Cart from '../assets/cart.png'

function Header() {
  return (
    <section className="fixed top-0 left-0 w-full z-50 bg-white flex 
                        items-center justify-between py-5 px-15">
      
      <img src={Viewprice} alt="Viewprice logo" />

      <nav>
        <ul className="flex items-center gap-12 font-bold">
          <li>Home</li>

          <li className="flex items-center gap-2 cursor-pointer ">
            <span>Categories</span>
            <img
              src={DownArrow}
              alt=""
              className="pt-1 h-6 w-4"
            />
          </li>

          <li>Saved</li>
          <li>Account</li>
        </ul>
      </nav>
      <div className="flex justify-center gap-10 place-items-center">
        <img src={Cart} alt="" className="h-8" />
         <button className="bg-black py-3 px-6 text-white font-bold">
             Sign Up
        </button>
      </div>
    </section>
  )
}

export default Header
