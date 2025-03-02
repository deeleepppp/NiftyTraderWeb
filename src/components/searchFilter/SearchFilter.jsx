import React, { useState } from "react";
import stocksData from "./stocksData";
import { CiSearch } from "react-icons/ci";

const SearchFilter = () => {
  const [query, setQuery] = useState("");


  const filteredStocks = stocksData.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
     
      <div className="relative">
        <CiSearch className="absolute top-2 left-2 h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search Stock"
          className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 pl-9 pr-4 text-sm focus:ring-2 focus:ring-blue-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {query && (
        <ul className="absolute left-0 right-0 mt-2 w-full rounded-md shadow-lg bg-white z-50">
          {filteredStocks.length > 0 ? (
            filteredStocks.map((stock) => (
              <li
                key={stock.symbol}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(stock.name)}
              >
                {stock.symbol} - {stock.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;
