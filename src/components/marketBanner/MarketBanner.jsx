import React from "react";

const MarketBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center overflow-hidden px-4 md:px-6 py-6">
      
      <img
        src="/icons/sideblue.svg"
        alt="Blue Background"
        className="absolute left-0 top-0 h-full w-full md:w-auto object-cover -z-10"
      />

    
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/icons/mobail.svg"
          alt="Mobile App UI"
          className="absolute left-10 top-0 w-36 sm:w-44 md:w-60 hidden md:block"
        />
      </div>

    
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Screening Like a Pro with <br />
          <span className="cursor-pointer text-blue-500">Nifty Trader</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Stop wasting time and start winning! Get access to Nifty Trader Stock Screeners today.
        </p>
        <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-2 px-6 rounded-md text-sm sm:text-lg">
          Start Free Trial Now
        </button>
      </div>
    </div>
  );
};

export default MarketBanner;
