import React from "react";
import optionData from "./optionsData";

const OptionsMenu = ({ isOptionsOpen }) => {
  return (
    isOptionsOpen && (
      <div className="flex z-10 absolute flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-6 bg-white p-6 sm:p-10 shadow-md rounded-md w-full sm:w-fit">
        {optionData.map((section, index) => (
          <div key={index} className="w-full sm:w-auto">
            <h3 className="text-blue-700 font-bold mb-2">{section.category}</h3>
            <ul className="space-y-1">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="text-sm hover:text-blue-500 cursor-pointer text-gray-700 flex items-center"
                >
                  {typeof item === "string" ? (
                    <span>{item}</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {item.title}
                      <span className="text-xs px-1 py-0.5 rounded bg-green-200 text-green-800">
                        {item.badge}
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  );
};

export default OptionsMenu;
