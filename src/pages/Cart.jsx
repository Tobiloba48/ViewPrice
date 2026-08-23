import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext.jsx";
import { useAuth } from "../Login/AuthContext.jsx";

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 border-2 border-dashed border-gray-200 rounded-xl">
      <div className="relative w-24 h-24 flex items-center justify-center mb-6">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" fill="#FFF3EC" />
          <path
            d="M30 35H70L65 62H35L30 35Z"
            stroke="#F75D02"
            strokeWidth="3"
            strokeLinejoin="round"
            fill="white"
          />
          <path
            d="M25 30H30L35 62"
            stroke="#F75D02"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="40" cy="70" r="4" fill="#F75D02" />
          <circle cx="60" cy="70" r="4" fill="#F75D02" />
          <path
            d="M40 45L44 49L52 41"
            stroke="#F75D02"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="text-xl font-bold text-[#111110] mb-2">
        Your cart is empty
      </h2>
      <p className="text-sm text-gray-500 max-w-xs mb-6">
        Looks like you haven't added anything yet. Start browsing to find
        something you'll love.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-[#F75D02] text-white font-bold py-3 px-8 rounded-lg cursor-pointer transition duration-300 hover:bg-[#d94f00]"
      >
        Continue Shopping
      </button>
    </div>
  );
}

function Cart() {
  const { cartItems, updateCount, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const shippingFee = cartItems.length === 0 ? 0 : 1000;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  const vat = cartItems.reduce(
    (sum, item) => sum + (item.vat ? item.vat * item.count : 0),
    0,
  );

  const total = subtotal + shippingFee + vat;

  const handleCheckout = () => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }
    clearCart();
    navigate("/order-confirmation");
  };

  return (
    <div className="lg:mx-15 mx-6 my-30">

      <div className="flex md:flex-row flex-col gap-4 mt-10">
        <div className="w-full flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            cartItems.map((item) => (
              <div className="flex justify-between gap-0  w-" key={item.id}>
                <div className="bg-gray-300 flex justify-center place-items-center w-[30%] h-34">
                  <img
                    src={item.image}
                    alt="Product Image"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[70%] bg-[#FFF0E8] flex justify-between p-6 place-items-center h-34">
                  <div>
                    <h1 className="font-semibold">{item.productName}</h1>
                    <h1 className="text-[8px] lg:text-[10px] font-bold">
                      JUMIA <span className="text-red-600">O</span>
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <div
                      className="border-2 border-gray-300 rounded-lg w-4 md:w-6 h-4 md:h-6 text-[8px] md:text-[12px] lg:text-lg flex justify-center items-center leading-none cursor-pointer font-bold"
                      onClick={() => updateCount(item.id, -1)}
                    >
                      -
                    </div>
                    <p className="count-display items-center text-[12px] md:text-lg px-2 text-center">
                      {item.count}
                    </p>
                    <div
                      className="border-2 border-gray-300 rounded-lg w-4 md:w-6 h-4 md:h-6 text-[8px] md:text-[12px] lg:text-lg items-center leading-none cursor-pointer flex justify-center font-bold"
                      onClick={() => updateCount(item.id, 1)}
                    >
                      +
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[12px] md:text-lg font-semibold">
                      N{(item.price * item.count).toLocaleString()}
                    </h1>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-[10px] md:text-xs font-semibold cursor-pointer hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="bg-black text-white font-semibold p-6 rounded-lg text-[8px] md:text-[12px] lg:text-lg w-full md:w-[30%] h-full place-items-center">
            <h1 className="font-bold text-2xl pb-10">Order Summary</h1>

            <div className="flex flex-col gap-4 mt-4 text-sm p-10 ">
              <div className="flex justify-between md:gap-16 gap-40">
                <p>Subtotal:</p>
                <p>N{subtotal.toLocaleString()}.00</p>
              </div>
              <div className="flex justify-between md:gap-16 gap-40">
                <p>Shipping Fee:</p>
                <p>N{shippingFee.toLocaleString()}.00</p>
              </div>
              <div className="flex justify-between md:gap-16 gap-40">
                <p>Vat</p>
                <p>N{vat.toLocaleString()}.00</p>
              </div>
              <div className="flex justify-between gap-40 md:gap-16 font-bold border-t-2 border-white pt-6 border-dashed">
                <p>Total:</p>
                <p className="text-[#F75D02]">N{total.toLocaleString()}.00</p>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-[#F75D02] text-white font-bold py-2 px-4 rounded-lg mt-6 cursor-pointer transition duration-300 hover:bg-[#d94f00]"
              >
                Checkout
              </button>

              {showLoginPrompt && (
                <div className="bg-white text-[#111110] rounded-lg p-4 mt-2 flex flex-col gap-3 text-center">
                  <p className="text-sm font-semibold normal-case">
                    Sign in to complete your order
                  </p>
                  <p className="text-xs text-gray-500 normal-case leading-relaxed">
                    Your cart will be saved — just log in or create an account
                    to check out.
                  </p>
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-[#F75D02] text-white font-semibold py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-[#d94f00] normal-case"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-white text-[#F75D02] border border-[#F75D02] font-semibold py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-[#FFF3EC] normal-case"
                  >
                    Create Account
                  </button>
                  <button
                    onClick={() => setShowLoginPrompt(false)}
                    className="text-gray-400 text-xs cursor-pointer normal-case hover:underline"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
