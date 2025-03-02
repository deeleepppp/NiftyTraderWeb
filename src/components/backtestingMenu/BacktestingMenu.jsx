import React from 'react';
import backtestingData from './BacktestingData';
import { FaArrowRight } from 'react-icons/fa6';

const BacktestingMenu = ({ isBacktestingOpen }) => {
  return (
    isBacktestingOpen && (
      <div className="relative">
        <div className="absolute z-10 left-1/2 -translate-x-1/2 mt-2 w-full max-w-6xl bg-white shadow-lg rounded-md p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {backtestingData.map((category, index) => (
              <div key={index} className="space-y-4 md:space-y-6">
              
                <div className="flex items-center gap-2 md:gap-3 font-semibold text-blue-700 text-sm md:text-base">
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                  {category.badge && (
                    <span className="bg-yellow-400 text-xs px-2 py-0.5 rounded-md">
                      {category.badge}
                    </span>
                  )}
                </div>

             
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="hover:bg-blue-100 p-2 rounded-md text-xs md:text-sm group cursor-pointer text-gray-600 transition-all duration-200"
                    >
                      <div className="font-medium flex items-center justify-between">
                        <span>{item.name}</span>
                        <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <p className="text-[10px] md:text-xs text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default BacktestingMenu;
