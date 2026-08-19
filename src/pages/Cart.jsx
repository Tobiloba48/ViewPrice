import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext.jsx";
import { useAuth } from "../Login/AuthContext.jsx";
import cartIcon from "../assets/cart.png";

const Button = ({ label, colorfill = false, onClick }) => {
  const baseColor = colorfill ? "#F75D02" : "#ffffff";
  const hoverColor = colorfill ? "#d94f00" : "#f5f5f5";

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: baseColor,
        color: colorfill ? "white" : "black",
        borderRadius: 20,
        border: colorfill ? "none" : "1px solid #d1d1d1",
        padding: "9px 50px",
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "'DM Sans', sans-serif",
        transition: "background 0.2s, transform 0.15s",
        cursor: "pointer",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = hoverColor;
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = baseColor;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {label}
    </button>
  );
};

function Cart() {
  const { cartItems, updateCount, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/order-confirmation");
  };

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

  return (
    <div className="lg:mx-15 mx-6 my-30">
      <div className="flex md:flex-row flex-col gap-4 mt-10">
        <div
          className={
            cartItems.length === 0
              ? "w-full"
              : "w-full md:w-[70%] flex flex-col gap-4"
          }
        >
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center gap-6 py-16">
              <img src={cartIcon} alt="Empty cart" className="w-20 h-20" />
              <div>
                <p className="font-semibold">Your shopping cart is empty</p>
                <p className="text-gray-500 text-sm">
                  Add your favorite items in it
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full max-w-xs">
                {!user && (
                  <Button
                    label="Sign in / Register"
                    onClick={() => navigate("/login")}
                  />
                )}
                <Button
                  label="Start shopping"
                  colorfill
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="flex justify-between gap-0" key={item.id}>
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

            <div className="flex flex-col gap-4 mt-4 text-sm p-10">
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
                className="bg-[#F75D02] text-white font-bold py-2 px-4 rounded-lg mt-6 cursor-pointer transition duration-300 m-10"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
