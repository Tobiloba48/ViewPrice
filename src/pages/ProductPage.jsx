import Headset from "../assets/headset.png";
import Star from "../assets/Star 1.png";
import React, { useState } from "react";

function ProductCount() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="grid grid-cols-5 items-center gap-4">
      <h1 className="font-bold text-[12px] lg:text-lg">God's Will Venture</h1>
      <h2 className="text-[12px] lg:text-lg">JUMIA</h2>
      <h2 className="font-bold text-[12px] lg:text-lg">2000.00</h2>
      <div className="flex justify-between">
        <div
          className="border-2 border-red-300 rounded-full w-4 md:w-6 h-4 md:h-6 text-[8px] md:text-[12px] lg:text-lg flex justify-center items-center leading-none cursor-pointer font-bold"
          onClick={Decrease}
        >
          -
        </div>
        <p className="count-display items-center text-[12px] md:text-lg">
          {count}
        </p>
        <div
          className="border-2 border-green-300 rounded-full w-4 md:w-6 h-4 md:h-6 text-[8px] md:text-[12px] lg:text-lg items-center leading-none cursor-pointer flex justify-center font-bold"
          onClick={Increase}
        >
          +
        </div>
      </div>
      <button className="bg-black text-white font-bold py-2 px-2 md:px-4 rounded-lg text-[8px] md:text-[12px] lg:text-lg">
        Buy Now
      </button>
    </div>
  );
}

function Description() {
  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur. At turpis auctor molestie
      imperdiet ut. Nisl proin euismod tincidunt erat facilisis in. Sagittis in
      odio vitae pellentesque eros massa. Diam pretium nisl congue condimentum
      cursus purus eget ultrices quis. Sed cras cursus sed cursus fringilla
      mauris donec ut. Felis tortor turpis risus at vel ut. Tellus dis urna nibh
      rhoncus. Tortor orci cursus pulvinar quisque egestas sed fermentum. At
      vitae proin blandit porta natoque neque nulla integer felis. A felis
      mauris condimentum montes eget. Viverra enim eget a leo sagittis cursus at
      non. Feugiat libero ipsum arcu venenatis non ut pretium ac. Ut integer
      amet enim sed elit metus nunc tellus. Ut pellentesque egestas diam eu
      euismod. Feugiat id tortor nibh tempor mattis cursus. Tempus feugiat fames
      imperdiet est vel sit id ipsum massa. Fringilla nulla nulla turpis egestas
      faucibus. Nunc enim aliquet ut massa. Vitae fringilla et eget eget justo
      aliquam eu viverra ultricies.
    </h1>
  );
}
function Review() {
  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur. At turpis auctor molestie
      imperdiet ut. Nisl proin euismod tincidunt erat facilisis in. Sagittis in
      odio vitae pellentesque eros massa. Diam pretium nisl congue condimentum
      cursus purus eget ultrices quis. Sed cras cursus sed cursus fringilla
      mauris donec ut. Felis tortor turpis risus at vel ut. Tellus dis urna nibh
      rhoncus. Tortor orci cursus pulvinar quisque egestas sed fermentum. At
      vitae proin blandit porta natoque neque nulla intege
    </h1>
  );
}
function ProductPage() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="m-3 mt-20 md:m-5 md:mt-20">
      <section className=" md:flex md:justify-between gap-10  place-items-center">
        <div className="bg-gray-400 place-items-center md:w-[40%] w-[80%] h-100 rounded-lg">
          <img
            src={Headset}
            alt="Product Image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-center md:text-start">
            Product Name
          </h2>
          <div className="flex justify-center md:justify-start gap-8">
            <div className="flex justify-between place-content-center">
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
            </div>
            <h3 className="text-sm text-center md:text-start">(220 Ratings)</h3>
          </div>
          <h2 className="py-4 text-lg md:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Eget imperdiet fusce
            phasellus vel egestas consectetur integer mi eget. Felis nulla eget
            aliquet maecenas. Lorem ac dictum viverra sed tortor ultricies nec
            lorem ut
          </h2>
          <div className="flex flex-col gap-4">
            <ProductCount />
            {/* <ProductCount />
            <ProductCount />
            <ProductCount />
            <ProductCount /> */}
          </div>
        </div>
      </section>
      <div className="flex justify-start mt-5 font-bold gap-4 ">
        <h1
          className="text-[12px] lg:text-lg cursor-pointer border-b-2 border-red-300 pb-1"
          onClick={() => setActiveTab("description")}
        >
          Description
        </h1>

        <h1
          className="text-[12px] lg:text-lg cursor-pointer border-b-2 border-red-300 pb-1"
          onClick={() => setActiveTab("review")}
        >
          Review
        </h1>
      </div>

      {activeTab === "description" && <Description />}
      {activeTab === "review" && <Review />}
    </div>
  );
}

export default ProductPage;
