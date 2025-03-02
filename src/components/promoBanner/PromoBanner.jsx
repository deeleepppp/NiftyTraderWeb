import React, { useState } from "react";

const PromoBanner = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="relative flex flex-col md:flex-row items-center w-full px-4 md:px-6 lg:py-8 py-18 pb-20 pt-8"
      style={{
        backgroundImage: "url('/icons/promobg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="w-full md:w-1/2">
        <h2 className="text-lg md:text-2xl font-bold text-white md:text-black">
          Missing Trades Because of Outdated Data?
        </h2>
        <p className="text-sm md:text-base text-white md:text-gray-800">
          Get the Live Market Screening with Dynamic Filters
        </p>
      </div>

      
      <div className="w-full md:w-1/2"></div>

      
      <div
        onClick={() => setIsClicked(!isClicked)}
        className={`absolute md:right-10 bottom-4 md:bottom-auto px-4 py-2 rounded-md cursor-pointer border-2 border-[#155070] transition-all duration-300 ${
          isClicked
            ? "bg-transparent text-[#155070] font-bold"
            : "bg-[#155070] text-white"
        }`}
      >
        Get Free Trial
      </div>
    </div>
  );
};

export default PromoBanner;

