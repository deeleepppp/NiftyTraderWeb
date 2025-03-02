import React from "react";
import menubarData from "./menubarData";

const MenuBar = ({ isMenubarOpen }) => {
  return (
    isMenubarOpen && (
      <div className=" absolute z-10 bg-white flex flex-col sm:flex-row justify-center items-center sm:items-start lg:right-3 mt-6 p-4 sm:p-8 gap-6 sm:gap-12">
 
        <div className="flex flex-col gap-3 border-b sm:border-r sm:border-b-0 pb-4 sm:pb-0 sm:pr-8 w-full sm:w-auto">
          {menubarData.left_section.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <span className="text-gray-700 font-medium">{item.title}</span>
            </div>
          ))}
        </div>

    
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          {menubarData.right_section.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <span className="text-gray-700 font-medium">{item.title}</span>
            </div>
          ))}
        </div>


        <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
          <img
            src="./images/qr.png"
            alt="QR Code"
            className="w-32 sm:w-40 h-auto"
          />
          <p className="font-semibold text-center">{menubarData.qr_section.title}</p>
          <p className="text-gray-500 text-sm text-center">{menubarData.qr_section.subtitle}</p>
        </div>
      </div>
    )
  );
};

export default MenuBar;
