import React, { useState } from "react";

const Hero = () => {
  const [isBtnOn, setIsBtnOn] = useState(false);
  
  return (
    <div className="bg-gradient-to-r rounded-sm from-pink-400 via-blue-200 to-cyan-300">
      <div className="container mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row items-center">
 
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-100 font-bold mb-4">
            STOCK SCREENING SIMPLIFIED!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6">
            Find winning stock patterns with Nifty Trader's powerful screening
            tools for smarter trading.
          </p>
          <button
            onClick={() => setIsBtnOn((prevBtn) => !prevBtn)}
            className={`${
              isBtnOn
                ? "text-white bg-blue-600"
                : "bg-transparent border border-blue-600 text-blue-600"
            } cursor-pointer rounded-md font-semibold py-3 px-6 transition duration-300 w-full sm:w-auto`}
          >
            Free Trial
          </button>
        </div>

    
        <div className="md:w-1/2 flex justify-center">
          <div className="relative bg-black rounded-md overflow-hidden shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md">
     
            <img
              src="./images/Buttons.png"
              className="h-12 w-12 z-1 sm:h-14 sm:w-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
            <video
              src="/videos/stockVideo.mp4"
              className="w-full h-48 sm:h-64 object-cover opacity-70"
              autoPlay
              loop
              muted
            ></video>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <div className="flex items-center justify-center mb-2">
                <div className="text-red-500 w-12 h-12 fill-current" />
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Hero;
