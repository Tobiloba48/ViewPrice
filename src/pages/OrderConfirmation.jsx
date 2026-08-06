import React from "react";
import Header from "../Header/Header.jsx";
import { useNavigate } from "react-router-dom";

function OrderConfirmation() {
  const navigate = useNavigate();

  const steps = [
    { label: "Order\nConfirmed", done: true },
    { label: "Sorting\nCenter", done: false },
    { label: "Order\nConfirmed", done: false },
    { label: "Delivery\nConfirmed", done: false },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center px-6 mt-24 mb-20">
        {/* Checkmark + confetti */}
        <div className="relative w-[220px] h-[220px] flex items-center justify-center">
          <svg viewBox="0 0 220 220" className="absolute inset-0 w-full h-full">
            {/* confetti dots */}
            <circle cx="20" cy="70" r="3" fill="#F75D02" />
            <circle cx="35" cy="40" r="3" fill="#22c55e" />
            <circle cx="10" cy="110" r="2" fill="#3b82f6" />
            <circle cx="45" cy="150" r="3" fill="#eab308" />
            <circle cx="15" cy="180" r="3" fill="#F75D02" />
            <circle cx="200" cy="60" r="3" fill="#22c55e" />
            <circle cx="185" cy="30" r="2" fill="#3b82f6" />
            <circle cx="205" cy="130" r="3" fill="#eab308" />
            <circle cx="190" cy="170" r="3" fill="#F75D02" />
            <circle cx="60" cy="15" r="2" fill="#3b82f6" />
            <circle cx="150" cy="10" r="3" fill="#22c55e" />
            <circle cx="110" cy="200" r="2" fill="#eab308" />

            {/* ribbon strokes */}
            <path
              d="M40 40 Q30 55 45 65 Q60 75 50 90"
              stroke="#dc2626"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M35 130 Q25 145 40 155"
              stroke="#3b82f6"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M175 55 Q195 65 185 85 Q175 105 195 115"
              stroke="#F75D02"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M170 140 Q185 155 175 170"
              stroke="#F75D02"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M180 100 Q195 105 190 120"
              stroke="#22c55e"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* main circle */}
          <div className="relative w-[140px] h-[140px] rounded-full bg-[#F75D02] flex items-center justify-center z-10">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>

        <p className="font-bold tracking-widest text-sm mt-2">THANK YOU</p>

        <h1 className="text-2xl md:text-3xl font-extrabold text-[#F75D02] text-center mt-4">
          YOUR ORDER HAS BEEN CONFIRMED
        </h1>
        <p className="text-gray-500 text-center mt-3 max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Feugiat neque at tristique
          etiam volutpat dolor enim praesent in.
        </p>

        {/* Progress tracker */}
        <div className="flex items-start w-full max-w-3xl mt-14">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                    step.done ? "bg-green-700" : "bg-gray-300"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-center text-sm mt-3 whitespace-pre-line">
                  {step.label}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-[2px] flex-1 mt-4 ${
                    step.done ? "bg-green-700" : "bg-gray-300"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="text-gray-400 text-sm mt-12">Track your Order</p>

        <button
          onClick={() => navigate("/")}
          className="bg-black text-white font-bold py-3 px-8 rounded-lg mt-3 cursor-pointer hover:bg-[#F75D02] transition duration-300"
        >
          Continue Shoping
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
