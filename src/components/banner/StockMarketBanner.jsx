import React from "react";

const StockMarketBanner = () => {
  return (
    <div className="bg-gray-100 text-center py-12 px-4">

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Poppins'] text-gray-900">
        THE ULTIMATE DESTINATION FOR STOCK MARKET INSIGHT
      </h1>

      <p className="text-gray-600 text-sm sm:text-base mt-2">
        Join 1 million Traders & Investors who trust Nifty Trader for smart trading & real-time stock insights.
      </p>

      <div className="mt-4 flex justify-center">
      <button className="px-6 py-2 border border-gray-700 flex items-center gap-2 text-gray-900 hover:bg-gray-300 transition group">
  Explore Features
  <span className="transition-transform duration-500 ease-in-out group-hover:animate-spin">→</span>
</button>

</div>
    
    </div>
  );
};

export default StockMarketBanner;
