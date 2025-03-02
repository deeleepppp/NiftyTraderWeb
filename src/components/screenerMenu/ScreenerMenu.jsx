import React from "react";
import screenerData from "./screenerData";

const ScreenerMenu = ({ isScreenerOpen }) => {
  return (
    isScreenerOpen && (
      <div className="absolute z-10 flex flex-wrap justify-center sm:justify-start ml-0 sm:ml-40 mt-6 sm:mt-10 space-x-6 bg-white p-4 w-full sm:w-fit ">
        {screenerData.map((screener, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 sm:pr-6 pb-4 sm:pb-0"
          >
            <div className="p-2 rounded-full bg-gray-100 flex justify-center items-center text-2xl">
              {screener.icon}
            </div>

            
            <div>
              <h3 className="font-semibold text-gray-900">{screener.title}</h3>
              <p className="text-sm text-gray-500">{screener.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default ScreenerMenu;
