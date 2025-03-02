import React, { useState } from "react";
import pricingData from "./pricingData";
import { GrStatusGood } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";

const Pricing = () => {

  const [toggledButtons, setToggledButtons] = useState(
    Array(pricingData.plans.length).fill(false)
  );

  
  const handleToggle = (index) => {
    setToggledButtons((prev) => {
      const newToggles = [...prev];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-center text-2xl font-bold mb-6 font-['Poppins']">Pricing Plan</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-max border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left text-sm md:text-base">
                Compare plans
              </th>
              {pricingData.plans.map((plan, index) => (
                <th key={index} className="p-4 text-center text-sm md:text-base">
                  <div className="text-lg font-semibold">{plan.name}</div>
                  <div className="text-xl font-bold">{plan.price}</div>
                  <div className="text-gray-600">{plan.duration}</div>
                  
              
                  <button
                    onClick={() => handleToggle(index)}
                    className={` cursor-pointer mt-3 px-2 py-1 md:px-4 md:py-2 rounded transition-all duration-300 ${
                      toggledButtons[index]
                        ? "bg-white text-blue-600 font-bold border border-blue-600"
                        : `text-white ${plan.buttonColor}`
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-sm md:text-base">Number of Users</td>
              {pricingData.plans.map((plan, index) => (
                <td key={index} className="p-4 text-center text-sm md:text-base">
                  {plan.users}
                </td>
              ))}
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-sm md:text-base">Users Per Page</td>
              {pricingData.plans.map((plan, index) => (
                <td key={index} className="p-4 text-center text-sm md:text-base">
                  {plan.pages}
                </td>
              ))}
            </tr>

            {pricingData.featuresList.map((feature, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="p-4 text-sm md:text-base">{feature}</td>
                {pricingData.plans.map((plan, j) => (
                  <td key={j} className="p-4 text-center">
                    {plan.features[i] ? (
                      <GrStatusGood className="bg-green-300 rounded-full text-white mx-auto h-5 w-5" />
                    ) : (
                      <RxCrossCircled className="bg-red-300 rounded-full text-white mx-auto h-5 w-5" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
