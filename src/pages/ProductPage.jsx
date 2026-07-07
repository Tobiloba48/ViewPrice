import Headset from "../assets/headset.png"
import Star from "../assets/Star 1.png"
import React, { useState } from "react"

function ProductCount () {
   const [count, setCount] = useState(0);

   const Increase = () => {
    setCount(count + 1);
   }

   const Decrease = () => {
    setCount(count - 1);
   }
    return (
      <div className="grid grid-cols-5 items-center gap-4">
        <h1 className="font-bold">God's Will Venture</h1>
        <h2>JUMIA</h2>
        <h2 className="font-bold">2000.00</h2>
        <div className="flex justify-between">
          <div
            className="border border-2-red rounded-full p-3 w-3 h-3 text-[7px]"
            onClick={Decrease}>
            -
          </div>
          <p className="count-display items-center">{count}</p>
          <div
            className="border border-2-red rounded-full p-3 w-3 h-3 text-[7px]"
            onClick={Increase}>
            +
          </div>
        </div>
        <button className="bg-black text-white font-bold py-2 px-4">
          Buy Now
        </button>
      </div>
    );
}
function ProductPage (){
    return (
      <div className="m-10">
        <section className="my-20 flex justify-between gap-10">
          <div className="bg-gray-400 place-items-center w-[30%]">
            <img src={Headset} alt="Product Image" />
          </div>
          <div className="w-[70%]">
            <h2 className="text-3xl font-semibold ">Product Name</h2>
            <div className="flex items-start gap-3 ">
              <div className="flex justify-between place-content-center">
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
              </div>
              <h3 className="text-sm text-center">(220 Ratings)</h3>
            </div>
            <h2 className="py-4">
              Lorem ipsum dolor sit amet consectetur. Eget imperdiet fusce
              phasellus vel egestas consectetur integer mi eget. Felis nulla
              eget aliquet maecenas. Lorem ac dictum viverra sed tortor
              ultricies nec lorem ut
            </h2>
            <ProductCount />
          </div>
        </section>
      </div>
    );
}

export default ProductPage