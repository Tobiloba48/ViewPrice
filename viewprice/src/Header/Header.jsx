import Viewprice from '../assets/VIEWPRICE.png'
import DownArrow from '../assets/keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import Cart from '../assets/cart.png'

function Header() {
  return (
    <section className="fixed top-0 left-0 w-full z-50 bg-white flex border-b border-black/10 
                        items-center justify-between py-5 px-15  shadow-xl">
      
      <img src={Viewprice} alt="Viewprice logo" />

      <nav>
        <ul className="flex items-center gap-12 font-bold">
          <li className='cursor-pointer'>Home</li>

          <li className="flex items-center gap-2 cursor-pointer ">
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
      <div className="flex justify-center gap-10 place-items-center">
        <a href="#">
            <img src={Cart} alt="" className="h-8 cursor-pointer" />
        </a>
         <button className="bg-black cursor-pointer py-3 px-6 text-white font-bold">
             Sign Up
        </button>
      </div>
    </section>
  )
}

export default Header
