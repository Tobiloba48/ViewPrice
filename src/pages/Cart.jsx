import Headset from "../assets/headset.png";
import React, { useState } from "react";

function Cart() {
  const [count, setCount] = useState(1);
  const price = 20000;
  const shippingFee = 1000;
  const vat = 1000;

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const subtotal = price * count;
  const total = subtotal + shippingFee + vat;

  return (
    <div className="lg:mx-15 mx-6 my-30">
      <h1 className="text-start text-3xl font-semibold">Your Cart</h1>

      <div className="flex md:flex-row flex-col gap-4 mt-10">
        <div className="flex gap-0 w-[70%]">
          <div className="bg-gray-300 flex justify-center place-items-center w-[30%] h-34">
            <img src={Headset} alt="Product Image" className="w-full h-full" />
          </div>
          <div className="w-[70%] bg-[#FFF0E8] flex justify-between p-6 place-items-center h-34">
            <div>
              <h1 className="font-semibold">Product Name</h1>
              <h1 className="text-[8px] lg:text-[10px] font-bold">
                JUMIA <span className="text-red-600">O</span>
              </h1>
            </div>
            <div className="flex justify-between">
              <div
                className="border-2 border-gray-300 rounded-lg w-4 md:w-6 h-4 md:h-6 text-[8px] md:text-[12px] lg:text-lg flex justify-center items-center leading-none cursor-pointer font-bold"
                onClick={Decrease}
              >
                -
              </div>
              <p className="count-display items-center text-[12px] md:text-lg px-2 text-center">
                {count}
              </p>
              <div
                className="border-2 border-gray-300 rounded-lg w-4 md:w-6 h-4 md:h-6 text-[8px] md:text-[12px] lg:text-lg items-center leading-none cursor-pointer flex justify-center font-bold"
                onClick={Increase}
              >
                +
              </div>
            </div>
            <div>
              <h1 className="text-[12px] md:text-lg font-semibold">
                N{subtotal.toLocaleString()}
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black text-white font-semibold p-6 rounded-lg text-[8px] md:text-[12px] lg:text-lg w-[30%] h-full place-items-center">
          <h1 className="font-bold text-2xl pb-10">Order Summary</h1>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex justify-between gap-10">
              <p>Subtotal:</p>
              <p>N{subtotal.toLocaleString()}.00</p>
            </div>
            <div className="flex justify-between gap-10">
              <p>Shipping Fee:</p>
              <p>N{shippingFee.toLocaleString()}.00</p>
            </div>
            <div className="flex justify-between gap-10">
              <p>Vat</p>
              <p>N{vat.toLocaleString()}.00</p>
            </div>
            <div className="flex justify-between gap-10 font-bold border-t-2 border-white pt-6 border-dashed">
              <p>Total:</p>
              <p className="text-[#F75D02]">N{total.toLocaleString()}.00</p>
            </div>
            <button className="bg-[#F75D02] text-white font-bold py-2 px-4 rounded-lg mt-6 cursor-pointer transition duration-300 m-10">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
